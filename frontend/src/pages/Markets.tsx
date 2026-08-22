import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAccount, useWalletClient } from "wagmi";
import type { DreamMarket } from "../dreamdex";
import { dreamdexExchange, formatExpiry, getDreamBook, listDreamMarkets, marketLabel, minutesLeft, probabilityFromBook } from "../dreamdex";
import { DREAMDEX_CHAIN_ID, DREAMDEX_EXPLORER_URL } from "../dreamdex";

type Preview = { allowed: boolean; score: number; reasons: string[] };

function evaluateTrade(market: DreamMarket, amount: number, price: number, side: "buy" | "sell"): Preview {
  const reasons: string[] = [];
  let score = 0;
  if (amount <= 25) reasons.push("Position size within 25-share policy"); else { score += 55; reasons.push("Position exceeds 25-share hard limit"); }
  if (price > 0.08 && price < 0.92) reasons.push("Probability avoids extreme tail pricing"); else { score += 20; reasons.push("Tail-priced contracts require review"); }
  if (minutesLeft(market.expiry) < 3) { score += 30; reasons.push("Less than three minutes to expiry"); } else reasons.push("Time-to-expiry is adequate");
  return { allowed: score < 70, score, reasons: [side.toUpperCase(), ...reasons] };
}

export default function Markets() {
  const [markets, setMarkets] = useState<DreamMarket[]>([]);
  const [selected, setSelected] = useState<DreamMarket | null>(null);
  const [book, setBook] = useState<{ bids: [number, number][]; asks: [number, number][] } | null>(null);
  const [amount, setAmount] = useState(5);
  const [price, setPrice] = useState(0.5);
  const [side, setSide] = useState<"buy" | "sell">("buy");
  const [status, setStatus] = useState("Loading live Event Contracts…");
  const [txHash, setTxHash] = useState("");
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();

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
  useEffect(() => { if (!selected) return; getDreamBook(selected).then((next) => { setBook(next); setPrice(probabilityFromBook(next)); }).catch(() => setBook({ bids: [], asks: [] })); }, [selected]);

  const preview = useMemo(() => selected ? evaluateTrade(selected, amount, price, side) : null, [selected, amount, price, side]);
  async function execute() {
    if (!selected || !preview?.allowed || !walletClient) return;
    setStatus("Awaiting DreamDEX transaction…");
    try {
      dreamdexExchange.setSigner({ walletClient });
      await dreamdexExchange.loadMarkets(true);
      const unified = Object.values(dreamdexExchange.markets).find((item) => item.id.toLowerCase() === selected.marketId.toLowerCase());
      const base = unified?.outcomes?.[0]?.symbol;
      if (!base) throw new Error("Market symbol is still indexing. Refresh and try again.");
      const order = await dreamdexExchange.createOrder(base, "limit", side, amount, price, { timeInForce: "IOC", slippage: 0.03 });
      setTxHash(order.txHash || "");
      setStatus(`Order ${order.status}: ${order.filled} shares filled`);
    } catch (error: any) { setStatus(error?.message || "Order rejected"); }
  }

  return <div className="app dreamdex-app"><div className="bg" aria-hidden="true" />
    <section className="pitch dream-pitch"><div className="section-kicker">SLUICE MARKETS / DREAMDEX EVENT CONTRACTS</div><h1>Trade the event.<br /><em>Keep the policy.</em></h1><p>AI can propose a thesis. Deterministic controls decide whether an Event Contract order reaches the Somnia chain.</p><div className="console-status"><span><i /> {status}</span><span>Shannon / {DREAMDEX_CHAIN_ID}</span><span><a href={DREAMDEX_EXPLORER_URL} target="_blank" rel="noreferrer">Explorer ↗</a></span></div></section>
    <main className="grid dream-grid">
      <section className="card market-board"><div className="card-label">LIVE EVENT CONTRACTS</div><div className="market-list">{markets.map((market) => <button key={market.marketId} className={`market-row ${selected?.marketId === market.marketId ? "selected" : ""}`} onClick={() => setSelected(market)}><span><b>{market.asset}</b><small>{marketLabel(market)}</small></span><strong>{minutesLeft(market.expiry)}m</strong><i>{market.status}</i></button>)}{!markets.length && <p className="muted">No live markets returned yet.</p>}</div></section>
      <section className="card market-detail">{selected ? <><div className="card-label">MARKET / {selected.asset}</div><h2>{marketLabel(selected)}</h2><p className="muted">Expires {formatExpiry(selected.expiry)} · {selected.interval || "rolling"} cadence · {selected.quoteDecimals || 6} decimal collateral</p><div className="probability"><span>UP probability</span><b>{Math.round((price || 0.5) * 100)}%</b><small>midpoint from live book</small></div><div className="book"><div><label>BIDS</label>{(book?.bids || []).slice(0, 5).map(([p, q]) => <p key={`${p}-${q}`}><span>{(p * 100).toFixed(1)}%</span><b>{q.toFixed(2)}</b></p>)}</div><div><label>ASKS</label>{(book?.asks || []).slice(0, 5).map(([p, q]) => <p key={`${p}-${q}`}><span>{(p * 100).toFixed(1)}%</span><b>{q.toFixed(2)}</b></p>)}</div></div></> : <p className="muted">Select a market.</p>}</section>
      <section className="card trade-ticket"><div className="card-label">POLICY CHECK / ORDER TICKET</div><div className="segmented"><button className={side === "buy" ? "active" : ""} onClick={() => setSide("buy")}>Buy UP</button><button className={side === "sell" ? "active" : ""} onClick={() => setSide("sell")}>Sell UP</button></div><label>Shares<input type="number" min="0.001" step="0.001" value={amount} onChange={(e) => setAmount(Number(e.target.value))} /></label><label>Limit probability<input type="number" min="0.001" max="0.999" step="0.001" value={price} onChange={(e) => setPrice(Number(e.target.value))} /></label>{preview && <div className={`decision ${preview.allowed ? "allow" : "block"}`}><strong>{preview.allowed ? "APPROVED" : "BLOCKED"}</strong><span>Risk score {preview.score}/100</span>{preview.reasons.map((reason) => <small key={reason}>{reason}</small>)}</div>}<button className="primary big" disabled={!preview?.allowed || !walletClient} onClick={execute}>{!address ? "Connect wallet to execute" : !walletClient ? "Switch to Shannon" : "Execute IOC order"}</button>{txHash && <a className="text-link" href={`${DREAMDEX_EXPLORER_URL}/tx/${txHash}`} target="_blank" rel="noreferrer">View transaction ↗</a>}</section>
    </main><footer className="foot"><Link to="/portfolio">Open portfolio</Link> · AI context is advisory; policy is deterministic and chain writes are authoritative.</footer>
  </div>;
}
