// RiskPanel: transparent component scores (spec §16 / §21).
// Shows concentration / liquidity / anomaly + overall deterministic score.
export interface RiskBreakdown {
  concentration: number;
  liquidity: number;
  anomaly: number; // -1 => computed by the live agent (frontend has no request history)
  deterministic: number;
}

export default function RiskPanel({ risk }: { risk: RiskBreakdown }) {
  const hasAnomaly = risk.anomaly >= 0;
  const rows: [string, number, string, boolean][] = [
    ["Concentration", risk.concentration, "40% weight", true],
    ["Liquidity", risk.liquidity, "35% weight", true],
    ["Anomaly", hasAnomaly ? risk.anomaly : 0, "25% weight", hasAnomaly],
  ];
  const overallCls = risk.deterministic >= 70 ? "bad" : risk.deterministic >= 40 ? "warn" : "good";
  const scoreCls = (v: number) => (v >= 70 ? "bad" : v >= 40 ? "warn" : "good");
  return (
    <section className="card">
      <h2>Risk breakdown</h2>
      {rows.map(([label, v, hint, showBar]) => (
        <div key={label} className="risk-row">
          <div className="risk-row-top"><span>{label}</span><span className="risk-val">{showBar ? `${v}/100` : "agent-side"}</span></div>
          {showBar ? (
            <div className="bar"><div className={`fill ${scoreCls(v)}`} style={{ width: `${v}%` }} /></div>
          ) : (
            <div className="bar"><div className="fill muted-fill" style={{ width: `100%` }} /></div>
          )}
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
