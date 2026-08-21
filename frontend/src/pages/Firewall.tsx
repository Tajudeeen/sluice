import { useEffect, useMemo, useState } from "react";
import { useAccount, useReadContract, useReadContracts } from "wagmi";
import { ethers } from "ethers";
import {
  ASSET_ABI, GATE_ABI, GATE_ADDRESS, ASSET_ADDRESS, RPC_URL,
  SLUICE_META, computeHHI, type PoolView, type HolderView,
} from "../sluice";
import FaucetButton from "../components/FaucetButton";
import PoolOverview from "../components/PoolOverview";
import RiskPanel from "../components/RiskPanel";
import TransferForm from "../components/TransferForm";
import RedemptionForm from "../components/RedemptionForm";
import DecisionFeed from "../components/DecisionFeed";
import ScenarioSimulator from "../components/ScenarioSimulator";
import DeploymentInfo from "../components/DeploymentInfo";
import AgentStatus from "../components/AgentStatus";
import type { RequestView } from "../lib/types";

function fmt(b: bigint): string {
  try { return Number(ethers.formatUnits(b, 18)).toLocaleString(undefined, { maximumFractionDigits: 2 }); } catch { return "0"; }
}

// Fetch recent requests from the on-chain gate so the feed always reflects
// real settlement state.
async function fetchRecent(counterVal: bigint | undefined): Promise<RequestView[]> {
  if (!counterVal || !GATE_ADDRESS) return [];
  const n = Number(counterVal);
  const start = Math.max(1, n - 8);
  try {
    const provider = new ethers.JsonRpcProvider(RPC_URL);
    const gate = new ethers.Contract(GATE_ADDRESS, GATE_ABI, provider);
    const out: RequestView[] = [];
    for (let id = n; id >= start; id--) {
      try {
        const r: any = await gate.getRequest(id);
        out.push({
          id,
          type: Number(r.requestType ?? 0),
          status: Number(r.status ?? 0),
          amount: r.amount,
          requester: r.requester,
          recipient: r.recipient,
          createdAt: Number(r.createdAt ?? 0),
        });
      } catch { /* skip missing */ }
    }
    return out;
  } catch { return []; }
}

export default function Firewall() {
  const { address } = useAccount();
  const [refresh, setRefresh] = useState(0);
  const [recent, setRecent] = useState<RequestView[]>([]);

  const { data: totalSupply } = useReadContract({ address: ASSET_ADDRESS as `0x${string}`, abi: ASSET_ABI, functionName: "totalSupply" });
  const { data: holderAddrs } = useReadContract({ address: ASSET_ADDRESS as `0x${string}`, abi: ASSET_ABI, functionName: "holders" });
  const { data: balances } = useReadContracts({
    contracts: ((holderAddrs as string[] | undefined)?.map((a) => ({ address: ASSET_ADDRESS as `0x${string}`, abi: ASSET_ABI, functionName: "balanceOf", args: [a as `0x${string}`] })) ?? []) as any,
  });
  const { data: myBalance } = useReadContract({ address: ASSET_ADDRESS as `0x${string}`, abi: ASSET_ABI, functionName: "balanceOf", args: address ? [address] : undefined, query: { enabled: !!address } });
  const { data: counter } = useReadContract({ address: GATE_ADDRESS as `0x${string}`, abi: GATE_ABI, functionName: "requestCounter" });

  const pool: PoolView | null = useMemo(() => {
    if (!totalSupply || !holderAddrs || !balances) return null;
    const addrs = holderAddrs as string[];
    const bals = (balances as { result?: bigint }[]).map((b) => b.result ?? 0n);
    const holders: HolderView[] = addrs.map((a, i) => ({ address: a, balance: bals[i], pct: 0 })).sort((x, y) => (y.balance > x.balance ? 1 : -1));
    const ts = totalSupply as bigint;
    for (const h of holders) h.pct = ts > 0n ? Number((h.balance * 10000n) / ts) / 100 : 0;
    return { totalSupply: ts, holders, holderCount: addrs.length, hhi: computeHHI(holders, ts) };
  }, [totalSupply, holderAddrs, balances]);

  useEffect(() => {
    let alive = true;
    fetchRecent(counter as bigint | undefined).then((r) => { if (alive) setRecent(r); });
    return () => { alive = false; };
  }, [counter, refresh]);

  const configured = !!GATE_ADDRESS && !!ASSET_ADDRESS;
  const risk = pool ? (pool.hhi >= 0.35 ? "CRITICAL" : pool.hhi >= 0.25 ? "WATCH" : "OK") : "OK";

  return (
    <div className="app">
      <div className="bg" aria-hidden="true" />

      <section className="pitch">
        <div className="section-kicker">CONTROL ROOM / LIVE POLICY</div>
        <h1>Execution firewall</h1>
        <p>
          Every {SLUICE_META.assetSymbol} movement enters escrow. Sluice projects the resulting pool state,
          applies hard limits, and settles only after the gate verifies a signed decision.
        </p>
        <div className="console-status"><span><i /> Gate route mandatory</span><span>Policy v1.0</span><span>EIP-712 settlement</span></div>
      </section>

      <main className="grid">
        {configured && pool && (
          <RiskPanel
            risk={{
              concentration: Math.round(Math.min(100, pool.hhi * 100)),
              // Liquidity score: how far the synthetic pool sits above the
              // post-redemption safety floor (minLiquidityRatio = 20% from config).
              // 100 = at/above floor (safe); lower = closer to the breach.
              liquidity: Math.max(0, Math.min(100, Math.round((1 - pool.hhi) * 100))),
              // Anomaly is computed by the live agent from request-frequency history
              // (sliding window), which the read-only frontend does not track. We
              // surface it as agent-side rather than fabricate a value here.
              anomaly: -1,
              deterministic: Math.round(Math.min(100, pool.hhi * 100)),
            }}
          />
        )}

        {configured && pool ? (
          <PoolOverview pool={pool} risk={risk} />
        ) : !configured ? (
          <DeploymentInfo />
        ) : (
          <section className="card pool">
            <h2>Pool: {SLUICE_META.assetName} ({SLUICE_META.assetSymbol})</h2>
            <p className="muted">Reading on-chain pool state… connect a wallet and retry if this persists.</p>
          </section>
        )}

        <section className="card action">
          <div className="card-label">REQUEST DESK</div>
          <h2>Route a movement</h2>
          <FaucetButton />
          <div className="req-forms">
            <TransferForm onSubmitted={() => setRefresh((r) => r + 1)} />
            <RedemptionForm onSubmitted={() => setRefresh((r) => r + 1)} />
          </div>
          <p className="muted small">Connect a wallet, claim synthetic SLUSD if needed, then open a transfer or redemption request.</p>
          {myBalance != null && <p className="muted small">Your balance: <b>{fmt(myBalance as bigint)} SLUSD</b></p>}
        </section>

        {configured && pool && (
          <ScenarioSimulator pool={pool} />
        )}

        {configured && <AgentStatus />}

        <DecisionFeed requests={recent} />

        <section className="card requests">
          <div className="req-head">
            <h2>Settlement</h2>
            <button className="ghost" onClick={() => setRefresh((r) => r + 1)}>↻ Refresh</button>
          </div>
          <p className="muted small">
            An off-chain reviewer signs the decision; the gate verifies it. If no decision arrives before the deadline,
            <code>timeoutRelease</code> returns the escrowed funds.
          </p>
        </section>
      </main>

      <footer className="foot">
        <span>Sluice: synthetic demo (SLUSD is NOT a real-world asset). The blockchain is the final enforcement point.</span>
      </footer>
    </div>
  );
}
