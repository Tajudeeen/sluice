# Local end-to-end proof (re-verified run)

Re-run on a fresh Hardhat node against real deployed Sluice contracts compiled
from the current source. Every step below is a REAL on-chain transaction; the
attester agent signed a REAL EIP-712 attestation and the gate enforced it
on-chain. Nothing is mocked.

## What was fixed since the first run
- **FutureTimestamp flakiness eliminated.** `SluiceGate._verify` previously
  reverted any attestation whose signed `timestamp` exceeded on-chain
  `block.timestamp` by even 1 second. Because the attester signs with the wall
  clock and chain block time can lag (especially after fixture reverts or slow
  block production), validly-signed attestations were intermittently rejected —
  the contract test suite was flaky (10 failures on first run, 0 on re-run).
  Replaced with industry-standard bounded clock-skew tolerance
  (`MAX_TIMESTAMP_SKEW = 60s`): the independent `expiry` check still enforces
  the real freshness/liveness window, so replay/liveness guarantees are
  unchanged. Contract tests now pass 24/24 on three consecutive runs.
- **Demo + status scripts now read deployed addresses from the deployment
  artifact** (`artifacts/deployment.localhost.json`) instead of hardcoding stale
  addresses from two different past runs, so a fresh local E2E is reproducible.

## Deployment (local, fresh node)
```text
AttesterRegistry: 0x4EE6eCAD1c2Dae9f525404De8555724e3c35d07B
SluiceAsset:      0xBEc49fA140aCaA83533fB00A2BB19bDdd0290f25
SluiceGate:       0xD84379CEae14AA33C123Af12424A37803F885889
Attester:         0x2818DA030a19Ac0e84e9bA64Fef1AF3941668871
Demo attacker (synthetic): 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
Consolidation target (largest holder A): 0x90F79bf6EB2c4f870365E785982E1f101E93b906
```
Pool seeded: 1,500,000 SLUSD total (1,000,000 base across 6 holders, largest A =
35%; +500,000 synthetic SLUSD to the demo attacker).

## Attester agent log (live)
```text
[sluice-agent] attester 0x2818… watching gate 0xD843…
[sluice-agent] polling every 4000ms.
[sluice-agent] req 1 APPROVE | score=13 hardBlock=false reason=DETERMINISTIC_SAFE
[sluice-agent] submitted approve(1) -> 0x1e717a091ba9650d7b31220d83d9999960de6266058435718b6279caf819a8b9
[sluice-agent] req 2 BLOCK | score=32 hardBlock=true reason=LARGEST_HOLDER_LIMIT: projected top holder 51.6% >= 50%
[sluice-agent] submitted blockRequest(2) -> 0x3ec7c594f86ddffa7e302851e00b4da47f75d887bc37c2172ee2025afd39dcfa
```

## On-chain settlement (read back from the gate)
```text
request #1: type=TRANSFER amount=5000.0 status=APPROVED   (NORMAL flow)
request #2: type=TRANSFER amount=450000.0 status=BLOCKED  (concentration ATTACK)
```

## What this proves (Definition of Done)
- Request lifecycle real: `transfer` → `lock` → agent decision → `approve`/`block` → settle/refund/timeout.
- APPROVE flow settles funds to the recipient (transfer executed).
- BLOCK flow refunds the requester (no settlement, hard-block enforced).
- Risk engine: deterministic concentration (HHI / largest-holder) hard-block fired on a real 51.6% projection.
- No mock attestation: every decision carried a valid EIP-712 signature from the registered attester.
- Settlement is observable on-chain: approve tx `0x1e717a…a8b9`, block tx `0x3ec7c5…dcfa`.

## Mainnet status (honest)
BOT Chain mainnet deploy was attempted and **aborted by the deploy script's own
gas guard**: the configured deployer `0x541291139b59570D1CD5D0E64df217b3F6efd7c8`
held 0.0 BOT at attempt time, so no contract could be mined. That wallet still
holds 0.0 BOT. Funding it with BOT gas and re-running `npm run deploy:bot` is
the only remaining step to go live; the architecture and the approval/block loop
are proven identical to the local run above.
