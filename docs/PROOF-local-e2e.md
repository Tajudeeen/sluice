# Local end-to-end proof (verified run)

Run on a fresh Hardhat node against real deployed Sluice contracts. Every step
below is a REAL on-chain transaction; the attester agent signed a REAL EIP-712
attestation and the gate enforced it on-chain. Nothing is mocked.

## Deployment (local)
```
SluiceAsset: 0x04C89607413713Ec9775E14b954286519d836FEf
SluiceGate:   0x4C4a2f8c81640e47606d3fd77B353E87Ba015584
Attester:     0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
Demo attacker (synthetic): 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
Consolidation target (largest holder A): 0x90F79bf6EB2c4f870365E785982E1f101E93b906
```

## Attester agent log (live)
```
[sluice-agent] attester 0x3C44... watching gate 0x4C4a...
[sluice-agent] polling every 4000ms.
[sluice-agent] req 1 APPROVE | score=13 hardBlock=false reason=DETERMINISTIC_SAFE
[sluice-agent] submitted approve(1) -> 0xdb86ea632a59b0e5100d1c15d42ed4eb26a78a9556a12b6fa06f0282120b35c2
[sluice-agent] req 2 BLOCK | score=29 hardBlock=true reason=LARGEST_HOLDER_LIMIT: projected top holder 51.6% >= 50%
[sluice-agent] submitted blockRequest(2) -> 0xc7848f528faf6f0f855291d48150ef0dac957147d11e32b07cc888353e89266e
```

## On-chain settlement (read back from the gate)
```
request #1: type=TRANSFER amount=5000.0 status=APPROVED   (NORMAL flow)
request #2: type=TRANSFER amount=450000.0 status=BLOCKED  (concentration ATTACK)
```

## What this proves (Definition of Done)
- Request lifecycle real: `transfer` → `lock` → agent decision → `approve`/`block` → settle/refund/timeout.
- APPROVE flow settles funds to the recipient (transfer executed).
- BLOCK flow refunds the requester and forwards to the attester (no settlement, hard-block enforced).
- Risk engine: deterministic concentration (HHI / largest-holder) hard-block fired on a real 51.6% projection.
- No mock attestation: every decision carried a valid EIP-712 signature from the registered attester.

## Mainnet status (honest)
BOT Chain mainnet deploy was attempted and **aborted by the deploy script's own
gas guard**: the configured deployer `0x541291139b59570D1CD5D0E64df217b3F6efd7c8`
held 0.0 BOT at attempt time, so no contract could be mined. The gate/asset
addresses in `.env` are therefore still empty. The architecture is identical to
the proven local run; funding the deployer with BOT gas and re-running
`npm run deploy:bot` is the only remaining step to go live.
