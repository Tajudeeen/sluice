import type { Holder, PoolSnapshot, ProposedTx } from "../types";

// Herfindahl-Hirschman Index over holder shares.
// HHI = sum(share_i^2), share_i = balance_i / totalSupply.  Range 0..1.
// Computed with BigInt integer math to avoid precision loss on large supplies
// (1,000,000 SLUSD * 1e18 exceeds Number.MAX_SAFE_INTEGER).

const SCALE = 10n ** 12n; // 12 decimals of precision for the returned 0..1 value

export function hhi(holders: Holder[], totalSupply: bigint): number {
  if (totalSupply <= 0n) return 0;
  let sumSq = 0n;
  for (const h of holders) {
    const b = h.balance > 0n ? h.balance : 0n;
    sumSq += b * b;
  }
  // hhi = sumSq / totalSupply^2
  const denom = totalSupply * totalSupply;
  if (denom === 0n) return 0;
  const scaled = (sumSq * SCALE) / denom; // integer in [0, SCALE]
  return Number(scaled) / Number(SCALE);
}

// Largest holder as a percentage (0..100), BigInt-safe.
export function largestHolderPct(holders: Holder[], totalSupply: bigint): number {
  if (totalSupply <= 0n) return 0;
  let max = 0n;
  for (const h of holders) if (h.balance > max) max = h.balance;
  // pct = max * 10000 / totalSupply  (basis points), then /100
  const bps = (max * 10000n) / totalSupply;
  return Number(bps) / 100;
}

// Apply a proposed transaction to a snapshot, returning the PROJECTED holders.
// For a TRANSFER: requester loses `amount`, recipient gains `amount`.
// For a REDEMPTION: requester loses `amount`, supply (and thus liquidity) shrinks.
// The gate's transient escrow is excluded by the caller, so balances here are
// the "economic" distribution (escrow treated as still belonging to requester).
export function applyProposal(snap: PoolSnapshot, tx: ProposedTx): PoolSnapshot {
  const map = new Map<string, bigint>();
  for (const h of snap.holders) map.set(h.address.toLowerCase(), h.balance);

  if (tx.type === "TRANSFER") {
    const from = tx.requester.toLowerCase();
    const to = tx.recipient.toLowerCase();
    map.set(from, (map.get(from) ?? 0n) - tx.amount);
    map.set(to, (map.get(to) ?? 0n) + tx.amount);
  } else {
    // REDEMPTION: requester burns `amount` (supply shrinks).
    const from = tx.requester.toLowerCase();
    map.set(from, (map.get(from) ?? 0n) - tx.amount);
  }

  const holders: Holder[] = [...map.entries()].map(([address, balance]) => ({
    address,
    balance: balance < 0n ? 0n : balance,
  }));
  const totalSupply =
    tx.type === "REDEMPTION" ? snap.totalSupply - tx.amount : snap.totalSupply;
  return { totalSupply, holders };
}

// Concentration component score 0..100. Higher HHI / larger top holder -> higher score.
// Normalized so an HHI of 1.0 ~= 100 and largest holder of 100% ~= 100.
export function concentrationScore(currentHhi: number, projectedHhi: number, projectedLargestPct: number): number {
  // Use projected (post-settlement) state as the primary driver.
  const byHhi = projectedHhi * 100;
  const byLargest = projectedLargestPct; // already 0..100
  return clamp(Math.max(byHhi, byLargest));
}

export function clamp(x: number): number {
  return Math.max(0, Math.min(100, x));
}
