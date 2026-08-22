require("dotenv").config();

// Load only the Hardhat plugins Sluice actually uses. The full
// @nomicfoundation/hardhat-toolbox also pulls in solidity-coverage, whose
// current build is incompatible with Hardhat 2.29 (it calls the old `subtask`
// API and crashes at load). We require the specific plugins directly.
require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomicfoundation/hardhat-verify");

const somniaRpc = process.env.SOMNIA_RPC_URL || "https://dream-rpc.somnia.network";
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
    somnia: {
      url: somniaRpc,
      chainId: 50312,
      accounts: [deployerKey, attesterKey].filter(Boolean),
      gasPrice: 60_000_000_000,
      timeout: 120_000,
    },
    // Public testnet for a LIVE demo mirror (no mainnet gas needed). Free Sepolia
    // ETH from a faucet funds the deployer. Use this to host a working firewall
    // behind a separate legacy proof build when needed.
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "https://rpc.sepolia.org",
      chainId: 11155111,
      accounts: [deployerKey, attesterKey].filter(Boolean),
      timeout: 120_000,
    },
  },
  etherscan: {
    apiType: "etherscan",
    enabled: true,
    apiKey: {
      somnia: process.env.SOMNIA_EXPLORER_API_KEY || "blockscout",
    },
    customChains: [
      {
        network: "somnia",
        chainId: 50312,
        urls: {
          apiURL: process.env.SOMNIA_EXPLORER_API_URL || "https://shannon-explorer.somnia.network/api",
          browserURL: process.env.SOMNIA_EXPLORER_URL || "https://shannon-explorer.somnia.network",
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
