import { ethers } from "ethers";
import { DurableObject } from "cloudflare:workers";
import { configureAiEnvironment, configuredAiProvider } from "../../agent/src/ai/classifier";
import { evaluatePolicy } from "../../agent/src/decision/policy";
import { DEFAULT_CONFIG, AI_CLASS, DECISION, REASON, MAX_SUPPORTED_HOLDERS } from "../../agent/src/config";
import type { PoolSnapshot, ProposedTx, RiskAssessment } from "../../agent/src/types";

export interface Env {
  SETTLEMENT_COORDINATOR: DurableObjectNamespace<SettlementCoordinator>;
  SLUICE_RPC_URL: string;
  SLUICE_GATE_ADDRESS: string;
  SLUICE_ASSET_ADDRESS: string;
  ATTESTER_PRIVATE_KEY: string;
  PROCESS_TOKEN?: string;
  DEMO_MODE_ENABLED?: string;
  DEMO_ATTACKER_PRIVATE_KEY?: string;
  DEMO_ATTACK_TARGET?: string;
  DEMO_ATTACK_AMOUNT?: string;
  GROQ_API_KEY?: string;
  GROQ_MODEL?: string;
  ANTHROPIC_API_KEY?: string;
  ANTHROPIC_MODEL?: string;
  ATTESTATION_TTL?: string;
}

const GATE_ABI = [
  "function getRequest(uint256 id) view returns (tuple(uint256 id, address requester, address recipient, uint256 amount, uint8 requestType, uint256 createdAt, uint8 status))",
  "function requestCounter() view returns (uint256)",
  "function requestTransfer(address to, uint256 amount) returns (uint256)",
  "function approve(uint256 requestId, tuple(uint256 requestId, uint8 decision, uint8 reasonCode, uint8 aiClassification, uint32 riskScore, uint32 deterministicScore, uint32 aiConfidence, uint32 timestamp, uint32 expiry, bytes signature) att)",
  "function blockRequest(uint256 requestId, tuple(uint256 requestId, uint8 decision, uint8 reasonCode, uint8 aiClassification, uint32 riskScore, uint32 deterministicScore, uint32 aiConfidence, uint32 timestamp, uint32 expiry, bytes signature) att)",
];
const ASSET_ABI = [
  "function totalSupply() view returns (uint256)",
  "function holderCount() view returns (uint256)",
  "function holderAt(uint256 index) view returns (address)",
  "function balanceOf(address) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
];
const PENDING = 0;
const DEFAULT_DEMO_ATTACK_AMOUNT = "900000";
const LAST_DECISION_CACHE_KEY = "https://sluice.internal/last-decision";
const PROCESS_CURSOR_CACHE_KEY = "https://sluice.internal/process-cursor";
const PROCESS_BATCH_SIZE = 1;
type HistoryEntry = { amount: bigint; timestamp: number; requester: string };
const HISTORY_STORAGE_KEY = "risk-history";

function workerCache(): Cache {
  return (caches as unknown as { default: Cache }).default;
}

function corsHeaders(): HeadersInit {
  return { "access-control-allow-origin": "*", "access-control-allow-methods": "GET,POST,OPTIONS", "access-control-allow-headers": "authorization,content-type" };
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
  const [totalSupply, holderCount, gateAddr] = await Promise.all([asset.totalSupply(), asset.holderCount(), gate.getAddress()]);
  const count = Number(holderCount);
  if (!Number.isSafeInteger(count) || count < 0 || count > MAX_SUPPORTED_HOLDERS) throw new Error(`Holder set exceeds safe scan limit: ${String(holderCount)}`);
  const holderAddrs: string[] = [];
  const balances: bigint[] = [];
  const batchSize = 100;
  for (let start = 0; start < count; start += batchSize) {
    const end = Math.min(count, start + batchSize);
    const addresses = await Promise.all(Array.from({ length: end - start }, (_, offset) => asset.holderAt(start + offset) as Promise<string>));
    const pageBalances = await Promise.all(addresses.map((address) => asset.balanceOf(address) as Promise<bigint>));
    holderAddrs.push(...addresses);
    balances.push(...pageBalances);
  }
  const gateIndex = holderAddrs.findIndex((a) => a.toLowerCase() === gateAddr.toLowerCase());
  const escrow = gateIndex >= 0 ? balances[gateIndex] as bigint : 0n;
  const holders = holderAddrs
    .map((address, i) => address.toLowerCase() === gateAddr.toLowerCase() ? null : { address, balance: balances[i] as bigint })
    .filter(Boolean) as { address: string; balance: bigint }[];
  const owner = holders.find((h) => h.address.toLowerCase() === escrowOwner.toLowerCase());
  if (owner) owner.balance += escrow;
  else if (escrow > 0n) holders.push({ address: escrowOwner, balance: escrow });
  return { totalSupply: totalSupply as bigint, holders };
}

async function settle(id: number, env: Env, history: HistoryEntry[], onEvaluated?: (entry: HistoryEntry) => Promise<void>): Promise<Record<string, unknown>> {
  configureAi(env);
  const { provider, wallet, gate, asset } = clients(env);
  const raw = await gate.getRequest(id);
  if (Number(raw.status) !== PENDING) return { id, status: "already-settled" };
  const req = { requester: raw.requester as string, recipient: raw.recipient as string, amount: raw.amount as bigint, requestType: Number(raw.requestType) };
  const tx: ProposedTx = { type: req.requestType === 1 ? "REDEMPTION" : "TRANSFER", requester: req.requester, recipient: req.recipient, amount: req.amount };
  const snap = await snapshot(asset, gate, req.requester);
  const now = Math.floor(Date.now() / 1000);
  const { decision, risk } = await evaluatePolicy(snap, tx, history, now, DEFAULT_CONFIG);
  const aiClassification = decision.aiClassification ?? AI_CLASS.INSUFFICIENT_DATA;
  const aiConfidence = decision.aiConfidence ?? 0;
  const domain = { name: "SluiceGate", version: "1", chainId: (await provider.getNetwork()).chainId, verifyingContract: env.SLUICE_GATE_ADDRESS };
  const types = { Attestation: [{ name: "requestId", type: "uint256" }, { name: "decision", type: "uint8" }, { name: "reasonCode", type: "uint8" }, { name: "aiClassification", type: "uint8" }, { name: "riskScore", type: "uint32" }, { name: "deterministicScore", type: "uint32" }, { name: "aiConfidence", type: "uint32" }, { name: "timestamp", type: "uint32" }, { name: "expiry", type: "uint32" }] };
  const ttl = Number(env.ATTESTATION_TTL || DEFAULT_CONFIG.attestation.ttlSec);
  const attestation = {
    requestId: id,
    decision: decision.decision === "APPROVE" ? DECISION.APPROVE : DECISION.BLOCK,
    reasonCode: decision.decision === "BLOCK" ? (risk.hardBlock ? risk.hardBlockReasonCode : REASON.AI_REVIEW_BLOCK) : REASON.SAFE,
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
  await onEvaluated?.({ amount: req.amount, timestamp: now, requester: req.requester });
  const decisionEvidence = { id, decision: decision.decision, deterministicScore: risk.deterministicScore, hardBlock: risk.hardBlock, primaryReason: decision.primaryReason, aiParticipated: decision.aiParticipated, aiClassification, aiConfidence, aiReason: decision.aiReason, aiProvider: configuredAiProvider(), at: new Date().toISOString(), txHash: receipt.hash };
  await workerCache().put(LAST_DECISION_CACHE_KEY, new Response(JSON.stringify(decisionEvidence), { headers: { "content-type": "application/json", "cache-control": "public, max-age=86400" } }));
  return { status: decision.decision, ...decisionEvidence };
}

async function processPending(env: Env, requestedId: number | undefined, history: HistoryEntry[], onEvaluated?: (entry: HistoryEntry) => Promise<void>): Promise<Record<string, unknown>[]> {
  const { gate } = clients(env);
  const ids: number[] = requestedId !== undefined ? [requestedId] : [];
  if (requestedId === undefined) {
    const counter = Number(await gate.requestCounter());
    if (counter === 0) return [];
    const cachedCursor = await workerCache().match(PROCESS_CURSOR_CACHE_KEY);
    const rawCursor = cachedCursor ? Number(await cachedCursor.text()) : 1;
    const start = Number.isSafeInteger(rawCursor) && rawCursor >= 1 && rawCursor <= counter ? rawCursor : 1;
    for (let offset = 0; offset < Math.min(PROCESS_BATCH_SIZE, counter); offset++) {
      ids.push(((start - 1 + offset) % counter) + 1);
    }
    const next = ((ids[ids.length - 1] ?? 0) % counter) + 1;
    await workerCache().put(PROCESS_CURSOR_CACHE_KEY, new Response(String(next), { headers: { "cache-control": "public, max-age=31536000" } }));
  }
  const results: Record<string, unknown>[] = [];
  for (const id of ids) {
    try { results.push(await settle(id, env, history, onEvaluated)); } catch (error) { results.push({ id, status: "error", error: error instanceof Error ? error.message : String(error) }); }
  }
  return results;
}

async function authorized(request: Request, env: Env): Promise<boolean> {
  if (!env.PROCESS_TOKEN) return false;
  const supplied = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ?? "";
  const encoder = new TextEncoder();
  const [expectedHash, suppliedHash] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(env.PROCESS_TOKEN)),
    crypto.subtle.digest("SHA-256", encoder.encode(supplied)),
  ]);
  const expected = new Uint8Array(expectedHash);
  const actual = new Uint8Array(suppliedHash);
  let difference = expected.length ^ actual.length;
  for (let i = 0; i < expected.length; i++) difference |= expected[i] ^ actual[i];
  return difference === 0;
}

async function runDemoAttack(env: Env, history: HistoryEntry[], onEvaluated?: (entry: HistoryEntry) => Promise<void>): Promise<Record<string, unknown>> {
  if (!env.DEMO_ATTACKER_PRIVATE_KEY) throw new Error("Demo attacker is not configured");
  const provider = new ethers.JsonRpcProvider(env.SLUICE_RPC_URL, undefined, { staticNetwork: true });
  const wallet = new ethers.Wallet(env.DEMO_ATTACKER_PRIVATE_KEY, provider);
  const gate = new ethers.Contract(env.SLUICE_GATE_ADDRESS, GATE_ABI, wallet);
  const asset = new ethers.Contract(env.SLUICE_ASSET_ADDRESS, ASSET_ABI, wallet);
  const attacker = await wallet.getAddress();
  const [holderCount, gateAddress] = await Promise.all([asset.holderCount() as Promise<bigint>, gate.getAddress()]);
  const count = Number(holderCount);
  if (!Number.isSafeInteger(count) || count < 0 || count > MAX_SUPPORTED_HOLDERS) throw new Error(`Holder set exceeds safe scan limit: ${String(holderCount)}`);
  const holderAddrs: string[] = [];
  const balances: bigint[] = [];
  for (let start = 0; start < count; start += 100) {
    const end = Math.min(count, start + 100);
    const addresses = await Promise.all(Array.from({ length: end - start }, (_, offset) => asset.holderAt(start + offset) as Promise<string>));
    const pageBalances = await Promise.all(addresses.map((address) => asset.balanceOf(address) as Promise<bigint>));
    holderAddrs.push(...addresses);
    balances.push(...pageBalances);
  }
  const candidates = holderAddrs
    .map((address, index) => ({ address, balance: balances[index] }))
    .filter(({ address, balance }) => balance > 0n && address.toLowerCase() !== attacker.toLowerCase() && address.toLowerCase() !== gateAddress.toLowerCase())
    .sort((a, b) => a.balance === b.balance ? 0 : a.balance > b.balance ? -1 : 1);
  const derivedTarget = candidates[0]?.address;
  const configuredTarget = env.DEMO_ATTACK_TARGET;
  const target = configuredTarget && ethers.isAddress(configuredTarget) && candidates.some(({ address }) => address.toLowerCase() === configuredTarget.toLowerCase())
    ? configuredTarget
    : derivedTarget;
  if (!target) throw new Error("Demo attack target could not be derived from live holders");
  const amountText = env.DEMO_ATTACK_AMOUNT || DEFAULT_DEMO_ATTACK_AMOUNT;
  const amount = ethers.parseUnits(amountText, 18);

  // One-shot guard persisted by the chain itself. A public caller cannot repeat
  // the demo and drain this wallet's native gas once it has created a request.
  const counter = Number(await gate.requestCounter());
  for (let id = 1; id <= counter; id++) {
    const existing = await gate.getRequest(id);
    if ((existing.requester as string).toLowerCase() === attacker.toLowerCase()) {
      let evidence: Record<string, unknown> | null = null;
      const cached = await workerCache().match(LAST_DECISION_CACHE_KEY);
      if (cached) {
        const candidate = await cached.json() as Record<string, unknown>;
        if (Number(candidate.id) === id) evidence = candidate;
      }
      let settlementHash = typeof evidence?.txHash === "string" ? evidence.txHash : null;
      if (!settlementHash && Number(existing.status) === 2) {
        const blockedTopic = ethers.id("RequestBlocked(uint256,address,uint256)");
        const idTopic = ethers.zeroPadValue(ethers.toBeHex(id), 32);
        const requesterTopic = ethers.zeroPadValue(attacker, 32);
        const latestBlock = await provider.getBlockNumber();
        const logs = await provider.getLogs({ address: env.SLUICE_GATE_ADDRESS, topics: [blockedTopic, idTopic, requesterTopic], fromBlock: Math.max(0, latestBlock - 100000), toBlock: latestBlock });
        settlementHash = logs.at(-1)?.transactionHash ?? null;
      }
      return { status: "already-run", requestId: id, attacker, target, requestHash: settlementHash, results: evidence ? [evidence] : [] };
    }
  }

  const balance = await asset.balanceOf(attacker) as bigint;
  if (balance < amount) throw new Error(`Demo attacker needs ${amountText} SLUSD; balance is ${ethers.formatUnits(balance, 18)}`);
  const approval = await asset.approve(env.SLUICE_GATE_ADDRESS, amount);
  await approval.wait();
  const request = await gate.requestTransfer(target, amount);
  const receipt = await request.wait();
  const requestId = Number(await gate.requestCounter());
  const results = await processPending(env, requestId, history, onEvaluated);
  return { status: "submitted", attacker, target, amount: amountText, requestId, approvalHash: approval.hash, requestHash: receipt.hash, results };
}

export class SettlementCoordinator extends DurableObject<Env> {
  private queue: Promise<unknown> = Promise.resolve();
  private history?: HistoryEntry[];

  private async loadHistory(): Promise<HistoryEntry[]> {
    if (!this.history) this.history = (await this.ctx.storage.get<HistoryEntry[]>(HISTORY_STORAGE_KEY)) ?? [];
    return this.history;
  }

  private enqueue<T>(work: () => Promise<T>): Promise<T> {
    const run = this.queue.then(work);
    this.queue = run.catch(() => undefined);
    return run;
  }

  private async recordHistory(entry: HistoryEntry): Promise<void> {
    const history = await this.loadHistory();
    const next = [...history, entry].slice(-DEFAULT_CONFIG.anomaly.windowSize);
    await this.ctx.storage.put(HISTORY_STORAGE_KEY, next);
    this.history = next;
  }

  process(requestedId?: number): Promise<Record<string, unknown>[]> {
    return this.enqueue(async () => {
      const history = await this.loadHistory();
      return processPending(this.env, requestedId, history, (entry) => this.recordHistory(entry));
    });
  }

  demoAttack(): Promise<Record<string, unknown>> {
    return this.enqueue(async () => {
      const history = await this.loadHistory();
      return runDemoAttack(this.env, history, (entry) => this.recordHistory(entry));
    });
  }
}

function coordinator(env: Env): DurableObjectStub<SettlementCoordinator> {
  return env.SETTLEMENT_COORDINATOR.getByName(env.SLUICE_GATE_ADDRESS.toLowerCase());
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
        const decisionEvidence = cachedDecision ? await cachedDecision.json() : null;
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
          demoAttackerConfigured: Boolean(env.DEMO_ATTACKER_PRIVATE_KEY),
          demoAttackerAddress: env.DEMO_ATTACKER_PRIVATE_KEY ? new ethers.Wallet(env.DEMO_ATTACKER_PRIVATE_KEY).address : null,
          lastDecision: decisionEvidence,
        });
      }
      if (request.method === "POST" && url.pathname === "/demo/attack") {
        if (env.DEMO_MODE_ENABLED !== "true") return json({ error: "not found" }, 404);
        if (!await authorized(request, env)) return json({ error: "unauthorized" }, 401);
        return json(await coordinator(env).demoAttack());
      }
      if (request.method === "POST" && url.pathname === "/process/latest") {
        if (!await authorized(request, env)) return json({ error: "unauthorized" }, 401);
        return json({ results: await coordinator(env).process() });
      }
      const match = url.pathname.match(/^\/process\/(\d+)$/);
      if (request.method === "POST" && match) {
        if (!await authorized(request, env)) return json({ error: "unauthorized" }, 401);
        return json({ results: await coordinator(env).process(Number(match[1])) });
      }
      return json({ error: "not found" }, 404);
    } catch (error) {
      return json({ error: error instanceof Error ? error.message : String(error) }, 500);
    }
  },
  async scheduled(_controller: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil((async () => {
      const results = await coordinator(env).process();
      console.log(JSON.stringify({ scheduled: true, results }));
    })());
  },
};
