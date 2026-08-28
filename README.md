# Sluice Markets

Sluice Markets is a DreamDEX Event Contracts trading terminal for Somnia Shannon. Its differentiator is downside-capped Safe Size: the trader states the most tUSDC they are willing to lose, and Sluice compiles that budget into the largest order passing the live book, slippage, exposure, expiry, and collateral checks.

Live app: https://tajudeeen.github.io/sluice/

## Hackathon fit

- Consumer trading application: browse real binary Event Contracts and submit bounded IOC orders.
- Market analytics: probability midpoint, spread, visible depth, hourly quote volume, and price history.
- Event Contracts: lifecycle, outcome balances, fills, settlement, and transaction proofs come from DreamDEX.
- Downside-capped Safe Size: convert a maximum-loss budget into the largest executable order passing Sluice's live policy at the selected limit.

## What is verified before signing

The terminal refreshes the order book immediately before the wallet prompt and evaluates:

- market is Trading and has at least three minutes to expiry;
- order size (maximum 25 shares);
- per-market exposure (maximum 25 projected shares);
- total portfolio exposure (maximum 100 projected shares);
- executable depth, limit price, spread, and price impact;
- sell-side UP balance and buy-side collateral balance;
- allowance and operator-approval disclosures.

Safe Size runs the same preview policy used immediately before signing. It does not guarantee a fill after the snapshot changes; it gives the trader a bounded starting amount and the final pre-signing refresh remains authoritative.

These are browser-side guardrails. They improve user safety and make the decision visible, but they are not protocol-enforced controls. DreamDEX contracts remain the matching and settlement authority, and a user can bypass the UI by calling the protocol directly.

## Trust boundaries

```text
Browser UI -> user wallet -> DreamDEX SDK/indexer -> Somnia RPC -> DreamDEX contracts
```

The indexer and public RPC are read dependencies. A wallet signs every order. The SDK waits for a transaction receipt before returning the order result; the portfolio page reads indexed positions, open orders, and fills.

## Quick start

```bash
npm install
npm run frontend
# open http://localhost:5173/sluice/
```

The frontend defaults to DreamDEX's public Shannon endpoints. Copy
`.env.example` to `frontend/.env` only when overriding those endpoints.

### Enabling the on-chain SluiceGate layer

The flagship "downside-capped Safe Size" enforcement runs through the
SluiceGate + SluiceAsset contracts. The deployed GitHub Pages build reads
`VITE_GATE_ADDRESS` and `VITE_ASSET_ADDRESS` at build time (from
`frontend/.env`). These are configured as CI secrets so the live build is
fully on-chain:

- GitHub → repo **Settings → Secrets and variables → Actions** → add
  `VITE_GATE_ADDRESS` and `VITE_ASSET_ADDRESS` (the public Sluice contract
  addresses; see `wrangler.toml`).
- The Pages workflow (`deploy-pages.yml`) injects them into `frontend/.env`
  before building and fails the deploy if either is missing.

For local development, copy `.env.example` to `frontend/.env` and set the
two addresses there. When they are absent, the UI detects
`CONFIGURED = false` and shows the gate as not configured rather than
pretending to be on-chain.

## Wallet connection

The connect button (top-right of every page) opens a picker built from
wagmi's live connector list, so the same control works on desktop browser
extensions and mobile browsers:

- **Browser extensions (desktop):** every EIP-6963 wallet that announces
  itself is auto-discovered and listed — MetaMask, Rabby, OKX, Brave,
  Trust, Coinbase, and others. No setup required.
- **Coinbase Wallet:** registered via the `coinbaseWallet` connector; opens
  the Coinbase app on mobile, no credentials needed.
- **Mobile QR / deep-link (optional):** set `VITE_WALLETCONNECT_PROJECT_ID`
  (a free projectId from https://cloud.reown.com) to enable the WalletConnect
  connector, which shows a QR code that any mobile wallet can scan. Without
  it the mobile QR option is hidden but Coinbase still works on phones.

After connecting, the picker auto-switches or prompts you to add **Somnia
Shannon Testnet (chainId 50312)** if the wallet is on another network. The
UI is theme-aware: the picker adapts its text and surfaces to light/dark mode.

See `.env.example` for the full variable list, including
`VITE_WALLETCONNECT_PROJECT_ID`.

## Verification

```bash
npm run verify:submission
```

Individual checks:

```bash
npm run frontend:typecheck
npm run frontend:test
npm run worker:typecheck
npm run test:agent
npm test
npm run frontend:build -- --base=/sluice/
```

## Deployment

Pushes to `main` run the frontend typecheck, frontend tests, worker typecheck, agent tests, contract tests, and production Pages build before publishing `gh-pages`.

## Repository layout

- `frontend/`: submitted DreamDEX/Somnia React application.
- `docs/LEGACY-FIREWALL.md`: archived reference for the earlier escrow demonstration.
- `contracts/`, `agent/`, `worker/`: legacy local proof and optional services; not required by the DreamDEX market terminal.

## Disclaimer

This is a hackathon demo on Somnia Shannon testnet, not a production trading system. It does not provide custody, profit, compliance, or investment claims. Review every wallet prompt and contract spender before signing.
