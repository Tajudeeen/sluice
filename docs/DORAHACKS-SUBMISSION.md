# DoraHacks Submission — Sluice Markets

## Project title

Sluice Markets — Downside-Capped DreamDEX Execution

## One-line description

Set the maximum tUSDC you can lose; Sluice converts that budget into the largest policy-valid DreamDEX Event Contract order and rechecks it before signature.

## Problem

Prediction-market interfaces typically ask users to choose a share amount. That forces a trader to translate probability, available depth, price impact, collateral, current exposure, and worst-case loss into one number manually. This is a poor onboarding experience for new users and an easy source of oversized or unfillable orders.

## Solution

Sluice starts with the decision a user actually understands: **how much can I afford to lose?**

For a DreamDEX buy order, the trader enters a maximum tUSDC downside. Sluice reads the live Event Contract book and connected wallet, then searches for the largest three-decimal IOC size that simultaneously satisfies:

- the maximum-loss budget;
- executable liquidity at the selected limit;
- price-impact policy;
- market and portfolio exposure limits;
- wallet collateral;
- market status, book freshness, and time to expiry.

The interface names the binding constraint and applies the calculated size with one click. Immediately before the wallet prompt, Sluice refreshes both market and wallet state and runs the same controls again. DreamDEX remains the matching, position, settlement, and resolution authority.

## Why it is original

Sluice is not another market list or generic trading terminal. Its core interaction compiles a downside budget into an executable on-chain order. This is specific to bounded-outcome Event Contracts and connects consumer risk language to live order-book execution.

## Technical implementation

- `@somnia-chain/markets-sdk` for live markets, binary books, candles, portfolios, balances, allowances, and IOC writes.
- Somnia Shannon, chain ID `50312`.
- Deterministic three-decimal Safe Size search using the same policy function as the final preflight.
- Wallet-signed DreamDEX IOC execution; Sluice never holds keys or funds.
- Chain-sourced portfolio, fill history, transaction links, and market lifecycle state.
- Production deployment and automated frontend, worker, agent, and contract verification.

## User and ecosystem impact

- Makes Event Contracts approachable to users who think in money-at-risk rather than shares.
- Reduces failed, unfillable, and accidentally oversized order attempts.
- Gives users a clear path from live market discovery to a wallet-signed DreamDEX transaction.
- Can extend into reusable risk profiles, social risk templates, and strategy/API integrations without changing DreamDEX settlement.

## Links

- Live application: https://tajudeeen.github.io/sluice/
- Repository: https://github.com/Tajudeeen/sluice
- Network: Somnia Shannon
- Integration: DreamDEX Event Contracts SDK

## Suggested tags

- DeFi
- Event Contracts
- Prediction Markets

## Rubric mapping

### Innovation & Originality — 20%

Downside-budget compilation turns a user-defined maximum loss into a live, policy-valid Event Contract order rather than merely displaying analytics.

### Technical Implementation — 25%

The build uses live DreamDEX markets, books, balances, portfolios, SDK writes, refreshed preflight controls, wallet signatures, and Somnia transaction evidence.

### User Experience & Design — 20%

The primary action is expressed in tUSDC downside, reports the binding constraint, supports one-click sizing, and explains every blocked execution.

### Business & Ecosystem Impact — 20%

The product lowers the expertise required to place bounded prediction-market orders, with a direct path to increased DreamDEX trading and user adoption.

### Presentation & Demo — 15%

The complete story can be demonstrated in one flow: set downside, calculate Safe Size, deliberately exceed it, restore it, sign the IOC, and show the resulting transaction and portfolio state.
