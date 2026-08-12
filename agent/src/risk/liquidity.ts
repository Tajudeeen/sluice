import type { PoolSnapshot } from "../types";
import { clamp } from "./concentration";

// Liquidity model for the synthetic pool.
//
// The synthetic SLUSD pool's "liquidity" is its circulating supply. A redemption
// removes tokens from supply (they are burned by the gate), reducing liquidity.
// A transfer does not change total liquidity (tokens merely move).
//
// We define:
//   liquidityRatio = remainingLiquidity / preTxTotalSupply
// The minimum safety threshold (e.g. 20%) ensures the pool cannot be drained
// below a floor by redemptions. This is a DETERMINISTIC hard block the LLM
// can never override.

export function projectLiquidity(snap: PoolSnapshot, redeemAmount: bigint) {
  const preSupply = snap.totalSupply;
  const remaining = preSupply - redeemAmount; // redeemAmount applies only to redemptions
  const ratio = preSupply > 0n ? Number((remaining * 1_000_000n) / preSupply) / 1_000_000 : 0;
  return {
    preSupply,
    remaining,
    ratio, // 0..1
  };
}

// Liquidity component score 0..100. The closer remaining liquidity ratio is to
// the floor, the higher the score. At/below the floor -> 100 (max alarm).
export function liquidityScore(remainingRatio: number, minRatio: number): number {
  if (remainingRatio >= 1) return 0;
  if (remainingRatio <= minRatio) return 100;
  // Between minRatio and 1.0: scale so that minRatio -> 100, 1.0 -> 0.
  const span = 1 - minRatio;
  const dist = remainingRatio - minRatio;
  return clamp(100 - (dist / span) * 100);
}

// Hard-block predicate for liquidity.
export function liquidityHardBlock(remainingRatio: number, minRatio: number): boolean {
  return remainingRatio < minRatio;
}
