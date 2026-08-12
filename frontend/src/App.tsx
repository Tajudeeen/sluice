import { useEffect, useMemo, useState } from "react";
import { useAccount, useConnect, useDisconnect, useReadContract, useReadContracts, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { injected } from "wagmi/connectors";
import {
  ASSET_ABI, GATE_ABI, GATE_ADDRESS, ASSET_ADDRESS, CHAIN_ID,
  REQUEST_STATUS, REQUEST_TYPE, SLUICE_META, computeHHI, shortAddr,
  explorerTx, explorerAddr, type PoolView, type HolderView, ATTESTER_ADDRESS, RPC_URL,
} from "./sluice";
import { ethers } from "ethers";

type TxKind = "TRANSFER" | "REDEMPTION";

export default function App() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { writeContract, data: txHash, isPending } = useWriteContract();
  const { isLoading: txMining } = useWaitForTransactionReceipt({ hash: txHash });

  const [kind, setKind] = useState<TxKind>("TRANSFER");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [refresh, setRefresh] = useState(0);

  // ---- Pool reads (multi-call) ----
  const { data: totalSupply } = useReadContract({
    address: ASSET_ADDRESS as `0x${string}`,
    abi: ASSET_ABI,
    functionName: "totalSupply",
  });
  const { data: holderAddrs } = useReadContract({
    address: ASSET_ADDRESS as `0x${string}`,
    abi: ASSET_ABI,
    functionName: "holders",
  });
  const { data: balances } = useReadContracts({
    contracts: (holderAddrs as string[] | undefined)?.map((a) => ({
      address: ASSET_ADDRESS as `0x${string}`,
      abi: ASSET_ABI,
      functionName: "balanceOf",
      args: [a as `0x${string}`],
    })) ?? [],
  });
  const { data: myBalance } = useReadContract({
    address: ASSET_ADDRESS as `0x${string}`,
    abi: ASSET_ABI,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: { enabled: !!address },
  });
  const { data: counter } = useReadContract({
    address: GATE_ADDRESS as `0x${string}`,
    abi: GATE_ABI,
    functionName: "requestCounter",
  });

  const pool: PoolView | null = useMemo(() => {
    if (!totalSupply || !holderAddrs || !balances) return null;
    const addrs = holderAddrs as string[];
    const bals = (balances as { result?: bigint }[]).map((b) => b.result ?? 0n);
    const holders: HolderView[] = addrs
      .map((a, i) => ({ address: a, balance: bals[i], pct: 0 }))
      .sort((x, y) => (y.balance > x.balance ? 1 : -1));
    const ts = totalSupply as bigint;
    for (const h of holders) h.pct = ts > 0n ? Number((h.balance * 10000n) / ts) / 100 : 0;
    return { totalSupply: ts, holders, holderCount: addrs.length, hhi: computeHHI(holders, ts) };
  }, [totalSupply, holderAddrs, balances]);

  // ---- Recent requests (last N) ----
  const [recent, setRecent] = useState<{ id: number; status: number; amount: bigint; type: number }[]>([]);
  useEffect(() => {
    let alive = true;
    (async () => {
      if (!counter) return;
      const n = Number(counter as bigint);
      const start = Math.max(1, n - 8);
      try {
        const provider = new ethers.JsonRpcProvider(RPC_URL);
        const gate = new ethers.Contract(GATE_ADDRESS, GATE_ABI, provider);
        const out: { id: number; status: number; amount: bigint; type: number }[] = [];
        for (let id = n; id >= start; id--) {
          try {
            const r: any = await gate.getRequest(id);
            out.push({ id, status: Number(r.status), amount: r.amount, type: Number(r.requestType) });
          } catch { /* skip */ }
        }
        if (alive) setRecent(out);
      } catch { /* offline */ }
    })();
    return () => { alive = false; };
  }, [counter, refresh]);

  // ---- Submit a request ----
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setNotice(null);
    if (!isConnected || !address) { setError("Connect your wallet first."); return; }
    if (!assetSet()) { setError("VITE_GATE_ADDRESS / VITE_ASSET_ADDRESS not configured in this build."); return; }
    let amt: bigint;
    try {
      amt = ethers.parseUnits(amount || "0", 18);
    } catch { setError("Invalid amount."); return; }
    if (amt <= 0n) { setError("Amount must be > 0."); return; }
    if (kind === "TRANSFER" && !ethers.isAddress(recipient)) { setError("Recipient is not a valid address."); return; }

    try {
      // Approve the gate to pull `amount`, then open the request.
      writeContract({
        address: ASSET_ADDRESS as `0x${string}`,
        abi: ASSET_ABI,
        functionName: "approve",
        args: [GATE_ADDRESS as `0x${string}`, amt],
      });
      // Sequential: we need the allowance set before requestTransfer. Use a tiny
      // wait then the second tx. (Frontend UX kept simple; the agent settles after.)
      setNotice("1/2 — approving the gate…");
      // NOTE: robust dapps would await the receipt. For the demo we fire the
      // request after a short delay; if it reverts on allowance, the user retries.
      setTimeout(() => {
        writeContract({
          address: GATE_ADDRESS as `0x${string}`,
          abi: GATE_ABI,
          functionName: kind === "TRANSFER" ? "requestTransfer" : "requestRedeem",
          args: kind === "TRANSFER" ? [recipient as `0x${string}`, amt] : [amt],
        });
        setNotice("2/2 — request submitted. The attester agent will evaluate + settle it.");
        setTimeout(() => setRefresh((r) => r + 1), 2500);
      }, 1800);
    } catch (err: any) {
      setError(err?.shortMessage || err?.message || "Submission failed.");
    }
  }

  const configured = assetSet();

  return (
    <div className="app">
      <Background />
      <header className="hero">
        <div className="brand">
          <span className="logo">▱ SLUICE</span>
          <span className="net">BOT Chain · {CHAIN_ID}</span>
        </div>
        <div className="wallet">
          {isConnected ? (
            <>
              <span className="addr">{shortAddr(address!)}</span>
              <button className="ghost" onClick={() => disconnect()}>Disconnect</button>
            </>
          ) : (
            <button className="primary" onClick={() => connect({ connector: injected() })}>Connect Wallet</button>
          )}
        </div>
      </header>

      <section className="pitch">
        <h1>{SLUICE_META.tagline}</h1>
        <p>
          Every transfer or redemption of <b>{SLUICE_META.assetSymbol}</b> is <b>locked first, evaluated second</b>.
          A deterministic risk engine + an AI contextual layer score the move; an authorized attester releases only
          what is safe. Direct token transfers are rejected by the asset — there is no bypass around the firewall.
        </p>
        <div className="pipeline">
          <Step n="1" t="Lock funds" d="requestTransfer / requestRedeem escrows the amount in the gate." />
          <Step n="2" t="Evaluate" d="Engine projects HHI, liquidity, anomaly + AI context." />
          <Step n="3" t="Attest" d="Authorized attester signs an EIP-712 attestation." />
          <Step n="4" t="Settle" d="Gate releases or refunds. Timeout refunds if the agent is down." />
        </div>
      </section>

      <main className="grid">
        <section className="card pool">
          <h2>Pool — {SLUICE_META.assetName} ({SLUICE_META.assetSymbol})</h2>
          {!configured ? (
            <p className="warn">No deployed contract addresses in this build. Set VITE_GATE_ADDRESS / VITE_ASSET_ADDRESS (copy from scripts/deploy.ts output) and rebuild.</p>
          ) : pool ? (
            <>
              <div className="stats">
                <Stat label="Total supply" value={fmt(pool.totalSupply)} />
                <Stat label="Holders" value={String(pool.holderCount)} />
                <Stat label="Concentration (HHI)" value={pool.hhi.toFixed(3)} hint="0 = perfectly distributed, 1 = single holder" />
                <Stat label="Your balance" value={myBalance ? fmt(myBalance as bigint) : "—"} />
              </div>
              <h3>Holder distribution</h3>
              <div className="holders">
                {pool.holders.slice(0, 12).map((h) => (
                  <div className="holder" key={h.address}>
                    <div className="holder-top">
                      <span className="haddr">{shortAddr(h.address)}{h.address.toLowerCase() === address?.toLowerCase() ? " (you)" : ""}</span>
                      <span className="hpct">{h.pct.toFixed(2)}%</span>
                    </div>
                    <div className="bar"><div className="fill" style={{ width: `${Math.min(100, h.pct)}%` }} /></div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="muted">Loading pool…</p>
          )}
        </section>

        <section className="card action">
          <h2>Submit a request through the firewall</h2>
          <div className="toggle">
            <button className={kind === "TRANSFER" ? "on" : ""} onClick={() => setKind("TRANSFER")}>Transfer</button>
            <button className={kind === "REDEMPTION" ? "on" : ""} onClick={() => setKind("REDEMPTION")}>Redeem</button>
          </div>
          <form onSubmit={submit}>
            {kind === "TRANSFER" && (
              <label>
                Recipient
                <input value={recipient} onChange={(e) => setRecipient(e.target.value)} placeholder="0x…" />
              </label>
            )}
            <label>
              Amount ({SLUICE_META.assetSymbol})
              <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.0" inputMode="decimal" />
            </label>
            <button className="primary big" type="submit" disabled={!isConnected || isPending || txMining}>
              {isPending || txMining ? "Working…" : kind === "TRANSFER" ? "Request transfer" : "Request redemption"}
            </button>
          </form>
          {error && <p className="err">{error}</p>}
          {notice && <p className="ok">{notice}</p>}
          {txHash && <p className="ok"><a href={explorerTx(txHash)} target="_blank" rel="noreferrer">View tx ↗</a></p>}
          <p className="muted small">After submission the attester agent evaluates the request and calls approve()/blockRequest(). Watch the request list below update.</p>
        </section>

        <section className="card requests">
          <div className="req-head">
            <h2>Recent requests</h2>
            <button className="ghost" onClick={() => setRefresh((r) => r + 1)}>↻ Refresh</button>
          </div>
          {ATTESTER_ADDRESS && (
            <p className="muted small">Settled by attester <a href={explorerAddr(ATTESTER_ADDRESS)} target="_blank" rel="noreferrer">{shortAddr(ATTESTER_ADDRESS)}</a></p>
          )}
          {recent.length === 0 ? (
            <p className="muted">No requests yet. Submit one above.</p>
          ) : (
            <table>
              <thead><tr><th>#</th><th>Type</th><th>Amount</th><th>Status</th></tr></thead>
              <tbody>
                {recent.map((r) => (
                  <tr key={r.id}>
                    <td>{r.id}</td>
                    <td>{r.type === REQUEST_TYPE.REDEMPTION ? "Redeem" : "Transfer"}</td>
                    <td>{fmt(r.amount)}</td>
                    <td><span className={`badge s${r.status}`}>{REQUEST_STATUS[r.status]}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </main>

      <footer className="foot">
        <span>Sluice — synthetic demo (SLUSD is NOT a real-world asset). The blockchain is the final enforcement point.</span>
      </footer>
    </div>
  );
}

function assetSet() {
  return !!GATE_ADDRESS && !!ASSET_ADDRESS;
}

function fmt(b: bigint): string {
  try { return Number(ethers.formatUnits(b, 18)).toLocaleString(undefined, { maximumFractionDigits: 2 }); }
  catch { return "0"; }
}

function Step({ n, t, d }: { n: string; t: string; d: string }) {
  return (
    <div className="step">
      <div className="step-n">{n}</div>
      <div className="step-t">{t}</div>
      <div className="step-d">{d}</div>
    </div>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="stat">
      <div className="stat-v">{value}</div>
      <div className="stat-l">{label}</div>
      {hint && <div className="stat-h">{hint}</div>}
    </div>
  );
}

function Background() {
  return <div className="bg" aria-hidden="true"><div className="orb o1" /><div className="orb o2" /></div>;
}
