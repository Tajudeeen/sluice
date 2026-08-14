import { ethers } from "ethers";

// Predefined SYNTHETIC demo-attacker constants, mirrored from scripts/deploy.ts.
// These MUST match the deployed demo distribution so the attack reliably breaches
// the HHI hard-block. The attacker key is Hardhat's test account #1 (no real
// funds, synthetic SLUSD only). Exposed to the built bundle via
// VITE_DEMO_ATTACKER_KEY / VITE_DEMO_ATTACK_TARGET so the simulator can sign a
// REAL on-chain request (target = the deployed largest holder, a fixed address).
export const DEMO_ATTACKER_KEY =
  (import.meta.env.VITE_DEMO_ATTACKER_KEY as string) ||
  "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";
export const DEMO_ATTACKER_ADDRESS = new ethers.Wallet(DEMO_ATTACKER_KEY).address;
// Fixed, predefined target (the deployed largest holder). Never arbitrary (§28).
export const DEMO_ATTACK_TARGET =
  (import.meta.env.VITE_DEMO_ATTACK_TARGET as string) ||
  "0x00000000000000000000000000000000deadbeef";
// Calibrated to push the largest holder past the 50% hard-block threshold given
// the seed distribution (see README "Demo math"): holder A starts at 350k/1M
// (35%); the attacker (500k) sends 450k into A => A = 800k of 1.5M = 53%.
export const ATTACK_AMOUNT = ethers.parseUnits("450000", 18);
