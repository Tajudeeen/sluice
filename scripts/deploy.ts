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

import { ethers } from "hardhat";
import * as fs from "fs";
import * as path from "path";

const ASSET_NAME = "Sluice Liquidity Unit";
const ASSET_SYMBOL = "SLUSD";
// 1,000,000 SLUSD (18 decimals) — the synthetic demo pool.
const TOTAL_SUPPLY = ethers.parseUnits("1000000", 18);
const TIMEOUT = process.env.SLUICE_TIMEOUT ? Number(process.env.SLUICE_TIMEOUT) : 3600; // seconds

// Optional explicit demo-holder list (comma-separated). If absent we fall back to
// hardhat signers on local networks, or mint 100% to the deployer elsewhere.
const DEMO_HOLDERS_ENV = (process.env.DEMO_HOLDERS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

function distribution(): { addr: string; amount: bigint }[] {
  // Uneven, realistic-looking split.
  const weights = [350000, 250000, 150000, 100000, 50000, 100000];
  return weights.map((w) => ({ addr: "", amount: ethers.parseUnits(String(w), 18) }));
}

async function main() {
  const hre = await import("hardhat");
  const networkName = hre.network.name;
  const [deployer] = await ethers.getSigners();

  // Resolve the attester account (the single authorized signer in v1).
  // Prefer an explicit ATTESTER_PRIVATE_KEY so the deployed registry's attester
  // matches the key the agent will actually sign with. Fall back to the network's
  // second account for convenience when no key is supplied.
  let attesterAddr: string;
  if (process.env.ATTESTER_PRIVATE_KEY) {
    attesterAddr = new ethers.Wallet(process.env.ATTESTER_PRIVATE_KEY).address;
  } else if (networkName === "hardhat" || networkName === "localhost") {
    const signers = await ethers.getSigners();
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
  const Registry = await ethers.getContractFactory("AttesterRegistry");
  const registry = await Registry.deploy(attesterAddr);
  await registry.waitForDeployment();
  console.log(`AttesterRegistry: ${await registry.getAddress()}`);

  // 2) Asset (constructor requires a non-zero initialAttester)
  const Asset = await ethers.getContractFactory("SluiceAsset");
  const asset = await Asset.deploy(ASSET_NAME, ASSET_SYMBOL, attesterAddr);
  await asset.waitForDeployment();
  console.log(`SluiceAsset: ${await asset.getAddress()}`);

  // 3) Gate
  const Gate = await ethers.getContractFactory("SluiceGate");
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
  if (DEMO_HOLDERS_ENV.length >= dist.length) {
    targets = DEMO_HOLDERS_ENV.slice(0, dist.length);
  } else if (networkName === "hardhat" || networkName === "localhost") {
    const signers = await ethers.getSigners();
    // signers[3..8] -> alice, bob, carol, dave, eve, stranger (mirrors the tests)
    targets = signers.slice(3, 3 + dist.length).map((s) => s.address);
  } else {
    console.warn(
      "No DEMO_HOLDERS set and not on a local network — minting the entire supply to the deployer. " +
        "Set DEMO_HOLDERS=a,b,c,d,e,f to seed demo wallets for the risk engine."
    );
    targets = [deployer.address];
  }

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
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
