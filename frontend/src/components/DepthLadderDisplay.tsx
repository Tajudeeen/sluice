import type { DepthLadder } from "../dreamdex";

/** Visual depth ladder for the trade ticket.
 *  Shows price levels with horizontal bars proportional to cumulative depth,
 *  with a slider that snaps to executable levels. Addresses the "flat list,
 *  no price ladder" UX gap identified in the hackathon review. */
export default function DepthLadderDisplay({
  ladder,
  requestedPrice,
  onPriceChange,
}: {
  ladder: DepthLadder;
  requestedPrice: number;
  onPriceChange: (price: number) => void;
}) {
  const maxCumulative = Math.max(ladder.levels.length ? ladder.levels[ladder.levels.length - 1].cumulative : 1, 1);
  const levels = ladder.levels.length > 0 ? ladder.levels : [{ price: requestedPrice, quantity: 0, cumulative: 0 }];
  return (
    <div className="depth-ladder">
      <div className="ladder-header">
        <span>{ladder.side === "buy" ? "Bids (buy)" : "Asks (sell)"}</span>
        <span>cumulative</span>
      </div>
      {levels.slice(0, 8).map((level, i) => {
        const atLimit = ladder.side === "buy" ? level.price <= requestedPrice : level.price >= requestedPrice;
        return (
          <div
            key={`level-${i}-${level.price}`}
            className={`ladder-level ${atLimit ? "at-limit" : ""}`}
            onClick={() => onPriceChange(level.price)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onPriceChange(level.price)}
            aria-label={`Price ${(level.price * 100).toFixed(1)}%, depth ${level.quantity.toFixed(3)}, cumulative ${level.cumulative.toFixed(3)}`}
          >
            <span className="ladder-price">{(level.price * 100).toFixed(1)}%</span>
            <span className="ladder-qty">{level.quantity.toFixed(3)}</span>
            <div className="ladder-bar">
              <div
                className={`ladder-fill ${ladder.side === "buy" ? "bids" : "asks"}`}
                style={{ width: `${(level.cumulative / maxCumulative) * 100}%` }}
              />
            </div>
            <span className="ladder-cum">{level.cumulative.toFixed(3)}</span>
          </div>
        );
      })}
    </div>
  );
}
