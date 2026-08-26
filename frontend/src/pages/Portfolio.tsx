import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import type { OrderRow, Portfolio as DreamPortfolio } from "@somnia-chain/markets-sdk";
import { DREAMDEX_EXPLORER_URL, dreamdexExchange, formatExpiry, newestFirst, positionsByLatestOrder, predictionOutcome } from "../dreamdex";
import { formatRawUnits, scaledNumber } from "../units";

type Tab = "positions" | "orders" | "fills";
type SyncState = "idle" | "loading" | "connected" | "error";
const units = (raw: string | undefined, decimals = 6) => raw == null ? "0" : formatRawUnits(raw, decimals, 4);
const probability = (raw: string | undefined, decimals = 6) => raw == null ? "—" : `${(scaledNumber(raw, decimals) * 100).toFixed(2)}%`;
const txUrl = (hash: string) => `${DREAMDEX_EXPLORER_URL.replace(/\/$/, "")}/tx/${hash}`;

function lifecycle(market: DreamPortfolio["positions"][number]["market"]): string {
  if (market.voided) return "VOID / REDEEMABLE";
  if (market.winningOutcome != null) return "FINALIZED";
  if (market.status === "Trading") return "TRADING";
  return String(market.status || "SETTLING").toUpperCase();
}


export default function Portfolio() {
  const { address } = useAccount();
  const [portfolio, setPortfolio] = useState<DreamPortfolio | null>(null);
  const [orders, setOrders] = useState<OrderRow[]>([]);
  const [status, setStatus] = useState("Connect a Shannon wallet to load your on-chain activity.");
  const [syncState, setSyncState] = useState<SyncState>("idle");
  const [tab, setTab] = useState<Tab>("positions");
  const refreshTimers = useRef<number[]>([]);

  const refresh = useCallback(() => {
    if (!address) { setPortfolio(null); setOrders([]); setSyncState("idle"); setStatus("Connect a Shannon wallet to load your on-chain activity."); return; }
    setSyncState("loading");
    setStatus("Syncing positions, order history, and fills from DreamDEX...");
    Promise.all([
      dreamdexExchange.client.getPortfolio(address, { ordersLimit: 0, tradesLimit: 50 }),
      dreamdexExchange.client.getOrders(address, { limit: 50 }),
    ]).then(([value, history]) => {
      setPortfolio(value); setOrders(newestFirst(history, (order) => order.placedAtTimestamp)); setSyncState("connected"); setStatus(`Portfolio synced for ${address.slice(0, 6)}...${address.slice(-4)}.`);
    }).catch((error) => { setSyncState("error"); setStatus(error.message || "DreamDEX indexer unavailable."); });
  }, [address]);

  useEffect(() => { refresh(); }, [refresh]);
  useEffect(() => {
    const sync = (event: StorageEvent) => { if (event.key === "sluice:last-order") refresh(); };
    const sameTabSync = () => {
      refresh();
      refreshTimers.current.forEach((timer) => window.clearTimeout(timer));
      refreshTimers.current = [window.setTimeout(refresh, 2000), window.setTimeout(refresh, 5000)];
    };
    window.addEventListener("storage", sync); window.addEventListener("sluice:order-confirmed", sameTabSync);
    return () => {
      window.removeEventListener("storage", sync); window.removeEventListener("sluice:order-confirmed", sameTabSync);
      refreshTimers.current.forEach((timer) => window.clearTimeout(timer));
      refreshTimers.current = [];
    };
  }, [refresh]);

  const sortedTrades = portfolio ? newestFirst(portfolio.trades, (trade) => trade.timestamp) : [];
  const sortedPositions = portfolio ? positionsByLatestOrder(portfolio.positions, orders) : [];
  const rows = tab === "positions" ? portfolio?.positions.length || 0 : tab === "orders" ? orders.length : sortedTrades.length;
  return <div className="app dreamdex-app"><div className="bg" aria-hidden="true" />
    <section className="pitch"><div className="section-kicker">DREAMDEX PORTFOLIO / SOMNIA SETTLEMENT</div><h1>Every position has<br /><em>a chain-sourced state.</em></h1><p>{status}</p><div className="console-status"><span><i /> {syncState === "connected" ? "Indexer connected" : syncState === "loading" ? "Syncing indexer" : syncState === "error" ? "Indexer error" : "Wallet required"}</span><span>{portfolio?.positions.length || 0} positions</span><span>{portfolio?.trades.length || 0} indexed fills</span></div></section>
    <main className="grid"><section className="card wide portfolio-card"><div className="portfolio-head"><div><div className="card-label">ACCOUNT ACTIVITY</div><h2>Positions, order history, and execution history</h2></div><button className="ghost" onClick={refresh} disabled={!address}>Refresh indexer</button></div><div className="portfolio-tabs"><button className={tab === "positions" ? "active" : ""} onClick={() => setTab("positions")}>Positions <i>{portfolio?.positions.length || 0}</i></button><button className={tab === "orders" ? "active" : ""} onClick={() => setTab("orders")}>Order history <i>{orders.length}</i></button><button className={tab === "fills" ? "active" : ""} onClick={() => setTab("fills")}>Recent fills <i>{sortedTrades.length}</i></button></div>
      {tab === "positions" && sortedPositions.map((position) => { const result = predictionOutcome(position.market, position.outcomeIndex); const latestOrder = orders.find((order) => order.market.toLowerCase() === position.market.id.toLowerCase()); return <div className="activity-row position-activity" key={`${position.market.id}-${position.outcomeIndex}`}><span><b>{position.market.asset} · {position.outcomeIndex === 0 ? "UP" : "DOWN"}</b><small>{position.market.question}</small><em>{latestOrder ? `Last order ${new Date(Number(latestOrder.placedAtTimestamp) * 1000).toLocaleString()}` : `Expires ${formatExpiry(position.market.expiry)} · ${position.market.interval || "event"}`}</em></span><span><small>Balance</small><strong>{units(position.balance, position.market.quoteDecimals)}</strong></span><span><small>State</small><i className={`state-pill ${position.market.status === "Trading" ? "live" : "settled"}`}>{lifecycle(position.market)}</i><em className={`outcome-result ${result.tone}`}>Outcome: {result.label}</em>{position.market.winningOutcome != null && <em>Winner: {position.market.winningOutcome === 0 ? "UP" : "DOWN"}</em>}</span></div>; })}
      {tab === "orders" && orders.map((order) => { const market = order.marketInfo; const decimals = market?.quoteDecimals ?? 6; const asset = market?.asset || "DreamDEX"; const question = market?.question || "Historical order"; const side = order.isBid ? "BUY" : "SELL"; return <div className="activity-row" key={order.id}><span><b>{asset} · {side}</b><small>{question}</small><em>Placed {new Date(Number(order.placedAtTimestamp) * 1000).toLocaleString()}</em></span><span><small>Remaining / filled</small><strong>{units(order.quantityRemaining, decimals)} / {units(order.filledQuantity, decimals)}</strong></span><span><small>Status · Limit</small><i className={`state-pill ${order.status === "Open" ? "live" : "settled"}`}>{order.status}</i><strong>{probability(order.price, decimals)}</strong><a href={txUrl(order.placedTxHash)} target="_blank" rel="noreferrer">Transaction ↗</a></span></div>; })}
      {tab === "fills" && sortedTrades.map((trade) => <div className="activity-row" key={trade.id}><span><b>{trade.market.asset} · {String(trade.side || "fill").toUpperCase()}</b><small>{trade.asMaker ? "Maker execution" : "Taker execution"} · {trade.market.interval || "event contract"}</small><em>{new Date(Number(trade.timestamp) * 1000).toLocaleString()}</em></span><span><small>Quantity</small><strong>{units(trade.quantity, trade.market.quoteDecimals)}</strong></span><span><small>Fill probability</small><strong>{probability(trade.fillPrice, trade.market.quoteDecimals)}</strong><a href={txUrl(trade.txHash)} target="_blank" rel="noreferrer">Proof ↗</a></span></div>)}
      {!rows && <div className="portfolio-empty"><b>{address ? `No ${tab} indexed yet` : "Wallet not connected"}</b><p>{address ? "Execute a small IOC order from the terminal, then refresh once DreamDEX indexes the transaction." : "Connect your Somnia Shannon wallet from the navigation to inspect account activity."}</p></div>}<Link className="primary" to="/markets">Back to live markets</Link></section></main>
    <footer className="foot">DreamDEX Event Contracts · fills, lifecycle, settlement, and transaction proof sourced from Somnia.</footer>
  </div>;
}
