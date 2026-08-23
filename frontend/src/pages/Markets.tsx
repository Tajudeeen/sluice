import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAccount, useChainId, useSwitchChain, useWalletClient } from "wagmi";
import type { Candle, UnifiedOrderBook } from "@somnia-chain/markets-sdk";
import type { DreamMarket, WalletSnapshot } from "../dreamdex";
import {
  DREAMDEX_CHAIN_ID, DREAMDEX_EXPLORER_URL, SOMNIA_TESTNET_FAUCET_URL, dreamdexExchange, executionPreview, safeOrderSize,
  candleQuoteVolume, formatExpiry, getDreamBook, getDreamCandles, getDreamWalletSnapshot, watchDreamBook,
  listDreamMarkets, marketCategory, marketLabel, minutesLeft, probabilityFromBook,
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
  const [walletSnapshot, setWalletSnapshot] = useState<WalletSnapshot | null | undefined>(undefined);
  const [walletCheck, setWalletCheck] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [amount, setAmount] = useState(5);
  const [lossBudget, setLossBudget] = useState(10);
  const [price, setPrice] = useState(0.5);
  const [side, setSide] = useState<"buy" | "sell">("buy");
  const [status, setStatus] = useState("Loading live Event Contracts...");
  const [bookMode, setBookMode] = useState<"connecting" | "live" | "fallback">("connecting");
  const [txHash, setTxHash] = useState("");
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const [category, setCategory] = useState("ALL");
  const { address } = useAccount();
  const chainId = useChainId();
  const { switchChainAsync } = useSwitchChain();
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
    let initialized = false;
    let stopLive: (() => void) | null = null;
    let fallbackTimer: number | null = null;
    const applyBook = (nextBook: UnifiedOrderBook) => {
      if (!active) return;
      setBook(nextBook);
      if (!initialized) {
        setPrice((side === "buy" ? nextBook.asks[0]?.[0] : nextBook.bids[0]?.[0]) ?? probabilityFromBook(nextBook));
        initialized = true;
      }
    };
    const refreshBook = () => getDreamBook(selected).then((nextBook) => {
      if (!active) return;
      applyBook(nextBook);
      record("info", "Book refreshed", `${nextBook.bids.length} bid and ${nextBook.asks.length} ask levels loaded from DreamDEX`);
    }).catch((error: any) => {
      if (!active) return;
      setBook({ symbol: selected.marketId, bids: [], asks: [], timestamp: Date.now(), info: {} });
      record("block", "Market snapshot", error?.message || "Order book unavailable");
    });
    const loadCandles = () => getDreamCandles(selected).then((value) => active && setCandles(value)).catch(() => active && record("info", "History unavailable", "Live book remains authoritative; candles are not indexed for this pool yet"));
    setBook(null); setCandles([]); setBookMode("connecting"); loadCandles();
    void watchDreamBook(selected, (nextBook) => { applyBook(nextBook); setBookMode("live"); setStatus("Live Somnia book connected; Safe Size updates with liquidity"); }).then((stop) => {
      if (!active) { stop(); return; }
      stopLive = stop;
      record("pass", "Live book connected", "Safe Size now recalculates from Somnia stream updates");
    }).catch(() => {
      if (!active) return;
      setBookMode("fallback");
      setStatus("Live stream unavailable; using a 10-second market snapshot fallback");
      record("info", "Live stream unavailable", "Using a 10-second DreamDEX snapshot fallback");
      refreshBook();
      fallbackTimer = window.setInterval(refreshBook, 10_000);
    });
    const candleTimer = window.setInterval(loadCandles, 60_000);
    return () => { active = false; stopLive?.(); if (fallbackTimer != null) window.clearInterval(fallbackTimer); window.clearInterval(candleTimer); };
  }, [selected?.marketId]);

  useEffect(() => {
    if (!selected || !address) { setWalletSnapshot(undefined); setWalletCheck("idle"); return; }
    let active = true;
    setWalletCheck("loading");
    setWalletSnapshot(null);
    getDreamWalletSnapshot(selected, address).then((snapshot) => { if (active) { setWalletSnapshot(snapshot); setWalletCheck("ready"); } }).catch((error) => {
      if (!active) return;
      setWalletSnapshot(null);
      setWalletCheck("error");
      record("block", "Wallet checks unavailable", error?.message || "Could not read collateral or outcome balances");
    });
    return () => { active = false; };
  }, [selected?.marketId, address]);

  useEffect(() => {
    if (!book) return;
    const top = side === "buy" ? book.asks[0]?.[0] : book.bids[0]?.[0];
    if (top != null) setPrice(top);
  }, [side]);

  const preview = useMemo(() => selected ? executionPreview(selected, book, amount, price, side, address ? walletSnapshot : undefined, { maxCost: side === "buy" ? lossBudget : undefined }) : null, [selected, book, amount, price, side, address, walletSnapshot, lossBudget]);
  const safeSize = useMemo(() => selected && walletSnapshot ? safeOrderSize(selected, book, price, side, walletSnapshot, { maxCost: side === "buy" ? lossBudget : undefined }) : 0, [selected, book, price, side, walletSnapshot, lossBudget]);
  const safeSizeConstraint = useMemo(() => {
    if (!selected || !walletSnapshot || safeSize <= 0) return "";
    const next = executionPreview(selected, book, safeSize + 0.001, price, side, walletSnapshot, { maxCost: side === "buy" ? lossBudget : undefined });
    return next.checks.filter((check) => check.status === "block").map((check) => check.label).join(" + ");
  }, [selected, book, safeSize, price, side, walletSnapshot, lossBudget]);
  const blockingChecks = preview?.checks.filter((check) => check.status === "block") || [];
  const blockedCheck = blockingChecks[0];
  const collateralBlocked = blockingChecks.length === 1 && blockedCheck?.label === "Collateral";
  const tradeBlockReason = !address
    ? "Connect a wallet to continue."
    : chainId !== DREAMDEX_CHAIN_ID
      ? null
      : !walletClient
        ? "The connected wallet signer is unavailable."
        : walletCheck === "loading"
          ? "Checking collateral and position balances on Shannon."
          : walletCheck === "error" || walletSnapshot === null
            ? "Wallet balances could not be verified. Check the wallet's Shannon RPC and refresh."
            : blockingChecks.length
              ? blockingChecks.map((check) => check.detail).join(" ")
              : !preview?.allowed ? "This order does not pass the execution policy." : null;
  const tradeButtonLabel = !address
    ? "Connect wallet to execute"
    : chainId !== DREAMDEX_CHAIN_ID
      ? "Switch to Shannon"
      : walletCheck === "loading"
        ? "Verifying wallet state"
        : collateralBlocked
          ? "Add tUSDC collateral"
          : tradeBlockReason
            ? blockingChecks.length > 1 ? `Blocked: ${blockingChecks.length} checks` : `Blocked: ${blockedCheck?.label || "wallet check"}`
            : "Sign & execute IOC";
  const midpoint = book ? probabilityFromBook(book) : 0.5;
  const quoteVolume = selected ? candleQuoteVolume(candles, selected.quoteDecimals) : 0;
  const categories = ["ALL", "CRYPTO", "SPORTS", "POLITICS", "CULTURE", "OTHER"];
  const categoryCount = (item: string) => item === "ALL" ? markets.length : markets.filter((market) => marketCategory(market) === item).length;
  const visibleMarkets = category === "ALL" ? markets : markets.filter((market) => marketCategory(market) === category);

  function chooseCategory(item: string) {
    const nextMarkets = item === "ALL" ? markets : markets.filter((market) => marketCategory(market) === item);
    setCategory(item);
    if (nextMarkets.length && !nextMarkets.some((market) => market.marketId === selected?.marketId)) setSelected(nextMarkets[0]);
  }

  async function execute() {
    if (chainId !== DREAMDEX_CHAIN_ID) {
      try { await switchChainAsync?.({ chainId: DREAMDEX_CHAIN_ID }); } catch (error: any) { setStatus(error?.shortMessage || "Switch to Shannon in your wallet to continue."); }
      return;
    }
    if (!selected || !preview || !walletClient) return;
    setStatus("Refreshing market and wallet state before signature...");
    let freshBook: UnifiedOrderBook;
    let freshWallet: WalletSnapshot | undefined;
    try {
      freshBook = await getDreamBook(selected);
      freshWallet = address ? await getDreamWalletSnapshot(selected, address) : undefined;
    } catch (error: any) {
      setStatus("Preflight failed. Refresh the market and try again.");
      record("block", "Preflight failed", error?.message || "Could not refresh live execution state");
      return;
    }
    setBook(freshBook);
    if (freshWallet) setWalletSnapshot(freshWallet);
    const freshPreview = executionPreview(selected, freshBook, amount, price, side, address ? freshWallet : undefined, { maxCost: side === "buy" ? lossBudget : undefined });
    if (!freshPreview.allowed) { setStatus("Fresh market or wallet state failed policy checks."); record("block", "Policy blocked", freshPreview.checks.find((check) => check.status === "block")?.detail || "Risk limit exceeded"); return; }
    record("pass", "Policy approved", `Fresh score ${freshPreview.score}/100; estimated fill ${((freshPreview.estimatedFill || 0) * 100).toFixed(2)}%`);
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
      record("pass", "Order receipt confirmed", `${order.status}; ${order.filled} shares filled${hash ? `; ${hash.slice(0, 10)}...` : ""}`);
      window.localStorage.setItem("sluice:last-order", String(Date.now()));
      window.dispatchEvent(new Event("sluice:order-confirmed"));
      setBook(await getDreamBook(selected));
      record("info", "Position sync", "Book refreshed; portfolio indexer will reflect the confirmed fill");
    } catch (error: any) {
      setStatus(error?.shortMessage || error?.message || "Order rejected");
      record("block", "Execution rejected", error?.shortMessage || error?.message || "Wallet or protocol rejected the order");
    }
  }

  return <div className="app dreamdex-app"><div className="bg" aria-hidden="true" />
    <section className="pitch dream-pitch"><div className="section-kicker">SLUICE MARKETS / DREAMDEX EVENT CONTRACTS</div><h1>Trade the event.<br /><em>Know the limits.</em></h1><p>Inspect the live order book, choose a limit, and review every execution check before the order reaches DreamDEX on Somnia.</p><div className="console-status"><span><i /> {status}</span><span className={`book-state ${bookMode}`}><i /> {bookMode === "live" ? "LIVE BOOK" : bookMode === "fallback" ? "SNAPSHOT FALLBACK" : "CONNECTING"}</span><span>Shannon / {DREAMDEX_CHAIN_ID}</span><span><a href={DREAMDEX_EXPLORER_URL} target="_blank" rel="noreferrer">Explorer ↗</a></span></div></section>
    <main className="grid dream-grid">
      <section className="card market-board"><div className="card-label">LIVE EVENT CONTRACTS</div><div className="market-filters" aria-label="Market categories">{categories.map((item) => <button key={item} className={category === item ? "active" : ""} disabled={categoryCount(item) === 0} onClick={() => chooseCategory(item)}>{item}<span>{categoryCount(item)}</span></button>)}</div><div className="market-list">{visibleMarkets.map((market) => <button key={market.marketId} className={`market-row ${selected?.marketId === market.marketId ? "selected" : ""}`} onClick={() => setSelected(market)}><span><b>{market.asset}</b><small>{marketLabel(market)}</small></span><strong>{minutesLeft(market.expiry)}m</strong><i>{market.status}</i></button>)}{!visibleMarkets.length && <p className="muted">No live markets in this category yet.</p>}</div><p className="market-source">The current Shannon index is crypto-only. Sports, politics, and culture filters activate automatically when DreamDEX publishes those contracts.</p></section>
      <section className="card market-detail">{selected ? <><div className="card-label">LIVE MARKET INTELLIGENCE / {selected.asset}</div><h2>{marketLabel(selected)}</h2><p className="muted">Expires {formatExpiry(selected.expiry)} · {selected.interval || "rolling"} cadence · DreamDEX indexed</p><div className="probability"><span>UP probability</span><b>{Math.round(midpoint * 100)}%</b><small>midpoint from the live DreamDEX order book</small></div><div className="market-metrics"><div><span>Spread</span><b>{preview?.spreadBps == null ? "—" : `${preview.spreadBps.toFixed(0)} bps`}</b></div><div><span>24H volume</span><b>{compactNumber(quoteVolume)}</b></div><div><span>Trades</span><b>{compactNumber(Number(selected.tradeCount || 0))}</b></div><div><span>Visible depth</span><b>{preview ? preview.visibleDepth.toFixed(2) : "—"}</b></div></div><ProbabilityChart candles={candles} decimals={selected.quoteDecimals} /><div className="book"><div><label>BIDS / BUYERS</label>{(book?.bids || []).slice(0, 5).map(([p, q]) => <p key={`${p}-${q}`}><span>{(p * 100).toFixed(1)}%</span><b>{q.toFixed(2)}</b></p>)}</div><div><label>ASKS / SELLERS</label>{(book?.asks || []).slice(0, 5).map(([p, q]) => <p key={`${p}-${q}`}><span>{(p * 100).toFixed(1)}%</span><b>{q.toFixed(2)}</b></p>)}</div></div></> : <p className="muted">Select a market.</p>}</section>
      <section className="card trade-ticket"><div className="card-label">EXECUTION POLICY / IOC ORDER</div><div className="segmented"><button className={side === "buy" ? "active" : ""} onClick={() => setSide("buy")}>Buy UP</button><button className={side === "sell" ? "active" : ""} onClick={() => setSide("sell")}>Sell UP</button></div><label>Shares<input type="number" min="0.001" max="25" step="0.001" value={amount} onChange={(event) => setAmount(Number(event.target.value))} /></label><label>Limit probability<input type="number" min="0.001" max="0.999" step="0.001" value={price} onChange={(event) => setPrice(Number(event.target.value))} /></label>{side === "buy" && <label>Maximum downside (tUSDC)<input type="number" min="0.001" step="0.001" value={lossBudget} onChange={(event) => setLossBudget(Math.max(0, Number(event.target.value)))} /></label>}{safeSize > 0 && <div className="safe-size"><div><span>{side === "buy" ? "DOWNSIDE-CAPPED SAFE SIZE" : "SAFE EXIT SIZE"}</span><b>{safeSize.toFixed(3)} shares</b><small>{safeSizeConstraint ? `Bound by ${safeSizeConstraint}. ` : ""}Rechecked against the live book before signing.</small></div><button className="ghost" type="button" onClick={() => setAmount(safeSize)}>Use safe size</button></div>}{preview && <><div className="execution-estimate"><div><span>Expected fill</span><b>{preview.estimatedFill == null ? "NOT FILLABLE" : `${(preview.estimatedFill * 100).toFixed(2)}%`}</b></div><div><span>Estimated cost</span><b>{preview.estimatedCost == null ? "—" : preview.estimatedCost.toFixed(3)}</b></div><div><span>Price impact</span><b>{preview.slippageBps == null ? "—" : `${preview.slippageBps.toFixed(0)} bps`}</b></div></div><div className={`decision ${preview.allowed ? "allow" : "block"}`}><strong>{preview.allowed ? "APPROVED" : "BLOCKED"}</strong><span>Risk score {preview.score}/100</span>{preview.checks.map((check) => <small className={`check-${check.status}`} key={check.label}><i>{check.status === "pass" ? "✓" : check.status === "warn" ? "!" : "×"}</i><span><b>{check.label}</b>{check.detail}</span></small>)}</div></>}<p className="muted small approval-note">{side === "buy" ? "DreamDEX may request a maximum ERC-20 collateral allowance before this order." : "DreamDEX may request a one-time ERC-6909 outcome-token operator approval before this order."} Review the spender and permissions in your wallet.</p><p className="testnet-assets">Need Shannon gas? <a href={SOMNIA_TESTNET_FAUCET_URL} target="_blank" rel="noreferrer">Open the official Somnia faucet ↗</a><small>Buy orders also require DreamDEX tUSDC in this wallet.</small></p>{tradeBlockReason && chainId === DREAMDEX_CHAIN_ID && <p className="trade-block-reason" role="status">{tradeBlockReason}</p>}<button className="primary big" disabled={!address || (chainId === DREAMDEX_CHAIN_ID && Boolean(tradeBlockReason))} onClick={execute}>{tradeButtonLabel}</button>{txHash && <a className="text-link" href={`${DREAMDEX_EXPLORER_URL}/tx/${txHash}`} target="_blank" rel="noreferrer">View confirmed transaction ↗</a>}</section>
      <section className="card execution-trail"><div className="card-label">VERIFIABLE EXECUTION TRAIL</div><h2>From market snapshot to on-chain result</h2>{trail.length ? <div className="trail-list">{trail.map((item, index) => <div className={`trail-item ${item.state}`} key={`${item.at}-${index}`}><i /><span><b>{item.label}</b><small>{item.detail}</small></span><time>{item.at}</time></div>)}</div> : <p className="muted">Select a market to begin the live audit trail. Policy decisions and wallet outcomes appear here.</p>}</section>
    </main><footer className="foot"><Link to="/portfolio">Open portfolio</Link> · Market context is advisory; deterministic policy and Somnia transactions are authoritative.</footer>
  </div>;
}
