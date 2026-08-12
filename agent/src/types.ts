// Shared types for the off-chain risk + decision pipeline.

export interface Holder {
  address: string;
  balance: bigint; // raw token units
}

export interface PoolSnapshot {
  totalSupply: bigint;
  holders: Holder[]; // live holders (gate escrow excluded by caller)
}

export interface ProposedTx {
  type: "TRANSFER" | "REDEMPTION";
  requester: string;
  recipient: string; // zero address for redemption
  amount: bigint; // raw token units
}

// Output of the deterministic engine.
export interface RiskAssessment {
  // CURRENT pool state
  current: {
    hhi: number; // 0..1
    largestHolderPct: number; // 0..100
    liquidity: bigint; // = totalSupply for the synthetic pool
    liquidityRatio: number; // liquidity / totalSupply (always 1 for synthetic)
  };
  // PROJECTED pool state ("what if this tx settles")
  projected: {
    hhi: number;
    largestHolderPct: number;
    liquidity: bigint;
    liquidityRatio: number;
  };
  // Component scores 0..100
  concentrationScore: number;
  liquidityScore: number;
  anomalyScore: number;
  // Weighted overall deterministic score 0..100
  deterministicScore: number;
  // Hard-block flags (deterministic safety boundary)
  hardBlock: boolean;
  hardBlockReasons: string[];
  // Detailed anomaly findings
  anomalyReasons: string[];
}

export interface AiContext {
  classification:
    | "NORMAL"
    | "COORDINATED_CLUSTER_SUSPECT"
    | "WASH_TRADE_PATTERN_SUSPECT"
    | "UNUSUAL_ACTIVITY"
    | "INSUFFICIENT_DATA";
  confidence: number; // 0..1
  reason: string;
}

export interface Decision {
  decision: "APPROVE" | "BLOCK";
  deterministicScore: number;
  concentrationScore: number;
  liquidityScore: number;
  anomalyScore: number;
  riskScore: number; // = deterministicScore (overall)
  primaryReason: string;
  hardBlock: boolean;
  hardBlockReasons: string[];
  aiClassification: number; // numeric code mirroring AI_CLASS (see config.ts)
  aiConfidence: number;
  aiReason: string;
  // Did the AI participate in the final call? (only in REVIEW band)
  aiParticipated: boolean;
}
