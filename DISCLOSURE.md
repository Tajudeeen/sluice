# Sluice Markets Disclosure

Sluice Markets is a hackathon demo for DreamDEX Event Contracts on Somnia Shannon. It is not production software and does not provide custody, profit, compliance, or investment guarantees.

## Execution and authority

- The browser reads markets and order books from DreamDEX's public indexer and reads balances through the DreamDEX SDK and Somnia RPC.
- The connected user wallet signs every order. Sluice never holds user funds or private keys.
- DreamDEX contracts control matching, fills, positions, resolution, and redemption. The SDK waits for a receipt before reporting execution.
- The policy is a client-side pre-trade guardrail. It can be bypassed by a direct protocol call and must not be described as a protocol firewall.

## Safety checks

Before signing, the UI refreshes book and wallet state and checks market lifecycle, expiry, order size, visible liquidity, spread, price impact, market exposure, global exposure, sell balance, and collateral balance. A stale or incomplete book blocks execution.

For buy orders, the maximum-downside budget is a hard check. Safe Size searches for the largest three-decimal order that stays inside that tUSDC budget and passes the same market and wallet checks at the selected limit. It is a sizing aid, not a fill guarantee; the authoritative preflight runs again immediately before the wallet prompt.

## Wallet disclosures

For buys, the SDK may request a maximum ERC-20 collateral allowance for the DreamDEX spender. For sells, it may request a one-time ERC-6909 outcome-token operator approval. Users must verify spender, token, amount, and network in the wallet before approving.

## Data and market risks

Public indexer/RPC responses can be delayed or unavailable. Order books can change between preflight and mining; IOC orders may fill partially or not at all. Slippage, MEV, market resolution, voiding, and smart-contract risks remain. Displayed analytics are informational and use indexed hourly candles and current book depth.

## Legacy material

The earlier synthetic escrow/firewall contracts and attester remain in the repository only as archived reference code. They are isolated from the submitted DreamDEX path and are documented in `docs/LEGACY-FIREWALL.md`.
