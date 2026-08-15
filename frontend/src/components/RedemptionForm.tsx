import { useState } from "react";
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { ethers } from "ethers";
import { ASSET_ABI, GATE_ABI, GATE_ADDRESS, ASSET_ADDRESS } from "../sluice";

// RedemptionForm: request a REDEMPTION through the firewall (spec §22).
// Redeems (burns) SLUSD, shrinking pool liquidity; the agent may hard-block
// if projected post-redemption liquidity falls below the safety floor.
export default function RedemptionForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const { isConnected, address } = useAccount();
  const { writeContract, data: txHash, isPending } = useWriteContract();
  const { isLoading: txMining } = useWaitForTransactionReceipt({ hash: txHash });
  const [amount, setAmount] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null); setNotice(null);
    if (!isConnected || !address) { setError("Connect your wallet first."); return; }
    if (!GATE_ADDRESS || !ASSET_ADDRESS) { setError("Contracts not configured."); return; }
    let amt: bigint;
    try { amt = ethers.parseUnits(amount || "0", 18); } catch { setError("Invalid amount."); return; }
    if (amt <= 0n) { setError("Amount must be > 0."); return; }
    try {
      writeContract({ address: ASSET_ADDRESS as `0x${string}`, abi: ASSET_ABI, functionName: "approve", args: [GATE_ADDRESS as `0x${string}`, amt] });
      setNotice("1/2: approving the gate…");
      setTimeout(() => {
        writeContract({ address: GATE_ADDRESS as `0x${string}`, abi: GATE_ABI, functionName: "requestRedeem", args: [amt] });
        setNotice("2/2: request submitted. The attester agent will settle it.");
        setTimeout(() => { onSubmitted?.(); setNotice(null); }, 2500);
      }, 1800);
    } catch (err: any) {
      setError(err?.shortMessage || err?.message || "Submission failed.");
    }
  }

  return (
    <div className="req-form">
      <div className="req-form-head"><span className="req-kind">REDEMPTION</span></div>
      <form onSubmit={submit}>
        <label>Amount to redeem (SLUSD)
          <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.0" inputMode="decimal" />
        </label>
        <button className="primary big" type="submit" disabled={!isConnected || isPending || txMining}>
          {isPending || txMining ? "Working…" : "Request redemption"}
        </button>
      </form>
      {error && <p className="err">{error}</p>}
      {notice && <p className="ok">{notice}</p>}
    </div>
  );
}
