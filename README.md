# Sluice

**AI-native execution firewall for tokenized assets.**

Sluice is an on-chain firewall for moving tokenized assets. Every transfer or
redemption is **locked first, evaluated second, settled last**:

1. A user calls `requestTransfer` / `requestRedeem` on the `SluiceGate`. Funds are
   pulled into escrow and a `RequestCreated` event is emitted. The request is `PENDING`.
2. An off-chain **attester agent** watches the gate, builds a `PoolSnapshot` from the
   on-chain holder distribution, and runs a **deterministic risk engine** + an optional
   **AI contextual classifier**.
3. The agent signs an **EIP-712 attestation** (approve / block) with the authorized
   attester key and submits it to the gate.
4. The **gate is the final enforcement point** — it re-checks the attester signature,
   replay, expiry, and request state before releasing or refunding. If the agent is
   unavailable past `timeout`, anyone may call `timeoutRelease` to refund the user.

> The blockchain is the final authority. The agent can never move funds; it only
> produces a signed attestation. There is no bypass: `SluiceAsset` rejects direct
> ERC-20 transfers (only the gate may move tokens).

`SLUSD` (Sluice Liquidity Unit) is a **synthetic demo token** and does not represent
any real-world asset.

## Architecture

```
            ┌──────────────┐
 user ─────▶│  SluiceGate  │  locks funds, emits RequestCreated
            │  (firewall)  │
            └──────┬───────┘
                   │ RequestCreated (event)
                   ▼
            ┌──────────────┐   buildSnapshot()   ┌──────────────────────┐
            │  SluiceAgent │◀────────────────────│ SluiceAsset (SLUSD)  │
            │  (off-chain) │  holders()/supply()  │  gated: only gate     │
            └──────┬───────┘                      │  moves tokens         │
                   │ decide() → signTypedData
                   ▼
            ┌──────────────┐
            │  SluiceGate  │  approve()/blockRequest()  — verifies attester + expiry + replay
            └──────────────┘
```

- `contracts/src/SluiceGate.sol` — the firewall (lock → attest → settle/refund, timeout refund).
- `contracts/src/SluiceAsset.sol` — synthetic gated asset (direct transfers rejected).
- `contracts/src/AttesterRegistry.sol` — single authorized attester (upgrade path to N-of-M).
- `contracts/src/AttackToken.sol` — test-only reentrancy probe.
- `agent/src/` — deterministic risk engine (`risk/*`), AI classifier (`ai/`), decision
  engine (`decision/`), and the runtime `listener.ts` that watches + settles.
- `frontend/` — Vite + React + wagmi demo UI (read pool state, submit requests).

## Risk model (transparent, auditable)

The decision engine combines three weighted, BigInt-safe component scores:

| Component    | Weight | What it measures                                            |
|--------------|--------|-------------------------------------------------------------|
| Concentration | 40     | Herfindahl-Hirschman Index (HHI) + largest-holder %         |
| Liquidity     | 35     | post-redemption liquidity ratio (redemptions burn supply)  |
| Anomaly       | 25     | sliding-window: large amount, burst, repeated requester     |

Policy bands (`agent/src/config.ts`, all tunable in ONE place):

- **Hard block (deterministic, LLM cannot override):** projected HHI ≥ 0.35, projected
  largest holder ≥ 50%, post-redemption liquidity < 20%, or anomaly score ≥ 85.
- **0–39 → APPROVE** (no AI needed).
- **40–69 → REVIEW** — an AI contextual signal *may* tip a clearly-suspect pattern to
  BLOCK, but cannot flip a deterministic block to approve.
- **70–100 → BLOCK.**

All thresholds live in `DEFAULT_CONFIG` so judges can inspect the policy directly.

## Quick start

```bash
npm install

# 1) Start a local Hardhat node
npm run node                      # http://127.0.0.1:8545

# 2) Deploy registry + asset + gate, seed the demo distribution
npm run deploy:local             # writes artifacts/deployment.localhost.json

# 3) Run the attester agent (needs ATTESTER_PRIVATE_KEY + gate/asset addresses)
#    Copy the VITE_* + ATTESTER_* lines from the deploy output into .env, then:
npm run agent

# 4) (optional) demo frontend
npm run frontend                 # http://localhost:5173
```

Set `SLUICE_GATE_ADDRESS`, `SLUICE_ASSET_ADDRESS`, and `ATTESTER_PRIVATE_KEY` for the
agent (see `.env.example`). The agent reads `.env` via `dotenv`. To exercise the AI
review band, set `ANTHROPIC_API_KEY` — without it the system runs a deterministic
fallback and labels itself `INSUFFICIENT_DATA` honestly.

## Tests

```bash
npm test            # Hardhat contract tests (24) — firewall, gating, reentrancy, timeout
npm run test:agent  # Vitest agent tests (16) — HHI/liquidity/anomaly math + decision bands
```

## Deploy to BOT Chain (chainId 677)

```bash
# set BOT_RPC_URL / DEPLOYER_PRIVATE_KEY / ATTESTER_PRIVATE_KEY in .env
npm run deploy:bot
npm run verify:bot
```

## Security invariants

- Off-chain agent is advisory enforcement, never custody. The gate re-verifies everything.
- `timeoutRelease` guarantees users are refunded if the agent is offline.
- Replay-guarded attestations + `nonReentrant` settlement + gated asset (no direct bypass).

## Disclaimer

Sluice is a demo. `SLUSD` is synthetic and not a real-world asset. The single-attester
model is v1 (owner-controlled registry) — the upgrade path to N-of-M attester quorum is
isolated by design.
