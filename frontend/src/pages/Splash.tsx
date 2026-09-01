import { Link } from "react-router-dom";

export default function Splash() {
  return <div className="splash"><div className="bg" aria-hidden="true" />
    <section className="hero-splash">
      <div className="hero-copy">
        <div className="eyebrow"><span>Prediction market execution</span><span>DreamDEX · Somnia</span></div>
        <h1>Trade the signal.<br /><em>Control the risk.</em></h1>
        <p className="lede">Set the most tUSDC you can lose. Sluice converts that downside budget into the largest DreamDEX order your wallet and the live market can support.</p>
        <div className="category-chips" aria-label="Product capabilities"><span>Downside-capped sizing</span><span>Live order books</span><span>On-chain settlement</span></div>
        <div className="cta-row"><Link to="/markets" className="primary big">Open live markets <span>↗</span></Link><Link to="/portfolio" className="ghost big">View portfolio</Link><a href="https://youtu.be/5AdKiUbXddY?si=OZHcCCkT89VLRpC6" target="_blank" rel="noreferrer" className="ghost big">Watch demo <span>↗</span></a></div>
      </div>
      <div className="hero-diagram" aria-label="Sluice Markets execution sequence">
        <div className="diagram-head"><span>EVENT ORDER / SHANNON</span><b>POLICY-CONTROLLED</b></div>
        <div className="diagram-route"><div className="diagram-node"><span>01</span><b>DISCOVER</b><small>Live DreamDEX book</small></div><div className="diagram-line"><i /></div><div className="diagram-node active"><span>02</span><b>CHECK</b><small>Depth + execution risk</small></div><div className="diagram-line"><i /></div><div className="diagram-node"><span>03</span><b>EXECUTE</b><small>IOC order on Somnia</small></div></div>
        <div className="diagram-result"><span>DATA INFORMS</span><b>POLICY DECIDES</b></div>
      </div>
    </section>
    <section className="proof-strip"><span>LIVE EVENT CONTRACTS</span><span>DETERMINISTIC HARD BLOCKS</span><span>WALLET-SIGNED IOC ORDERS</span><span>ON-CHAIN SETTLEMENT</span></section>
    <section className="pillars"><Pillar k="01" t="See the real market" d="Discover active binary markets, probability, expiry, spread, depth, and liquidity directly through the DreamDEX SDK." /><Pillar k="02" t="Cap the downside" d="State a maximum tUSDC loss and get the largest order that also passes wallet, liquidity, impact, and exposure limits." /><Pillar k="03" t="Keep execution honest" d="Market data informs the decision but cannot override hard limits. Approved orders execute on DreamDEX and settle through Event Contracts." /></section>
    <section className="band"><div className="band-index">WHY / 01</div><h2>One interface.<br />Trading plus analytics.</h2><p>Users can discover opportunities, measure execution quality, bound the downside, and verify the resulting position on-chain without leaving the product.</p><Link to="/markets" className="text-link">Inspect live Event Contracts <span>→</span></Link></section>
    <section className="trust-band"><div className="trust-inner"><div className="section-kicker">SLUICE / SOMNIA SHANNON</div><h2>Markets people can<br /><em>verify before they trade.</em></h2><p>Every quote, policy decision, wallet signature, and fill has a place in the trail. Explore the live book and see what the protocol will accept before you commit.</p><div className="cta-row"><Link to="/markets" className="primary big">Launch live terminal <span>→</span></Link><a href="https://youtu.be/5AdKiUbXddY?si=OZHcCCkT89VLRpC6" target="_blank" rel="noreferrer" className="ghost big trust-ghost">Watch demo <span>→</span></a></div></div></section>
    <footer className="site-footer"><div className="site-footer-top"><div className="site-footer-brand"><div className="footer-brandline"><span className="logo-mark" aria-hidden="true"><i /><i /><i /></span><span>SLUICE MARKETS</span></div><p>Policy-controlled trading for DreamDEX Event Contracts on Somnia Shannon.</p></div><div className="site-footer-links"><div><small>Product</small><Link to="/markets">Live markets</Link><Link to="/portfolio">Portfolio</Link><Link to="/how">How it works</Link><a href="https://github.com/Tajudeeen/sluice/blob/main/docs/BUILD.md" target="_blank" rel="noreferrer">Build docs</a></div><div><small>Network</small><a href="https://shannon-explorer.somnia.network" target="_blank" rel="noreferrer">Shannon explorer</a><span>Chain 50312</span><span>DreamDEX SDK</span></div></div></div><div className="site-footer-bottom"><span>© 2026 Sluice Markets</span><span>Market data is context. Somnia is the authority.</span></div></footer>
  </div>;
}

function Pillar({ k, t, d }: { k: string; t: string; d: string }) { return <div className="pillar"><div className="pillar-k">{k}</div><div className="pillar-t">{t}</div><div className="pillar-d">{d}</div></div>; }
