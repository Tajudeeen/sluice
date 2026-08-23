# DreamDEX SDK and Documentation Feedback

## What worked well

- The public TypeScript package made it possible to use one integration for market discovery, binary order books, candles, portfolio reads, balances, allowances, and wallet-signed IOC execution.
- The market and portfolio types expose enough lifecycle data to build a consumer trading and post-trade experience without maintaining a separate indexer.
- The testnet address bundle and chain exports reduced contract-address configuration mistakes.

## Friction encountered

### Test collateral discovery

The test tUSDC contract exposes `faucet(uint256)`, but the official user-facing route for obtaining test collateral was not easy to discover. The Somnia faucet provides STT for gas, which users can mistake for DreamDEX collateral. A documented “testnet trading prerequisites” page covering both STT and tUSDC would reduce onboarding failures.

### Wallet RPC versus application RPC

The application can read from a healthy RPC while a wallet keeps a previously saved, rate-limited RPC for gas estimation. This produces failures such as `eth_gasPrice` even when market reads work. Documentation should explicitly distinguish the dApp transport from the wallet's configured network RPC and list the recommended Shannon endpoint.

### Binary order-book shape

The binary book returns `yesBids`, `yesAsks`, `noBids`, and `noAsks`, while unified trading interfaces commonly expect `bids` and `asks`. A short conversion example including price and quantity decimal handling would prevent incorrect charts and execution estimates.

## Suggested additions

- A complete Event Contract testnet quick start: add network, obtain STT, obtain tUSDC, approve collateral, place a small IOC, and inspect the resulting position.
- A troubleshooting table for wallet RPC errors, indexer lag, missing market symbols, allowance prompts, and faucet caps.
- A reference consumer flow demonstrating fresh preflight reads immediately before a wallet-signed order.
