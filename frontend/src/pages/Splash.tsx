import { Link } from "react-router-dom";

export default function Splash() {
  return <div className="splash"><div className="bg" aria-hidden="true" />
    <section className="hero-splash">
      <div className="hero-copy">
        <div className="eyebrow"><span>Prediction market execution</span><span>DreamDEX · Somnia</span></div>
        <h1>Trade the signal.<br /><em>Control the risk.</em></h1>
        <p className="lede">Sluice Markets is both a consumer trading application and a live market analytics layer for DreamDEX Event Contracts. Every proposed order passes deterministic exposure, liquidity, price, and expiry controls before it reaches your wallet.</p>
        <div className="category-chips" aria-label="Hackathon categories"><span>Consumer trading app</span><span>Market analytics</span><span>Event Contracts</span></div>
        <div className="cta-row"><Link to="/markets" className="primary big">Open live markets <span>↗</span></Link><Link to="/portfolio" className="ghost big">View portfolio</Link></div>
      </div>
      <div className="hero-diagram" aria-label="Sluice Markets execution sequence">
        <div className="diagram-head"><span>EVENT ORDER / SHANNON</span><b>POLICY-CONTROLLED</b></div>
        <div className="diagram-route"><div className="diagram-node"><span>01</span><b>DISCOVER</b><small>Live DreamDEX book</small></div><div className="diagram-line"><i /></div><div className="diagram-node active"><span>02</span><b>CHECK</b><small>Depth + execution risk</small></div><div className="diagram-line"><i /></div><div className="diagram-node"><span>03</span><b>EXECUTE</b><small>IOC order on Somnia</small></div></div>
        <div className="diagram-result"><span>DATA INFORMS</span><b>POLICY DECIDES</b></div>
      </div>
    </section>
    <section className="proof-strip"><span>LIVE EVENT CONTRACTS</span><span>DETERMINISTIC HARD BLOCKS</span><span>WALLET-SIGNED IOC ORDERS</span><span>ON-CHAIN SETTLEMENT</span></section>
    <section className="pillars"><Pillar k="01" t="See the real market" d="Discover active binary markets, probability, expiry, spread, depth, and liquidity directly through the DreamDEX SDK." /><Pillar k="02" t="Preview the outcome" d="Every order is scored for size, spread, fillable depth, tail pricing, price impact, and time-to-expiry before signing." /><Pillar k="03" t="Keep execution honest" d="Market data informs the decision but cannot override hard limits. Approved orders execute on DreamDEX and settle through Event Contracts." /></section>
    <section className="band"><div className="band-index">WHY / 01</div><h2>One interface.<br />Trading plus analytics.</h2><p>Users can discover opportunities, measure execution quality, bound the downside, and verify the resulting position on-chain without leaving the product.</p><Link to="/markets" className="text-link">Inspect live Event Contracts <span>→</span></Link></section>
  </div>;
}

function Pillar({ k, t, d }: { k: string; t: string; d: string }) { return <div className="pillar"><div className="pillar-k">{k}</div><div className="pillar-t">{t}</div><div className="pillar-d">{d}</div></div>; }
