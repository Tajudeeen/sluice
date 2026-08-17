import { Link } from "react-router-dom";
import { SLUICE_META, NETWORK_TAG } from "../sluice";

// Landing / splash page. Hero + the core promise + entry points into the app.
export default function Splash() {
  return (
    <div className="splash">
      <div className="bg" aria-hidden="true" />

      <section className="hero-splash">
        <div className="hero-copy">
          <div className="eyebrow"><span>Execution control</span><span>{NETWORK_TAG}</span></div>
          <h1>Stop unsafe token movement <em>before</em> it settles.</h1>
          <p className="lede">
            {SLUICE_META.assetSymbol} cannot move around the gate. Every transfer is escrowed,
            checked against live pool state, then released or refunded by policy.
          </p>
          <div className="cta-row">
            <Link to="/firewall" className="primary big">Open control room <span>↗</span></Link>
            <Link to="/how" className="ghost big">Read the protocol</Link>
          </div>
        </div>

        <div className="hero-diagram" aria-label="Sluice settlement sequence">
          <div className="diagram-head"><span>TRANSFER / 00421</span><b>POLICY GATE</b></div>
          <div className="diagram-route">
            <div className="diagram-node"><span>01</span><b>LOCK</b><small>Funds enter escrow</small></div>
            <div className="diagram-line"><i /></div>
            <div className="diagram-node active"><span>02</span><b>CHECK</b><small>Projected state tested</small></div>
            <div className="diagram-line"><i /></div>
            <div className="diagram-node"><span>03</span><b>SETTLE</b><small>Release or refund</small></div>
          </div>
          <div className="diagram-result"><span>HARD LIMITS</span><b>ENFORCED ON-CHAIN</b></div>
        </div>
      </section>

      <section className="proof-strip">
        <span>NO DIRECT TRANSFERS</span>
        <span>NONCE-BOUND ATTESTATIONS</span>
        <span>TIMEOUT REFUNDS</span>
        <span>DETERMINISTIC HARD BLOCKS</span>
      </section>

      <section className="pillars">
        <Pillar
          k="01"
          t="Mandatory route"
          d="The asset rejects direct transfers. Every movement must enter Sluice escrow first."
        />
        <Pillar
          k="02"
          t="Projected, not guessed"
          d="Concentration, holder share, liquidity, and request patterns are tested against the state that would exist after settlement."
        />
        <Pillar
          k="03"
          t="Chain has final say"
          d="The gate verifies signer, nonce, expiry, and request state before it releases funds. Off-chain services never custody value."
        />
      </section>

      <section className="band">
        <div className="band-index">WHY / 01</div>
        <h2>A multisig controls the signer.<br />Sluice controls the outcome.</h2>
        <p>Keys can be compromised. Approvals can be reckless. Sluice checks each requested outcome against live pool constraints before value leaves escrow.</p>
        <Link to="/firewall" className="text-link">Inspect the live gate <span>→</span></Link>
      </section>
    </div>
  );
}

function Pillar({ k, t, d }: { k: string; t: string; d: string }) {
  return (
    <div className="pillar">
      <div className="pillar-k">{k}</div>
      <div className="pillar-t">{t}</div>
      <div className="pillar-d">{d}</div>
    </div>
  );
}
