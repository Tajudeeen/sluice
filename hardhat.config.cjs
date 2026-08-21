require("dotenv").config();

// Load only the Hardhat plugins Sluice actually uses. The full
// @nomicfoundation/hardhat-toolbox also pulls in solidity-coverage, whose
// current build is incompatible with Hardhat 2.29 (it calls the old `subtask`
// API and crashes at load). We require the specific plugins directly.
require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomicfoundation/hardhat-verify");

const botRpc = process.env.BOT_RPC_URL || "https://rpc.botchain.ai/";
// Keys MUST come from the environment. No hardcoded fallbacks (avoids shipping
// bogus/placeholder keys and makes missing-config failures explicit).
const deployerKey = process.env.DEPLOYER_PRIVATE_KEY;
const attesterKey = process.env.ATTESTER_PRIVATE_KEY;

/** @type {import('hardhat/config').HardhatUserConfig} */
module.exports = {
  solidity: {
    version: "0.8.26",
    settings: {
      optimizer: { enabled: true, runs: 200 },
      evmVersion: "cancun",
    },
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
    bot: {
      url: botRpc,
      chainId: 677,
      accounts: [deployerKey, attesterKey],
      gasPrice: 60_000_000_000,
      timeout: 120_000,
    },
    // Public testnet for a LIVE demo mirror (no mainnet gas needed). Free Sepolia
    // ETH from a faucet funds the deployer. Use this to host a working firewall
    // behind the build link while waiting on the BOT mainnet token.
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "https://rpc.sepolia.org",
      chainId: 11155111,
      accounts: [deployerKey, attesterKey],
      timeout: 120_000,
    },
  },
  etherscan: {
    apiType: "etherscan",
    enabled: true,
    apiKey: {
      // BOTScan is Blockscout-compatible and accepts a non-secret placeholder.
      bot: process.env.BOT_EXPLORER_API_KEY || "blockscout",
    },
    customChains: [
      {
        network: "bot",
        chainId: 677,
        urls: {
          apiURL: process.env.BOT_EXPLORER_API_URL || "https://scan.botchain.ai/api",
          browserURL: process.env.BOT_EXPLORER_URL || "https://scan.botchain.ai/",
        },
      },
    ],
  },
  paths: {
    sources: "./contracts/src",
    tests: "./contracts/test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
