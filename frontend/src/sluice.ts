// On-chain bindings for the Sluice demo frontend.
// Minimal ABIs (only the functions the UI needs) + helpers to read pool state
// and submit requests through the gate. VITE_* env vars are inlined at build.

export const GATE_ADDRESS = (import.meta.env.VITE_GATE_ADDRESS as string) || "";
export const ASSET_ADDRESS = (import.meta.env.VITE_ASSET_ADDRESS as string) || "";
export const CHAIN_ID = Number(import.meta.env.VITE_CHAIN_ID || 677);
// Human-facing chain name + short network tag. Lets one build target BOT mainnet,
// Sepolia, or a local node and label itself correctly (no hardcoded "BOT Chain").
export const CHAIN_NAME = (import.meta.env.VITE_CHAIN_NAME as string) || "BOT Chain";
export const NETWORK_TAG = (import.meta.env.VITE_NETWORK_TAG as string) || "BOT Chain";
export const RPC_URL = (import.meta.env.VITE_BOT_RPC_URL as string) || "https://rpc.botchain.ai/";
export const EXPLORER_URL = (import.meta.env.VITE_EXPLORER_URL as string) || "https://scan.botchain.ai/";
export const ATTESTER_ADDRESS = (import.meta.env.VITE_ATTESTER_ADDRESS as string) || "";

// Whether the build was wired with live contract addresses. Drives demo-mode UI.
export const CONFIGURED = !!GATE_ADDRESS && !!ASSET_ADDRESS;

export const SLUICE_META = {
  name: "Sluice",
  tagline: "Policy-driven execution firewall for tokenized assets",
  assetSymbol: "SLUSD",
  assetName: "Sluice Liquidity Unit",
};

// ---- SluiceAsset (minimal) ----
// Use JSON ABI fragments here because wagmi v2 delegates contract calls to
// viem, which does not accept ethers' human-readable ABI strings. The same
// fragments are also accepted by ethers for the read-only and simulator calls.
export const ASSET_ABI = [
  { type: "function", name: "name", stateMutability: "view", inputs: [], outputs: [{ type: "string" }] },
  { type: "function", name: "symbol", stateMutability: "view", inputs: [], outputs: [{ type: "string" }] },
  { type: "function", name: "totalSupply", stateMutability: "view", inputs: [], outputs: [{ type: "uint256" }] },
  { type: "function", name: "balanceOf", stateMutability: "view", inputs: [{ name: "account", type: "address" }], outputs: [{ type: "uint256" }] },
  { type: "function", name: "holders", stateMutability: "view", inputs: [], outputs: [{ type: "address[]" }] },
  { type: "function", name: "decimals", stateMutability: "view", inputs: [], outputs: [{ type: "uint8" }] },
  { type: "function", name: "approve", stateMutability: "nonpayable", inputs: [{ name: "spender", type: "address" }, { name: "amount", type: "uint256" }], outputs: [{ type: "bool" }] },
  { type: "function", name: "allowance", stateMutability: "view", inputs: [{ name: "owner", type: "address" }, { name: "spender", type: "address" }], outputs: [{ type: "uint256" }] },
  { type: "function", name: "faucet", stateMutability: "nonpayable", inputs: [], outputs: [] },
] as const;

// ---- SluiceGate (minimal) ----
export const GATE_ABI = [
  { type: "event", name: "RequestCreated", anonymous: false, inputs: [{ name: "id", type: "uint256", indexed: true }, { name: "requester", type: "address", indexed: true }, { name: "recipient", type: "address", indexed: true }, { name: "amount", type: "uint256", indexed: false }, { name: "requestType", type: "uint8", indexed: false }] },
  { type: "event", name: "RequestApproved", anonymous: false, inputs: [{ name: "id", type: "uint256", indexed: true }, { name: "recipient", type: "address", indexed: true }, { name: "amount", type: "uint256", indexed: false }] },
  { type: "event", name: "RequestBlocked", anonymous: false, inputs: [{ name: "id", type: "uint256", indexed: true }, { name: "requester", type: "address", indexed: true }, { name: "amount", type: "uint256", indexed: false }] },
  { type: "event", name: "RequestTimedOut", anonymous: false, inputs: [{ name: "id", type: "uint256", indexed: true }, { name: "requester", type: "address", indexed: true }, { name: "amount", type: "uint256", indexed: false }] },
  { type: "function", name: "requestTransfer", stateMutability: "nonpayable", inputs: [{ name: "to", type: "address" }, { name: "amount", type: "uint256" }], outputs: [{ name: "id", type: "uint256" }] },
  { type: "function", name: "requestRedeem", stateMutability: "nonpayable", inputs: [{ name: "amount", type: "uint256" }], outputs: [{ name: "id", type: "uint256" }] },
  { type: "function", name: "getRequest", stateMutability: "view", inputs: [{ name: "id", type: "uint256" }], outputs: [{ name: "request", type: "tuple", components: [{ name: "id", type: "uint256" }, { name: "requester", type: "address" }, { name: "recipient", type: "address" }, { name: "amount", type: "uint256" }, { name: "requestType", type: "uint8" }, { name: "createdAt", type: "uint256" }, { name: "status", type: "uint8" }] }] },
  { type: "function", name: "requestCounter", stateMutability: "view", inputs: [], outputs: [{ type: "uint256" }] },
  { type: "function", name: "timeout", stateMutability: "view", inputs: [], outputs: [{ type: "uint256" }] },
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
