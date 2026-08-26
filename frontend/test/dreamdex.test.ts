import { describe, expect, it } from "vitest";
import type { Candle, UnifiedOrderBook } from "@somnia-chain/markets-sdk";
import type { DreamMarket, WalletSnapshot } from "../src/dreamdex";
import { candleQuoteVolume, executionPreview, marketCategory, newestFirst, predictionOutcome, safeOrderSize } from "../src/dreamdex";
import { formatRawUnits, scaledNumber } from "../src/units";

const market = {
  marketId: "0x0000000000000000000000000000000000000000000000000000000000000001",
  status: "Trading",
  live: true,
  expiry: String(Math.floor(Date.now() / 1000) + 3600),
  quoteDecimals: 6,
  baseDecimals: 6,
  asset: "TEST",
  question: "Will TEST resolve up?",
} as DreamMarket;

const book = (timestamp = Date.now()): UnifiedOrderBook => ({
  symbol: "TEST#YES",
  bids: [[0.48, 10]],
  asks: [[0.5, 5], [0.52, 10]],
  timestamp,
  info: {},
});

const wallet = (overrides: Partial<WalletSnapshot> = {}): WalletSnapshot => ({
  marketShares: 0,
  totalPortfolioShares: 0,
  sellBalance: 0,
  collateralBalance: 100,
  collateralAllowance: 100,
  collateralSymbol: "USDso",
  readAt: Date.now(),
  ...overrides,
});

describe("executionPreview", () => {
  it("calculates average fill and reports all visible executable depth", () => {
    const result = executionPreview(market, book(), 8, 0.52, "buy");
    expect(result.estimatedFill).toBeCloseTo((5 * 0.5 + 3 * 0.52) / 8, 8);
    expect(result.visibleDepth).toBe(15);
  });

  it("blocks stale books and insufficient depth", () => {
    expect(executionPreview(market, book(Date.now() - 21_000), 1, 0.52, "buy").allowed).toBe(false);
    const result = executionPreview(market, book(), 20, 0.5, "buy");
    expect(result.checks.some((check) => check.label === "Book liquidity" && check.status === "block")).toBe(true);
  });

  it("blocks market, portfolio, sell-balance, and collateral violations", () => {
    expect(executionPreview(market, book(), 10, 0.52, "buy", wallet({ marketShares: 20 })).allowed).toBe(false);
    expect(executionPreview(market, book(), 10, 0.52, "buy", wallet({ totalPortfolioShares: 95 })).allowed).toBe(false);
    expect(executionPreview(market, book(), 2, 0.48, "sell", wallet({ sellBalance: 1 })).allowed).toBe(false);
    expect(executionPreview(market, book(), 5, 0.52, "buy", wallet({ collateralBalance: 1 })).allowed).toBe(false);
  });

  it("hard-blocks a buy above the trader's maximum downside", () => {
    const result = executionPreview(market, book(), 5, 0.52, "buy", wallet(), { maxCost: 2 });
    expect(result.allowed).toBe(false);
    expect(result.checks).toContainEqual(expect.objectContaining({ label: "Maximum downside", status: "block" }));
  });
});

describe("candleQuoteVolume", () => {
  it("sums quote volume over hourly candles", () => {
    const candles = [
      { bucketStart: "1", openPrice: "0", high: "0", low: "0", closePrice: "0", baseVolume: "0", quoteVolume: "2500000", tradeCount: 1 },
      { bucketStart: "2", openPrice: "0", high: "0", low: "0", closePrice: "0", baseVolume: "0", quoteVolume: "1250000", tradeCount: 1 },
    ] as Candle[];
    expect(candleQuoteVolume(candles, 6)).toBeCloseTo(3.75, 8);
  });
});

describe("raw unit conversion", () => {
  it("scales values before Number conversion and formats large integers exactly", () => {
    const raw = 12_345_678_901_234_567_890_123_456n;
    expect(scaledNumber(raw, 18)).toBeCloseTo(12_345_678.901234567, 6);
    expect(formatRawUnits(raw, 18, 6)).toBe("12,345,678.901234");
  });
});

describe("marketCategory", () => {
  it("classifies crypto, sports, and politics listings from their asset and question", () => {
    expect(marketCategory({ asset: "BTC", question: "Will BTC close above its open?" })).toBe("CRYPTO");
    expect(marketCategory({ asset: "NBA", question: "Will the Lakers win tonight?" })).toBe("SPORTS");
    expect(marketCategory({ asset: "USA", question: "Who wins the presidential election?" })).toBe("POLITICS");
  });
});

describe("predictionOutcome", () => {
  it("uses the indexed winner even when DreamDEX labels the market Finalized", () => {
    expect(predictionOutcome({ voided: false, winningOutcome: 0 }, 0)).toEqual({ label: "WON", tone: "win" });
    expect(predictionOutcome({ voided: false, winningOutcome: 1 }, 0)).toEqual({ label: "LOST", tone: "loss" });
    expect(predictionOutcome({ voided: false, winningOutcome: null }, 0)).toEqual({ label: "PENDING", tone: "pending" });
    expect(predictionOutcome({ voided: true, winningOutcome: null }, 0)).toEqual({ label: "VOID / REFUNDABLE", tone: "void" });
  });
});

describe("newestFirst", () => {
  it("sorts a copy newest-first without mutating the source", () => {
    const source = [{ id: "old", at: "10" }, { id: "new", at: "30" }, { id: "mid", at: "20" }];
    expect(newestFirst(source, (row) => row.at).map((row) => row.id)).toEqual(["new", "mid", "old"]);
    expect(source.map((row) => row.id)).toEqual(["old", "new", "mid"]);
  });
});

describe("safeOrderSize", () => {
  it("finds the largest buy size that fits visible liquidity and collateral", () => {
    const result = safeOrderSize(market, book(), 0.52, "buy", wallet(), { maxCost: 2 });
    expect(result).toBe(4);
    expect(executionPreview(market, book(), result, 0.52, "buy", wallet()).estimatedCost).toBe(2);
    expect(executionPreview(market, book(), result + 0.001, 0.52, "buy", wallet()).estimatedCost).toBeGreaterThan(2);
  });

  it("returns zero when no minimum order can pass", () => {
    expect(safeOrderSize(market, book(), 0.52, "buy", wallet({ collateralBalance: 0 }))).toBe(0);
  });

  it("respects sell inventory and exposure limits", () => {
    expect(safeOrderSize(market, book(), 0.48, "sell", wallet({ sellBalance: 3.25 }))).toBe(3.25);
    expect(safeOrderSize(market, book(), 0.52, "buy", wallet({ marketShares: 23 }))).toBe(2);
  });
});
