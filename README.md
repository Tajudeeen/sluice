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
4. The **gate is the final enforcement point**: it re-checks the attester signature,
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
            │  SluiceGate  │  approve()/blockRequest() : verifies attester + expiry + replay
            └──────────────┘
```

- `contracts/src/SluiceGate.sol`: the firewall (lock → attest → settle/refund, timeout refund).
- `contracts/src/SluiceAsset.sol`: synthetic gated asset (direct transfers rejected).
- `contracts/src/AttesterRegistry.sol`: single authorized attester (upgrade path to N-of-M).
- `contracts/src/AttackToken.sol`: test-only reentrancy probe.
- `agent/src/`: deterministic risk engine (`risk/*`), AI classifier (`ai/`), decision
  engine (`decision/`), and the runtime `listener.ts` that watches + settles.
- `frontend/`: Vite + React + wagmi demo UI (read pool state, submit requests).

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
- **40–69 → REVIEW**: an AI contextual signal *may* tip a clearly-suspect pattern to
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
review band, set `ANTHROPIC_API_KEY`: without it the system runs a deterministic
fallback and labels itself `INSUFFICIENT_DATA` honestly.

## Local end-to-end demo (the real loop)

Everything below is a REAL on-chain transaction on a local Hardhat node: no mocks.

```bash
# 1) start a local node
npx hardhat node --hostname 127.0.0.1 --port 8545
# 2) in another shell: deploy + seed a healthy demo pool, print .env lines
npm run deploy:local
# 3) run the attester agent (paste the ATTESTER_*/SLUICE_* lines from step 2 into .env)
npm run agent
# 4) drive the two required flows + read back on-chain state
npx tsx scripts/demo-local.ts && npx tsx scripts/check-status.ts
# 5) (optional) open the UI: connect a wallet, use the faucet, try the live forms
npm run frontend   # http://localhost:5173
```

### Demo math (why the attack actually breaches)
- Base pool: 1,000,000 SLUSD across 6 holders, largest = **35%** (HHI ≈ 0.21, healthy).
- Synthetic demo-attacker (Hardhat account #1, no real funds) is seeded **500,000 SLUSD**.
- Concentration attack: the attacker transfers **450,000 SLUSD** into the largest holder
  (a fixed, predefined target: never an arbitrary address). After: that holder owns
  800k of 1.5M = **53%** → deterministic hard-block (`LARGEST_HOLDER_LIMIT`, ≥50%).
- NORMAL flow: a small transfer to a fresh address keeps the pool healthy → **APPROVE**.

Verified run (see `docs/PROOF-local-e2e.md`): req #1 APPROVE (score 13), req #2 BLOCK
(hard block, projected top holder 51.6% ≥ 50%). Settlement/refund tx hashes are in the proof file.

## Tests

```bash
npm test            # Hardhat contract tests (24): firewall, gating, reentrancy, timeout
npm run test:agent  # Vitest agent tests (16): HHI/liquidity/anomaly math + decision bands
```

## Deploy to BOT Chain (chainId 677)

```bash
# set BOT_RPC_URL / DEPLOYER_PRIVATE_KEY / ATTESTER_PRIVATE_KEY in .env
# IMPORTANT: the deployer key MUST hold BOT for gas: the script aborts cleanly
# if its balance is 0 (it will NOT hang on an unmineable tx).
npm run deploy:bot
npm run verify:bot
```

## Live demo mirror (no mainnet gas needed)

The build link you hand reviewers should show a **working firewall**, not an empty
shell. Before the BOT mainnet token arrives, deploy the exact same contracts to
**Sepolia** (free test ETH) and bake those addresses into the frontend build:

```bash
# 1) fund a deployer wallet with Sepolia ETH (faucet: sepoliafaucet.com), then:
export DEPLOYER_PRIVATE_KEY=0x... ATTESTER_PRIVATE_KEY=0x...
npm run deploy:sepolia                 # writes artifacts/deployment.sepolia.json + artifacts/deployment.frontend.env

# 2) build the hosted frontend from that deploy:
cp artifacts/deployment.frontend.env frontend/.env
npm run frontend:build -- --base=/sluice/

# 3) publish to GitHub Pages (see scripts/publish-pages.sh)
bash scripts/publish-pages.sh
```

The hosted build now shows the live gate + asset, the attester agent settles
requests in real time, and the concentration-attack simulator runs on-chain.
When the BOT token arrives, repeat with `npm run deploy:bot` and rebuild — the
only difference is the network.

## Hosted build

The frontend is a static SPA. It reads `VITE_*` addresses at build time, so a
build without `VITE_GATE_ADDRESS`/`VITE_ASSET_ADDRESS` shows an intentional
**Demo mode** banner (the firewall is proven locally; deployment is gated on the
mainnet-gas token) instead of a broken state. Publish with `scripts/publish-pages.sh`
to a `gh-pages` branch and enable GitHub Pages (root) in repo Settings.

Security invariants

- Off-chain agent is advisory enforcement, never custody. The gate re-verifies everything.
- `timeoutRelease` guarantees users are refunded if the agent is offline.
- Replay-guarded attestations + `nonReentrant` settlement + gated asset (no direct bypass).

## Disclaimer

Sluice is a demo. `SLUSD` is synthetic and not a real-world asset. The single-attester
model is v1 (owner-controlled registry): the upgrade path to N-of-M attester quorum is
isolated by design.
