import { type PoolView, fmt, shortAddr } from "../sluice";

// PoolOverview — the current synthetic pool state (spec §22).
// Total supply, holder count, concentration (HHI), risk status.
export default function PoolOverview({ pool, risk }: { pool: PoolView; risk: "OK" | "WATCH" | "CRITICAL" }) {
  const riskLabel = risk === "CRITICAL" ? "ELEVATED" : risk === "WATCH" ? "WATCH" : "HEALTHY";
  const riskCls = risk === "CRITICAL" ? "bad" : risk === "WATCH" ? "warn" : "good";
  return (
    <section className="card pool">
      <h2>Pool — Sluice Liquidity Unit (SLUSD)</h2>
      <div className="stats">
        <div className="stat"><div className="stat-v">{fmt(pool.totalSupply)}</div><div className="stat-l">Total supply</div></div>
        <div className="stat"><div className="stat-v">{pool.holderCount}</div><div className="stat-l">Holders</div></div>
        <div className="stat"><div className="stat-v">{pool.hhi.toFixed(3)}</div><div className="stat-l">Concentration (HHI)</div><div className="stat-h">0 = perfectly distributed · 1 = single holder</div></div>
        <div className="stat"><div className={`stat-v ${riskCls}`}>{riskLabel}</div><div className="stat-l">Risk status</div></div>
      </div>
      <h3>Holder distribution</h3>
      <div className="holders">
        {pool.holders.slice(0, 12).map((h) => (
          <div className="holder" key={h.address}>
            <div className="holder-top">
              <span className="haddr">{shortAddr(h.address)}</span>
              <span className="hpct">{h.pct.toFixed(2)}%</span>
            </div>
            <div className="bar"><div className="fill" style={{ width: `${Math.min(100, h.pct)}%` }} /></div>
          </div>
        ))}
      </div>
    </section>
  );
}
