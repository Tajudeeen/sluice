import { SomniaMarkets, SOMNIA_TESTNET_ADDRESSES, type BinaryMarket, type UnifiedOrderBook, type Candle } from "@somnia-chain/markets-sdk";
import { somniaShannon } from "@somnia-chain/markets-sdk/chains";

export const DREAMDEX_INDEXER_URL = (import.meta.env.VITE_DREAMDEX_INDEXER_URL as string) || "https://dev.smk.somnia.host/v1/graphql";
export const DREAMDEX_RPC_URL = (import.meta.env.VITE_DREAMDEX_RPC_URL as string) || "https://dream-rpc.somnia.network";
export const DREAMDEX_WS_URL = (import.meta.env.VITE_DREAMDEX_WS_URL as string) || "wss://dream-rpc.somnia.network/ws";
export const DREAMDEX_CHAIN_ID = 50312;
export const DREAMDEX_EXPLORER_URL = (import.meta.env.VITE_DREAMDEX_EXPLORER_URL as string) || "https://shannon-explorer.somnia.network";

export const dreamdexExchange = new SomniaMarkets({
  indexerUrl: DREAMDEX_INDEXER_URL,
  chain: somniaShannon,
  wsRpcUrl: DREAMDEX_WS_URL,
  addresses: SOMNIA_TESTNET_ADDRESSES,
});

export type DreamMarket = BinaryMarket & { live: boolean };
export type RiskCheck = { label: string; status: "pass" | "warn" | "block"; detail: string };
export type ExecutionPreview = {
  allowed: boolean;
  score: number;
  checks: RiskCheck[];
  bestPrice: number | null;
  estimatedFill: number | null;
  estimatedCost: number | null;
  slippageBps: number | null;
  spreadBps: number | null;
  visibleDepth: number;
};

export async function listDreamMarkets(): Promise<DreamMarket[]> {
  const rows = await dreamdexExchange.client.listLiveBinaryMarkets({ limit: 30, orderBy: "closingSoon" });
  return rows.map((row) => ({ ...row, live: row.status === "Trading" }));
}

export async function getDreamBook(market: DreamMarket): Promise<UnifiedOrderBook> {
  const raw = await dreamdexExchange.client.getBinaryOrderBook(market.poolAddress, { depth: 8, decimals: market.quoteDecimals });
  const priceScale = 10 ** market.quoteDecimals;
  const amountScale = 10 ** market.baseDecimals;
  return {
    symbol: `${market.marketId}#YES`,
    bids: raw.yesBids.map((level) => [Number(level.price) / priceScale, Number(level.quantity) / amountScale]),
    asks: raw.yesAsks.map((level) => [Number(level.price) / priceScale, Number(level.quantity) / amountScale]),
    timestamp: Date.now(),
    info: raw,
  };
}

export async function getDreamCandles(market: DreamMarket, limit = 24): Promise<Candle[]> {
  return dreamdexExchange.client.getCandles(market.poolAddress, 3600, { limit });
}

export function marketLabel(market: DreamMarket): string {
  return market.question || `${market.asset} event contract`;
}

export function explorerTx(hash: string): string {
  return `${DREAMDEX_EXPLORER_URL.replace(/\/$/, "")}/tx/${hash}`;
}

export function formatExpiry(value: string | number): string {
  return new Date(Number(value) * 1000).toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

export function minutesLeft(value: string | number): number {
  return Math.max(0, Math.round((Number(value) * 1000 - Date.now()) / 60000));
}

export function probabilityFromBook(book: UnifiedOrderBook): number {
  const bid = book.bids[0]?.[0];
  const ask = book.asks[0]?.[0];
  if (bid == null && ask == null) return 0.5;
  if (bid == null) return ask!;
  if (ask == null) return bid;
  return (bid + ask) / 2;
}

function formatPct(value: number): string { return `${(value * 100).toFixed(2)}%`; }

export function executionPreview(market: DreamMarket, book: UnifiedOrderBook | null, amount: number, requestedPrice: number, side: "buy" | "sell"): ExecutionPreview {
  const checks: RiskCheck[] = [];
  let score = 0;
  const levels = side === "buy" ? (book?.asks || []) : (book?.bids || []);
  const bestBid = book?.bids?.[0]?.[0] ?? null;
  const bestAsk = book?.asks?.[0]?.[0] ?? null;
  const bestPrice = side === "buy" ? bestAsk : bestBid;
  const spreadBps = bestBid != null && bestAsk != null ? ((bestAsk - bestBid) / ((bestAsk + bestBid) / 2)) * 10_000 : null;
  let remaining = Math.max(0, amount || 0);
  let quote = 0;
  let visibleDepth = 0;
  for (const [levelPrice, quantity] of levels) {
    const executable = side === "buy" ? levelPrice <= requestedPrice : levelPrice >= requestedPrice;
    if (!executable) continue;
    visibleDepth += quantity;
    const take = Math.min(remaining, quantity);
    quote += take * levelPrice;
    remaining -= take;
    if (remaining <= 0) break;
  }
  const estimatedFill = amount > 0 && remaining <= 1e-9 ? quote / amount : null;
  const estimatedCost = estimatedFill == null ? null : estimatedFill * amount;
  const slippageBps = estimatedFill != null && bestPrice != null ? Math.abs(estimatedFill - bestPrice) / bestPrice * 10_000 : null;

  if (!market.live || market.status !== "Trading") { score += 100; checks.push({ label: "Market status", status: "block", detail: `Market is ${market.status}, not Trading` }); }
  else checks.push({ label: "Market status", status: "pass", detail: "Trading on Somnia Shannon" });
  if (amount > 25 || amount <= 0) { score += 55; checks.push({ label: "Position size", status: "block", detail: amount > 25 ? "Hard limit is 25 shares" : "Enter a positive share amount" }); }
  else checks.push({ label: "Position size", status: "pass", detail: `${amount.toFixed(3)} shares within 25-share limit` });
  if (bestPrice == null || levels.length === 0) { score += 100; checks.push({ label: "Book liquidity", status: "block", detail: "No executable liquidity on the selected side" }); }
  else if (estimatedFill == null) { score += 40; checks.push({ label: "Book liquidity", status: "block", detail: `Only ${visibleDepth.toFixed(3)} shares available at this limit` }); }
  else checks.push({ label: "Book liquidity", status: "pass", detail: `${visibleDepth.toFixed(3)} visible shares, estimated fill ${formatPct(estimatedFill)}` });
  if (spreadBps == null) { score += 20; checks.push({ label: "Spread", status: "warn", detail: "Spread unavailable until both sides quote" }); }
  else if (spreadBps > 500) { score += 25; checks.push({ label: "Spread", status: "warn", detail: `${spreadBps.toFixed(0)} bps wide` }); }
  else checks.push({ label: "Spread", status: "pass", detail: `${spreadBps.toFixed(0)} bps` });
  if (slippageBps != null && slippageBps > 150) { score += 25; checks.push({ label: "Price impact", status: "block", detail: `${slippageBps.toFixed(0)} bps expected impact` }); }
  else if (slippageBps != null) checks.push({ label: "Price impact", status: "pass", detail: `${slippageBps.toFixed(0)} bps from top of book` });
  if (minutesLeft(market.expiry) < 3) { score += 30; checks.push({ label: "Time to expiry", status: "block", detail: "Less than 3 minutes remaining" }); }
  else checks.push({ label: "Time to expiry", status: "pass", detail: `${minutesLeft(market.expiry)} minutes remaining` });
  if (requestedPrice <= 0.08 || requestedPrice >= 0.92) { score += 20; checks.push({ label: "Tail pricing", status: "warn", detail: "Extreme probabilities require review" }); }
  else checks.push({ label: "Tail pricing", status: "pass", detail: "Probability is inside the review band" });
  return { allowed: score < 70 && checks.every((check) => check.status !== "block"), score: Math.min(100, score), checks, bestPrice, estimatedFill, estimatedCost, slippageBps, spreadBps, visibleDepth };
}
