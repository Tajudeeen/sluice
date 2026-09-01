import type { RiskDimensions } from "../dreamdex";

/** Compact 5-dimension risk heatmap for the Safe Size preview.
 *  Shows each dimension as a colored score bar, mapping the structured risk
 *  breakdown to a single glance — inspired by LevelField's structural taxonomy. */
export default function RiskDimensionsDisplay({ dimensions }: { dimensions: RiskDimensions }) {
  const entries = [
    { key: "market" as const, label: "Market", dim: dimensions.market },
    { key: "liquidity" as const, label: "Liquidity", dim: dimensions.liquidity },
    { key: "exposure" as const, label: "Exposure", dim: dimensions.exposure },
    { key: "collateral" as const, label: "Collateral", dim: dimensions.collateral },
    { key: "control" as const, label: "Control", dim: dimensions.control },
  ];
  return (
    <div className="risk-breakdown-inner">
      {entries.map(({ key, label, dim }) => (
        <div key={key} className={`dim-row dim-${dim.status}`}>
          <span className="dim-label">{label}</span>
          <div className="dim-bar" aria-label={`${label} risk: ${dim.score}/100`}>
            <div className="dim-fill" style={{ width: `${dim.score}%`, backgroundColor: dimColor(dim.status) }} />
          </div>
          <span className="dim-score">{dim.score}</span>
        </div>
      ))}
    </div>
  );
}

function dimColor(status: "pass" | "warn" | "block"): string {
  switch (status) {
    case "pass": return "hsl(140 60% 45%)";
    case "warn": return "hsl(40 90% 50%)";
    case "block": return "hsl(0 80% 55%)";
  }
}
