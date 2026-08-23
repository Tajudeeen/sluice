import { useEffect, useState } from "react";
import { AGENT_HEALTH_URL } from "../sluice";

interface Health {
  ok: boolean;
  mode?: string;
  aiProvider?: string;
  lastDecision?: {
    decision: string;
    deterministicScore: number;
    aiParticipated: boolean;
    aiClassification: number;
    aiConfidence: number;
    aiReason: string;
  } | null;
}

const AI_LABELS = ["NORMAL", "COORDINATED_CLUSTER_SUSPECT", "WASH_TRADE_PATTERN_SUSPECT", "UNUSUAL_ACTIVITY", "INSUFFICIENT_DATA"];

export default function AgentStatus() {
  const [health, setHealth] = useState<Health | null>(null);
  useEffect(() => {
    if (!AGENT_HEALTH_URL) return;
    let alive = true;
    const poll = () => fetch(`${AGENT_HEALTH_URL.replace(/\/$/, "")}/health`).then((r) => r.json()).then((v) => alive && setHealth(v)).catch(() => alive && setHealth(null));
    poll();
    const timer = window.setInterval(poll, 10000);
    return () => { alive = false; window.clearInterval(timer); };
  }, []);
  if (!AGENT_HEALTH_URL) return null;
  const d = health?.lastDecision;
  return (
    <section className="card agent-status">
      <div className="card-label">ATTESTER / ACTIVITY SIGNAL</div>
      <h2>{health?.ok ? "Agent online" : "Agent unreachable"}</h2>
      {health?.ok && <p className="muted small">Settlement mode: <b>{health.mode}</b>. Signal source: <b>{health.aiProvider?.toUpperCase() || "DETERMINISTIC"}</b>. Deterministic rules remain authoritative.</p>}
      {d ? (
        <div className="agent-decision">
          <span>Last decision: <b>{d.decision}</b> - score {d.deterministicScore}</span>
          <span>Activity: <b>{d.aiParticipated ? AI_LABELS[d.aiClassification] ?? "CLASSIFIED" : "NOT NEEDED"}</b>{d.aiParticipated ? ` (${d.aiConfidence}% confidence)` : ""}</span>
          {d.aiReason && <span className="muted small">{d.aiReason}</span>}
        </div>
      ) : health?.ok ? <p className="muted small">No settled request yet. Submit a test movement to show the decision trail.</p> : null}
    </section>
  );
}
