import { SomniaMarkets, SOMNIA_TESTNET_ADDRESSES, type BinaryMarket, type UnifiedOrderBook } from "@somnia-chain/markets-sdk";
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
