# 2–3 Minute Demo Video Script

## 0:00–0:20 — Problem

“Prediction markets usually ask users to choose shares, but most people think in money at risk. Choosing a sensible order requires manually combining probability, liquidity, price impact, collateral, and existing exposure.”

Show the Sluice landing page and say:

“Sluice adds downside-capped execution to DreamDEX Event Contracts.”

## 0:20–0:50 — Live DreamDEX market

Open **Markets** and select a live BTC or ETH Event Contract.

Point out:

- live DreamDEX market and expiry;
- probability and spread;
- bid/ask levels and visible depth;
- price history and volume.

Do not spend time explaining every metric.

## 0:50–1:25 — Unique feature

Connect the funded Shannon wallet.

Enter a clear maximum downside, such as `5 tUSDC` or `10 tUSDC`.

Say:

“Safe Size searches the live book and wallet state for the largest three-decimal order inside this loss budget, while also enforcing liquidity, impact, collateral, expiry, and exposure limits.”

Show the calculated size and its binding constraint. Click **Use safe size**.

## 1:25–1:45 — Prove the control is real

Increase the share amount slightly above Safe Size.

Show the **Maximum downside** or other binding check turning red and the execution button becoming blocked.

Click **Use safe size** again and show the order returning to approved.

## 1:45–2:20 — Execute

Click **Sign & execute IOC**.

Explain:

“Sluice refreshes the book and wallet state and reruns the same policy before requesting the signature.”

Confirm the DreamDEX approval/order prompts in the wallet. Show the confirmed transaction link and execution trail.

## 2:20–2:40 — On-chain result and future

Open **Portfolio** and show the indexed fill or position and explorer proof.

Close with:

“Sluice makes DreamDEX Event Contracts usable in the language consumers understand: how much they can lose. Next, the same execution control can power reusable risk profiles, social trading templates, and automated strategies.”

## Recording checklist

- Use the funded wallet on Somnia Shannon.
- Choose a market with visible liquidity and more than three minutes to expiry.
- Use a small downside budget so Safe Size is visibly budget-bound.
- Record a successful transaction before recording the final narration.
- Keep the browser zoom near 100% and close unrelated tabs and wallet accounts.
- Never expose a recovery phrase or private key.
