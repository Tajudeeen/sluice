import { Link } from "react-router-dom";

export default function How() {
  return <div className="app how"><div className="bg" aria-hidden="true" />
    <section className="pitch">
      <div className="section-kicker">DREAMDEX / SYSTEM ARCHITECTURE</div>
      <h1>Markets move.<br /><em>Policy controls.</em></h1>
      <p>Sluice Markets turns a trader's maximum downside into a policy-valid DreamDEX order without replacing DreamDEX as the trading or settlement authority.</p>
      <div className="console-status"><span><i /> Somnia Shannon</span><span>Event Contracts SDK</span><span>Wallet-authorized execution</span></div>
    </section>
    <main className="grid how-grid">
      <section className="card"><div className="card-label">ORDER FLOW</div><ol className="flow">
        <li><b>Discover.</b> Load active binary Event Contracts and their lifecycle metadata from the DreamDEX indexer.</li>
        <li><b>Inspect.</b> Read the current UP/Down order book, probability, spread, depth, liquidity, and expiry.</li>
        <li><b>Budget.</b> The trader sets the maximum tUSDC they are willing to lose if the selected outcome resolves against them.</li>
        <li><b>Size.</b> Safe Size finds the largest three-decimal order within that budget, live depth, impact, exposure, and collateral limits.</li>
        <li><b>Control.</b> The same limits run again against fresh market and wallet state immediately before the signature.</li>
        <li><b>Execute.</b> Approved orders are signed by the connected wallet and submitted as DreamDEX IOC orders on Somnia.</li>
      </ol></section>
      <section className="card"><div className="card-label">CONTROL MODEL</div><p className="muted">Live book data provides context. It cannot override a deterministic block or create a transaction without the wallet.</p><div className="bands"><div className="band-row"><span className="badge s1">PASS</span> Order can reach the wallet signer</div><div className="band-row"><span className="badge s0">REVIEW</span> User sees elevated risk before signing</div><div className="band-row"><span className="badge s2">BLOCK</span> Execution control remains disabled</div></div><p className="muted small">The final transaction, position accounting, market resolution, and redemption state are all sourced from DreamDEX Event Contracts.</p></section>
      <section className="card wide"><div className="card-label">WHY SOMNIA + DREAMDEX</div><div className="invariants"><Inv t="Bounded downside" d="A tUSDC loss budget is compiled into an executable order size." /><Inv t="Live constraints" d="Depth, impact, collateral, and exposure determine the current maximum." /><Inv t="Fresh preflight" d="Safe Size is recalculated by the authoritative checks before signing." /><Inv t="On-chain authority" d="DreamDEX owns order matching, positions, resolution, and redemption." /></div><Link to="/markets" className="primary">Open Event Contracts</Link></section>
    </main><footer className="foot">Powered by DreamDEX Event Contracts on Somnia Shannon.</footer>
  </div>;
}

function Inv({ t, d }: { t: string; d: string }) { return <div className="inv"><div className="inv-t">{t}</div><div className="inv-d">{d}</div></div>; }
