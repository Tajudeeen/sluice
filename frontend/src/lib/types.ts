export type TxKind = "TRANSFER" | "REDEMPTION";

// Shared request-view shape used across the firewall UI.
export interface RequestView {
  id: number;
  type: number; // 0 = TRANSFER, 1 = REDEMPTION
  status: number; // 0 PENDING, 1 APPROVED, 2 BLOCKED, 3 TIMED_OUT
  amount: bigint;
  requester: string;
  recipient: string;
  createdAt: number;
}

export const REQUEST_STATUS = ["PENDING", "APPROVED", "BLOCKED", "TIMED_OUT"] as const;
