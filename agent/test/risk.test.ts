import { describe, it, expect } from "vitest";
import { hhi, largestHolderPct, applyProposal } from "../src/risk/concentration";
import { projectLiquidity, liquidityScore, liquidityHardBlock } from "../src/risk/liquidity";
import { detectAnomaly } from "../src/risk/anomaly";
import { DEFAULT_CONFIG } from "../src/config";
import type { Holder, PoolSnapshot, ProposedTx } from "../src/types";

const ONE = 10n ** 18n; // 1 token (18 decimals)

function holder(addr: string, bal: number): Holder {
  return { address: addr, balance: BigInt(bal) * ONE };
}

// Even demo distribution: A=350k, B=250k, C=150k, D=100k, E=50k, F=100k => 1,000,000
function demoSnapshot(): PoolSnapshot {
  return {
    totalSupply: 1_000_000n * ONE,
    holders: [
      holder("A", 350000),
      holder("B", 250000),
      holder("C", 150000),
      holder("D", 100000),
      holder("E", 50000),
      holder("F", 100000),
    ],
  };
}

describe("concentration — HHI", () => {
  it("computes current HHI for the demo distribution", () => {
    const snap = demoSnapshot();
    const h = hhi(snap.holders, snap.totalSupply);
    // shares: .35,.25,.15,.10,.05,.10 -> squares: .1225+.0625+.0225+.01+.0025+.01=.23
    expect(h).toBeCloseTo(0.23, 3);
  });

  it("HHI = 1 for a single holder at 100%", () => {
    const snap = { totalSupply: 100n * ONE, holders: [holder("A", 100)] };
    expect(hhi(snap.holders, snap.totalSupply)).toBeCloseTo(1, 5);
  });

  it("computes projected HHI after a large transfer", () => {
    const snap = demoSnapshot();
    const tx: ProposedTx = {
      type: "TRANSFER",
      requester: "A",
      recipient: "B",
      amount: 200_000n * ONE,
    };
    const proj = applyProposal(snap, tx);
    const h = hhi(proj.holders, proj.totalSupply);
    // A:150k B:450k C:150k D:100k E:50k F:100k -> .15^2+.45^2+.15^2+.1^2+.05^2+.1^2 = .27
    expect(h).toBeCloseTo(0.27, 3);
  });

  it("redemption shrinks supply and recomputes shares", () => {
    const snap = demoSnapshot();
    const tx: ProposedTx = { type: "REDEMPTION", requester: "A", recipient: "0x0", amount: 300_000n * ONE };
    const proj = applyProposal(snap, tx);
    expect(proj.totalSupply).toBe(700_000n * ONE);
    // After A redeems 300k, A=50k but B=250k remains the largest -> 250k/700k=35.7%
    expect(largestHolderPct(proj.holders, proj.totalSupply)).toBeCloseTo((250000 / 700000) * 100, 2);
  });
});

describe("concentration — hard block thresholds", () => {
  // Build a snapshot where one holder at >=50% triggers the largest-holder hard block.
  it("flags a projected largest holder >= 50% as hard block (concentration)", () => {
    const snap: PoolSnapshot = {
      totalSupply: 1_000_000n * ONE,
      holders: [
        holder("A", 400000),
        holder("B", 250000),
        holder("C", 150000),
        holder("D", 100000),
        holder("E", 50000),
        holder("F", 50000),
      ],
    };
    const tx: ProposedTx = { type: "TRANSFER", requester: "B", recipient: "A", amount: 120_000n * ONE };
    const proj = applyProposal(snap, tx);
    const largest = largestHolderPct(proj.holders, proj.totalSupply); // A=520k/1M=52%
    expect(largest).toBeGreaterThan(DEFAULT_CONFIG.concentration.largestHolderHardBlock);
  });

  it("does NOT flag when projected largest holder is just below the threshold", () => {
    const snap: PoolSnapshot = {
      totalSupply: 1_000_000n * ONE,
      holders: [
        holder("A", 400000),
        holder("B", 250000),
        holder("C", 150000),
        holder("D", 100000),
        holder("E", 50000),
        holder("F", 50000),
      ],
    };
    // Move only enough to reach 49% (just below 50% hard block).
    const tx: ProposedTx = { type: "TRANSFER", requester: "B", recipient: "A", amount: 80_000n * ONE };
    const proj = applyProposal(snap, tx);
    const largest = largestHolderPct(proj.holders, proj.totalSupply); // A=480k/1M=48%
    expect(largest).toBeLessThan(DEFAULT_CONFIG.concentration.largestHolderHardBlock);
  });
});

describe("liquidity", () => {
  it("redemption leaving liquidity at exactly the floor is NOT a hard block", () => {
    const snap: PoolSnapshot = { totalSupply: 1_000_000n * ONE, holders: [holder("A", 1000000)] };
    // Redeem 800k -> remaining 200k -> ratio 0.2 == floor (not < floor)
    const liq = projectLiquidity(snap, 800_000n * ONE);
    expect(liq.ratio).toBeCloseTo(0.2, 5);
    expect(liquidityHardBlock(liq.ratio, DEFAULT_CONFIG.liquidity.minLiquidityRatio)).toBe(false);
  });

  it("redemption below the floor IS a hard block", () => {
    const snap: PoolSnapshot = { totalSupply: 1_000_000n * ONE, holders: [holder("A", 1000000)] };
    const liq = projectLiquidity(snap, 850_000n * ONE); // ratio 0.15 < 0.2
    expect(liq.ratio).toBeCloseTo(0.15, 5);
    expect(liquidityHardBlock(liq.ratio, DEFAULT_CONFIG.liquidity.minLiquidityRatio)).toBe(true);
  });

  it("liquidityScore saturates to 100 at/below floor and 0 at full supply", () => {
    expect(liquidityScore(0.2, 0.2)).toBe(100);
    expect(liquidityScore(1, 0.2)).toBe(0);
  });
});

describe("anomaly", () => {
  it("normal sequence (single modest transfer, quiet history) scores low", () => {
    const tx: ProposedTx = { type: "TRANSFER", requester: "A", recipient: "B", amount: 1000n * ONE };
    const r = detectAnomaly({ tx, nowSec: 1000, history: [], totalSupply: 1_000_000n * ONE }, DEFAULT_CONFIG);
    expect(r.score).toBe(0);
    expect(r.reasons.length).toBe(0);
  });

  it("abnormal sequence (huge amount + burst + repeated requester) scores high", () => {
    const tx: ProposedTx = { type: "TRANSFER", requester: "X", recipient: "Y", amount: 200_000n * ONE };
    const history = [
      { amount: 150_000n * ONE, timestamp: 995, requester: "X" },
      { amount: 150_000n * ONE, timestamp: 996, requester: "X" },
      { amount: 150_000n * ONE, timestamp: 997, requester: "X" },
      { amount: 150_000n * ONE, timestamp: 998, requester: "X" },
      { amount: 150_000n * ONE, timestamp: 999, requester: "X" },
    ];
    const r = detectAnomaly({ tx, nowSec: 1000, history, totalSupply: 1_000_000n * ONE }, DEFAULT_CONFIG);
    expect(r.score).toBeGreaterThanOrEqual(85);
    expect(r.reasons.length).toBeGreaterThan(0);
  });
});
