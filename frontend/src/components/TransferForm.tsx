import { useState } from "react";
import { useAccount, usePublicClient, useWriteContract } from "wagmi";
import { ethers } from "ethers";
import { ASSET_ABI, ASSET_ADDRESS, GATE_ABI, GATE_ADDRESS } from "../sluice";

export default function TransferForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const { address, isConnected } = useAccount();
  const { writeContractAsync } = useWriteContract();
  const publicClient = usePublicClient();
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null); setNotice(null);
    if (!isConnected || !address) { setError("Connect your wallet first."); return; }
    if (!GATE_ADDRESS || !ASSET_ADDRESS) { setError("Contracts not configured in this build."); return; }
    let amt: bigint;
    try { amt = ethers.parseUnits(amount || "0", 18); } catch { setError("Invalid amount."); return; }
    if (amt <= 0n) { setError("Amount must be > 0."); return; }
    if (!ethers.isAddress(recipient)) { setError("Recipient is not a valid address."); return; }
    if (recipient.toLowerCase() === address.toLowerCase()) { setError("Cannot transfer to yourself."); return; }
    if (!publicClient) { setError("Network client not ready. Connect to the Sluice network first."); return; }
    setBusy(true);
    try {
      setNotice("1/2: approving the gate...");
      const approveHash = await writeContractAsync({ address: ASSET_ADDRESS as `0x${string}`, abi: ASSET_ABI, functionName: "approve", args: [GATE_ADDRESS as `0x${string}`, amt] });
      await publicClient.waitForTransactionReceipt({ hash: approveHash });
      setNotice("2/2: submitting transfer request...");
      const reqHash = await writeContractAsync({ address: GATE_ADDRESS as `0x${string}`, abi: GATE_ABI, functionName: "requestTransfer", args: [recipient as `0x${string}`, amt] });
      await publicClient.waitForTransactionReceipt({ hash: reqHash });
      setNotice(`Request submitted (tx ${reqHash.slice(0, 10)}...). The attester agent will settle it.`);
      setTimeout(() => { onSubmitted?.(); setNotice(null); }, 1500);
    } catch (err: any) {
      setError(err?.shortMessage || err?.message || "Submission failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="req-form">
      <div className="req-form-head"><span className="req-kind">TRANSFER</span></div>
      <form onSubmit={submit}>
        <label>Recipient<input value={recipient} onChange={(e) => setRecipient(e.target.value)} placeholder="0x..." /></label>
        <label>Amount (SLUSD)<input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.0" inputMode="decimal" /></label>
        <button className="primary big" type="submit" disabled={!isConnected || busy}>{busy ? "Working..." : "Request transfer"}</button>
      </form>
      {error && <p className="err">{error}</p>}
      {notice && <p className="ok">{notice}</p>}
    </div>
  );
}
