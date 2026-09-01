# Sluice Markets — Build Documentation

This document is the single source of truth for the Sluice Markets build. It covers
what the product is, the problems it solves, how it works, how to run it, and how to
verify it. For submission positioning and rubric mapping, see
`docs/DORAHACKS-SUBMISSION.md`. For on-chain proof records, see
`docs/PROOF-local-e2e.md`.

---

## Table of contents

1. [Overview](#1-overview)
2. [The problem](#2-the-problem)
3. [The solution](#3-the-solution)
4. [Products and features](#4-products-and-features)
5. [How to use it](#5-how-to-use-it)
6. [Architecture](#6-architecture)
7. [The Safe Size algorithm](#7-the-safe-size-algorithm)
8. [Execution policy and checks](#8-execution-policy-and-checks)
9. [On-chain enforcement (SluiceGate)](#9-on-chain-enforcement-sluicegate)
10. [Wallet connection](#10-wallet-connection)
11. [Deployment](#11-deployment)
12. [Verification and testing](#12-verification-and-testing)
13. [Repository layout](#13-repository-layout)
14. [Environment variables](#14-environment-variables)
15. [Disclaimer](#15-disclaimer)

---

## 1. Overview

Sluice Markets is a DreamDEX Event Contracts trading terminal for Somnia Shannon.
Its differentiator is **downside-capped Safe Size**: the trader states the maximum
tUSDC they are willing to lose, and Sluice compiles that budget into the largest
order that passes the live book, slippage, exposure, expiry, and collateral checks.

- **Live app:** https://tajudeeen.github.io/sluice/
- **Network:** Somnia Shannon testnet (chain ID 50312)
- **Integration:** `@somnia-chain/markets-sdk` (DreamDEX Event Contracts)
- **Source:** https://github.com/Tajudeeen/sluice

The application has four surface-level flows:

1. **Home (landing page)** — introduces the product, the execution sequence
   diagram, and the three pillars of the value proposition.
2. **Markets (terminal)** — live market discovery, order book inspection,
   Safe Size calculation, and IOC order execution.
3. **Portfolio** — chain-sourced positions, order history, fills, and lifecycle
   state (verified on-chain via transaction links).
4. **Architecture / How it works** — the order flow, control model, and design
   invariants that explain why DreamDEX remains the settlement authority.

The homepage hero and the four pillars are the product's storefront. The
terminal is where Safe Size happens. The portfolio is where the user verifies
the outcome.

---

## 2. The problem

Prediction-market interfaces typically ask users to choose a share amount up
front. For binary Event Contracts on DreamDEX, that forces a trader to
manually translate several independent constraints into a single number:

- **Probability** — what the market implies about the outcome.
- **Liquidity** — how many shares are visible at the chosen limit price.
- **Price impact** — how much the fill price deviates from the top of book.
- **Exposure** — per-market and portfolio-wide position limits (25 shares per
  market, 100 across the portfolio).
- **Collateral** — tUSDC balance and ERC-20 allowance for the DreamDEX spender.
- **Time** — markets entering their final minutes before expiry.

This is a poor onboarding experience for new users and an easy source of
oversized, unfillable, or accidentally risky orders. A trader who simply wants
to "risk up to 5 tUSDC" must do arithmetic across all six dimensions and then
still has no guarantee the number they picked will pass the final pre-signing
checks.

The gap is between **consumer risk language** ("how much can I lose?") and
**protocol execution reality** (shares, depth, slippage, allowances, exposure).

---

## 3. The solution

Sluice starts with the decision a user actually understands: **how much can I
lose?**

For a buy order, the trader enters a maximum tUSDC downside. Sluice then:

1. Reads the live DreamDEX order book through the Somnia Shannon WebSocket
   stream.
2. Reads the connected wallet's collateral balance, outcome balances, and
   allowance through the DreamDEX SDK.
3. Runs the **Safe Size** search: the largest three-decimal order that stays
   within the loss budget while simultaneously passing liquidity, impact,
   exposure, and collateral limits.
4. Names the **binding constraint** so the user sees exactly why the number is
   what it is.
5. Recalculates against **fresh** market and wallet state immediately before the
   wallet signature prompt — the same policy function, run twice.
6. Submits the order as a wallet-signed DreamDEX IOC (immediate-or-cancel)
   limit order on Somnia.

Safe Size is a sizing aid, not a fill guarantee. The authoritative preflight
runs again right before signing. The final transaction, position accounting,
market resolution, and redemption state all come from DreamDEX — Sluice never
holds keys or funds.

---

## 4. Products and features

### 4.1 Live market terminal (`/markets`)

The core product surface. A real-time trading terminal backed by the DreamDEX
SDK:

- **Market discovery** — loads live binary Event Contracts from the DreamDEX
  indexer, sorted by closing-soon, with category filters (ALL, CRYPTO,
  SPORTS, POLITICS, CULTURE, OTHER).
- **Live order book** — connects to Somnia's WebSocket stream for reactive
  book updates. Falls back to a 10-second snapshot if the live stream is
  unavailable.
- **Market analytics** — UP probability (midpoint from the book), spread (bps),
  visible depth, 24-hour quote volume, trade count, and hourly candlestick
  price history.
- **Trade ticket** — buy/sell UP, share amount (0.001–25), limit probability,
  and for buys, a maximum-downside budget in tUSDC.
- **Safe Size** — the largest order within the loss budget and all live
  limits. One-click "Use safe size" populates the share field. The inline
  explanation names the binding constraint dimension.
- **5-dimension risk heatmap** — a compact structural risk breakdown
  (Market, Liquidity, Exposure, Collateral, Control) displayed alongside the
  risk score in the trade ticket.
- **Visual depth ladder** — a price-level ladder with cumulative depth bars
  and a slider that snaps to executable levels.
- **Execution preview** — a per-check panel showing PASS/WARN/BLOCK for every
  policy gate: market status, book freshness, position size, book liquidity,
  spread, price impact, maximum downside, time to expiry, tail pricing,
  wallet feasibility, market exposure, portfolio exposure, UP balance,
  collateral, and token approval. A risk score (0–100) is computed.
- **Verifiable execution trail** — a timestamped, append-only list of
  policy decisions and wallet outcomes below the trade ticket.

### 4.2 Portfolio (`/portfolio`)

Chain-sourced post-trade verification:

- **Positions** — outcome token balances and lifecycle state (TRADING,
  FINALIZED, VOID/REFUNDABLE) sourced from the DreamDEX indexer.
- **Order history** — open and historical orders with status and limit price.
- **Recent fills** — indexed trades with fill probability and on-chain
  transaction proof links to the Somnia explorer.
- Auto-syncs after order confirmation via a `storage` event and a custom
  `sluice:order-confirmed` event.

### 4.3 Architecture page (`/how`)

A non-trading explanation of the design:

- **Order flow** — a six-step sequence: Discover, Inspect, Budget, Size,
  Control, Execute.
- **Control model** — live book data provides context only; it cannot override
  a deterministic block or create a transaction without the wallet. PASS lets
  the order reach the signer, REVIEW shows elevated risk before signing, BLOCK
  disables execution.
- **Why Somnia + DreamDEX** — four design invariants: bounded downside,
  live constraints, fresh preflight, and on-chain authority.

### 4.4 Landing page (`/`)

The homepage. A splash hero with an execution-sequence diagram, a proof strip
of hard guarantees, three value-prop pillars, a feature band, and a trust band.
The footer links to live markets, the portfolio, the architecture page, and the
Somnia Shannon explorer.

### 4.5 Legacy escrow firewall (archived)

The earlier synthetic escrow / concentration-policing demo. The live product
no longer routes to this page — it is retained only as a documented reference
for the SluiceGate + SluiceAsset contract path: a request → escrow →
on-chain attester decision → on-chain approve/block → settle/refund/timeout
loop. See [Section 9](#9-on-chain-enforcement-sluicegate) and
`docs/LEGACY-FIREWALL.md`.

---

## 5. How to use it

### Quick start (local development)

```bash
npm install
npm run frontend
# open http://localhost:5173/sluice/
```

The frontend defaults to DreamDEX's public Shannon endpoints. No local
`.env` is required for market discovery, trading, or portfolio reads.

### Enabling the on-chain SluiceGate layer

The live GitHub Pages build has `VITE_GATE_ADDRESS` and
`VITE_ASSET_ADDRESS` inlined at build time by the CI workflow, so the on-chain
Safe Size enforcement layer is active in production. The workflow reads these
from repo secrets if set, falling back to the known deployed addresses
(hardcoded in `wrangler.toml`), so the build always succeeds even without
manual secret configuration.

For local development, copy `.env.example` to `frontend/.env` and set the two
addresses. When they are absent, the UI detects `CONFIGURED = false` and shows
the gate as not configured rather than pretending to be on-chain.

### Connecting a wallet

Every page has a "Connect Wallet" button in the top-right navigation:

- **Desktop browser extensions:** every EIP-6963 wallet that announces itself
  is auto-discovered and listed — MetaMask, Rabby, OKX, Brave, Trust, Coinbase,
  and others.
- **Coinbase Wallet:** registered via the `coinbaseWallet` connector; opens the
  Coinbase app on mobile, no setup required.
- **WalletConnect (optional):** set `VITE_WALLETCONNECT_PROJECT_ID` (a free
  projectId from https://cloud.reown.com) to enable the WalletConnect
  connector, which shows a QR code any mobile wallet can scan. Without it, the
  mobile QR option is hidden but Coinbase still works on phones.

After connecting, the picker auto-switches or prompts you to add **Somnia
Shannon Testnet** (chainId 50312) if the wallet is on another network. The
picker is theme-aware and adapts its text/surfaces to light/dark mode.

### Trading flow

1. Navigate to `/markets`.
2. Select a live Event Contract. The book, probability, spread, depth, and
   history load for that market.
3. Choose Buy or Sell, set shares, and (for buys) set a maximum downside in
   tUSDC.
4. Click "Use safe size" to populate the largest order within your budget and
   all live limits, or type your own amount.
5. Review the execution preview. Every check must be PASS or WARN — any BLOCK
   disables the trade button.
6. Click "Sign & execute IOC". The wallet signature prompt appears; confirm in
   your wallet.
7. After confirmation, open `/portfolio` to see the indexed fill or position
   and verify it on-chain via the explorer link.

### Legacy firewall flow

1. Connect a wallet on Somnia Shannon.
2. The **Pool State** card shows the current synthetic SLUSD pool: total
   supply, holder count, concentration (HHI), and risk status.
3. Claim demo SLUSD from the faucet, then submit a transfer or redemption
   request.
4. The off-chain attester (Worker or local Node agent) evaluates the request
   and signs an EIP-712 attestation.
5. The gate verifies the attestation on-chain and settles (approve) or refunds
   (block/timeout).
6. The **Decision Ledger** shows the recent request history.

The transaction-writing breach-test route is disabled for public browser
callers. It requires `DEMO_MODE_ENABLED=true` and the operator bearer token.

### Wallet troubleshooting

- If the wallet RPC is rate-limited, gas estimation can fail even though market
  reads work. Use a healthy Shannon RPC endpoint for both the dApp and the
  wallet's configured network.
- For wallet RPC errors, indexer lag, missing market symbols, allowance
  prompts, and faucet caps, see the troubleshooting notes in
  `docs/DREAMDEX-SDK-FEEDBACK.md`.

---

## 6. Architecture

### Trust boundaries

```text
Browser UI -> user wallet -> DreamDEX SDK/indexer -> Somnia RPC -> DreamDEX contracts
```

- The **indexer** and **public RPC** are read dependencies.
- The **user wallet** signs every order.
- The **DreamDEX SDK** waits for a transaction receipt before returning the
  order result; the portfolio page reads indexed positions, open orders, and
  fills.
- **Sluice does not hold user funds or private keys.**

### Client-side vs. on-chain authority

| Layer | Responsibility | Authority |
|-------|---------------|-----------|
| Browser UI (Sluice) | Market discovery, book inspection, Safe Size sizing, pre-trade policy preview | Advisory / safety |
| Wallet signature | Authorize the order | Authoritative (user) |
| DreamDEX contracts | Matching, fills, positions, resolution, redemption | Authoritative (protocol) |

The browser-side checks improve user safety and make the decision visible,
but they are **not protocol-enforced controls**. DreamDEX contracts remain the
matching and settlement authority. A user can bypass the UI by calling the
protocol directly.

### Component map (frontend)

```
main.tsx
  └─ WagmiProvider + React Query + BrowserRouter
     └─ App.tsx
        ├─ SiteNav.tsx          (persistent header + wallet + theme)
        ├─ pages/Splash.tsx      (landing page)
        ├─ pages/Markets.tsx     (trading terminal)
        ├─ pages/Portfolio.tsx   (chain-sourced activity)
        ├─ pages/How.tsx         (architecture explanation)
        └─ pages/Firewall.tsx    (legacy escrow demo)
```

The DreamDEX path (`/markets`, `/portfolio`) and the legacy SluiceGate path
(`/firewall`) are fully separated: the legacy contracts do not sit in the
DreamDEX execution path.

### Data flow

1. `listDreamMarkets()` — polls the DreamDEX indexer every 15 seconds for
   live binary markets, sorted by closing-soon.
2. `watchDreamBook()` — subscribes to the Somnia WebSocket market tail for
   live order book updates. Falls back to `getDreamBook()` (10s polling) on
   stream failure.
3. `getDreamCandles()` — loads 24 hourly candles for the price history chart.
4. `getDreamWalletSnapshot()` — reads on-chain tUSDC collateral balance,
   allowance, and outcome token balances, merged with indexed positions to
   compute real exposure.
5. `executionPreview()` / `safeOrderSize()` — run the deterministic policy
   locally to produce the preview and the largest safe size.
6. `dreamdexExchange.createOrder()` — submits the IOC order through the
   wallet-signed SDK call.

---

## 7. The Safe Size algorithm

Safe Size is the core innovation. It answers one question: given a maximum
loss budget, what is the largest order that passes every execution policy
check at the current moment?

### Inputs

- **Market** — the selected Event Contract (from the indexer).
- **Book** — the live unified order book (bids/asks as `[price, quantity]`).
- **Price** — the limit price (probability the user is willing to accept).
- **Side** — buy or sell.
- **Wallet snapshot** — collateral, allowance, market shares, portfolio shares,
  sell balance.
- **Limits** — `shareCap` (hard 25-share cap, enforced) and `maxCost` (the
  tUSDC downside budget for buys).

### Process

Safe Size reuses the **exact same** `executionPreview()` policy function that
runs as the final pre-signing check:

1. Reject degenerate inputs (no book, invalid price, invalid cap).
2. Binary search the order size from 0.001 shares up to the 25-share cap, in
   0.001-share increments.
3. For each candidate, call `executionPreview()` with the same wallet snapshot
   and limits.
4. Return the largest size where `result.allowed === true`.

### Key properties

- **Same policy, twice.** Safe Size and the final preflight use identical
  logic, so the displayed safe size is what the user will see approved (or
  blocked) at sign time.
- **One-decimal precision.** Sizes are evaluated in 0.001 increments, matching
  the trade ticket's `step="0.001"`.
- **Re-checked before signing.** The Markets page refreshes both market and
  wallet state immediately before the wallet prompt and re-runs the full
  policy. Safe Size is recalculated with the live book; the authoritative
  result wins.

### Sell-side behavior

For sells (Sell UP), the loss budget is not used. Safe Size instead finds the
largest order that passes liquidity, exposure, UP-balance, and collateral
checks. The UI labels this "Safe Exit Size."

---

## 8. Execution policy and checks

The `executionPreview()` function evaluates the following checks in order.
Each is PASS, WARN, or BLOCK. The order is BLOCKED unless every check is
PASS or WARN, and the cumulative risk score is below 70.

| Check | Metric | Block threshold |
|-------|--------|-----------------|
| Market status | `market.status === "Trading"` | Not Trading |
| Book freshness | snapshot age | > 20 seconds |
| Position size | `amount` in shares | > 25 or <= 0 |
| Book liquidity | visible depth vs. amount | insufficient depth |
| Spread | bps between best bid/ask | > 500 bps (WARN) |
| Price impact | slippage from top of book | > 150 bps |
| Maximum downside | estimated cost vs. budget (buy only) | exceeds budget |
| Time to expiry | minutes remaining | < 3 minutes |
| Tail pricing | limit probability | < 0.08 or > 0.92 (WARN) |
| Wallet feasibility | wallet snapshot available | unavailable |
| Market exposure | projected shares in this market | > 25 |
| Portfolio exposure | projected total shares | > 100 |
| UP balance | sell-side outcome tokens | < amount |
| Collateral | tUSDC balance vs. estimated cost | < cost |
| Token approval | ERC-20 allowance (buy) / operator approval (sell) | insufficient (WARN) |

The risk score starts at 0 and accumulates penalty weight for each failing or
elevated check. A score of 70+ or any BLOCK check prevents execution.

### 5-dimension structural risk scoring

Each check is tagged to one of five risk dimensions (inspired by structural
risk taxonomies used in institutional trading). The execution preview breaks
down the cumulative risk score across these dimensions so traders can see
exactly which category is driving the verdict:

| Dimension | Checks | Meaning |
|-----------|--------|---------|
| **Market** | Market status, Maximum downside, Time to expiry, Tail pricing | Contract and temporal health |
| **Liquidity** | Book freshness, Book liquidity, Spread, Price impact | Depth and cost to trade |
| **Exposure** | Position size, Market exposure, Portfolio exposure | Position concentration |
| **Collateral** | UP balance, Collateral, Token/operator approval | Wallet feasibility |
| **Control** | Wallet feasibility | Cross-cutting sign authorization |

The trade ticket renders a compact 5-dimension risk heatmap alongside the
risk score, and the Safe Size inline explanation names the binding dimension
(e.g., "bounded by Liquidity: Only 3.120 shares available at this limit").

---

## 9. On-chain enforcement (SluiceGate)

The flagship "downside-capped Safe Size" enforcement runs through the
SluiceGate + SluiceAsset contracts. The deployed GitHub Pages build reads
`VITE_GATE_ADDRESS` and `VITE_ASSET_ADDRESS` at build time. The CI workflow
reads these from repo secrets if set, falling back to the known deployed
addresses (hardcoded in `wrangler.toml`), so the live build is always fully
on-chain without manual secret configuration.

### Contract path

The legacy escrow firewall (`/firewall` route) demonstrates the full on-chain
request lifecycle:

1. User submits a transfer or redemption request to `SluiceGate.requestTransfer()`
   or `SluiceGate.requestRedeem()`.
2. The SLUSD is escrowed by the gate.
3. The off-chain attester agent watches for new requests, evaluates the
   deterministic concentration/anomaly policy (with optional AI classification),
   and signs an EIP-712 attestation approving or blocking the request.
4. The gate verifies the attestation on-chain and emits `RequestApproved` or
   `RequestBlocked`.
5. If no attestation arrives before the timeout deadline, anyone can call
   `timeoutRelease()` to unlock the escrowed funds.

### Local end-to-end proof

Every step of this flow is proven with real on-chain transactions against
deployed contracts. See `docs/PROOF-local-e2e.md` for the full proof record,
including:

- Real deployed contract addresses (AttesterRegistry, SluiceAsset, SluiceGate,
  Attester, demo attacker, consolidation target).
- Real EIP-712 attestation signatures from the registered attester.
- Real transaction hashes for approve and block outcomes.
- The deterministic concentration hard-block firing on a real 65.8%
  projected top-holder share.

### Demo math

The synthetic breach test sends 900,000 SLUSD from a demo attacker into the
largest holder (holder A starts at 350,000 of 1,000,000 = 35%). After the
transfer, A holds 1,250,000 of 1,900,000 = 65.8%, crossing the 50% hard-block
threshold. The scenario is projected client-side from real on-chain holdings
only; the transaction-writing route is disabled for public browser callers.

---

## 10. Wallet connection

The connect button (top-right of every page) opens a picker built from wagmi's
live connector list:

- **Browser extensions (desktop):** every EIP-6963 wallet that announces
  itself is auto-discovered and listed — MetaMask, Rabby, OKX, Brave, Trust,
  Coinbase, and others. No setup required.
- **Coinbase Wallet:** registered via the `coinbaseWallet` connector; opens
  the Coinbase app on mobile, no credentials needed.
- **Mobile QR / deep-link (optional):** set `VITE_WALLETCONNECT_PROJECT_ID`
  (a free projectId from https://cloud.reown.com) to enable the WalletConnect
  connector, which shows a QR code that any mobile wallet can scan. Without
  it, the mobile QR option is hidden but Coinbase still works on phones.

After connecting, the picker auto-switches or prompts you to add **Somnia
Shannon Testnet** (chainId 50312) if the wallet is on another network. The UI
is theme-aware: the picker adapts its text and surfaces to light/dark mode.

See `.env.example` for the full variable list, including
`VITE_WALLETCONNECT_PROJECT_ID`.

---

## 11. Deployment

### CI/CD

Pushes to `main` trigger the GitHub Actions workflow in
`.github/workflows/deploy-pages.yml`, which runs:

1. Frontend typecheck (`npm run frontend:typecheck`)
2. Frontend tests (`npm run frontend:test`)
3. Worker typecheck (`npm run worker:typecheck`)
4. Agent tests (`npm run test:agent`)
5. Contract tests (`npm test`)
6. Dependency audit (high/critical fails the build)
7. Secret-safety verification (`npm run verify:secrets`)
8. Worker dry-run validation (`npm run worker:dry-run`)
9. SluiceGate address injection (`VITE_GATE_ADDRESS`, `VITE_ASSET_ADDRESS` from
   repo secrets, with fallback to known deployed addresses)
10. Production Pages build (`npm run frontend:build -- --base=/sluice/`)
11. SPA fallback (404.html for client-side routing)
12. gh-pages publish

The deploy fails if either SluiceGate address secret is missing, ensuring the
live build always has on-chain Safe Size enabled.

### Worker deployment

The Cloudflare Worker (attester adapter) deploys through the protected
`production` environment. See `docs/cloudflare-worker.md` for full setup
instructions. Runtime secrets (`ATTESTER_PRIVATE_KEY`, `PROCESS_TOKEN`, etc.)
are stored in Cloudflare, never in Git.

### Manual frontend build

```bash
npm run frontend:build -- --base=/sluice/
```

---

## 12. Verification and testing

### Full verification suite

```bash
npm run verify:submission
```

This runs every check end-to-end: secret-safety, frontend typecheck, frontend
tests, worker typecheck, agent tests, contract tests, and production build.

### Individual checks

```bash
npm run frontend:typecheck        # TypeScript type checking
npm run frontend:test             # Vitest frontend unit tests
npm run worker:typecheck          # Worker TypeScript checking
npm run test:agent                # Agent Vitest suite
npm test                          # Hardhat contract tests
npm run frontend:build -- --base=/sluice/  # Production Pages build
npm run verify:secrets            # Secret-safety scan
```

---

## 13. Repository layout

- **`frontend/`** — the submitted DreamDEX/Somnia React application. This is
  the live product at https://tajudeeen.github.io/sluice/.
- **`contracts/`** — SluiceGate + SluiceAsset Solidity contracts (the on-chain
  enforcement layer for the legacy escrow path).
- **`agent/`** — deterministic attester agent (concentration, liquidity,
  anomaly scoring) with optional Groq/Anthropic AI classification.
- **`worker/`** — optional Cloudflare Worker wrapper for the attester, with
  Durable Object coordination and anomaly-history persistence.
- **`docs/`** — this documentation directory.
- **`scripts/`** — deployment and verification scripts.
- **`DISCLOSURE.md`** — safety and trust-boundary disclosure.
- **`README.md`** — top-level quick-start and submission summary.

The legacy escrow/firewall path is separated from the DreamDEX terminal. The
submitted hackathon product is the `frontend/` directory, which uses the
official DreamDEX SDK against Somnia Shannon. The contracts, agent, and worker
are optional local services for the on-chain enforcement demo and are not
required to run the DreamDEX market terminal.

---

## 14. Environment variables

### Frontend (VITE_* — inlined at build time)

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_DREAMDEX_INDEXER_URL` | https://dev.smk.somnia.host/v1/graphql | DreamDEX GraphQL indexer |
| `VITE_DREAMDEX_RPC_URL` | https://api.infra.testnet.somnia.network | Primary Somnia RPC |
| `VITE_DREAMDEX_WS_URL` | wss://dream-rpc.somnia.network/ws | WebSocket for live books |
| `VITE_DREAMDEX_EXPLORER_URL` | https://shannon-explorer.somnia.network | Block explorer |
| `VITE_GATE_ADDRESS` | (empty) | SluiceGate contract address (on-chain layer) |
| `VITE_ASSET_ADDRESS` | (empty) | SluiceAsset contract address |
| `VITE_ATTESTER_ADDRESS` | (empty) | Attester address |
| `VITE_DEMO_ATTACKER_ADDRESS` | (empty) | Synthetic demo attacker public address |
| `VITE_AGENT_HEALTH_URL` | (empty) | Attester Worker health endpoint |
| `VITE_WALLETCONNECT_PROJECT_ID` | (empty) | Reown projectId for WalletConnect QR |

### Backend / deployment

| Variable | Description |
|----------|-------------|
| `DEPLOYER_PRIVATE_KEY` | Contract deployer (never committed) |
| `ATTESTER_PRIVATE_KEY` | Registered attester key (never committed) |
| `DEMO_ATTACKER_PRIVATE_KEY` | Synthetic demo attacker key (server-side only) |
| `PROCESS_TOKEN` | Bearer token for admin settlement endpoints |
| `DEMO_MODE_ENABLED` | Enables the transaction-writing breach demo (default: false) |
| `PROTOCOL_OWNER_ADDRESS` | Multisig for two-step ownership transfer |
| `GROQ_API_KEY` / `ANTHROPIC_API_KEY` | Optional AI classification keys |
| `SOMNIA_RPC_URL` | Somnia RPC for Hardhat |
| `SLUICE_RPC_URL` | RPC for the local agent (default: localhost:8545) |

Copy `.env.example` to `.env` for local backend work. The frontend does not
need a local `.env` unless you are overriding the public DreamDEX defaults or
enabling the on-chain gate layer locally.

---

## 15. Disclaimer

Sluice Markets is a hackathon demo on Somnia Shannon testnet, not a production
trading system. It does not provide custody, profit, compliance, or investment
claims. Review every wallet prompt and contract spender before signing.

Market data is context; Somnia is the authority. The browser-side policy is a
safety aid, not a protocol-enforced control. DreamDEX contracts remain the
matching and settlement authority.
