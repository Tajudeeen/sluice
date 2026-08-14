import { useState } from "react";
import { ethers } from "ethers";
import {
  GATE_ADDRESS, GATE_ABI, ASSET_ADDRESS, ASSET_ABI,
  RPC_URL, shortAddr, explorerTx,
} from "../sluice";
import DecisionBreakdown from "./DecisionBreakdown";
import { project, type Projection } from "../lib/projection";
import { ATTACK_AMOUNT, DEMO_ATTACK_TARGET, DEMO_ATTACKER_ADDRESS } from "../demoAttack";

// ScenarioSimulator — the demo centerpiece (spec §25).
//
// IMPORTANT (honesty rule): this does NOT simulate in frontend state. It uses a
// SYNTHETIC, predefined demo-attacker wallet (Hardhat test account #1 — no real
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
  const [error, setError] = useState<string | null>(null);

  // Compute the projected-state preview from REAL current on-chain holdings.
  const preview: Projection = pool.totalSupply > 0n
    ? project(pool.holders as any, pool.totalSupply, "TRANSFER", DEMO_ATTACKER_ADDRESS, DEMO_ATTACK_TARGET, ATTACK_AMOUNT)
    : (null as any);

  async function run() {
    setError(null); setTxHash(null); setBusy(true);
    try {
      const key = import.meta.env.VITE_DEMO_ATTACKER_KEY as string;
      if (!key) throw new Error("Demo-attacker key not in this build. Rebuild with VITE_DEMO_ATTACKER_KEY from scripts/deploy.ts output.");
      if (!GATE_ADDRESS || !ASSET_ADDRESS) throw new Error("Contracts not configured in this build.");
      const wallet = new ethers.Wallet(key, new ethers.JsonRpcProvider(RPC_URL));
      const asset = new ethers.Contract(ASSET_ADDRESS, ASSET_ABI, wallet);
      const gate = new ethers.Contract(GATE_ADDRESS, GATE_ABI, wallet);

      // 1) attacker approves the gate
      const ap = await asset.approve(GATE_ADDRESS, ATTACK_AMOUNT);
      await ap.wait();
      // 2) attacker requests the transfer -> REAL on-chain lock + RequestCreated
      const tx = await gate.requestTransfer(DEMO_ATTACK_TARGET, ATTACK_AMOUNT);
      const receipt = await tx.wait();
      setTxHash(receipt.hash);
    } catch (err: any) {
      setError(err?.shortMessage || err?.message || "Attack simulation failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="card simulator">
      <h2>⚠ Concentration-attack simulator</h2>
      <p className="muted">
        Runs the <b>actual</b> Sluice pipeline: a synthetic demo attacker (predefined wallet, synthetic SLUSD only)
        sends a large transfer that would push the pool past the concentration hard-block. This is a REAL on-chain
        request — the resulting BLOCK is verifiable in the explorer, not faked in the UI.
      </p>
      <div className="sim-grid">
        <div className="sim-controls">
          <div className="sim-params">
            <div><span>Proposed action</span><b>{ethers.formatUnits(ATTACK_AMOUNT, 18)} SLUSD transfer</b></div>
            <div><span>From</span><b>{shortAddr(DEMO_ATTACKER_ADDRESS)} (synthetic demo attacker)</b></div>
            <div><span>To</span><b>{shortAddr(DEMO_ATTACK_TARGET)} (fixed target)</b></div>
          </div>
          <button className="danger big" onClick={run} disabled={busy || !pool.totalSupply}>
            {busy ? "Executing on-chain…" : "Simulate Concentration Attack"}
          </button>
          {txHash && <p className="ok"><a href={explorerTx(txHash)} target="_blank" rel="noreferrer">Attack tx ↗ — agent will BLOCK it</a></p>}
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
