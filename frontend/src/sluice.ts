// On-chain bindings for the Sluice demo frontend.
// Minimal ABIs (only the functions the UI needs) + helpers to read pool state
// and submit requests through the gate. VITE_* env vars are inlined at build.

export const GATE_ADDRESS = (import.meta.env.VITE_GATE_ADDRESS as string) || "";
export const ASSET_ADDRESS = (import.meta.env.VITE_ASSET_ADDRESS as string) || "";
export const CHAIN_ID = Number(import.meta.env.VITE_CHAIN_ID || 677);
export const RPC_URL = (import.meta.env.VITE_BOT_RPC_URL as string) || "https://rpc.botchain.ai/";
export const EXPLORER_URL = (import.meta.env.VITE_EXPLORER_URL as string) || "https://scan.botchain.ai/";
export const ATTESTER_ADDRESS = (import.meta.env.VITE_ATTESTER_ADDRESS as string) || "";

export const SLUICE_META = {
  name: "Sluice",
  tagline: "AI-native execution firewall for tokenized assets",
  assetSymbol: "SLUSD",
  assetName: "Sluice Liquidity Unit",
};

// ---- SluiceAsset (minimal) ----
export const ASSET_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint256)",
  "function holders() view returns (address[])",
  "function decimals() view returns (uint8)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function faucet()",
] as const;

// ---- SluiceGate (minimal) ----
export const GATE_ABI = [
  "event RequestCreated(uint256 indexed id, address indexed requester, address indexed recipient, uint256 amount, uint8 requestType)",
  "event RequestApproved(uint256 indexed id, address indexed recipient, uint256 amount)",
  "event RequestBlocked(uint256 indexed id, address indexed requester, uint256 amount)",
  "event RequestTimedOut(uint256 indexed id, address indexed requester, uint256 amount)",
  "function requestTransfer(address to, uint256 amount) returns (uint256 id)",
  "function requestRedeem(uint256 amount) returns (uint256 id)",
  "function getRequest(uint256 id) view returns (tuple(uint256 id, address requester, address recipient, uint256 amount, uint8 requestType, uint256 createdAt, uint8 status))",
  "function requestCounter() view returns (uint256)",
  "function timeout() view returns (uint256)",
] as const;

export const REQUEST_TYPE = { TRANSFER: 0, REDEMPTION: 1 } as const;
export const REQUEST_STATUS = ["PENDING", "APPROVED", "BLOCKED", "TIMED_OUT"] as const;

export interface HolderView {
  address: string;
  balance: bigint;
  pct: number;
}

export interface PoolView {
  totalSupply: bigint;
  holders: HolderView[];
  holderCount: number;
  // Herfindahl-Hirschman Index over holder shares (0..1).
  hhi: number;
}

// BigInt-safe HHI over raw balances.
export function computeHHI(holders: { balance: bigint }[], totalSupply: bigint): number {
  if (totalSupply <= 0n) return 0;
  let sumSq = 0n;
  for (const h of holders) {
    const b = h.balance > 0n ? h.balance : 0n;
    sumSq += b * b;
  }
  const denom = totalSupply * totalSupply;
  if (denom === 0n) return 0;
  const SCALE = 10n ** 12n;
  return Number((sumSq * SCALE) / denom) / Number(SCALE);
}

export function shortAddr(a: string): string {
  if (!a) return " -";
  return a.slice(0, 6) + "…" + a.slice(-4);
}

export function explorerTx(hash: string): string {
  return `${EXPLORER_URL.replace(/\/$/, "")}/tx/${hash}`;
}

export function explorerAddr(addr: string): string {
  return `${EXPLORER_URL.replace(/\/$/, "")}/address/${addr}`;
}

// Format a raw token balance (18 decimals) to a human string.
export function fmt(b: bigint): string {
  try {
    const v = Number(b >= 0n ? b : 0n);
    return (v / 1e18).toLocaleString(undefined, { maximumFractionDigits: 2 });
  } catch {
    return "0";
  }
}
