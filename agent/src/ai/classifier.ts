import type { AiContext, PoolSnapshot, ProposedTx, RiskAssessment } from "../types";

// AI CONTEXT LAYER: server-side ONLY.
//
// This module calls an LLM to classify the BEHAVIORAL CONTEXT of a proposed
// transaction. It is a contextual intelligence layer, NOT a transaction signer.
// It returns a structured JSON classification and NEVER returns executable
// instructions or calldata. The output is purely advisory: the deterministic
// Decision Engine is the final authority and can ignore the AI entirely.
//
// If ANTHROPIC_API_KEY is absent, we run a deterministic fallback so the system
// still works end-to-end (honest: we label it INSUFFICIENT_DATA). This keeps the
// demo runnable without secrets while making the LLM's role explicit in code.

export interface ClassifierResult extends AiContext {}

const SYSTEM = `You are a behavioral-risk classifier for an on-chain execution firewall called Sluice.
You analyze a proposed tokenized-asset transaction against the current and projected
holder distribution, recent transaction history, and deterministic risk scores.
You MUST return ONLY a single JSON object (no prose, no markdown) with this exact shape:
{
  "classification": "NORMAL" | "COORDINATED_CLUSTER_SUSPECT" | "WASH_TRADE_PATTERN_SUSPECT" | "UNUSUAL_ACTIVITY" | "INSUFFICIENT_DATA",
  "confidence": <number 0..1>,
  "reason": "<one concise sentence>"
}
You must NOT return code, calldata, or any instruction that could move funds.
Classify COORDINATED_CLUSTER_SUSPECT when several related wallets act together to
concentrate control. WASH_TRADE_PATTERN_SUSPECT when transfers bounce between the same
wallets to fake activity. UNUSUAL_ACTIVITY for timing/volume that is atypical. NORMAL
otherwise. Use INSUFFICIENT_DATA only when the provided context is genuinely too sparse.`;

export async function classify(
  snap: PoolSnapshot,
  tx: ProposedTx,
  risk: RiskAssessment,
  historySummary: string
): Promise<ClassifierResult> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return fallback(tx, risk);
  }
  try {
    // Imported lazily so the dependency is only required when a key is present.
    const Anthropic = (await import("@anthropic-ai/sdk")).default;
    const client = new Anthropic({ apiKey });
    const top = snap.holders
      .slice()
      .sort((a, b) => (b.balance > a.balance ? 1 : -1))
      .slice(0, 5)
      .map((h) => ({
        address: h.address,
        pct: ((Number(h.balance) / Number(snap.totalSupply)) * 100).toFixed(2),
      }));

    const user = JSON.stringify({
      proposedTx: tx,
      currentHHI: risk.current.hhi,
      projectedHHI: risk.projected.hhi,
      projectedLargestHolderPct: risk.projected.largestHolderPct,
      topHolders: top,
      deterministicScore: risk.deterministicScore,
      concentrationScore: risk.concentrationScore,
      liquidityScore: risk.liquidityScore,
      anomalyScore: risk.anomalyScore,
      anomalyReasons: risk.anomalyReasons,
      recentHistory: historySummary,
    });

    const msg = await client.messages.create({
      model: "claude-3-5-haiku-latest",
      max_tokens: 300,
      system: SYSTEM,
      messages: [{ role: "user", content: user }],
    });
    const text = msg.content
      .filter((b: any) => b.type === "text")
      .map((b: any) => b.text)
      .join("");
    return sanitize(text);
  } catch (err) {
    // On any LLM failure, fall back to deterministic classification. The firewall
    // must never depend on the LLM being available.
    return fallback(tx, risk);
  }
}

// Parse + validate the model output. Unknown shapes -> INSUFFICIENT_DATA.
function sanitize(raw: string): ClassifierResult {
  let parsed: any;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return { classification: "INSUFFICIENT_DATA", confidence: 0, reason: "LLM returned non-JSON" };
  }
  const allowed = [
    "NORMAL",
    "COORDINATED_CLUSTER_SUSPECT",
    "WASH_TRADE_PATTERN_SUSPECT",
    "UNUSUAL_ACTIVITY",
    "INSUFFICIENT_DATA",
  ];
  if (!allowed.includes(parsed.classification)) {
    return { classification: "INSUFFICIENT_DATA", confidence: 0, reason: "LLM returned unknown classification" };
  }
  const confidence =
    typeof parsed.confidence === "number"
      ? Math.max(0, Math.min(1, parsed.confidence))
      : 0;
  return {
    classification: parsed.classification as ClassifierResult["classification"],
    confidence,
    reason: typeof parsed.reason === "string" ? parsed.reason : "",
  };
}

// Deterministic fallback used when no API key is configured or the LLM fails.
function fallback(tx: ProposedTx, risk: RiskAssessment): ClassifierResult {
  if (risk.hardBlock) {
    return {
      classification: "COORDINATED_CLUSTER_SUSPECT",
      confidence: 0.6,
      reason: "Deterministic hard-block signal present; classified as coordinated-concentration suspect (no LLM).",
    };
  }
  if (risk.anomalyScore >= 60) {
    return {
      classification: "UNUSUAL_ACTIVITY",
      confidence: 0.5,
      reason: "Elevated anomaly score; flagged unusual activity (no LLM).",
    };
  }
  return {
    classification: "INSUFFICIENT_DATA",
    confidence: 0,
    reason: "No ANTHROPIC_API_KEY configured; deterministic-only classification.",
  };
}
