// Sluice verification script.
//
//   npx hardhat run scripts/verify.ts --network somnia
//
// Reads the deployment artifacts written by scripts/deploy.ts
// (artifacts/deployment.<network>.json) and submits each contract for
// source verification on the network's block explorer.
//
// NOTE: verification is best-effort. If the explorer does not expose an
// Etherscan-compatible API (or the network is private), the script reports the
// failure per-contract and continues, rather than aborting the whole run.
//
// You can also pass explicit addresses + args on the command line:
//   npx hardhat run scripts/verify.ts --network somnia \
//     -- <asset> <registry> <gate> \
//     --args '["Sluice Liquidity Unit","SLUSD","0xATTESTER"]' \
//            '[["0xATTESTER"]]' \
//            '["0xASSET","0xREGISTRY",3600]'

import * as fs from "fs";
import * as path from "path";
import { parseArgs } from "util";

interface Deployment {
  network: string;
  chainId: number;
  deployedAt: string;
  attester: string;
  asset: string;
  registry: string;
  gate: string;
  timeout: number;
  constructorArgs: {
    registry: any[];
    asset: any[];
    gate: any[];
  };
}

async function main() {
  const hre = await import("hardhat");
  const networkName = hre.network.name;

  // Optional CLI override: addresses + per-contract constructor args.
  const { values, positionals } = parseArgs({
    args: process.argv.slice(2),
    allowPositionals: true,
  });
  void values;

  let dep: Deployment;
  if (positionals.length >= 3) {
    const [asset, registry, gate] = positionals;
    const rawArgs = (parseArgs({ args: process.argv.slice(2), options: { args: { type: "string" } } }).values.args as string) || "[]";
    const groups: any[] = JSON.parse(rawArgs);
    dep = {
      network: networkName,
      chainId: hre.network.config.chainId as number,
      deployedAt: new Date().toISOString(),
      attester: "",
      asset,
      registry,
      gate,
      timeout: 3600,
      constructorArgs: {
        registry: groups[0] ?? [],
        asset: groups[1] ?? [],
        gate: groups[2] ?? [],
      },
    };
    console.log("Using CLI-provided addresses/args.");
  } else {
    const overrideFile = process.env.DEPLOYMENT_FILE;
    const generatedFile = path.join("artifacts", `deployment.${networkName}.json`);
    const documentedFile = path.join("docs", "live-deployment.json");
    const file = overrideFile || (fs.existsSync(generatedFile) ? generatedFile : documentedFile);
    if (!fs.existsSync(file)) {
      throw new Error(
        `No deployment artifacts found at ${file}.\nRun scripts/deploy.ts first (npx hardhat run scripts/deploy.ts --network ${networkName}).`
      );
    }
    dep = JSON.parse(fs.readFileSync(file, "utf8")) as Deployment;
    console.log(`Loaded deployment for ${dep.network} (chainId ${dep.chainId}).`);
  }

  async function verify(label: string, address: string, args: any[]) {
    console.log(`\nVerifying ${label} at ${address} ...`);
    try {
      await hre.run("verify:verify", { address, constructorArguments: args });
      console.log(`  OK: ${label} verified.`);
    } catch (err: any) {
      const msg = String(err?.message || err);
      if (/already verified|already been verified/i.test(msg)) {
        console.log(`  SKIP: ${label} is already verified.`);
      } else {
        console.warn(`  WARN: verification failed for ${label}: ${msg.split("\n")[0]}`);
        console.warn("        (explorer may not support Etherscan-style verification on this network)");
      }
    }
  }

  await verify("SluiceAsset", dep.asset, dep.constructorArgs.asset);
  await verify("AttesterRegistry", dep.registry, dep.constructorArgs.registry);
  await verify("SluiceGate", dep.gate, dep.constructorArgs.gate);

  console.log("\nVerification pass complete.");
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
