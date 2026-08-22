import { Link } from "react-router-dom";

export default function How() {
  return <div className="app how"><div className="bg" aria-hidden="true" />
    <section className="pitch">
      <div className="section-kicker">DREAMDEX / SYSTEM ARCHITECTURE</div>
      <h1>Markets move.<br /><em>Policy controls.</em></h1>
      <p>Sluice Markets adds an inspectable risk and execution layer around DreamDEX Event Contracts without replacing DreamDEX as the trading or settlement authority.</p>
      <div className="console-status"><span><i /> Somnia Shannon</span><span>Event Contracts SDK</span><span>Wallet-authorized execution</span></div>
    </section>
    <main className="grid how-grid">
      <section className="card"><div className="card-label">ORDER FLOW</div><ol className="flow">
        <li><b>Discover.</b> Load active binary Event Contracts and their lifecycle metadata from the DreamDEX indexer.</li>
        <li><b>Inspect.</b> Read the current UP/Down order book, probability, spread, depth, liquidity, and expiry.</li>
        <li><b>Propose.</b> A user or automated strategy selects the outcome, size, and executable limit for a potential order.</li>
        <li><b>Control.</b> Deterministic limits evaluate size, spread, fillable depth, price impact, tail pricing, and time-to-expiry.</li>
        <li><b>Execute.</b> Approved orders are signed by the connected wallet and submitted as DreamDEX IOC orders on Somnia.</li>
      </ol></section>
      <section className="card"><div className="card-label">CONTROL MODEL</div><p className="muted">Live book data provides context. It cannot override a deterministic block or create a transaction without the wallet.</p><div className="bands"><div className="band-row"><span className="badge s1">PASS</span> Order can reach the wallet signer</div><div className="band-row"><span className="badge s0">REVIEW</span> User sees elevated risk before signing</div><div className="band-row"><span className="badge s2">BLOCK</span> Execution control remains disabled</div></div><p className="muted small">The final transaction, position accounting, market resolution, and redemption state are all sourced from DreamDEX Event Contracts.</p></section>
      <section className="card wide"><div className="card-label">WHY SOMNIA + DREAMDEX</div><div className="invariants"><Inv t="Live markets" d="Real binary Event Contracts, not locally mocked outcomes." /><Inv t="Fast execution" d="Somnia provides high-throughput EVM execution for interactive trading." /><Inv t="Transparent risk" d="Every policy reason is visible before the wallet signature." /><Inv t="On-chain authority" d="DreamDEX owns order matching, positions, resolution, and redemption." /></div><Link to="/markets" className="primary">Open Event Contracts</Link></section>
    </main><footer className="foot">Powered by DreamDEX Event Contracts on Somnia Shannon.</footer>
  </div>;
}

function Inv({ t, d }: { t: string; d: string }) { return <div className="inv"><div className="inv-t">{t}</div><div className="inv-d">{d}</div></div>; }
