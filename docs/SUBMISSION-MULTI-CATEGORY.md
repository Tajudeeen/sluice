# Multi-Category Submission Positioning

Sluice Markets should be entered as one project with multiple complementary
positionings, not as duplicate submissions. The product has one coherent flow:
discover a live DreamDEX Event Contract, inspect its market data, calculate the
largest policy-safe size, and execute or block an IOC order on Somnia.

## Select These Tags

- DeFi
- Event Contracts
- Prediction Markets

## Strong Category Lanes

### 1. Consumer-Facing Trading Application

**Why it qualifies:** `/markets` is a usable trading terminal backed by the
DreamDEX SDK. It discovers live markets, reads the real order book, calculates
an executable price and Safe Size, requests a wallet signature, and submits an
IOC order.

**Demo proof:** select a live market, show bids/asks, change the share amount,
show the policy decision, then show the wallet execution trail and explorer link.

**Submission copy:**

> Sluice Markets is a policy-controlled consumer trading terminal for DreamDEX
> Event Contracts. A trader enters the maximum tUSDC they can lose, and its
> Safe Size calculator converts that downside budget into the largest order
> allowed by live depth, price impact, wallet collateral, and exposure limits.

### 2. Market Analytics Tool

**Why it qualifies:** the market detail view exposes probability, spread,
24-hour history, volume, trade count, visible depth, estimated average fill,
and price impact. The portfolio view adds indexed fills, open orders, lifecycle
state, and transaction proof.

**Demo proof:** point to the probability history, spread/depth metrics, book
levels, estimated fill panel, and the portfolio's recent-fills tab.

**Submission copy:**

> Sluice Markets turns DreamDEX Event Contracts into an inspectable market data
> surface. It combines live order-book levels, probability history, spread,
> liquidity depth, execution impact, and chain-sourced portfolio activity so a
> trader can compare opportunity and risk before signing.

## Two-Minute Demo Order

1. Open `/markets` and select a live Event Contract.
2. Show probability, spread, volume, history, and the real bid/ask book.
3. Show Safe Size and its binding constraint, then apply it with one click.
4. Increase the amount above Safe Size to show a deterministic block.
5. Reapply Safe Size and show the wallet execution trail.
6. Open `/portfolio` and show fills, transaction proof, and lifecycle state.

## Judge-Facing One-Liner

> Sluice calculates the largest DreamDEX Event Contract order that the live
> market and connected wallet can safely support, then rechecks it before a
> wallet-signed IOC transaction on Somnia.
