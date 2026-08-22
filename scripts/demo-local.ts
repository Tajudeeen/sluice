// End-to-end demo driver against a LOCAL Hardhat node.
// Executes the two required flows with REAL on-chain transactions:
//   1) NORMAL : deployer sends a small safe transfer -> agent APPROVES -> funds settle.
//   2) ATTACK : synthetic demo attacker sends a 400k transfer -> agent BLOCKS (HHI hard block) -> refund.
// Prints request ids + settlement tx hashes so the result is independently verifiable
// against the node (and, on mainnet, the explorer).

const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");

// Resolve deployed addresses from the deployment artifact written by
// `npm run deploy:local` (scripts/deploy.ts -> artifacts/deployment.localhost.json).
// Falls back to the well-known Hardhat anvil addresses for convenience.
function loadDeployment() {
  for (const name of ["deployment.localhost.json", "deployment.hardhat.json"]) {
    const p = path.join(__dirname, "..", "artifacts", name);
    if (fs.existsSync(p)) {
      const j = JSON.parse(fs.readFileSync(p, "utf8"));
      return { gate: j.gate, asset: j.asset };
    }
  }
  return {
    gate: "0x4C4a2f8c81640e47606d3fd77B353E87Ba015584",
    asset: "0x04C89607413713Ec9775E14b954286519d836FEf",
  };
}
const DEP = loadDeployment();

const RPC = "http://127.0.0.1:8545";
const GATE = DEP.gate;
const ASSET = DEP.asset;
const DEPLOYER_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const ATTACKER_KEY = "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";

const GATE_ABI = [
  "function requestTransfer(address to, uint256 amount) returns (uint256 id)",
  "function getRequest(uint256 id) view returns (tuple(uint256 id, address requester, address recipient, uint256 amount, uint8 requestType, uint256 createdAt, uint8 status))",
  "function requestCounter() view returns (uint256)",
];
const ASSET_ABI = ["function approve(address spender, uint256 amount) returns (bool)", "function holders() view returns (address[])", "function balanceOf(address) view returns (uint256)"];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function run() {
  const provider = new ethers.JsonRpcProvider(RPC);
  const deployer = new ethers.Wallet(DEPLOYER_KEY, provider);
  const attacker = new ethers.Wallet(ATTACKER_KEY, provider);
  const gateD = new ethers.Contract(GATE, GATE_ABI, deployer);
  const gateA = new ethers.Contract(GATE, GATE_ABI, attacker);
  const assetA = new ethers.Contract(ASSET, ASSET_ABI, attacker);
  const holderAddrs = await assetA.holders();
  const holderBalances = await Promise.all(holderAddrs.map((a) => assetA.balanceOf(a)));
  const largestIndex = holderBalances.reduce((best, balance, i) => balance > holderBalances[best] ? i : best, 0);
  const attackTarget = process.env.SLUICE_DEMO_ATTACK_TARGET || holderAddrs[largestIndex];

  // Deployer (#0) is the asset owner but holds no SLUSD in the seed distribution.
  // Claim synthetic SLUSD via the owner-gated faucet so the NORMAL flow is real.
  const assetD = new ethers.Contract(ASSET, ["function faucet()", ...ASSET_ABI], deployer);
  await (await assetD.faucet()).wait();
  await sleep(800);
  console.log("  deployer claimed 50,000 demo SLUSD via faucet()");

  // ---- FLOW 1: NORMAL safe transfer (small, to a FRESH address that does NOT
  //      concentrate the pool) -> agent APPROVES -> funds settle. ----
  console.log("\n=== FLOW 1: NORMAL transfer (deployer -> fresh address, 5,000 SLUSD) ===");
  const safeAmt = ethers.parseUnits("5000", 18);
  const freshRecipient = "0x1111111111111111111111111111111111111111";
  await (await new ethers.Contract(ASSET, ASSET_ABI, deployer).approve(GATE, safeAmt)).wait();
  await sleep(800);
  const tx1 = await gateD.requestTransfer(freshRecipient, safeAmt);
  const r1 = await tx1.wait();
  const id1 = Number(r1.logs[0]?.topics?.[1] ?? (await gateD.requestCounter()));
  console.log(`  request id = requestCounter (pending), submitted tx ${r1.hash}`);
  await sleep(7000); // let agent poll + settle

  // ---- FLOW 2: ATTACK concentration (550k transfer, breaches HHI) ----
  console.log("\n=== FLOW 2: ATTACK transfer (attacker -> fixed target, 550,000 SLUSD) ===");
  const atkAmt = ethers.parseUnits("900000", 18);
  await (await assetA.approve(GATE, atkAmt)).wait();
  await sleep(800);
  const tx2 = await gateA.requestTransfer(attackTarget, atkAmt);
  const r2 = await tx2.wait();
  console.log(`  attack submitted tx ${r2.hash}`);
  await sleep(7000); // let agent poll + BLOCK

  // ---- Read back final statuses ----
  console.log("\n=== RESULTS (on-chain) ===");
  const counter = await gateD.requestCounter();
  for (let id = 1; id <= Number(counter); id++) {
    const req = await gateD.getRequest(id);
    const status = ["PENDING", "APPROVED", "BLOCKED", "TIMED_OUT"][Number(req.status)];
    console.log(`  request #${id}: type=${req.requestType == 0 ? "TRANSFER" : "REDEMPTION"} amount=${ethers.formatUnits(req.amount, 18)} status=${status}`);
  }
}

run().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
