// RiskPanel — transparent component scores (spec §16 / §21).
// Shows concentration / liquidity / anomaly + overall deterministic score.
export interface RiskBreakdown {
  concentration: number;
  liquidity: number;
  anomaly: number;
  deterministic: number;
}

export default function RiskPanel({ risk }: { risk: RiskBreakdown }) {
  const rows: [string, number, string][] = [
    ["Concentration", risk.concentration, "40% weight"],
    ["Liquidity", risk.liquidity, "35% weight"],
    ["Anomaly", risk.anomaly, "25% weight"],
  ];
  const overallCls = risk.deterministic >= 70 ? "bad" : risk.deterministic >= 40 ? "warn" : "good";
  return (
    <section className="card">
      <h2>Risk breakdown</h2>
      {rows.map(([label, v, hint]) => (
        <div key={label} className="risk-row">
          <div className="risk-row-top"><span>{label}</span><span className="risk-val">{v}/100</span></div>
          <div className="bar"><div className={`fill ${v >= 70 ? "bad" : v >= 40 ? "warn" : "good"}`} style={{ width: `${v}%` }} /></div>
          <div className="stat-h">{hint}</div>
        </div>
      ))}
      <div className="risk-overall">
        <span>Deterministic risk</span>
        <span className={`risk-val ${overallCls}`}>{risk.deterministic}/100</span>
      </div>
    </section>
  );
}
