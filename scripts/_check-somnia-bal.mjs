// Reads .env, derives deployer/attester addresses, checks Somnia balances.
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

const rpc = env.SOMNIA_RPC_URL || "https://dream-rpc.somnia.network";
const provider = new ethers.JsonRpcProvider(rpc);

function derive(label, key) {
  if (!key) return { label, addr: "(not set)", bal: null };
  try {
    const wallet = new ethers.Wallet(key);
    return { label, addr: wallet.address, bal: null, wallet };
  } catch {
    return { label, addr: "(invalid key)", bal: null };
  }
}

const deployer = derive("DEPLOYER", env.DEPLOYER_PRIVATE_KEY);
const attester = derive("ATTESTER", env.ATTESTER_PRIVATE_KEY);

console.log(`RPC: ${rpc}`);
try {
  const network = await provider.getNetwork();
  console.log(`Chain ID: ${network.chainId}`);
} catch (error) {
  console.log(`RPC UNREACHABLE: ${String(error).split("\n")[0]}`);
  process.exit(0);
}

async function balance(address) {
  if (!address || address.startsWith("(")) return "(n/a)";
  return `${ethers.formatEther(await provider.getBalance(address))} STT`;
}

console.log(`DEPLOYER  ${deployer.addr}  ->  ${await balance(deployer.addr)}`);
console.log(`ATTESTER  ${attester.addr}  ->  ${await balance(attester.addr)}`);

const artifactPath = path.join(process.cwd(), "artifacts", "deployment.somnia.json");
if (fs.existsSync(artifactPath)) {
  const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
  console.log("\nExisting Somnia deployment artifact found:");
  console.log(`  gate:   ${artifact.gate}`);
  console.log(`  asset:  ${artifact.asset}`);
  console.log(`  registry: ${artifact.registry}`);
  console.log(`  deployedAt: ${artifact.deployedAt}`);
  const code = await provider.getCode(artifact.gate);
  console.log(`  gate has code on-chain: ${code !== "0x"}`);
} else {
  console.log("\nNo Somnia deployment artifact yet.");
}
