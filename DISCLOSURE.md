# Sluice — Disclosure

**Sluice is a hackathon demo, not a production system.** It is an *AI-native
execution firewall for tokenized assets* built for the BOT Chain Builder
Challenge #2. Everything below is disclosed plainly so reviewers can judge it
without reading the source.

## 1. The asset is synthetic

- `SLUSD` (Sluice Liquidity Unit) is a **synthetic** ERC-20 minted only for this
  demo. It represents **no real-world asset, no custody, no claim on anything**.
- There is a `faucet()` on the asset that mints synthetic SLUSD to any caller so
  a browser user can drive the real request → settle loop. It is owner-gated in
  spirit (capped per call) and exists purely to make the demo reachable.
- Nothing in Sluice touches real money. Deployments to BOT Chain Mainnet use
  real gas, but the contracts only ever move synthetic SLUSD.

## 2. Single attester in v1 (not consensus)

- Sluice v1 uses a **single authorized attester**, registered in
  `AttesterRegistry`. The off-chain agent signs EIP-712 attestations with that
  one key; the gate verifies the signature + replay + expiry + pending state
  before settling.
- This is **NOT** decentralized guardian consensus, NOT multi-party consensus,
  and NOT autonomous financial decision-making. It is an explicit v1 design with
  a clean upgrade path to N-of-M (the registry already isolates the attester
  set).
- The gate remains the final enforcement point: if the attester is unavailable
  past `timeout`, **anyone** may call `timeoutRelease` to refund the user.

## 3. The AI is advisory only

- The LLM (Anthropic, server-side, key never exposed to the frontend) is a
  **contextual classifier**. It returns a structured `NORMAL / SUSPECT / …`
  label, never calldata, never instructions, never a transaction.
- The **deterministic risk engine is authoritative**. A deterministic hard block
  (projected HHI ≥ 0.35, projected largest holder ≥ 50%, post-redemption
  liquidity < 20%, or anomaly ≥ 85) **always wins** — the LLM cannot flip a
  hard block to APPROVE, and cannot turn a BLOCK into APPROVE.
- If `ANTHROPIC_API_KEY` is absent, the system runs a deterministic fallback and
  honestly labels itself `INSUFFICIENT_DATA`. The demo works end-to-end without
  any LLM.

## 4. No fake claims

Sluice does **not** claim: real RWA custody, regulatory compliance,
institutional-grade compliance, decentralized consensus, multi-agent consensus,
autonomous financial decision-making, or production security guarantees. The
strongest true claim is: *a risky tokenized-asset transaction can be detected
before settlement and prevented by an on-chain execution gate.*

## 5. The "concentration attack" simulator is real, bounded, and synthetic

- The simulator originates a **real on-chain** `requestTransfer` from a
  **predefined synthetic demo wallet** (Hardhat test account #1 — no real funds,
  only synthetic SLUSD) to a **fixed, never-funded target address**.
- It can **never** target arbitrary addresses or arbitrary amounts (spec §28).
  The resulting request is evaluated by the real agent and **BLOCKED** by the
  real gate; the BLOCK is visible on the explorer. The before/after projection
  shown in the UI is computed from the live on-chain holder set, not faked.
- No mainnet faucet is claimable by the public. The simulator's demo-attacker
  key is only emitted by `scripts/deploy.ts` when deploying to a local/Hardhat
  node.

## 6. What was reused / changed

- `SluiceAsset` (gated ERC-20), `SluiceGate` (lock → attest → settle/refund with
  EIP-712 + reentrancy guard), `AttesterRegistry`, the off-chain risk engine
  (HHI / liquidity / anomaly), the decision engine, the attester agent
  (`listener.ts`), and the Vite + React + wagmi frontend were written
  specifically for Sluice.
- Third-party: OpenZeppelin Contracts v5 (ERC-20, Ownable, EIP712, ECDSA,
  ReentrancyGuard), ethers v6, viem, wagmi, Hardhat, Vite, React, Anthropic SDK.
  No external risk-engine or firewall code was copied in; the engine here is
  purpose-built and kept deliberately small and auditable.

## 7. Known limitations

- Single attester (v1) — see §2.
- Anomaly detector is a deterministic sliding-window heuristic, not ML.
- Liquidity model treats the synthetic pool's supply as its liquidity; it is a
  teaching model, not a market-depth measure.
- Frontend reads on-chain state via a public RPC; for a long-lived public demo
  you would front it with your own RPC/explorer indexer.
