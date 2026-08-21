import { ethers } from "ethers";
import { configureAiEnvironment, configuredAiProvider } from "../../agent/src/ai/classifier";
import { decide, assessRisk } from "../../agent/src/decision/decision";
import { DEFAULT_CONFIG, AI_CLASS, DECISION, REASON } from "../../agent/src/config";
import type { PoolSnapshot, ProposedTx, RiskAssessment } from "../../agent/src/types";

export interface Env {
  SLUICE_RPC_URL: string;
  SLUICE_GATE_ADDRESS: string;
  SLUICE_ASSET_ADDRESS: string;
  ATTESTER_PRIVATE_KEY: string;
  GROQ_API_KEY?: string;
  GROQ_MODEL?: string;
  ANTHROPIC_API_KEY?: string;
  ANTHROPIC_MODEL?: string;
  ATTESTATION_TTL?: string;
}

const GATE_ABI = [
  "function getRequest(uint256 id) view returns (tuple(uint256 id, address requester, address recipient, uint256 amount, uint8 requestType, uint256 createdAt, uint8 status))",
  "function requestCounter() view returns (uint256)",
  "function approve(uint256 requestId, tuple(uint256 requestId, uint8 decision, uint8 reasonCode, uint8 aiClassification, uint32 riskScore, uint32 deterministicScore, uint32 aiConfidence, uint32 timestamp, uint32 expiry, bytes signature) att)",
  "function blockRequest(uint256 requestId, tuple(uint256 requestId, uint8 decision, uint8 reasonCode, uint8 aiClassification, uint32 riskScore, uint32 deterministicScore, uint32 aiConfidence, uint32 timestamp, uint32 expiry, bytes signature) att)",
];
const ASSET_ABI = [
  "function totalSupply() view returns (uint256)",
  "function holders() view returns (address[])",
  "function balanceOf(address) view returns (uint256)",
];
const PENDING = 0;
let lastDecision: Record<string, unknown> | null = null;
const LAST_DECISION_CACHE_KEY = "https://sluice.internal/last-decision";

function workerCache(): Cache {
  return (caches as unknown as { default: Cache }).default;
}

function corsHeaders(): HeadersInit {
  return { "access-control-allow-origin": "*", "access-control-allow-methods": "GET,POST,OPTIONS", "access-control-allow-headers": "content-type" };
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders(), "content-type": "application/json", "cache-control": "no-store" } });
}

function configureAi(env: Env): void {
  configureAiEnvironment({
    GROQ_API_KEY: env.GROQ_API_KEY,
    GROQ_MODEL: env.GROQ_MODEL,
    ANTHROPIC_API_KEY: env.ANTHROPIC_API_KEY,
    ANTHROPIC_MODEL: env.ANTHROPIC_MODEL,
  });
}

function clients(env: Env) {
  const provider = new ethers.JsonRpcProvider(env.SLUICE_RPC_URL, undefined, { staticNetwork: true });
  const wallet = new ethers.Wallet(env.ATTESTER_PRIVATE_KEY, provider);
  return { provider, wallet, gate: new ethers.Contract(env.SLUICE_GATE_ADDRESS, GATE_ABI, wallet), asset: new ethers.Contract(env.SLUICE_ASSET_ADDRESS, ASSET_ABI, provider) };
}

async function snapshot(asset: ethers.Contract, gate: ethers.Contract, escrowOwner: string): Promise<PoolSnapshot> {
  const [totalSupply, holderAddrs, gateAddr] = await Promise.all([asset.totalSupply(), asset.holders(), gate.getAddress()]);
  const balances = await Promise.all((holderAddrs as string[]).map((a) => asset.balanceOf(a)));
  const gateIndex = (holderAddrs as string[]).findIndex((a) => a.toLowerCase() === gateAddr.toLowerCase());
  const escrow = gateIndex >= 0 ? balances[gateIndex] as bigint : 0n;
  const holders = (holderAddrs as string[])
    .map((address, i) => address.toLowerCase() === gateAddr.toLowerCase() ? null : { address, balance: balances[i] as bigint })
    .filter(Boolean) as { address: string; balance: bigint }[];
  const owner = holders.find((h) => h.address.toLowerCase() === escrowOwner.toLowerCase());
  if (owner) owner.balance += escrow;
  else if (escrow > 0n) holders.push({ address: escrowOwner, balance: escrow });
  return { totalSupply: totalSupply as bigint, holders };
}

async function settle(id: number, env: Env): Promise<Record<string, unknown>> {
  configureAi(env);
  const { provider, wallet, gate, asset } = clients(env);
  const raw = await gate.getRequest(id);
  if (Number(raw.status) !== PENDING) return { id, status: "already-settled" };
  const req = { requester: raw.requester as string, recipient: raw.recipient as string, amount: raw.amount as bigint, requestType: Number(raw.requestType) };
  const tx: ProposedTx = { type: req.requestType === 1 ? "REDEMPTION" : "TRANSFER", requester: req.requester, recipient: req.recipient, amount: req.amount };
  const snap = await snapshot(asset, gate, req.requester);
  const now = Math.floor(Date.now() / 1000);
  const decision = await decide(snap, tx, [], now, DEFAULT_CONFIG);
  const risk = assessRisk(snap, tx, [], now, DEFAULT_CONFIG);
  const aiClassification = decision.aiClassification ?? AI_CLASS.INSUFFICIENT_DATA;
  const aiConfidence = decision.aiConfidence ?? 0;
  const domain = { name: "SluiceGate", version: "1", chainId: (await provider.getNetwork()).chainId, verifyingContract: env.SLUICE_GATE_ADDRESS };
  const types = { Attestation: [{ name: "requestId", type: "uint256" }, { name: "decision", type: "uint8" }, { name: "reasonCode", type: "uint8" }, { name: "aiClassification", type: "uint8" }, { name: "riskScore", type: "uint32" }, { name: "deterministicScore", type: "uint32" }, { name: "aiConfidence", type: "uint32" }, { name: "timestamp", type: "uint32" }, { name: "expiry", type: "uint32" }] };
  const ttl = Number(env.ATTESTATION_TTL || DEFAULT_CONFIG.attestation.ttlSec);
  const attestation = {
    requestId: id,
    decision: decision.decision === "APPROVE" ? DECISION.APPROVE : DECISION.BLOCK,
    reasonCode: decision.decision === "BLOCK" ? (risk.hardBlock ? REASON.PROJECTED_CONCENTRATION : REASON.AI_REVIEW_BLOCK) : REASON.SAFE,
    aiClassification,
    riskScore: risk.deterministicScore,
    deterministicScore: risk.deterministicScore,
    aiConfidence,
    timestamp: now,
    expiry: now + ttl,
  };
  const signature = await wallet.signTypedData(domain, types, attestation);
  const att = { ...attestation, signature };
  const method = decision.decision === "APPROVE" ? "approve" : "blockRequest";
  const txResponse = await gate[method](id, att);
  const receipt = await txResponse.wait();
  lastDecision = { id, decision: decision.decision, deterministicScore: risk.deterministicScore, hardBlock: risk.hardBlock, primaryReason: decision.primaryReason, aiParticipated: decision.aiParticipated, aiClassification, aiConfidence, aiReason: decision.aiReason, aiProvider: configuredAiProvider(), at: new Date().toISOString(), txHash: receipt.hash };
  await workerCache().put(LAST_DECISION_CACHE_KEY, new Response(JSON.stringify(lastDecision), { headers: { "content-type": "application/json", "cache-control": "public, max-age=86400" } }));
  return { id, status: decision.decision, ...lastDecision };
}

async function processPending(env: Env, requestedId?: number): Promise<Record<string, unknown>[]> {
  const { gate } = clients(env);
  const ids: number[] = requestedId !== undefined ? [requestedId] : [];
  if (requestedId === undefined) {
    const counter = Number(await gate.requestCounter());
    // Keep each invocation below the Workers free-plan external subrequest cap.
    const start = Math.max(1, counter - 19);
    for (let id = start; id <= counter; id++) ids.push(id);
  }
  const results: Record<string, unknown>[] = [];
  for (const id of ids) {
    try { results.push(await settle(id, env)); } catch (error) { results.push({ id, status: "error", error: error instanceof Error ? error.message : String(error) }); }
  }
  return results;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders() });
    const url = new URL(request.url);
    try {
      if (request.method === "GET" && (url.pathname === "/" || url.pathname === "/health")) {
        configureAi(env);
        const provider = new ethers.JsonRpcProvider(env.SLUICE_RPC_URL, undefined, { staticNetwork: true });
        const [network, cachedDecision] = await Promise.all([provider.getNetwork(), workerCache().match(LAST_DECISION_CACHE_KEY)]);
        const decisionEvidence = cachedDecision ? await cachedDecision.json() : lastDecision;
        return json({
          ok: true,
          chainId: Number(network.chainId),
          gate: env.SLUICE_GATE_ADDRESS,
          asset: env.SLUICE_ASSET_ADDRESS,
          mode: "http+scheduled",
          aiProvider: configuredAiProvider(),
          groqConfigured: Boolean(env.GROQ_API_KEY),
          anthropicConfigured: Boolean(env.ANTHROPIC_API_KEY),
          attesterConfigured: Boolean(env.ATTESTER_PRIVATE_KEY),
          lastDecision: decisionEvidence,
        });
      }
      if (request.method === "POST" && url.pathname === "/process/latest") return json({ results: await processPending(env) });
      const match = url.pathname.match(/^\/process\/(\d+)$/);
      if (request.method === "POST" && match) return json({ results: await processPending(env, Number(match[1])) });
      return json({ error: "not found" }, 404);
    } catch (error) {
      return json({ error: error instanceof Error ? error.message : String(error) }, 500);
    }
  },
  async scheduled(_controller: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil(processPending(env).then((results) => console.log(JSON.stringify({ scheduled: true, results }))));
  },
};
