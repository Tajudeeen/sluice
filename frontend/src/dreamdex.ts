import { SomniaMarkets, SOMNIA_TESTNET_ADDRESSES, type BinaryMarket, type UnifiedOrderBook, type Candle, type OrderRow, type PortfolioPosition } from "@somnia-chain/markets-sdk";
import { somniaShannon } from "@somnia-chain/markets-sdk/chains";
import type { Address, Hex } from "viem";
import { scaledNumber } from "./units";

export const DREAMDEX_INDEXER_URL = (import.meta.env.VITE_DREAMDEX_INDEXER_URL as string) || "https://dev.smk.somnia.host/v1/graphql";
export const DREAMDEX_RPC_URL = (import.meta.env.VITE_DREAMDEX_RPC_URL as string) || "https://api.infra.testnet.somnia.network";
export const DREAMDEX_RPC_URLS = [DREAMDEX_RPC_URL, "https://dream-rpc.somnia.network"] as const;
export const DREAMDEX_WS_URL = (import.meta.env.VITE_DREAMDEX_WS_URL as string) || "wss://dream-rpc.somnia.network/ws";
export const DREAMDEX_CHAIN_ID = 50312;
export const DREAMDEX_EXPLORER_URL = (import.meta.env.VITE_DREAMDEX_EXPLORER_URL as string) || "https://shannon-explorer.somnia.network";
export const SOMNIA_TESTNET_FAUCET_URL = "https://testnet.somnia.network/";

export const dreamdexExchange = new SomniaMarkets({
  indexerUrl: DREAMDEX_INDEXER_URL,
  chain: somniaShannon,
  wsRpcUrl: DREAMDEX_WS_URL,
  addresses: SOMNIA_TESTNET_ADDRESSES,
});

export type DreamMarket = BinaryMarket & { live: boolean };
export type MarketCategory = "CRYPTO" | "SPORTS" | "POLITICS" | "CULTURE" | "OTHER";
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
  /** Structured 5-dimension risk breakdown for the Safe Size preview.
   *  Each dimension scores 0 (safe) to 100 (critical), with BLOCK-level checks. */
  dimensions: RiskDimensions;
};
export type RiskDimension = { name: string; score: number; status: "pass" | "warn" | "block" };
export type RiskDimensions = {
  market: RiskDimension;      // status, expiry, tail pricing
  liquidity: RiskDimension;   // book freshness, depth, spread, impact
  exposure: RiskDimension;    // position size, market/portfolio exposure
  collateral: RiskDimension; // UP balance, collateral, token approval
  control: RiskDimension;     // wallet feasibility (cross-cuts all)
};
export type WalletSnapshot = {
  marketShares: number;
  totalPortfolioShares: number;
  sellBalance: number;
  collateralBalance: number;
  collateralAllowance: number;
  collateralSymbol: string;
  readAt: number;
};
export type PredictionOutcome = { label: "PENDING" | "WON" | "LOST" | "VOID / REFUNDABLE"; tone: "pending" | "win" | "loss" | "void" };

/** Return a timestamped collection newest-first without mutating the source. */
export function newestFirst<T>(values: readonly T[], timestamp: (value: T) => string | number): T[] {
  return [...values].sort((a, b) => Number(timestamp(b)) - Number(timestamp(a)));
}

/** Put positions for markets with the newest recorded order first. */
export function positionsByLatestOrder(positions: readonly PortfolioPosition[], orders: readonly Pick<OrderRow, "market" | "placedAtTimestamp">[]): PortfolioPosition[] {
  const latestByMarket = new Map<string, number>();
  for (const order of orders) {
    const market = order.market.toLowerCase();
    const timestamp = Number(order.placedAtTimestamp);
    if (Number.isFinite(timestamp) && timestamp > (latestByMarket.get(market) ?? -Infinity)) latestByMarket.set(market, timestamp);
  }
  return positions
    .map((position, index) => ({ position, index, latest: latestByMarket.get(position.market.id.toLowerCase()) ?? -Infinity }))
    .sort((a, b) => b.latest - a.latest || a.index - b.index)
    .map(({ position }) => position);
}

/** Interpret DreamDEX settlement fields without assuming one exact finalized status label. */
export function predictionOutcome(market: { voided: boolean; winningOutcome?: number | null }, outcomeIndex: number): PredictionOutcome {
  if (market.voided) return { label: "VOID / REFUNDABLE", tone: "void" };
  if (market.winningOutcome == null) return { label: "PENDING", tone: "pending" };
  return outcomeIndex === market.winningOutcome ? { label: "WON", tone: "win" } : { label: "LOST", tone: "loss" };
}

export async function listDreamMarkets(): Promise<DreamMarket[]> {
  const rows = await dreamdexExchange.client.listLiveBinaryMarkets({ limit: 100, orderBy: "closingSoon" });
  return rows.map((row) => ({ ...row, live: row.status === "Trading" }));
}

export function marketCategory(market: Pick<DreamMarket, "asset" | "question">): MarketCategory {
  const text = `${market.asset} ${market.question || ""}`.toLowerCase();
  if (/\b(btc|bitcoin|eth|ethereum|sol|solana|crypto|token|usdc|xrp|doge)\b/.test(text)) return "CRYPTO";
  if (/\b(nba|wnba|nfl|football|soccer|basketball|baseball|tennis|ufc|f1|formula 1|champions league|premier league)\b/.test(text)) return "SPORTS";
  if (/\b(election|president|senate|congress|parliament|minister|governor|vote|politic)\b/.test(text)) return "POLITICS";
  if (/\b(oscar|grammy|film|movie|music|album|celebrity|box office|television|tv)\b/.test(text)) return "CULTURE";
  return "OTHER";
}

export async function getDreamBook(market: DreamMarket): Promise<UnifiedOrderBook> {
  const raw = await dreamdexExchange.client.getBinaryOrderBook(market.poolAddress, { depth: 8, decimals: market.quoteDecimals });
  return binaryBookToUnified(market, raw);
}

function binaryBookToUnified(market: DreamMarket, raw: { yesBids: { price: bigint; quantity: bigint }[]; yesAsks: { price: bigint; quantity: bigint }[] }): UnifiedOrderBook {
  return {
    symbol: `${market.marketId}#YES`,
    bids: raw.yesBids.map((level) => [scaledNumber(level.price, market.quoteDecimals), scaledNumber(level.quantity, market.baseDecimals)]),
    asks: raw.yesAsks.map((level) => [scaledNumber(level.price, market.quoteDecimals), scaledNumber(level.quantity, market.baseDecimals)]),
    timestamp: Date.now(),
    info: raw,
  };
}

/** Subscribe to Somnia's live market tail and project its binary book into the UI shape. */
export async function watchDreamBook(market: DreamMarket, listener: (book: UnifiedOrderBook) => void): Promise<() => void> {
  let stopped = false;
  const handle = await dreamdexExchange.client.watchMarket(market.poolAddress);
  if (stopped) { handle.stop(); return () => undefined; }
  const publish = () => {
    if (stopped) return;
    listener(binaryBookToUnified(market, dreamdexExchange.client.getLiveBinaryOrderBook(market.poolAddress, { depth: 8 })));
  };
  const unsubscribe = dreamdexExchange.client.subscribeLive(publish);
  publish();
  return () => {
    if (stopped) return;
    stopped = true;
    unsubscribe();
    handle.stop();
  };
}

export async function getDreamCandles(market: DreamMarket, limit = 24): Promise<Candle[]> {
  return dreamdexExchange.client.getCandles(market.poolAddress, 3600, { limit });
}

export function candleQuoteVolume(candles: Candle[], decimals: number): number {
  return candles.reduce((sum, candle) => sum + scaledNumber(candle.quoteVolume, decimals), 0);
}

export async function getDreamWalletSnapshot(market: DreamMarket, account: string): Promise<WalletSnapshot> {
  const owner = account as Address;
  const [onchain, portfolio] = await Promise.all([
    dreamdexExchange.client.getMarketOnchain(market.marketId as Hex),
    dreamdexExchange.client.getPortfolio(account, { ordersLimit: 0, tradesLimit: 0 }),
  ]);
  const [collateralBalanceRaw, collateralAllowanceRaw, yesBalanceRaw, noBalanceRaw, metadata] = await Promise.all([
    dreamdexExchange.client.getErc20Balance(onchain.collateral, owner),
    dreamdexExchange.client.getErc20Allowance(onchain.collateral, owner, onchain.pool),
    dreamdexExchange.client.getOutcomeBalance({ outcomeToken: onchain.outcomeToken, account: owner, id: onchain.yesId }),
    dreamdexExchange.client.getOutcomeBalance({ outcomeToken: onchain.outcomeToken, account: owner, id: onchain.noId }),
    dreamdexExchange.client.getErc20Metadata(onchain.collateral),
  ]);
  const marketShares = scaledNumber(yesBalanceRaw + noBalanceRaw, onchain.decimals);
  const indexedMarketShares = portfolio.positions
    .filter((position) => position.market.id.toLowerCase() === market.marketId.toLowerCase())
    .reduce((sum, position) => sum + scaledNumber(position.balance, position.market.quoteDecimals), 0);
  const indexedTotal = portfolio.positions.reduce((sum, position) => sum + scaledNumber(position.balance, position.market.quoteDecimals), 0);
  const collateralBalance = scaledNumber(collateralBalanceRaw, metadata.decimals);
  const collateralAllowance = scaledNumber(collateralAllowanceRaw, metadata.decimals);
  return {
    marketShares,
    totalPortfolioShares: Math.max(0, indexedTotal - indexedMarketShares + marketShares),
    sellBalance: scaledNumber(yesBalanceRaw, onchain.decimals),
    collateralBalance,
    collateralAllowance,
    collateralSymbol: metadata.symbol,
    readAt: Date.now(),
  };
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

export function executionPreview(market: DreamMarket, book: UnifiedOrderBook | null, amount: number, requestedPrice: number, side: "buy" | "sell", wallet?: WalletSnapshot | null, policy: { maxCost?: number } = {}): ExecutionPreview {
  const checks: RiskCheck[] = [];
  let score = 0;
  // Per-dimension penalty trackers (each caps at 100).
  let dimMarket = 0, dimLiquidity = 0, dimExposure = 0, dimCollateral = 0, dimControl = 0;
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
    if (remaining > 0) {
      const take = Math.min(remaining, quantity);
      quote += take * levelPrice;
      remaining -= take;
    }
  }
  const estimatedFill = amount > 0 && remaining <= 1e-9 ? quote / amount : null;
  const estimatedCost = estimatedFill == null ? null : estimatedFill * amount;
  const slippageBps = estimatedFill != null && bestPrice != null ? Math.abs(estimatedFill - bestPrice) / bestPrice * 10_000 : null;

  if (!market.live || market.status !== "Trading") { score += 100; dimMarket += 100; checks.push({ label: "Market status", status: "block", detail: `Market is ${market.status}, not Trading` }); }
  else checks.push({ label: "Market status", status: "pass", detail: "Trading on Somnia Shannon" });
  const bookAge = book?.timestamp == null ? Infinity : Date.now() - book.timestamp;
  if (!book || !Number.isFinite(bookAge) || bookAge > 20_000) { score += 100; dimLiquidity += 100; checks.push({ label: "Book freshness", status: "block", detail: "Order book is older than 20 seconds or has no timestamp" }); }
  else checks.push({ label: "Book freshness", status: "pass", detail: `Snapshot age ${Math.max(0, Math.round(bookAge / 1000))}s` });
  if (amount > 25 || amount <= 0) { score += 55; dimExposure += 55; checks.push({ label: "Position size", status: "block", detail: amount > 25 ? "Hard limit is 25 shares" : "Enter a positive share amount" }); }
  else checks.push({ label: "Position size", status: "pass", detail: `${amount.toFixed(3)} shares within 25-share limit` });
  if (bestPrice == null || levels.length === 0) { score += 100; dimLiquidity += 100; checks.push({ label: "Book liquidity", status: "block", detail: "No executable liquidity on the selected side" }); }
  else if (estimatedFill == null) { score += 40; dimLiquidity += 40; checks.push({ label: "Book liquidity", status: "block", detail: `Only ${visibleDepth.toFixed(3)} shares available at this limit` }); }
  else checks.push({ label: "Book liquidity", status: "pass", detail: `${visibleDepth.toFixed(3)} visible shares, estimated fill ${formatPct(estimatedFill)}` });
  if (spreadBps == null) { score += 20; dimLiquidity += 20; checks.push({ label: "Spread", status: "warn", detail: "Spread unavailable until both sides quote" }); }
  else if (spreadBps > 500) { score += 25; dimLiquidity += 25; checks.push({ label: "Spread", status: "warn", detail: `${spreadBps.toFixed(0)} bps wide` }); }
  else checks.push({ label: "Spread", status: "pass", detail: `${spreadBps.toFixed(0)} bps` });
  if (slippageBps != null && slippageBps > 150) { score += 25; dimLiquidity += 25; checks.push({ label: "Price impact", status: "block", detail: `${slippageBps.toFixed(0)} bps expected impact` }); }
  else if (slippageBps != null) checks.push({ label: "Price impact", status: "pass", detail: `${slippageBps.toFixed(0)} bps from top of book` });
  if (side === "buy" && policy.maxCost != null) {
    if (!Number.isFinite(policy.maxCost) || policy.maxCost <= 0) { score += 100; dimMarket += 100; checks.push({ label: "Maximum downside", status: "block", detail: "Enter a positive tUSDC loss budget" }); }
    else if (estimatedCost != null && estimatedCost > policy.maxCost + 1e-9) { score += 100; dimMarket += 100; checks.push({ label: "Maximum downside", status: "block", detail: `${estimatedCost.toFixed(3)} tUSDC cost exceeds the ${policy.maxCost.toFixed(3)} tUSDC budget` }); }
    else if (estimatedCost != null) checks.push({ label: "Maximum downside", status: "pass", detail: `${estimatedCost.toFixed(3)} tUSDC worst-case entry cost within budget` });
  }
  if (minutesLeft(market.expiry) < 3) { score += 30; dimMarket += 30; checks.push({ label: "Time to expiry", status: "block", detail: "Less than 3 minutes remaining" }); }
  else checks.push({ label: "Time to expiry", status: "pass", detail: `${minutesLeft(market.expiry)} minutes remaining` });
  if (requestedPrice <= 0.08 || requestedPrice >= 0.92) { score += 20; dimMarket += 20; checks.push({ label: "Tail pricing", status: "warn", detail: "Extreme probabilities require review" }); }
  else checks.push({ label: "Tail pricing", status: "pass", detail: "Probability is inside the review band" });
  if (wallet === null) { score += 100; dimControl += 100; checks.push({ label: "Wallet feasibility", status: "block", detail: "Wallet balances could not be verified" }); }
  else if (wallet) {
    const projectedMarket = side === "buy" ? wallet.marketShares + amount : Math.max(0, wallet.marketShares - amount);
    const projectedGlobal = side === "buy" ? wallet.totalPortfolioShares + amount : Math.max(0, wallet.totalPortfolioShares - amount);
    if (side === "buy" && projectedMarket > 25) { score += 55; dimExposure += 55; checks.push({ label: "Market exposure", status: "block", detail: `Projected ${projectedMarket.toFixed(3)} shares exceeds the 25-share market limit` }); }
    else checks.push({ label: "Market exposure", status: "pass", detail: `Projected ${projectedMarket.toFixed(3)} shares in this market` });
    if (side === "buy" && projectedGlobal > 100) { score += 55; dimExposure += 55; checks.push({ label: "Portfolio exposure", status: "block", detail: `Projected ${projectedGlobal.toFixed(3)} shares exceeds the 100-share portfolio limit` }); }
    else checks.push({ label: "Portfolio exposure", status: "pass", detail: `Projected ${projectedGlobal.toFixed(3)} shares across markets` });
    if (side === "sell" && wallet.sellBalance + 1e-9 < amount) { score += 100; dimCollateral += 100; checks.push({ label: "UP balance", status: "block", detail: `Only ${wallet.sellBalance.toFixed(3)} UP shares available` }); }
    else if (side === "sell") checks.push({ label: "UP balance", status: "pass", detail: `${wallet.sellBalance.toFixed(3)} UP shares available` });
    if (side === "buy" && estimatedCost != null && wallet.collateralBalance + 1e-9 < estimatedCost) { score += 100; dimCollateral += 100; checks.push({ label: "Collateral", status: "block", detail: `${wallet.collateralBalance.toFixed(3)} ${wallet.collateralSymbol} available; ${estimatedCost.toFixed(3)} required` }); }
    else if (side === "buy" && estimatedCost != null) checks.push({ label: "Collateral", status: "pass", detail: `${wallet.collateralBalance.toFixed(3)} ${wallet.collateralSymbol} available` });
    if (side === "buy" && estimatedCost != null && wallet.collateralAllowance + 1e-9 < estimatedCost) checks.push({ label: "Token approval", status: "warn", detail: `DreamDEX will request a maximum collateral approval before this order` });
    else if (side === "sell") checks.push({ label: "Operator approval", status: "warn", detail: "DreamDEX may request a one-time pool operator approval for outcome tokens" });
    else checks.push({ label: "Token approval", status: "pass", detail: "Existing collateral allowance covers this order" });
  }
  return {
    allowed: score < 70 && checks.every((check) => check.status !== "block"),
    score: Math.min(100, score),
    checks,
    dimensions: buildRiskDimensions(checks, [dimMarket, dimLiquidity, dimExposure, dimCollateral, dimControl]),
    bestPrice,
    estimatedFill,
    estimatedCost,
    slippageBps,
    spreadBps,
    visibleDepth,
  };
}

/** Map checks + raw dimension penalties into the 5-dimension RiskDimensions model.
 *  Checks are tagged to dimensions by label so the model stays derived from the
 *  existing policy rather than duplicating threshold logic. */
const DIMENSION_TAGS: Record<string, keyof RiskDimensions> = {
  "Market status": "market",
  "Time to expiry": "market",
  "Tail pricing": "market",
  "Book freshness": "liquidity",
  "Book liquidity": "liquidity",
  "Spread": "liquidity",
  "Price impact": "liquidity",
  "Position size": "exposure",
  "Market exposure": "exposure",
  "Portfolio exposure": "exposure",
  "UP balance": "collateral",
  "Collateral": "collateral",
  "Token approval": "collateral",
  "Operator approval": "collateral",
  "Wallet feasibility": "control",
  "Maximum downside": "market",
};

function buildRiskDimensions(
  checks: RiskCheck[],
  penalties: [number, number, number, number, number],
): RiskDimensions {
  const [m, l, e, c, ctrl] = penalties;
  const byDim: Record<keyof RiskDimensions, RiskCheck[]> = {
    market: [], liquidity: [], exposure: [], collateral: [], control: [],
  };
  for (const check of checks) {
    (byDim[DIMENSION_TAGS[check.label] ?? "control"]).push(check);
  }
  const dimension = (score: number, status: "pass" | "warn" | "block", name: string): RiskDimension => ({
    name, score: Math.min(100, score), status,
  });
  const statusOf = (items: RiskCheck[]): "pass" | "warn" | "block" =>
    items.some((item) => item.status === "block") ? "block"
    : items.some((item) => item.status === "warn") ? "warn"
    : "pass";
  return {
    market: dimension(m, statusOf(byDim.market), "Market"),
    liquidity: dimension(l, statusOf(byDim.liquidity), "Liquidity"),
    exposure: dimension(e, statusOf(byDim.exposure), "Exposure"),
    collateral: dimension(c, statusOf(byDim.collateral), "Collateral"),
    control: dimension(ctrl, statusOf(byDim.control), "Control"),
  };
}

export type DepthLevel = { price: number; quantity: number; cumulative: number };
export type DepthLadder = { side: "buy" | "sell"; levels: DepthLevel[] };
/** Build a depth ladder from the order book for a given side, showing cumulative
 *  depth at each price level so the trade ticket can render a visual ladder. */
export function depthLadder(book: UnifiedOrderBook | null, side: "buy" | "sell"): DepthLadder {
  const levels = side === "buy" ? (book?.asks || []) : (book?.bids || []);
  // For buys, reverse so best (lowest ask) is first; for sells, bids are already best-first.
  const sorted = side === "buy" ? [...levels].reverse() : [...levels];
  let cumulative = 0;
  const result: DepthLevel[] = [];
  for (const [price, quantity] of sorted) {
    cumulative += quantity;
    result.push({ price, quantity, cumulative });
  }
  return { side, levels: result };
}

/** Largest order size that passes the exact pre-signing policy and optional max-loss budget. */
export function safeOrderSize(market: DreamMarket, book: UnifiedOrderBook | null, requestedPrice: number, side: "buy" | "sell", wallet?: WalletSnapshot | null, limits: { shareCap?: number; maxCost?: number } = {}): number {
  const shareCap = Math.min(25, limits.shareCap ?? 25);
  const maxCost = limits.maxCost;
  if (!book || !Number.isFinite(requestedPrice) || requestedPrice <= 0 || !Number.isFinite(shareCap) || shareCap <= 0) return 0;
  const passes = (size: number) => {
    const result = executionPreview(market, book, size, requestedPrice, side, wallet, { maxCost });
    return result.allowed;
  };
  if (!passes(0.001)) return 0;
  let low = 1;
  let high = Math.floor(shareCap * 1_000);
  let best = 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (passes(mid / 1_000)) { best = mid; low = mid + 1; }
    else high = mid - 1;
  }
  return best / 1_000;
}

/** Explain why Safe Size stops at a given order size. Returns the binding constraint
 *  dimension and a human-readable reason, so the trade ticket can show
 *  "Safe Size = 7.234 shares → bounded by liquidity" inline. */
export function safeSizeConstraint(market: DreamMarket, book: UnifiedOrderBook | null, size: number, requestedPrice: number, side: "buy" | "sell", wallet?: WalletSnapshot | null, limits?: { maxCost?: number }): { dimension: string; reason: string } | null {
  if (size <= 0 || !book) return null;
  const preview = executionPreview(market, book, size + 0.001, requestedPrice, side, wallet, limits);
  const blocking = preview.checks.filter((c) => c.status === "block");
  const dimName = (label: string): string => {
    const key = DIMENSION_TAGS[label] ?? "control";
    return { market: "Market", liquidity: "Liquidity", exposure: "Exposure", collateral: "Collateral", control: "Control" }[key];
  };
  if (!blocking.length) {
    // Try the max to see what would block at the cap.
    const maxPreview = executionPreview(market, book, 25.001, requestedPrice, side, wallet, limits);
    const maxBlocking = maxPreview.checks.filter((c) => c.status === "block");
    if (!maxBlocking.length) return { dimension: "Exposure", reason: "At the 25-share hard cap" };
    const first = maxBlocking[0];
    return { dimension: dimName(first.label), reason: `At the 25-share hard cap (${first.label} blocks)` };
  }
  const first = blocking[0];
  // Enrich liquidity constraints with explicit depth-at-price context.
  if (first.label === "Book liquidity") {
    const levels = side === "buy" ? (book?.asks || []) : (book?.bids || []);
    const visibleDepth = levels.filter(([p]) => side === "buy" ? p <= requestedPrice : p >= requestedPrice).reduce((sum, [, q]) => sum + q, 0);
    return { dimension: "Liquidity", reason: `Only ${visibleDepth.toFixed(3)} shares visible at the ${requestedPrice.toFixed(3)} limit; ${first.detail}` };
  }
  if (first.label === "Position size") {
    return { dimension: "Exposure", reason: `Share amount ${size.toFixed(3)} exceeds the 25-share hard cap` };
  }
  if (first.label === "Market exposure" || first.label === "Portfolio exposure") {
    return { dimension: "Exposure", reason: first.detail };
  }
  if (first.label === "Collateral") {
    return { dimension: "Collateral", reason: first.detail };
  }
  if (first.label === "UP balance") {
    return { dimension: "Collateral", reason: first.detail };
  }
  if (first.label === "Maximum downside") {
    return { dimension: "Market", reason: first.detail };
  }
  return { dimension: dimName(first.label), reason: first.detail };
}
