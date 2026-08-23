# Sluice Markets

Sluice Markets is a DreamDEX Event Contracts trading terminal for Somnia Shannon. It combines live market discovery, order-book analytics, deterministic pre-trade checks, wallet-signed IOC execution, and a chain-sourced portfolio view.

Live app: https://tajudeeen.github.io/sluice/

## Hackathon fit

- Consumer trading application: browse real binary Event Contracts and submit bounded IOC orders.
- Market analytics: probability midpoint, spread, visible depth, hourly quote volume, and price history.
- Event Contracts: lifecycle, outcome balances, fills, settlement, and transaction proofs come from DreamDEX.

## What is verified before signing

The terminal refreshes the order book immediately before the wallet prompt and evaluates:

- market is Trading and has at least three minutes to expiry;
- order size (maximum 25 shares);
- per-market exposure (maximum 25 projected shares);
- total portfolio exposure (maximum 100 projected shares);
- executable depth, limit price, spread, and price impact;
- sell-side UP balance and buy-side collateral balance;
- allowance and operator-approval disclosures.

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

The frontend defaults to DreamDEX's public Shannon endpoints. Copy `.env.example` to `frontend/.env` only when overriding those endpoints.

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
