import type { ProposedTx } from "../types";
import { clamp } from "./concentration";
import type { SluiceConfig } from "../config";

// Simple deterministic sliding-window anomaly detector.
// Analyzes recent transaction history for: high frequency, large amount,
// repeated transactions, bursts, and unusual timing. Produces anomalyScore 0..100
// and human-readable reason codes. This is NOT an ML model: it is transparent
// and rule-based so judges can audit every output.

export interface AnomalyInput {
  tx: ProposedTx;
  nowSec: number;
  // Recent settled/blocked requests, most recent last. Each: amount + timestamp.
  history: { amount: bigint; timestamp: number; requester: string }[];
  totalSupply: bigint;
}

export interface AnomalyResult {
  score: number; // 0..100
  reasons: string[];
}

export function detectAnomaly(input: AnomalyInput, cfg: SluiceConfig): AnomalyResult {
  const reasons: string[] = [];
  let score = 0;

  const { tx, nowSec, history, totalSupply } = input;
  const a = cfg.anomaly;

  // --- 1. Large amount relative to supply ---
  if (totalSupply > 0n) {
    const pct = Number((tx.amount * 10_000n) / totalSupply) / 100; // 0..100
    if (pct >= a.largeAmountPct) {
      score += 35;
      reasons.push(`LARGE_AMOUNT: ${pct.toFixed(1)}% of supply`);
    } else if (pct >= a.largeAmountPct / 2) {
      score += 12;
      reasons.push(`MODERATE_AMOUNT: ${pct.toFixed(1)}% of supply`);
    }
  }

  // --- 2. High frequency within the recent window ---
  const recent = history.filter((h) => nowSec - h.timestamp <= a.highFreqWindowSec);
  if (recent.length >= a.highFreqCount) {
    score += 30;
    reasons.push(`HIGH_FREQUENCY: ${recent.length} txns in ${a.highFreqWindowSec}s`);
  } else if (recent.length >= Math.ceil(a.highFreqCount / 2)) {
    score += 12;
    reasons.push(`ELEVATED_FREQUENCY: ${recent.length} txns in ${a.highFreqWindowSec}s`);
  }

  // --- 3. Repeated transactions from the same requester (possible wash/burst) ---
  const sameRequester = history.filter(
    (h) => h.requester.toLowerCase() === tx.requester.toLowerCase()
  );
  if (sameRequester.length >= 3) {
    score += 20;
    reasons.push(`REPEATED_REQUESTER: ${sameRequester.length} prior txns by requester`);
  }

  // --- 4. Burst: many transactions in a very short span ---
  const burst = history.filter((h) => nowSec - h.timestamp <= 60);
  if (burst.length >= 4) {
    score += 15;
    reasons.push(`BURST: ${burst.length} txns in last 60s`);
  }

  // --- 5. Unusually fast follow-up (timing) ---
  const last = history[history.length - 1];
  if (last && nowSec - last.timestamp <= 2 && history.length > 0) {
    score += 10;
    reasons.push(`RAPID_SUCCESSION: <2s since last txn`);
  }

  return { score: clamp(score), reasons };
}
