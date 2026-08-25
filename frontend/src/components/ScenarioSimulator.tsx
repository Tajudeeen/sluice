import { ethers } from "ethers";
import {
  GATE_ADDRESS, shortAddr,
} from "../sluice";
import DecisionBreakdown from "./DecisionBreakdown";
import { project, type Projection } from "../lib/projection";
import { ATTACK_AMOUNT, DEMO_ATTACKER_ADDRESS } from "../demoAttack";

// ScenarioSimulator: the demo centerpiece (spec §25).
//
// This is a read-only projection for public browser users. The corresponding
// transaction-writing Worker route is operator-only and disabled by default.
//
// It only ever moves synthetic SLUSD to a fixed, never-funded target. It can
// never target arbitrary addresses (see §28: "Never allow arbitrary simulation
// targets").
export default function ScenarioSimulator({ pool }: { pool: { holders: { address: string; balance: bigint; pct: number }[]; totalSupply: bigint } }) {
  const target = [...pool.holders]
    .filter((holder) => holder.balance > 0n && holder.address.toLowerCase() !== DEMO_ATTACKER_ADDRESS.toLowerCase() && holder.address.toLowerCase() !== GATE_ADDRESS.toLowerCase())
    .sort((a, b) => a.balance === b.balance ? 0 : a.balance > b.balance ? -1 : 1)[0]?.address || "";

  // Compute the projected-state preview from REAL current on-chain holdings.
  const preview: Projection = pool.totalSupply > 0n
    ? project(pool.holders as any, pool.totalSupply, "TRANSFER", DEMO_ATTACKER_ADDRESS, target, ATTACK_AMOUNT)
    : (null as any);

  return (
    <section className="card simulator">
      <div className="card-label">ADVERSARIAL TEST / FIXED TARGET</div>
      <h2>Concentration breach test</h2>
      <p className="muted">
        Projects a predefined synthetic transfer against the current holder set.
        The concentration crosses a hard limit; executing the on-chain proof is operator-only.
      </p>
      <div className="sim-grid">
        <div className="sim-controls">
          <div className="sim-params">
            <div><span>Proposed action</span><b>{ethers.formatUnits(ATTACK_AMOUNT, 18)} SLUSD transfer</b></div>
            <div><span>From</span><b>{shortAddr(DEMO_ATTACKER_ADDRESS)} (synthetic demo attacker)</b></div>
            <div><span>To</span><b>{shortAddr(target)} (live largest holder)</b></div>
          </div>
          <button className="danger big" disabled>
            Breach test operator-only
          </button>
          <p className="muted small">The transaction-writing endpoint is disabled for public browser callers.</p>
        </div>
        {preview && (
          <div className="sim-viz">
            <DecisionBreakdown proj={preview} breach={preview.projHhi >= 0.35 || preview.projLargest >= 50} />
          </div>
        )}
      </div>
    </section>
  );
}
