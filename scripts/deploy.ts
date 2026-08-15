// Sluice deployment script.
//
//   npx hardhat run scripts/deploy.ts --network localhost   # local node
//   npx hardhat run scripts/deploy.ts --network bot         # BOT Chain mainnet
//
// Deploys the three contracts (AttesterRegistry -> SluiceAsset -> SluiceGate),
// wires the gate into the asset, and seeds a demo holder distribution so the
// off-chain risk engine has a meaningful pool to reason about.
//
// Deployment artifacts (addresses + constructor args) are written to
//   artifacts/deployment.<network>.json
// so the agent and the frontend can discover the deployed addresses, and so
// `verify.ts` knows what to verify without re-deriving anything.

import { ethers } from "ethers";
import * as fs from "fs";
import * as path from "path";

const ASSET_NAME = "Sluice Liquidity Unit";
const ASSET_SYMBOL = "SLUSD";
// 1,000,000 SLUSD (18 decimals): the synthetic demo pool.
const TOTAL_SUPPLY = ethers.parseUnits("1000000", 18);
const TIMEOUT = process.env.SLUICE_TIMEOUT ? Number(process.env.SLUICE_TIMEOUT) : 3600; // seconds

// Optional explicit demo-holder list (comma-separated). If absent we fall back to
// hardhat signers on local networks, or mint 100% to the deployer elsewhere.
const DEMO_HOLDERS_ENV = (process.env.DEMO_HOLDERS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

function distribution(): { addr: string; amount: bigint }[] {
  // Healthy, uneven base distribution (1,000,000 SLUSD across 6 holders).
  // Holder A = signers[3] is the largest at 35% so the base pool HHI is a
  // healthy ~0.21 (matches the spec's demo math: BEFORE HHI 0.21, largest 35%).
  const w = [350000, 150000, 100000, 100000, 100000, 200000];
  return w.map((x) => ({ addr: "", amount: ethers.parseUnits(String(x), 18) }));
}

// Predefined SYNTHETIC demo-attacker wallet for the "concentration attack"
// simulator. This is Hardhat's well-known test account #1: it controls NO real
// funds and ONLY ever holds synthetic SLUSD. The frontend simulator uses this
// key to originate a REAL on-chain attack request (so the resulting BLOCK is
// verifiable on-chain), exactly as the spec requires (§25). It is never the
// attester, never touches mainnet funds, and is clearly labeled synthetic.
export const DEMO_ATTACKER_KEY = "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";
export const DEMO_ATTACKER_ADDRESS = new ethers.Wallet(DEMO_ATTACKER_KEY).address;
// The attack CONSOLIDATES the attacker's stake into the largest holder (holder A
// = Hardhat signer #3), pushing that holder past the 50% largest-holder hard
// block. This is a fixed, predefined target (never arbitrary addresses: §28).
// Resolved to the actual deployed holder A address at deploy time.
export let DEMO_ATTACK_TARGET = "0x00000000000000000000000000000000deadbeef";
// The attack transfers this much synthetic SLUSD, calibrated so that after
// consolidation the largest holder crosses 50% (see README "Demo math"):
// holder A starts at 350k/1M (35%); attacker (500k) sends 450k to A => A = 800k
// of 1.5M = 53% => deterministic hard block (largest holder >= 50%).
export const ATTACK_AMOUNT = ethers.parseUnits("450000", 18);

async function main() {
  const hre: any = await import("hardhat");
  const networkName = hre.network.name;
  const [deployer] = await hre.ethers.getSigners();

  // Fail fast (with a clear message) if the deployer has no gas, instead of
  // hanging on a tx that can never be mined.
  const bal = await hre.ethers.provider.getBalance(deployer.address);
  const minGas = ethers.parseEther("0.01");
  if (bal < minGas) {
    throw new Error(
      `Deployer ${deployer.address} has ${ethers.formatEther(bal)} BOT: insufficient for gas on '${networkName}'. ` +
        `Fund it and retry. (Aborting rather than hanging on an unmineable tx.)`
    );
  }

  // Resolve the attester account (the single authorized signer in v1).
  // Prefer an explicit ATTESTER_PRIVATE_KEY so the deployed registry's attester
  // matches the key the agent will actually sign with. Fall back to the network's
  // second account for convenience when no key is supplied.
  let attesterAddr: string;
  if (process.env.ATTESTER_PRIVATE_KEY) {
    attesterAddr = new ethers.Wallet(process.env.ATTESTER_PRIVATE_KEY).address;
  } else if (networkName === "hardhat" || networkName === "localhost") {
    const signers = await hre.ethers.getSigners();
    attesterAddr = signers[1].address;
  } else {
    const accounts = (hre.network.config.accounts as string[]) || [];
    if (!accounts[1]) throw new Error("ATTESTER_PRIVATE_KEY / second account missing for this network");
    attesterAddr = new ethers.Wallet(accounts[1]).address;
  }
  console.log(`Network: ${networkName}`);
  console.log(`Deployer: ${deployer.address}`);
  console.log(`Attester: ${attesterAddr}`);

  // 1) Registry
  const Registry = await hre.ethers.getContractFactory("AttesterRegistry");
  const registry = await Registry.deploy(attesterAddr);
  await registry.waitForDeployment();
  console.log(`AttesterRegistry: ${await registry.getAddress()}`);

  // 2) Asset (constructor requires a non-zero initialAttester)
  const Asset = await hre.ethers.getContractFactory("SluiceAsset");
  const asset = await Asset.deploy(ASSET_NAME, ASSET_SYMBOL, attesterAddr);
  await asset.waitForDeployment();
  console.log(`SluiceAsset: ${await asset.getAddress()}`);

  // 3) Gate
  const Gate = await hre.ethers.getContractFactory("SluiceGate");
  const gate = await Gate.deploy(await asset.getAddress(), await registry.getAddress(), TIMEOUT);
  await gate.waitForDeployment();
  console.log(`SluiceGate: ${await gate.getAddress()}`);

  // Wire the gate into the asset (only the gate may move tokens).
  const setGateTx = await asset.setGate(await gate.getAddress());
  await setGateTx.wait();
  console.log("Gate wired into asset.");

  // 4) Seed the demo distribution.
  const dist = distribution();
  let targets: string[];
  let holderA: string | undefined;
  if (DEMO_HOLDERS_ENV.length >= dist.length) {
    targets = DEMO_HOLDERS_ENV.slice(0, dist.length);
    holderA = targets[0];
  } else if (networkName === "hardhat" || networkName === "localhost") {
    const signers = await hre.ethers.getSigners();
    // signers[3..8] -> alice, bob, carol, dave, eve, stranger (mirrors the tests).
    // Holder A (signers[3]) is the largest at 35% and is the attack's consolidation
    // target (a fixed, predefined address: never arbitrary, see §28).
    targets = signers.slice(3, 3 + dist.length).map((s: any) => s.address);
    holderA = signers[3].address;
  } else {
    console.warn(
      "No DEMO_HOLDERS set and not on a local network: minting the entire supply to the deployer. " +
        "Set DEMO_HOLDERS=a,b,c,d,e,f to seed demo wallets for the risk engine."
    );
    targets = [deployer.address];
  }
  // Pin the attack target to the deployed largest holder (holder A).
  if (holderA) DEMO_ATTACK_TARGET = holderA;

  let minted = 0n;
  for (let i = 0; i < dist.length; i++) {
    const to = targets[i % targets.length];
    const tx = await asset.mint(to, dist[i].amount);
    await tx.wait();
    minted += dist[i].amount;
    console.log(`  minted ${ethers.formatUnits(dist[i].amount, 18)} SLUSD -> ${to}`);
  }
  if (minted < TOTAL_SUPPLY) {
    const remainder = TOTAL_SUPPLY - minted;
    const tx = await asset.mint(deployer.address, remainder);
    await tx.wait();
    console.log(`  minted remaining ${ethers.formatUnits(remainder, 18)} SLUSD -> ${deployer.address}`);
  }

  // Seed the SYNTHETIC demo-attacker wallet (Hardhat test account #1) so the
  // concentration-attack simulator can originate a REAL on-chain request that
  // breaches the HHI hard-block. Synthetic SLUSD only: no real value.
  // 500k of the 1.5M pool; the attack sends 450k into holder A, pushing A past 50%.
  const attackSeed = ethers.parseUnits("500000", 18);
  {
    const tx = await asset.mint(DEMO_ATTACKER_ADDRESS, attackSeed);
    await tx.wait();
    console.log(`  minted ${ethers.formatUnits(attackSeed, 18)} SLUSD -> DEMO_ATTACKER ${DEMO_ATTACKER_ADDRESS}`);
  }

  console.log(`Total supply: ${ethers.formatUnits(await asset.totalSupply(), 18)} SLUSD`);
  console.log(`Holder count: ${await asset.holderCount()}`);

  // 5) Persist deployment artifacts.
  const out = {
    network: networkName,
    chainId: hre.network.config.chainId,
    deployedAt: new Date().toISOString(),
    attester: attesterAddr,
    asset: await asset.getAddress(),
    registry: await registry.getAddress(),
    gate: await gate.getAddress(),
    timeout: TIMEOUT,
    constructorArgs: {
      registry: [attesterAddr],
      asset: [ASSET_NAME, ASSET_SYMBOL, attesterAddr],
      gate: [await asset.getAddress(), await registry.getAddress(), TIMEOUT],
    },
  };
  const file = path.join("artifacts", `deployment.${networkName}.json`);
  fs.mkdirSync("artifacts", { recursive: true });
  fs.writeFileSync(file, JSON.stringify(out, null, 2));
  console.log(`\nWrote deployment artifacts to ${file}`);

  // Emit a copy-pasteable .env block for the frontend / agent.
  console.log("\n--- .env (frontend + agent) ---");
  console.log(`VITE_ASSET_ADDRESS=${await asset.getAddress()}`);
  console.log(`VITE_GATE_ADDRESS=${await gate.getAddress()}`);
  console.log(`VITE_ATTESTER_ADDRESS=${attesterAddr}`);
  console.log(`VITE_CHAIN_ID=${hre.network.config.chainId}`);
  if (hre.network.name === "hardhat" || hre.network.name === "localhost") {
    console.log(`VITE_DEMO_ATTACKER_KEY=${DEMO_ATTACKER_KEY}`);
    console.log(`VITE_DEMO_ATTACK_TARGET=${DEMO_ATTACK_TARGET}`);
  }
  console.log(`--- .env (agent + simulator) ---`);
  console.log(`ATTESTER_PRIVATE_KEY=${process.env.ATTESTER_PRIVATE_KEY || "(set this)"}`);
  console.log(`SLUICE_GATE_ADDRESS=${await gate.getAddress()}`);
  console.log(`SLUICE_ASSET_ADDRESS=${await asset.getAddress()}`);
  if (hre.network.name === "hardhat" || hre.network.name === "localhost") {
    console.log(`# SYNTHETIC demo-attacker key (Hardhat test account #1) for the concentration-attack simulator only.`);
    console.log(`SLUICE_DEMO_ATTACKER_KEY=${DEMO_ATTACKER_KEY}`);
    console.log(`SLUICE_DEMO_ATTACK_TARGET=${DEMO_ATTACK_TARGET}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
