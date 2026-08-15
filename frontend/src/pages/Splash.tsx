import { Link } from "react-router-dom";
import { SLUICE_META } from "../sluice";

// Landing / splash page. Hero + the core promise + entry points into the app.
export default function Splash() {
  return (
    <div className="splash">
      <div className="bg" aria-hidden="true">
        <div className="orb o1" />
        <div className="orb o2" />
        <div className="orb o3" />
      </div>

      <section className="hero-splash">
        <div className="eyebrow">AI-native · on-chain · BOT Chain</div>
        <h1>
          <span className="grad-text">Sluice</span>: the execution firewall
          <br /> for tokenized assets.
        </h1>
        <p className="lede">
          Every transfer or redemption of <b>{SLUICE_META.assetSymbol}</b> is{" "}
          <b>locked first, evaluated second, settled last</b>. A deterministic risk
          engine and an AI contextual layer score the move; an authorized attester
          releases only what is safe. There is no bypass: the chain is the final
          authority.
        </p>
        <div className="cta-row">
          <Link to="/firewall" className="primary big">
            Open the Firewall →
          </Link>
          <Link to="/how" className="ghost big">
            How it works
          </Link>
        </div>
        <div className="trust">
          <span>● Lock → Attest → Settle</span>
          <span>● Deterministic hard blocks</span>
          <span>● Timeout refunds if agent is down</span>
        </div>
      </section>

      <section className="pillars">
        <Pillar
          k="01"
          t="Locked, not sent"
          d="Funds are escrowed in the gate the instant a request opens. The token itself rejects direct transfers: only the firewall moves supply."
        />
        <Pillar
          k="02"
          t="Evaluated by AI + math"
          d="HHI concentration, post-redemption liquidity, and anomaly windows feed a transparent scoring policy. An LLM contextual layer may flag, never override a hard block."
        />
        <Pillar
          k="03"
          t="Attested on-chain"
          d="The authorized attester signs an EIP-712 attestation. The gate re-verifies signature, replay, expiry, and state before it releases or refunds."
        />
      </section>

      <section className="band">
        <h2>Why a firewall, not a multisig?</h2>
        <p>
          Multisigs gate <i>who</i> can act. Sluice gates <i>what</i> may happen -
          per transaction, against live pool state, with policy you can read in one
          file. It stops a compromised key or a reckless signer from concentrating
          supply or draining liquidity, even if they hold the keys.
        </p>
        <Link to="/firewall" className="primary">
          See it live
        </Link>
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
