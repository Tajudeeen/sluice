import { ethers } from "ethers";
import { REQUEST_STATUS, type RequestView } from "../lib/types";

// DecisionFeed: live recent requests settled through the gate (spec §22/§23).
// Reads from the on-chain gate so the list always reflects real state.
export default function DecisionFeed({ requests }: { requests: RequestView[] }) {
  if (requests.length === 0) {
    return (
      <section className="card requests">
        <div className="card-label">SETTLEMENT LOG</div>
        <h2>Decision ledger</h2>
        <p className="muted">No requests recorded. Open a transfer, redemption, or test scenario to create the first entry.</p>
      </section>
    );
  }
  return (
    <section className="card requests">
      <div className="card-label">SETTLEMENT LOG</div>
      <h2>Decision ledger</h2>
      <div className="table-scroll">
      <table>
        <thead><tr><th>#</th><th>Type</th><th>Amount</th><th>Status</th><th></th></tr></thead>
        <tbody>
          {requests.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.type === 1 ? "Redeem" : "Transfer"}</td>
              <td>{Number(ethers.formatUnits(r.amount, 18)).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
              <td><span className={`badge s${r.status}`}>{REQUEST_STATUS[r.status]}</span></td>
              <td className="muted small">{r.createdAt ? new Date(r.createdAt * 1000).toLocaleTimeString() : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </section>
  );
}
