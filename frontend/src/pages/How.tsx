import { Link } from "react-router-dom";
import { SLUICE_META } from "../sluice";

// Explainer page: the lifecycle, the risk model, and the security invariants.
export default function How() {
  return (
    <div className="app how">
      <div className="bg" aria-hidden="true" />
      <section className="pitch">
        <div className="section-kicker">PROTOCOL / SYSTEM DESIGN</div>
        <h1>Nothing moves around the gate.</h1>
        <p>
          {SLUICE_META.assetSymbol} is a synthetic gated asset. Its contract rejects direct transfers;
          only SluiceGate can move supply. That makes policy enforcement structural rather than optional.
        </p>
      </section>

      <main className="grid how-grid">
        <section className="card">
          <h2>1 · The lifecycle</h2>
          <ol className="flow">
            <li><b>Lock.</b> A user calls <code>requestTransfer</code> / <code>requestRedeem</code> on the gate. The amount is pulled into escrow and the request becomes <span className="badge s0">PENDING</span>.</li>
            <li><b>Evaluate.</b> The off-chain attester agent watches the gate, builds a holder-distribution snapshot, and runs the scoring engine.</li>
            <li><b>Attest.</b> The agent signs an EIP-712 attestation (approve / block) with the authorized attester key.</li>
            <li><b>Settle.</b> The gate re-verifies the signature, replay, expiry, and state, then <span className="badge s1">APPROVES</span> (release) or <span className="badge s2">BLOCKS</span> (refund).</li>
            <li><b>Safety net.</b> If the agent is offline past <code>timeout</code>, anyone may call <code>timeoutRelease</code> to refund the requester.</li>
          </ol>
        </section>

        <section className="card">
          <h2>2 · The risk model</h2>
          <p className="muted">Three weighted, BigInt-safe component scores feed one policy. All thresholds live in one config file.</p>
          <div className="table-scroll">
          <table className="model">
            <thead><tr><th>Component</th><th>Weight</th><th>Measures</th></tr></thead>
            <tbody>
              <tr><td>Concentration</td><td>40</td><td>Herfindahl-Hirschman Index (HHI) + largest-holder %</td></tr>
              <tr><td>Liquidity</td><td>35</td><td>post-redemption liquidity ratio (redemptions burn supply)</td></tr>
              <tr><td>Anomaly</td><td>25</td><td>sliding window: large amount, burst, repeated requester</td></tr>
            </tbody>
          </table>
          </div>
          <div className="bands">
            <div className="band-row"><span className="badge s1">0–39</span> APPROVE: policy passes</div>
            <div className="band-row"><span className="badge s0">40–69</span> REVIEW: contextual review may flag</div>
            <div className="band-row"><span className="badge s2">70–100</span> BLOCK</div>
          </div>
          <p className="muted small">
            <b>Hard blocks</b> (deterministic and non-overridable): projected HHI ≥ 0.35, projected
            largest holder ≥ 50%, post-redemption liquidity &lt; 20%, or anomaly ≥ 85.
          </p>
        </section>

        <section className="card wide">
          <h2>3 · Why it is safe</h2>
          <div className="invariants">
            <Inv t="Off-chain is advisory" d="The agent never holds funds. The gate re-verifies every attestation on-chain." />
            <Inv t="No bypass" d="The asset rejects direct transfers; the gate is the only mover." />
            <Inv t="Replay-guarded" d="Attestations are nonce-bound, expiry-bound, and state-checked before settlement." />
            <Inv t="Dead-man switch" d="Timeout release guarantees users are refunded if the agent goes dark." />
          </div>
          <p className="muted small">
            Note: v1 uses a single owner-controlled attester (the registry upgrade path to an N-of-M
            quorum is isolated by design). {SLUICE_META.assetName} is synthetic and not a real-world asset.
          </p>
          <Link to="/firewall" className="primary">Open the firewall</Link>
        </section>
      </main>

      <footer className="foot">
        <span>Sluice: synthetic demo. The blockchain is the final enforcement point.</span>
      </footer>
    </div>
  );
}

function Inv({ t, d }: { t: string; d: string }) {
  return (<div className="inv"><div className="inv-t">{t}</div><div className="inv-d">{d}</div></div>);
}
