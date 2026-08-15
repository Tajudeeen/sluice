import { useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { ASSET_ABI, ASSET_ADDRESS } from "../sluice";

// FaucetButton: lets a connected browser user claim synthetic SLUSD so they can
// actually drive the real request → settle loop. Demo-only (see SluiceAsset.faucet).
export default function FaucetButton() {
  const { isConnected } = useAccount();
  const { writeContract, data: txHash, isPending } = useWriteContract();
  const { isLoading: txMining } = useWaitForTransactionReceipt({ hash: txHash });

  function claim() {
    if (!ASSET_ADDRESS) return;
    writeContract({ address: ASSET_ADDRESS as `0x${string}`, abi: ASSET_ABI, functionName: "faucet" });
  }

  return (
    <div className="faucet">
      <button className="ghost" onClick={claim} disabled={!isConnected || isPending || txMining}>
        {isPending || txMining ? "Claiming…" : "Claim 50,000 demo SLUSD"}
      </button>
      {txHash && <span className="muted small"> faucet tx submitted</span>}
    </div>
  );
}
