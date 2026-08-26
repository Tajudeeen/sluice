import { DEFAULT_CONFIG, type SluiceConfig } from "../config";
import type { PoolSnapshot, ProposedTx } from "../types";
import { assessRisk, decide } from "./decision";

export type RequestHistoryEntry = { amount: bigint; timestamp: number; requester: string };

/** Shared Node/Worker policy entrypoint. Runtime adapters provide state only. */
export async function evaluatePolicy(
  snap: PoolSnapshot,
  tx: ProposedTx,
  history: RequestHistoryEntry[],
  nowSec: number,
  config: SluiceConfig = DEFAULT_CONFIG
) {
  const decision = await decide(snap, tx, history, nowSec, config);
  const risk = assessRisk(snap, tx, history, nowSec, config);
  return { decision, risk };
}
