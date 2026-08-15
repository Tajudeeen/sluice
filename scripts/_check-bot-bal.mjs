// Reads .env, derives deployer/attester addresses, checks BOT Chain balances.
// Prints ONLY addresses + balances. Never prints private keys.
import { ethers } from "ethers";
import * as fs from "fs";
import * as path from "path";

const envPath = path.join(process.cwd(), ".env");
const txt = fs.readFileSync(envPath, "utf8");
const env = {};
for (const line of txt.split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}

const RPC = env.BOT_RPC_URL || "https://rpc.botchain.ai/";
const provider = new ethers.JsonRpcProvider(RPC);

function derive(label, key) {
  if (!key) return { label, addr: "(not set)", bal: null };
  try {
    const w = new ethers.Wallet(key);
    return { label, addr: w.address, bal: null, wallet: w };
  } catch (e) {
    return { label, addr: "(invalid key)", bal: null };
  }
}

const dep = derive("DEPLOYER", env.DEPLOYER_PRIVATE_KEY);
const att = derive("ATTESTER", env.ATTESTER_PRIVATE_KEY);

console.log(`RPC: ${RPC}`);
try {
  const chainId = await provider.getNetwork();
  console.log(`Chain ID: ${chainId.chainId}`);
} catch (e) {
  console.log(`RPC UNREACHABLE: ${String(e).split("\n")[0]}`);
  process.exit(0);
}

async function bal(addr) {
  if (!addr || addr.startsWith("(")) return "(n/a)";
  const b = await provider.getBalance(addr);
  return `${ethers.formatEther(b)} BOT`;
}

console.log(`DEPLOYER  ${dep.addr}  ->  ${await bal(dep.addr)}`);
console.log(`ATTESTER  ${att.addr}  ->  ${await bal(att.addr)}`);

// Also check any existing bot deployment artifact
const artPath = path.join(process.cwd(), "artifacts", "deployment.bot.json");
if (fs.existsSync(artPath)) {
  const art = JSON.parse(fs.readFileSync(artPath, "utf8"));
  console.log("\nExisting BOT deployment artifact found:");
  console.log(`  gate:   ${art.gate}`);
  console.log(`  asset:  ${art.asset}`);
  console.log(`  registry: ${art.registry}`);
  console.log(`  deployedAt: ${art.deployedAt}`);
  // check gate code
  const code = await provider.getCode(art.gate);
  console.log(`  gate has code on-chain: ${code !== "0x"}`);
} else {
  console.log("\nNo BOT deployment artifact yet.");
}
