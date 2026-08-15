// Sluice Agent: the off-chain execution arbiter.
//
// Loads .env so `npm run agent` picks up SLUICE_* / ATTESTER_* secrets without a
// separate dotenv step. (Running under `node dist/listener.js` has no bundler.)
import "dotenv/config";

// Watches the deployed SluiceGate for RequestCreated events. For each pending
// request it:
//   1. Builds a PoolSnapshot from the on-chain holder distribution + supply.
//   2. Runs the DETERMINISTIC risk engine + (optional) AI contextual classifier.
//   3. Signs an EIP-712 Attestation with the attester key.
//   4. Submits approve() or blockRequest() to the gate.
//
// CRITICAL DESIGN INVARIANT (honest enforcement boundary):
//   The agent CANNOT move funds. It only ever produces a signed Attestation and a
//   call to approve()/blockRequest(). The on-chain gate is the FINAL enforcement
//   point and re-checks the attester signature + replay + expiry itself. If the
//   agent crashes, goes offline, or is malicious, the gate's timeoutRelease still
//   refunds the user. The agent is advisory enforcement, never custody.
//
// The agent is deterministic-first: the risk engine output drives the decision.
// An LLM (if ANTHROPIC_API_KEY is set) may only tip a mid-risk REVIEW-band request
// to BLOCK; it can NEVER flip a deterministic HARD BLOCK or turn a BLOCK into APPROVE.

import { ethers } from "ethers";
import { DEFAULT_CONFIG, REASON, AI_CLASS, DECISION, type SluiceConfig } from "./config";
import { decide, assessRisk } from "./decision/decision";
import type { PoolSnapshot, ProposedTx, RiskAssessment } from "./types";

const GATE_ABI = [
  "event RequestCreated(uint256 indexed id, address indexed requester, address indexed recipient, uint256 amount, uint8 requestType)",
  "function getRequest(uint256 id) view returns (tuple(uint256 id, address requester, address recipient, uint256 amount, uint8 requestType, uint256 createdAt, uint8 status))",
  "function approve(uint256 requestId, tuple(uint256 requestId, uint8 decision, uint8 reasonCode, uint8 aiClassification, uint32 riskScore, uint32 deterministicScore, uint32 aiConfidence, uint32 timestamp, uint32 expiry, bytes signature) att)",
  "function blockRequest(uint256 requestId, tuple(uint256 requestId, uint8 decision, uint8 reasonCode, uint8 aiClassification, uint32 riskScore, uint32 deterministicScore, uint32 aiConfidence, uint32 timestamp, uint32 expiry, bytes signature) att)",
  "function timeout() view returns (uint256)",
];

const ASSET_ABI = [
  "function totalSupply() view returns (uint256)",
  "function holders() view returns (address[])",
  "function balanceOf(address) view returns (uint256)",
];

const REQUEST_TYPE = { TRANSFER: 0, REDEMPTION: 1 } as const;
const REQUEST_STATUS = { PENDING: 0, APPROVED: 1, BLOCKED: 2, TIMED_OUT: 3 } as const;

export interface ListenerConfig {
  rpcUrl: string;
  gateAddress: string;
  assetAddress: string;
  // The SINGLE authorized attester private key (v1). Server-side secret: never
  // exposed to any frontend.
  attesterPrivateKey: string;
  config?: SluiceConfig;
  // How long a signed attestation stays valid (seconds). Must exceed the time the
  // agent needs to sign + submit. Defaults to 600.
  attestationTtlSec?: number;
  // Poll interval when not using WebSocket subscriptions (ms).
  pollIntervalMs?: number;
  // Quiet mode: poll instead of WS (useful on RPCs without eth_subscribe).
  usePolling?: boolean;
  // Optional request-id filter / starting point (resume after restart).
  fromBlock?: number;
}

export class SluiceAgent {
  private cfg: Required<Omit<ListenerConfig, "config">> & { config: SluiceConfig };
  private provider: ethers.JsonRpcProvider;
  private wallet: ethers.Wallet;
  private gate: ethers.Contract;
  private asset: ethers.Contract;
  private processed = new Set<number>();
  private history: { amount: bigint; timestamp: number; requester: string }[] = [];
  private running = false;

  constructor(input: ListenerConfig) {
    const ttl = input.attestationTtlSec ?? 600;
    this.cfg = {
      rpcUrl: input.rpcUrl,
      gateAddress: input.gateAddress,
      assetAddress: input.assetAddress,
      attesterPrivateKey: input.attesterPrivateKey,
      config: input.config ?? DEFAULT_CONFIG,
      attestationTtlSec: ttl,
      pollIntervalMs: input.pollIntervalMs ?? 4000,
      usePolling: input.usePolling ?? false,
      fromBlock: input.fromBlock ?? 0,
    };
    this.provider = new ethers.JsonRpcProvider(this.cfg.rpcUrl, undefined, { staticNetwork: true });
    this.wallet = new ethers.Wallet(this.cfg.attesterPrivateKey, this.provider);
    this.gate = new ethers.Contract(this.cfg.gateAddress, GATE_ABI, this.wallet);
    this.asset = new ethers.Contract(this.cfg.assetAddress, ASSET_ABI, this.provider);
    console.log(`[sluice-agent] attester ${this.wallet.address} watching gate ${this.cfg.gateAddress}`);
  }

  async start() {
    this.running = true;
    // One-pass catch-up of any requests created while we were offline.
    await this.catchUp();

    if (!this.cfg.usePolling) {
      // Best effort: if the RPC exposes eth_subscribe (WebSocket transport),
      // subscribe; otherwise the gateway below falls back to polling on error.
      try {
        this.gate.on("RequestCreated", (id: bigint) => this.handle(Number(id)).catch((e) => this.logErr(e)));
        console.log("[sluice-agent] subscribed via event emitter (RequestCreated).");
        return;
      } catch (e) {
        this.logErr(e);
      }
    }
    {
      console.log(`[sluice-agent] polling every ${this.cfg.pollIntervalMs}ms.`);
      const loop = async () => {
        while (this.running) {
          try {
            await this.poll();
          } catch (e) {
            this.logErr(e);
          }
          await new Promise((r) => setTimeout(r, this.cfg.pollIntervalMs));
        }
      };
      loop();
    }
  }

  stop() {
    this.running = false;
    this.gate.removeAllListeners?.();
  }

  // -------------------- snapshot + engine --------------------

  // Build the on-chain holder distribution. The gate holds the requester's LOCKED
  // escrow for any pending request; that supply still economically belongs to the
  // requester. We attribute the gate's escrow back to `escrowOwner` (the requester
  // of the request being evaluated) so concentration math reflects who really owns
  // the supply: otherwise a transfer would be double-counted (credited to the
  // recipient while also vanishing from the gate), masking concentration breaches.
  private async buildSnapshot(escrowOwner?: string): Promise<PoolSnapshot> {
    const [totalSupply, holderAddrs, gateAddr] = await Promise.all([
      this.asset.totalSupply(),
      this.asset.holders(),
      this.gate.getAddress(),
    ]);
    const balances = await Promise.all(
      holderAddrs.map((a: string) => this.asset.balanceOf(a))
    );
    const gateIdx = holderAddrs.findIndex((a: string) => a.toLowerCase() === gateAddr.toLowerCase());
    const escrow = gateIdx >= 0 ? (balances[gateIdx] as bigint) : 0n;

    const holders: { address: string; balance: bigint }[] = holderAddrs
      .map((addr: string, i: number) => {
        if (addr.toLowerCase() === gateAddr.toLowerCase()) return null; // handle escrow separately
        return { address: addr, balance: balances[i] as bigint };
      })
      .filter(Boolean) as { address: string; balance: bigint }[];

    if (escrowOwner) {
      const existing = holders.find((h) => h.address.toLowerCase() === escrowOwner.toLowerCase());
      if (existing) existing.balance += escrow;
      else if (escrow > 0n) holders.push({ address: escrowOwner, balance: escrow });
    }
    return { totalSupply: totalSupply as bigint, holders };
  }

  private toProposedTx(req: {
    requester: string;
    recipient: string;
    amount: bigint;
    requestType: number;
  }): ProposedTx {
    return {
      type: req.requestType === REQUEST_TYPE.REDEMPTION ? "REDEMPTION" : "TRANSFER",
      requester: req.requester,
      recipient: req.recipient,
      amount: req.amount as bigint,
    };
  }

  // Pure helper: run the engine and return the decision + risk assessment.
  // Exposed so the frontend/tests can preview a decision without submitting.
  async evaluate(req: {
    requester: string;
    recipient: string;
    amount: bigint;
    requestType: number;
    nowSec?: number;
  }): Promise<{ decision: ReturnType<typeof decide> extends Promise<infer T> ? T : never; risk: RiskAssessment; tx: ProposedTx; snap: PoolSnapshot }> {
    const snap = await this.buildSnapshot(req.requester);
    const tx = this.toProposedTx(req);
    const now = req.nowSec ?? Math.floor(Date.now() / 1000);
    const decision = await decide(snap, tx, this.history, now, this.cfg.config);
    const risk = assessRisk(snap, tx, this.history, now, this.cfg.config);
    return { decision, risk, tx, snap } as any;
  }

  // -------------------- attestation signing --------------------

  private async signAttestation(requestId: number, decision: "APPROVE" | "BLOCK", risk: RiskAssessment, aiCode: number, aiConfidence: number, nowSec: number) {
    const domain = {
      name: "SluiceGate",
      version: "1",
      chainId: (await this.provider.getNetwork()).chainId,
      verifyingContract: this.cfg.gateAddress,
    };
    const types = {
      Attestation: [
        { name: "requestId", type: "uint256" },
        { name: "decision", type: "uint8" },
        { name: "reasonCode", type: "uint8" },
        { name: "aiClassification", type: "uint8" },
        { name: "riskScore", type: "uint32" },
        { name: "deterministicScore", type: "uint32" },
        { name: "aiConfidence", type: "uint32" },
        { name: "timestamp", type: "uint32" },
        { name: "expiry", type: "uint32" },
      ],
    };
    const reasonCode = decision === "BLOCK" ? (risk.hardBlock ? REASON.PROJECTED_CONCENTRATION : REASON.AI_REVIEW_BLOCK) : REASON.SAFE;
    const value = {
      requestId,
      decision: decision === "APPROVE" ? DECISION.APPROVE : DECISION.BLOCK,
      reasonCode,
      aiClassification: aiCode,
      riskScore: risk.deterministicScore,
      deterministicScore: risk.deterministicScore,
      aiConfidence,
      timestamp: nowSec,
      expiry: nowSec + this.cfg.attestationTtlSec,
    };
    const signature = await this.wallet.signTypedData(domain, types, value);
    return {
      requestId,
      decision: value.decision,
      reasonCode: value.reasonCode,
      aiClassification: aiCode,
      riskScore: value.riskScore,
      deterministicScore: value.deterministicScore,
      aiConfidence: value.aiConfidence,
      timestamp: value.timestamp,
      expiry: value.expiry,
      signature,
    };
  }

  // -------------------- request handling --------------------

  private async handle(requestId: number) {
    if (this.processed.has(requestId)) return;
    const raw = await this.gate.getRequest(requestId);
    if (Number(raw.status) !== REQUEST_STATUS.PENDING) return;
    this.processed.add(requestId);

    const req = {
      requester: raw.requester,
      recipient: raw.recipient,
      amount: raw.amount as bigint,
      requestType: Number(raw.requestType),
    };
    const nowSec = Math.floor(Date.now() / 1000);
    const { decision, risk } = await this.evaluate(req);

    // Record into sliding anomaly history (what we just acted on).
    this.history.push({ amount: req.amount, timestamp: nowSec, requester: req.requester });
    if (this.history.length > this.cfg.config.anomaly.windowSize) {
      this.history.shift();
    }

    const aiCode = (decision as any).aiClassification ?? AI_CLASS.INSUFFICIENT_DATA;
    const aiConf = (decision as any).aiConfidence ?? 0;
    const att = await this.signAttestation(requestId, decision.decision, risk, aiCode, aiConf, nowSec);

    console.log(
      `[sluice-agent] req ${requestId} ${decision.decision} | score=${risk.deterministicScore} ` +
        `hardBlock=${risk.hardBlock} reason=${decision.primaryReason}`
    );

    const method = decision.decision === "APPROVE" ? "approve" : "blockRequest";
    const tx = await this.gate[method](requestId, att);
    const receipt = await tx.wait();
    console.log(`[sluice-agent] submitted ${method}(${requestId}) -> ${receipt.hash}`);
  }

  // -------------------- catch-up / polling --------------------

  private async catchUp() {
    try {
      const current = await this.provider.getBlockNumber();
      const from = this.cfg.fromBlock || Math.max(0, current - 5000);
      const filter = this.gate.filters.RequestCreated();
      const logs = await this.gate.queryFilter(filter, from, current);
      for (const l of logs) {
        await this.handle(Number((l as any).args.id));
      }
    } catch (e) {
      this.logErr(e);
    }
  }

  private async poll() {
    const current = await this.provider.getBlockNumber();
    const from = this.cfg.fromBlock || Math.max(0, current - 20);
    const filter = this.gate.filters.RequestCreated();
    const logs = await this.gate.queryFilter(filter, from, current);
    for (const l of logs) {
      await this.handle(Number((l as any).args.id));
    }
    this.cfg.fromBlock = current + 1;
  }

  private logErr(e: unknown) {
    console.error("[sluice-agent] error:", e instanceof Error ? e.message : e);
  }
}

// CLI entrypoint: `npm run agent`. Reads config from env (see .env.example).
async function main() {
  const rpc = process.env.SLUICE_RPC_URL || "http://127.0.0.1:8545";
  const gate = process.env.SLUICE_GATE_ADDRESS || process.env.VITE_GATE_ADDRESS;
  const asset = process.env.SLUICE_ASSET_ADDRESS || process.env.VITE_ASSET_ADDRESS;
  const key = process.env.ATTESTER_PRIVATE_KEY;
  if (!gate || !asset || !key) {
    throw new Error(
      "Missing env: need SLUICE_GATE_ADDRESS (or VITE_GATE_ADDRESS), SLUICE_ASSET_ADDRESS (or VITE_ASSET_ADDRESS), and ATTESTER_PRIVATE_KEY."
    );
  }
  const agent = new SluiceAgent({
    rpcUrl: rpc,
    gateAddress: gate,
    assetAddress: asset,
    attesterPrivateKey: key,
    attestationTtlSec: process.env.ATTESTATION_TTL ? Number(process.env.ATTESTATION_TTL) : 600,
    usePolling: process.env.SLUICE_POLL === "1",
  });
  await agent.start();
}

// Run only when invoked directly (node dist/listener.js).
if (require.main === module) {
  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}

export default SluiceAgent;
