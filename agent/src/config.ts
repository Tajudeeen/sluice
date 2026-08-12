// Central, auditable configuration for Sluice's risk + decision logic.
// Thresholds live in ONE place so judges can inspect the policy directly.

export interface SluiceConfig {
  // ---- Risk weights (must sum to 100) ----
  weights: {
    concentration: number; // 40
    liquidity: number; // 35
    anomaly: number; // 25
  };

  // ---- Concentration (HHI) hard limits ----
  concentration: {
    hhiHardBlock: number; // projected HHI >= this -> HARD BLOCK (0..1)
    largestHolderHardBlock: number; // projected largest-holder % >= this -> HARD BLOCK (0..100)
  };

  // ---- Liquidity (redemption) ----
  liquidity: {
    minLiquidityRatio: number; // post-redemption liquidity ratio must stay >= this (0..1)
  };

  // ---- Anomaly ----
  anomaly: {
    windowSize: number; // sliding window length (recent requests)
    highFreqCount: number; // >= this many requests in window -> suspect
    highFreqWindowSec: number; // window duration for frequency check
    largeAmountPct: number; // amount >= this % of supply -> suspect (0..100)
    anomalyHardBlock: number; // anomaly score >= this -> HARD BLOCK (0..100)
  };

  // ---- Decision bands (deterministic, post-hard-block) ----
  decision: {
    safeMax: number; // 0..39 -> APPROVE
    reviewMax: number; // 40..69 -> AI-assisted REVIEW
    // 70..100 -> BLOCK
  };

  // ---- Attestation ----
  attestation: {
    ttlSec: number; // how long an attestation is valid after signing
  };
}

export const DEFAULT_CONFIG: SluiceConfig = {
  weights: { concentration: 40, liquidity: 35, anomaly: 25 },
  concentration: { hhiHardBlock: 0.35, largestHolderHardBlock: 50 },
  liquidity: { minLiquidityRatio: 0.2 },
  anomaly: {
    windowSize: 20,
    highFreqCount: 5,
    highFreqWindowSec: 3600,
    largeAmountPct: 15,
    anomalyHardBlock: 85,
  },
  decision: { safeMax: 39, reviewMax: 69 },
  attestation: { ttlSec: 600 },
};

// Numeric mirrors of the on-chain enums (SluiceGate.sol).
export const REASON = {
  SAFE: 0,
  PROJECTED_CONCENTRATION: 1,
  POST_REDEMPTION_LIQUIDITY: 2,
  ANOMALY: 3,
  ANOMALY_CRITICAL: 4,
  INSUFFICIENT_DATA: 5,
  AI_REVIEW_BLOCK: 6,
} as const;

export const AI_CLASS = {
  NORMAL: 0,
  COORDINATED_CLUSTER_SUSPECT: 1,
  WASH_TRADE_PATTERN_SUSPECT: 2,
  UNUSUAL_ACTIVITY: 3,
  INSUFFICIENT_DATA: 4,
} as const;

export const DECISION = { APPROVE: 0, BLOCK: 1 } as const;
