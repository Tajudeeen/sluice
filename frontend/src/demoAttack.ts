import { ethers } from "ethers";

// The hosted Worker owns the synthetic demo-attacker key. Only its public
// address is included in the browser bundle.
export const DEMO_ATTACKER_ADDRESS =
  (import.meta.env.VITE_DEMO_ATTACKER_ADDRESS as string) ||
  "0xdCd1c42Be1832F09e00894929A3828839EF2a966";
// Fixed, predefined target (the deployed largest holder). Never arbitrary (§28).
// Calibrated to push the largest holder past the 50% hard-block threshold given
// the seed distribution (see README "Demo math"): holder A starts at 350k/1M
// (35%); the attacker (900k) sends 900k into A => A = 1250k of 1.9M = 65.8%.
export const ATTACK_AMOUNT = ethers.parseUnits("2200000", 18);
