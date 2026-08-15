import type { Projection } from "../lib/projection";

// DecisionBreakdown: before/after visualization (spec §24, the most important
// frontend component). Contrasts CURRENT vs PROJECTED pool state so the user
// understands why a transaction was blocked without reading source code.
export default function DecisionBreakdown({ proj, breach }: { proj: Projection; breach: boolean }) {
  const hhiDelta = proj.projHhi - proj.curHhi;
  const largestDelta = proj.projLargest - proj.curLargest;
  return (
    <div className="beforeafter">
      <div className="ba-col">
        <div className="ba-title">CURRENT STATE</div>
        <div className="ba-row"><span>HHI</span><b>{proj.curHhi.toFixed(3)}</b></div>
        <div className="ba-row"><span>Largest holder</span><b>{proj.curLargest.toFixed(1)}%</b></div>
        <div className="ba-row"><span>Liquidity ratio</span><b>{(proj.curLiquidityRatio * 100).toFixed(0)}%</b></div>
      </div>
      <div className="ba-arrow">→</div>
      <div className={`ba-col ${breach ? "breach" : "safe"}`}>
        <div className="ba-title">PROJECTED STATE</div>
        <div className="ba-row"><span>HHI</span><b>{proj.projHhi.toFixed(3)} <i className="delta">(+{hhiDelta.toFixed(3)})</i></b></div>
        <div className="ba-row"><span>Largest holder</span><b>{proj.projLargest.toFixed(1)}% <i className="delta">(+{largestDelta.toFixed(1)})</i></b></div>
        <div className="ba-row"><span>Liquidity ratio</span><b>{(proj.projLiquidityRatio * 100).toFixed(0)}%</b></div>
        {breach && <div className="ba-flag">⚠ Deterministic hard-block condition met</div>}
      </div>
    </div>
  );
}
