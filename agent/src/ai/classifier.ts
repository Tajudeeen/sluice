import type { AiContext, PoolSnapshot, ProposedTx, RiskAssessment } from "../types";

// AI CONTEXT LAYER: server-side ONLY.
//
// The model classifies behavioral context and never returns calldata or signs a
// transaction. Deterministic rules remain authoritative: AI can only tip a
// REVIEW-band request to BLOCK and can never override a hard block.

export interface ClassifierResult extends AiContext {}
export type AiProvider = "groq" | "anthropic" | "deterministic";

export interface AiRuntimeConfig {
  GROQ_API_KEY?: string;
  GROQ_MODEL?: string;
  ANTHROPIC_API_KEY?: string;
  ANTHROPIC_MODEL?: string;
}

let runtimeConfig: AiRuntimeConfig | undefined;

// Workers cannot read Node's process.env. The Node listener uses process.env by
// default; the Cloudflare adapter injects secrets through this hook.
export function configureAiEnvironment(config: AiRuntimeConfig): void {
  runtimeConfig = config;
}

function env(name: keyof AiRuntimeConfig): string | undefined {
  if (runtimeConfig?.[name]) return runtimeConfig[name];
  return typeof process !== "undefined" ? process.env[name] : undefined;
}

const SYSTEM = `You are a behavioral-risk classifier for an on-chain execution firewall called Sluice.
You analyze a proposed tokenized-asset transaction against the current and projected
holder distribution, recent transaction history, and deterministic risk scores.
You MUST return ONLY a single JSON object (no prose, no markdown) with this exact shape:
{
  "classification": "NORMAL" | "COORDINATED_CLUSTER_SUSPECT" | "WASH_TRADE_PATTERN_SUSPECT" | "UNUSUAL_ACTIVITY" | "INSUFFICIENT_DATA",
  "confidence": <number 0..1>,
  "reason": "<one concise sentence>"
}
You must NOT return code, calldata, or any instruction that could move funds.
Classify COORDINATED_CLUSTER_SUSPECT when several related wallets act together to
concentrate control. WASH_TRADE_PATTERN_SUSPECT when transfers bounce between the same
wallets to fake activity. UNUSUAL_ACTIVITY for timing/volume that is atypical. NORMAL
otherwise. Use INSUFFICIENT_DATA only when the provided context is genuinely too sparse.`;

export function configuredAiProvider(): AiProvider {
  if (env("GROQ_API_KEY")) return "groq";
  if (env("ANTHROPIC_API_KEY")) return "anthropic";
  return "deterministic";
}

export async function classify(
  snap: PoolSnapshot,
  tx: ProposedTx,
  risk: RiskAssessment,
  historySummary: string
): Promise<ClassifierResult> {
  const user = buildPrompt(snap, tx, risk, historySummary);

  if (env("GROQ_API_KEY")) {
    try {
      return sanitize(await classifyWithGroq(user));
    } catch (err) {
      return fallback(risk, `Groq unavailable: ${safeError(err)}`);
    }
  }

  if (env("ANTHROPIC_API_KEY")) {
    try {
      return sanitize(await classifyWithAnthropic(user));
    } catch (err) {
      return fallback(risk, `Anthropic unavailable: ${safeError(err)}`);
    }
  }

  return fallback(risk, "No AI API key configured; deterministic-only classification.");
}

function buildPrompt(
  snap: PoolSnapshot,
  tx: ProposedTx,
  risk: RiskAssessment,
  historySummary: string
): string {
  const top = snap.holders
    .slice()
    .sort((a, b) => (b.balance > a.balance ? 1 : -1))
    .slice(0, 5)
    .map((h) => ({
      address: h.address,
      pct: ((Number(h.balance) / Number(snap.totalSupply)) * 100).toFixed(2),
    }));

  // Convert bigint explicitly. JSON.stringify(bigint) throws and previously
  // caused every real provider call to fall back before reaching the API.
  return JSON.stringify({
    proposedTx: { ...tx, amount: tx.amount.toString() },
    currentHHI: risk.current.hhi,
    projectedHHI: risk.projected.hhi,
    projectedLargestHolderPct: risk.projected.largestHolderPct,
    topHolders: top,
    deterministicScore: risk.deterministicScore,
    concentrationScore: risk.concentrationScore,
    liquidityScore: risk.liquidityScore,
    anomalyScore: risk.anomalyScore,
    anomalyReasons: risk.anomalyReasons,
    recentHistory: historySummary,
  });
}

async function classifyWithGroq(user: string): Promise<string> {
  const model = env("GROQ_MODEL") || "openai/gpt-oss-20b";
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env("GROQ_API_KEY")}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model,
      temperature: 0,
      max_completion_tokens: 500,
      ...(model.includes("gpt-oss") ? { reasoning_effort: "low" } : {}),
      messages: [
        { role: "system", content: SYSTEM },
        { role: "user", content: user },
      ],
    }),
  });
  const body = await response.json() as any;
  if (!response.ok) {
    throw new Error(`${response.status} ${body?.error?.message || response.statusText}`);
  }
  return body?.choices?.[0]?.message?.content || "";
}

async function classifyWithAnthropic(user: string): Promise<string> {
  const Anthropic = (await import("@anthropic-ai/sdk")).default;
  const client = new Anthropic({ apiKey: env("ANTHROPIC_API_KEY") });
  const msg = await client.messages.create({
    model: env("ANTHROPIC_MODEL") || "claude-3-5-haiku-latest",
    max_tokens: 300,
    system: SYSTEM,
    messages: [{ role: "user", content: user }],
  });
  return msg.content
    .filter((b: any) => b.type === "text")
    .map((b: any) => b.text)
    .join("");
}

// Parse and validate model output. Unknown shapes cannot influence a decision.
function sanitize(raw: string): ClassifierResult {
  let parsed: any;
  try {
    const start = raw.indexOf("{");
    const end = raw.lastIndexOf("}");
    if (start < 0 || end <= start) throw new Error("missing JSON object");
    parsed = JSON.parse(raw.slice(start, end + 1));
  } catch {
    return { classification: "INSUFFICIENT_DATA", confidence: 0, reason: "AI returned invalid JSON" };
  }
  const allowed = [
    "NORMAL",
    "COORDINATED_CLUSTER_SUSPECT",
    "WASH_TRADE_PATTERN_SUSPECT",
    "UNUSUAL_ACTIVITY",
    "INSUFFICIENT_DATA",
  ];
  if (!allowed.includes(parsed.classification)) {
    return { classification: "INSUFFICIENT_DATA", confidence: 0, reason: "AI returned unknown classification" };
  }
  const confidence =
    typeof parsed.confidence === "number"
      ? Math.max(0, Math.min(1, parsed.confidence))
      : 0;
  return {
    classification: parsed.classification as ClassifierResult["classification"],
    confidence,
    reason: typeof parsed.reason === "string" ? parsed.reason.slice(0, 240) : "",
  };
}

function fallback(risk: RiskAssessment, unavailableReason: string): ClassifierResult {
  if (risk.hardBlock) {
    return {
      classification: "COORDINATED_CLUSTER_SUSPECT",
      confidence: 0.6,
      reason: `Deterministic hard-block signal present. ${unavailableReason}`,
    };
  }
  if (risk.anomalyScore >= 60) {
    return {
      classification: "UNUSUAL_ACTIVITY",
      confidence: 0.5,
      reason: `Elevated deterministic anomaly score. ${unavailableReason}`,
    };
  }
  return {
    classification: "INSUFFICIENT_DATA",
    confidence: 0,
    reason: unavailableReason,
  };
}

function safeError(err: unknown): string {
  const message = err instanceof Error ? err.message : String(err);
  return message.replace(/[\r\n]+/g, " ").slice(0, 160);
}
