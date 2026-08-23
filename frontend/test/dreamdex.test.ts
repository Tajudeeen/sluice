import { describe, expect, it } from "vitest";
import type { Candle, UnifiedOrderBook } from "@somnia-chain/markets-sdk";
import type { DreamMarket, WalletSnapshot } from "../src/dreamdex";
import { candleQuoteVolume, executionPreview, marketCategory } from "../src/dreamdex";

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

describe("marketCategory", () => {
  it("classifies crypto, sports, and politics listings from their asset and question", () => {
    expect(marketCategory({ asset: "BTC", question: "Will BTC close above its open?" })).toBe("CRYPTO");
    expect(marketCategory({ asset: "NBA", question: "Will the Lakers win tonight?" })).toBe("SPORTS");
    expect(marketCategory({ asset: "USA", question: "Who wins the presidential election?" })).toBe("POLITICS");
  });
});
