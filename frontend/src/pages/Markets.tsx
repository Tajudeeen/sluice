import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAccount, useWalletClient } from "wagmi";
import type { Candle, UnifiedOrderBook } from "@somnia-chain/markets-sdk";
import type { DreamMarket } from "../dreamdex";
import {
  DREAMDEX_CHAIN_ID, DREAMDEX_EXPLORER_URL, dreamdexExchange, executionPreview,
  formatExpiry, getDreamBook, getDreamCandles, listDreamMarkets, marketLabel,
  minutesLeft, probabilityFromBook,
} from "../dreamdex";

type TrailItem = { at: string; state: "info" | "pass" | "block"; label: string; detail: string };
const compactNumber = (value: number) => Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(value);

function ProbabilityChart({ candles, decimals }: { candles: Candle[]; decimals: number }) {
  const points = candles.map((candle) => Number(candle.closePrice) / 10 ** decimals).filter(Number.isFinite);
  if (points.length < 2) return <div className="chart-empty">Price history appears after the first indexed fills.</div>;
  const min = Math.min(...points), max = Math.max(...points), span = Math.max(max - min, 0.02);
  const path = points.map((point, index) => `${index === 0 ? "M" : "L"}${((index / (points.length - 1)) * 100).toFixed(1)},${(44 - ((point - min) / span) * 40).toFixed(1)}`).join(" ");
  return <div className="probability-chart"><svg viewBox="0 0 100 48" preserveAspectRatio="none" role="img" aria-label="24 hour probability history"><path className="chart-area" d={`${path} L100,48 L0,48 Z`} /><path className="chart-line" d={path} /></svg><span>24H HISTORY</span><b>{(points.at(-1)! * 100).toFixed(1)}%</b></div>;
}

export default function Markets() {
  const [markets, setMarkets] = useState<DreamMarket[]>([]);
  const [selected, setSelected] = useState<DreamMarket | null>(null);
  const [book, setBook] = useState<UnifiedOrderBook | null>(null);
  const [candles, setCandles] = useState<Candle[]>([]);
  const [amount, setAmount] = useState(5);
  const [price, setPrice] = useState(0.5);
  const [side, setSide] = useState<"buy" | "sell">("buy");
  const [status, setStatus] = useState("Loading live Event Contracts...");
  const [txHash, setTxHash] = useState("");
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();

  function record(state: TrailItem["state"], label: string, detail: string) {
    const at = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    setTrail((current) => [{ at, state, label, detail }, ...current].slice(0, 8));
  }

  useEffect(() => {
    let active = true;
    const refresh = () => listDreamMarkets().then((rows) => {
      if (!active) return;
      setMarkets(rows);
      setSelected((current) => rows.find((row) => row.marketId === current?.marketId) || rows[0] || null);
      setStatus(`${rows.length} live markets from Shannon`);
    }).catch((error) => active && setStatus(`Indexer unavailable: ${error.message}`));
    refresh();
    const timer = window.setInterval(refresh, 15_000);
    return () => { active = false; window.clearInterval(timer); };
  }, []);

  useEffect(() => {
    if (!selected) return;
    let active = true;
    setBook(null); setCandles([]);
    Promise.allSettled([getDreamBook(selected), getDreamCandles(selected)]).then(([bookResult, candleResult]) => {
      if (!active) return;
      if (bookResult.status === "fulfilled") {
        const nextBook = bookResult.value;
        setBook(nextBook);
        setPrice((side === "buy" ? nextBook.asks[0]?.[0] : nextBook.bids[0]?.[0]) ?? probabilityFromBook(nextBook));
        record("info", "Market snapshot", `${nextBook.bids.length} bid and ${nextBook.asks.length} ask levels loaded from DreamDEX`);
      } else {
        setBook({ symbol: selected.marketId, bids: [], asks: [], timestamp: Date.now(), info: {} });
        record("block", "Market snapshot", bookResult.reason?.message || "Order book unavailable");
      }
      if (candleResult.status === "fulfilled") setCandles(candleResult.value);
      else record("info", "History unavailable", "Live book remains authoritative; candles are not indexed for this pool yet");
    });
    return () => { active = false; };
  }, [selected?.marketId]);

  useEffect(() => {
    if (!book) return;
    const top = side === "buy" ? book.asks[0]?.[0] : book.bids[0]?.[0];
    if (top != null) setPrice(top);
  }, [side]);

  const preview = useMemo(() => selected ? executionPreview(selected, book, amount, price, side) : null, [selected, book, amount, price, side]);
  const midpoint = book ? probabilityFromBook(book) : 0.5;
  const quoteVolume = selected ? Number(selected.cumulativeQuoteVolume || 0) / 10 ** selected.quoteDecimals : 0;

  async function execute() {
    if (!selected || !preview || !walletClient) return;
    if (!preview.allowed) { record("block", "Policy blocked", preview.checks.find((check) => check.status === "block")?.detail || "Risk limit exceeded"); return; }
    record("pass", "Policy approved", `Score ${preview.score}/100; estimated fill ${((preview.estimatedFill || 0) * 100).toFixed(2)}%`);
    record("info", "Wallet signature", "IOC order requested on Somnia Shannon");
    setStatus("Awaiting DreamDEX wallet signature...");
    try {
      dreamdexExchange.setSigner({ walletClient });
      await dreamdexExchange.loadMarkets(true);
      const unified = Object.values(dreamdexExchange.markets).find((item) => item.id.toLowerCase() === selected.marketId.toLowerCase());
      const symbol = unified?.outcomes?.[0]?.symbol;
      if (!symbol) throw new Error("Market symbol is still indexing. Refresh and try again.");
      const order = await dreamdexExchange.createOrder(symbol, "limit", side, amount, price, { timeInForce: "IOC", slippage: 0.03 });
      const hash = order.txHash || "";
      setTxHash(hash); setStatus(`Order ${order.status}: ${order.filled} shares filled`);
      record("pass", "Order confirmed", `${order.status}; ${order.filled} shares filled${hash ? `; ${hash.slice(0, 10)}...` : ""}`);
      window.localStorage.setItem("sluice:last-order", String(Date.now()));
      setBook(await getDreamBook(selected));
      record("info", "Position sync", "Book refreshed; portfolio indexer will reflect the confirmed fill");
    } catch (error: any) {
      setStatus(error?.shortMessage || error?.message || "Order rejected");
      record("block", "Execution rejected", error?.shortMessage || error?.message || "Wallet or protocol rejected the order");
    }
  }

  return <div className="app dreamdex-app"><div className="bg" aria-hidden="true" />
    <section className="pitch dream-pitch"><div className="section-kicker">SLUICE MARKETS / DREAMDEX EVENT CONTRACTS</div><h1>Trade the event.<br /><em>Keep the policy.</em></h1><p>Live market intelligence proposes the trade. Deterministic execution controls decide whether it reaches DreamDEX on Somnia.</p><div className="console-status"><span><i /> {status}</span><span>Shannon / {DREAMDEX_CHAIN_ID}</span><span><a href={DREAMDEX_EXPLORER_URL} target="_blank" rel="noreferrer">Explorer ↗</a></span></div></section>
    <main className="grid dream-grid">
      <section className="card market-board"><div className="card-label">LIVE EVENT CONTRACTS</div><div className="market-list">{markets.map((market) => <button key={market.marketId} className={`market-row ${selected?.marketId === market.marketId ? "selected" : ""}`} onClick={() => setSelected(market)}><span><b>{market.asset}</b><small>{marketLabel(market)}</small></span><strong>{minutesLeft(market.expiry)}m</strong><i>{market.status}</i></button>)}{!markets.length && <p className="muted">No live markets returned yet.</p>}</div></section>
      <section className="card market-detail">{selected ? <><div className="card-label">LIVE MARKET INTELLIGENCE / {selected.asset}</div><h2>{marketLabel(selected)}</h2><p className="muted">Expires {formatExpiry(selected.expiry)} · {selected.interval || "rolling"} cadence · DreamDEX indexed</p><div className="probability"><span>UP probability</span><b>{Math.round(midpoint * 100)}%</b><small>midpoint from the live DreamDEX order book</small></div><div className="market-metrics"><div><span>Spread</span><b>{preview?.spreadBps == null ? "—" : `${preview.spreadBps.toFixed(0)} bps`}</b></div><div><span>24H volume</span><b>{compactNumber(quoteVolume)}</b></div><div><span>Trades</span><b>{compactNumber(Number(selected.tradeCount || 0))}</b></div><div><span>Visible depth</span><b>{preview ? preview.visibleDepth.toFixed(2) : "—"}</b></div></div><ProbabilityChart candles={candles} decimals={selected.quoteDecimals} /><div className="book"><div><label>BIDS / BUYERS</label>{(book?.bids || []).slice(0, 5).map(([p, q]) => <p key={`${p}-${q}`}><span>{(p * 100).toFixed(1)}%</span><b>{q.toFixed(2)}</b></p>)}</div><div><label>ASKS / SELLERS</label>{(book?.asks || []).slice(0, 5).map(([p, q]) => <p key={`${p}-${q}`}><span>{(p * 100).toFixed(1)}%</span><b>{q.toFixed(2)}</b></p>)}</div></div></> : <p className="muted">Select a market.</p>}</section>
      <section className="card trade-ticket"><div className="card-label">EXECUTION POLICY / IOC ORDER</div><div className="segmented"><button className={side === "buy" ? "active" : ""} onClick={() => setSide("buy")}>Buy UP</button><button className={side === "sell" ? "active" : ""} onClick={() => setSide("sell")}>Sell UP</button></div><label>Shares<input type="number" min="0.001" max="25" step="0.001" value={amount} onChange={(event) => setAmount(Number(event.target.value))} /></label><label>Limit probability<input type="number" min="0.001" max="0.999" step="0.001" value={price} onChange={(event) => setPrice(Number(event.target.value))} /></label>{preview && <><div className="execution-estimate"><div><span>Expected fill</span><b>{preview.estimatedFill == null ? "NOT FILLABLE" : `${(preview.estimatedFill * 100).toFixed(2)}%`}</b></div><div><span>Estimated cost</span><b>{preview.estimatedCost == null ? "—" : preview.estimatedCost.toFixed(3)}</b></div><div><span>Price impact</span><b>{preview.slippageBps == null ? "—" : `${preview.slippageBps.toFixed(0)} bps`}</b></div></div><div className={`decision ${preview.allowed ? "allow" : "block"}`}><strong>{preview.allowed ? "APPROVED" : "BLOCKED"}</strong><span>Risk score {preview.score}/100</span>{preview.checks.map((check) => <small className={`check-${check.status}`} key={check.label}><i>{check.status === "pass" ? "✓" : check.status === "warn" ? "!" : "×"}</i><span><b>{check.label}</b>{check.detail}</span></small>)}</div></>}<button className="primary big" disabled={!preview?.allowed || !walletClient} onClick={execute}>{!address ? "Connect wallet to execute" : !walletClient ? "Switch to Shannon" : "Sign & execute IOC"}</button>{txHash && <a className="text-link" href={`${DREAMDEX_EXPLORER_URL}/tx/${txHash}`} target="_blank" rel="noreferrer">View confirmed transaction ↗</a>}</section>
      <section className="card execution-trail"><div className="card-label">VERIFIABLE EXECUTION TRAIL</div><h2>From market snapshot to on-chain result</h2>{trail.length ? <div className="trail-list">{trail.map((item, index) => <div className={`trail-item ${item.state}`} key={`${item.at}-${index}`}><i /><span><b>{item.label}</b><small>{item.detail}</small></span><time>{item.at}</time></div>)}</div> : <p className="muted">Select a market to begin the live audit trail. Policy decisions and wallet outcomes appear here.</p>}</section>
    </main><footer className="foot"><Link to="/portfolio">Open portfolio</Link> · Market context is advisory; deterministic policy and Somnia transactions are authoritative.</footer>
  </div>;
}
