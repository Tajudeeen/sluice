import { useState } from "react";
import { ethers } from "ethers";
import {
  GATE_ADDRESS, ASSET_ADDRESS, AGENT_PROCESS_URL,
  shortAddr, explorerTx,
} from "../sluice";
import DecisionBreakdown from "./DecisionBreakdown";
import { project, type Projection } from "../lib/projection";
import { ATTACK_AMOUNT, DEMO_ATTACKER_ADDRESS } from "../demoAttack";

// ScenarioSimulator: the demo centerpiece (spec §25).
//
// IMPORTANT (honesty rule): this does NOT simulate in frontend state. It uses a
// SYNTHETIC, predefined demo-attacker wallet (Hardhat test account #1: no real
// funds, only synthetic SLUSD) to originate a REAL on-chain requestTransfer
// through the live gate. The attester agent then evaluates it and the gate
// produces a REAL BLOCK, verifiable on-chain via the explorer link.
//
// It only ever moves synthetic SLUSD to a fixed, never-funded target. It can
// never target arbitrary addresses (see §28: "Never allow arbitrary simulation
// targets").
export default function ScenarioSimulator({ pool }: { pool: { holders: { address: string; balance: bigint; pct: number }[]; totalSupply: bigint } }) {
  const [busy, setBusy] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const target = [...pool.holders]
    .filter((holder) => holder.balance > 0n && holder.address.toLowerCase() !== DEMO_ATTACKER_ADDRESS.toLowerCase() && holder.address.toLowerCase() !== GATE_ADDRESS.toLowerCase())
    .sort((a, b) => a.balance === b.balance ? 0 : a.balance > b.balance ? -1 : 1)[0]?.address || "";

  // Compute the projected-state preview from REAL current on-chain holdings.
  const preview: Projection = pool.totalSupply > 0n
    ? project(pool.holders as any, pool.totalSupply, "TRANSFER", DEMO_ATTACKER_ADDRESS, target, ATTACK_AMOUNT)
    : (null as any);

  async function run() {
    setError(null); setNotice(null); setTxHash(null); setBusy(true);
    try {
      if (!GATE_ADDRESS || !ASSET_ADDRESS) throw new Error("Contracts not configured in this build.");
      if (!AGENT_PROCESS_URL) throw new Error("Hosted demo endpoint is not configured.");
      const response = await fetch(`${AGENT_PROCESS_URL.replace(/\/$/, "")}/demo/attack`, { method: "POST" });
      const body = await response.json() as { requestHash?: string; error?: string; status?: string; requestId?: number };
      if (!response.ok) throw new Error(body.error || "Attack simulation failed.");
      if (body.status === "already-run") setNotice(`Existing breach proof loaded (request #${body.requestId ?? "-"}).`);
      setTxHash(body.requestHash || null);
    } catch (err: any) {
      setError(err?.shortMessage || err?.message || "Attack simulation failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="card simulator">
      <div className="card-label">ADVERSARIAL TEST / FIXED TARGET</div>
      <h2>Concentration breach test</h2>
      <p className="muted">
        Sends a predefined synthetic transfer through the same on-chain route as any other request.
        The projected holder concentration crosses a hard limit, so the gate should return a verifiable block.
      </p>
      <div className="sim-grid">
        <div className="sim-controls">
          <div className="sim-params">
            <div><span>Proposed action</span><b>{ethers.formatUnits(ATTACK_AMOUNT, 18)} SLUSD transfer</b></div>
            <div><span>From</span><b>{shortAddr(DEMO_ATTACKER_ADDRESS)} (synthetic demo attacker)</b></div>
            <div><span>To</span><b>{shortAddr(target)} (live largest holder)</b></div>
          </div>
          <button className="danger big" onClick={run} disabled={busy || !pool.totalSupply || !target}>
            {busy ? "Executing on-chain…" : "Run breach test"}
          </button>
          {txHash && <p className="ok"><a href={explorerTx(txHash)} target="_blank" rel="noreferrer">Open transaction ↗</a></p>}
          {notice && <p className="ok">{notice}</p>}
          {error && <p className="err">{error}</p>}
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
