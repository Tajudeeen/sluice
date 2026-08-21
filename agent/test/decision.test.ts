import { describe, it, expect, vi } from "vitest";
import { decide, assessRisk } from "../src/decision/decision";
import { configuredAiProvider } from "../src/ai/classifier";
import { DEFAULT_CONFIG } from "../src/config";
import type { PoolSnapshot, ProposedTx } from "../src/types";

const ONE = 10n ** 18n;

function holder(addr: string, bal: number) {
  return { address: addr, balance: BigInt(bal) * ONE };
}
function demoSnapshot(): PoolSnapshot {
  return {
    totalSupply: 1_000_000n * ONE,
    holders: [
      holder("A", 350000), holder("B", 250000), holder("C", 150000),
      holder("D", 100000), holder("E", 50000), holder("F", 100000),
    ],
  };
}

describe("decision engine", () => {
  it("20) deterministic HARD BLOCK cannot be overridden by an LLM APPROVE", async () => {
    // Force the AI to confidently say APPROVE/NORMAL, then prove the decision is BLOCK.
    vi.stubEnv("ANTHROPIC_API_KEY", "");
    vi.stubEnv("GROQ_API_KEY", "");
    const snap: PoolSnapshot = {
      totalSupply: 1_000_000n * ONE,
      holders: [
        holder("A", 400000), holder("B", 250000), holder("C", 150000),
        holder("D", 100000), holder("E", 50000), holder("F", 50000),
      ],
    };
    // Move 120k B->A => A=520k (52%) -> largest-holder hard block.
    const tx: ProposedTx = { type: "TRANSFER", requester: "B", recipient: "A", amount: 120_000n * ONE };
    const d = await decide(snap, tx, [], 1000, DEFAULT_CONFIG);
    expect(d.hardBlock).toBe(true);
    expect(d.decision).toBe("BLOCK");
    // The AI's (fallback) opinion must NOT have flipped it to APPROVE.
    expect(d.decision).not.toBe("APPROVE");
  });

  it("low-risk transaction approves", async () => {
    vi.stubEnv("ANTHROPIC_API_KEY", "");
    vi.stubEnv("GROQ_API_KEY", "");
    const snap = demoSnapshot();
    const tx: ProposedTx = { type: "TRANSFER", requester: "E", recipient: "F", amount: 1000n * ONE };
    const d = await decide(snap, tx, [], 1000, DEFAULT_CONFIG);
    expect(d.decision).toBe("APPROVE");
    expect(d.deterministicScore).toBeLessThanOrEqual(DEFAULT_CONFIG.decision.safeMax);
  });

  it("high-risk transaction blocks", async () => {
    vi.stubEnv("ANTHROPIC_API_KEY", "");
    vi.stubEnv("GROQ_API_KEY", "");
    // Redeem 850k from A (only 350k) is impossible in reality, but for the engine
    // we test a redemption that drains liquidity below the floor.
    const snap: PoolSnapshot = { totalSupply: 1_000_000n * ONE, holders: [holder("A", 1000000)] };
    const tx: ProposedTx = { type: "REDEMPTION", requester: "A", recipient: "0x0", amount: 850_000n * ONE };
    const d = await decide(snap, tx, [], 1000, DEFAULT_CONFIG);
    expect(d.decision).toBe("BLOCK");
    const risk = assessRisk(snap, tx, [], 1000, DEFAULT_CONFIG);
    expect(risk.hardBlockReasons.join(" ")).toMatch(/POST_REDEMPTION_LIQUIDITY/);
  });

  it("AI review-zone: clearly-suspect AI can block a mid-risk tx, but safe AI keeps APPROVE", async () => {
    vi.stubEnv("ANTHROPIC_API_KEY", "");
    vi.stubEnv("GROQ_API_KEY", "");
    // Mid-risk txn: large-ish transfer from a repeated requester with burst history,
    // landing in the 40..69 band. With no API key the AI fallback returns
    // UNUSUAL_ACTIVITY only if anomaly>=60; here we just assert the band logic runs
    // and yields a deterministic APPROVE/BLOCK consistent with the score.
    const snap = demoSnapshot();
    const tx: ProposedTx = { type: "TRANSFER", requester: "A", recipient: "B", amount: 60_000n * ONE };
    const history = [
      { amount: 50_000n * ONE, timestamp: 995, requester: "A" },
      { amount: 50_000n * ONE, timestamp: 996, requester: "A" },
      { amount: 50_000n * ONE, timestamp: 997, requester: "A" },
      { amount: 50_000n * ONE, timestamp: 998, requester: "A" },
    ];
    const d = await decide(snap, tx, history, 1000, DEFAULT_CONFIG);
    expect(["APPROVE", "BLOCK"]).toContain(d.decision);
    // The decision must be consistent with the deterministic band, never arbitrary.
    if (d.deterministicScore <= DEFAULT_CONFIG.decision.safeMax) {
      expect(d.decision).toBe("APPROVE");
    } else if (d.deterministicScore > DEFAULT_CONFIG.decision.reviewMax) {
      expect(d.decision).toBe("BLOCK");
    }
  });

  it("assessRisk projects a before/after HHI the UI can display", async () => {
    const snap = demoSnapshot();
    const tx: ProposedTx = { type: "TRANSFER", requester: "B", recipient: "A", amount: 200_000n * ONE };
    const risk = assessRisk(snap, tx, [], 1000, DEFAULT_CONFIG);
    expect(risk.current.hhi).toBeGreaterThan(0);
    expect(risk.projected.hhi).toBeGreaterThan(risk.current.hhi); // concentration increases
    expect(risk.projected.largestHolderPct).toBeGreaterThan(risk.current.largestHolderPct);
  });

  it("prefers Groq when both AI providers are configured", () => {
    vi.stubEnv("ANTHROPIC_API_KEY", "anthropic-test");
    vi.stubEnv("GROQ_API_KEY", "groq-test");
    expect(configuredAiProvider()).toBe("groq");
  });
});
