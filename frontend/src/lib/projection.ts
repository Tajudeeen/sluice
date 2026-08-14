import { computeHHI, type HolderView } from "../sluice";

// Client-side projection of the pool AFTER a proposed transaction settles.
// This mirrors the off-chain agent's deterministic engine (concentration.ts)
// so the "before/after" visualization is computed from real on-chain state,
// never faked in component state.
//
// NOTE: This is a read-only projection for display. The authoritative decision
// is always made by the off-chain agent + the on-chain gate.

export interface Projection {
  // current state
  curHhi: number;
  curLargest: number;
  // projected state
  projHhi: number;
  projLargest: number;
  // liquidity (synthetic pool = total supply)
  curSupply: bigint;
  projSupply: bigint;
  curLiquidityRatio: number; // always 1 for the synthetic pool
  projLiquidityRatio: number;
}

function largestPct(holders: HolderView[]): number {
  const ts = holders.reduce((s, h) => s + h.balance, 0n);
  if (ts <= 0n) return 0;
  let max = 0n;
  for (const h of holders) if (h.balance > max) max = h.balance;
  return Number((max * 10000n) / ts) / 100;
}

export function project(
  holders: HolderView[],
  totalSupply: bigint,
  kind: "TRANSFER" | "REDEMPTION",
  requester: string,
  recipient: string,
  amount: bigint
): Projection {
  const curHhi = computeHHI(holders, totalSupply);
  const curLargest = largestPct(holders);

  // Build a working copy of holder balances keyed by address.
  const map = new Map<string, bigint>();
  for (const h of holders) map.set(h.address.toLowerCase(), h.balance);

  const from = requester.toLowerCase();
  const to = recipient.toLowerCase();
  if (kind === "TRANSFER") {
    map.set(from, (map.get(from) ?? 0n) - amount);
    map.set(to, (map.get(to) ?? 0n) + amount);
  } else {
    map.set(from, (map.get(from) ?? 0n) - amount);
  }

  const projHolders: HolderView[] = [...map.entries()].map(([address, balance]) => ({
    address,
    balance: balance < 0n ? 0n : balance,
    pct: 0,
  }));
  const projSupply = kind === "REDEMPTION" ? totalSupply - amount : totalSupply;

  const projHhi = computeHHI(projHolders, projSupply);
  const projLargest = largestPct(projHolders);

  return {
    curHhi,
    curLargest,
    projHhi,
    projLargest,
    curSupply: totalSupply,
    projSupply,
    curLiquidityRatio: 1,
    projLiquidityRatio: totalSupply > 0n ? Number((projSupply * 1_000_000n) / totalSupply) / 1_000_000 : 0,
  };
}
