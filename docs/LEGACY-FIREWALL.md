# Legacy Firewall Reference

This document covers the original Sluice escrow experiment. It is retained for reproducible local tests and historical context; it is not the submitted DreamDEX Event Contracts product.

Relevant reference code:

- `contracts/`: synthetic gated ERC-20, escrow gate, registry, and local attack probes.
- `agent/`: deterministic concentration/liquidity/anomaly scoring and local attester listener.
- `worker/`: optional service wrapper for the legacy demo.

The submitted application is `frontend/` and uses the official DreamDEX SDK against Somnia Shannon. Do not infer that the legacy gate enforces policy on DreamDEX orders: it does not sit in the DreamDEX execution path.

Local legacy checks remain available through `npm test`, `npm run test:agent`, and the Hardhat deployment scripts. They use synthetic development assets and local/testnet keys only.
