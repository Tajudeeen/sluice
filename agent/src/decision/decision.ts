import type { AiContext, Decision, PoolSnapshot, ProposedTx, RiskAssessment } from "../types";
import { REASON, AI_CLASS, DECISION, type SluiceConfig } from "../config";
import { hhi, largestHolderPct, applyProposal, concentrationScore } from "../risk/concentration";
import { projectLiquidity, liquidityScore, liquidityHardBlock } from "../risk/liquidity";
import { detectAnomaly } from "../risk/anomaly";
import { classify } from "../ai/classifier";

// ---------------------------------------------------------------------------
// DETERMINISTIC RISK ENGINE
// Projects the pool state, computes component scores, and applies the
// transparent weighted formula. All of this is pure and auditable.
// ---------------------------------------------------------------------------

export function assessRisk(snap: PoolSnapshot, tx: ProposedTx, history: { amount: bigint; timestamp: number; requester: string }[], nowSec: number, cfg: SluiceConfig): RiskAssessment {
  // CURRENT state
  const curHhi = hhi(snap.holders, snap.totalSupply);
  const curLargest = largestHolderPct(snap.holders, snap.totalSupply);

  // PROJECTED state ("what if this tx settles")
  const projected = applyProposal(snap, tx);
  const projHhi = hhi(projected.holders, projected.totalSupply);
  const projLargest = largestHolderPct(projected.holders, projected.totalSupply);

  // Concentration score
  const cScore = concentrationScore(curHhi, projHhi, projLargest);

  // Liquidity projection (only meaningful for redemptions)
  const redeemAmount = tx.type === "REDEMPTION" ? tx.amount : 0n;
  const liq = projectLiquidity(snap, redeemAmount);
  const lScore = liquidityScore(liq.ratio, cfg.liquidity.minLiquidityRatio);

  // Anomaly
  const anomaly = detectAnomaly({ tx, nowSec, history, totalSupply: snap.totalSupply }, cfg);

  // Weighted overall deterministic score
  const w = cfg.weights;
  const deterministic =
    (cScore * w.concentration + lScore * w.liquidity + anomaly.score * w.anomaly) / 100;

  // ---- HARD BLOCKS (deterministic safety boundary; LLM CANNOT override) ----
  const hardBlockReasons: string[] = [];
  let hardBlock = false;

  if (projHhi >= cfg.concentration.hhiHardBlock) {
    hardBlock = true;
    hardBlockReasons.push(
      `PROJECTED_HHI_LIMIT: projected HHI ${projHhi.toFixed(3)} >= ${cfg.concentration.hhiHardBlock}`
    );
  }
  if (projLargest >= cfg.concentration.largestHolderHardBlock) {
    hardBlock = true;
    hardBlockReasons.push(
      `LARGEST_HOLDER_LIMIT: projected top holder ${projLargest.toFixed(1)}% >= ${cfg.concentration.largestHolderHardBlock}%`
    );
  }
  if (tx.type === "REDEMPTION" && liquidityHardBlock(liq.ratio, cfg.liquidity.minLiquidityRatio)) {
    hardBlock = true;
    hardBlockReasons.push(
      `POST_REDEMPTION_LIQUIDITY: remaining ratio ${liq.ratio.toFixed(3)} < ${cfg.liquidity.minLiquidityRatio}`
    );
  }
  if (anomaly.score >= cfg.anomaly.anomalyHardBlock) {
    hardBlock = true;
    hardBlockReasons.push(`ANOMALY_LIMIT: anomaly score ${anomaly.score} >= ${cfg.anomaly.anomalyHardBlock}`);
  }

  return {
    current: {
      hhi: curHhi,
      largestHolderPct: curLargest,
      liquidity: snap.totalSupply,
      liquidityRatio: 1,
    },
    projected: {
      hhi: projHhi,
      largestHolderPct: projLargest,
      liquidity: liq.remaining,
      liquidityRatio: liq.ratio,
    },
    concentrationScore: cScore,
    liquidityScore: lScore,
    anomalyScore: anomaly.score,
    deterministicScore: Math.round(deterministic),
    hardBlock,
    hardBlockReasons,
    anomalyReasons: anomaly.reasons,
  };
}

// ---------------------------------------------------------------------------
// DECISION ENGINE
// Bounded, deterministic policy. The AI may only participate in the REVIEW band.
// A deterministic HARD BLOCK always wins, regardless of the AI's opinion.
// ---------------------------------------------------------------------------

export async function decide(
  snap: PoolSnapshot,
  tx: ProposedTx,
  history: { amount: bigint; timestamp: number; requester: string }[],
  nowSec: number,
  cfg: SluiceConfig
): Promise<Decision> {
  const risk = assessRisk(snap, tx, history, nowSec, cfg);

  // 1) Deterministic hard block always wins.
  if (risk.hardBlock) {
    return finalize("BLOCK", risk, {
      classification: "INSUFFICIENT_DATA",
      confidence: 0,
      reason: "",
    }, REASON.PROJECTED_CONCENTRATION, false, risk.hardBlockReasons[0] ?? "DETERMINISTIC_HARD_BLOCK");
  }

  // 2) Low risk -> APPROVE (no AI needed).
  if (risk.deterministicScore <= cfg.decision.safeMax) {
    return finalize("APPROVE", risk, {
      classification: "INSUFFICIENT_DATA",
      confidence: 0,
      reason: "",
    }, REASON.SAFE, false, "DETERMINISTIC_SAFE");
  }

  // 3) Review band (40..69): AI contextual signal participates.
  const ai = await classify(snap, tx, risk, summarizeHistory(history, nowSec));
  if (risk.deterministicScore <= cfg.decision.reviewMax) {
    // In the review zone the AI may tip a clearly-suspect pattern to BLOCK,
    // but ONLY when the deterministic score is not already at the high-risk edge.
    const aiSaysBlock =
      (ai.classification === "COORDINATED_CLUSTER_SUSPECT" ||
        ai.classification === "WASH_TRADE_PATTERN_SUSPECT") &&
      ai.confidence >= 0.7;
    if (aiSaysBlock) {
      return finalize("BLOCK", risk, ai, REASON.AI_REVIEW_BLOCK, true, "AI_REVIEW_BLOCK");
    }
    return finalize("APPROVE", risk, ai, REASON.SAFE, true, "DETERMINISTIC_SAFE_IN_REVIEW");
  }

  // 4) High risk (>= reviewMax) -> BLOCK. AI context recorded but cannot flip to APPROVE.
  return finalize("BLOCK", risk, ai, REASON.AI_REVIEW_BLOCK, true, "DETERMINISTIC_HIGH_RISK");
}

function finalize(
  decision: "APPROVE" | "BLOCK",
  risk: RiskAssessment,
  ai: AiContext,
  reasonCode: number,
  aiParticipated: boolean,
  primaryReason: string
): Decision {
  return {
    decision,
    deterministicScore: risk.deterministicScore,
    concentrationScore: risk.concentrationScore,
    liquidityScore: risk.liquidityScore,
    anomalyScore: risk.anomalyScore,
    riskScore: risk.deterministicScore,
    primaryReason,
    hardBlock: risk.hardBlock,
    hardBlockReasons: risk.hardBlockReasons,
    aiClassification: toAiCode(ai.classification),
    aiConfidence: Math.round(ai.confidence * 100),
    aiReason: ai.reason,
    aiParticipated,
  };
}

function toAiCode(c: AiContext["classification"]): number {
  switch (c) {
    case "NORMAL": return AI_CLASS.NORMAL;
    case "COORDINATED_CLUSTER_SUSPECT": return AI_CLASS.COORDINATED_CLUSTER_SUSPECT;
    case "WASH_TRADE_PATTERN_SUSPECT": return AI_CLASS.WASH_TRADE_PATTERN_SUSPECT;
    case "UNUSUAL_ACTIVITY": return AI_CLASS.UNUSUAL_ACTIVITY;
    default: return AI_CLASS.INSUFFICIENT_DATA;
  }
}

function summarizeHistory(history: { amount: bigint; timestamp: number; requester: string }[], nowSec: number): string {
  const recent = history.slice(-10);
  return recent
    .map((h) => `requester=${h.requester.slice(0, 8)} amount=${h.amount.toString()} ago=${nowSec - h.timestamp}s`)
    .join("; ");
}
