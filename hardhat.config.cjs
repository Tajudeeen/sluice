require("dotenv").config();

// Load only the Hardhat plugins Sluice actually uses. The full
// @nomicfoundation/hardhat-toolbox also pulls in solidity-coverage, whose
// current build is incompatible with Hardhat 2.29 (it calls the old `subtask`
// API and crashes at load). We require the specific plugins directly.
require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomicfoundation/hardhat-verify");

const botRpc = process.env.BOT_RPC_URL || "https://rpc.botchain.ai/";
const deployerKey =
  process.env.DEPLOYER_PRIVATE_KEY ||
  "0xcf29654b8250b9ad31cca27191def490d2734b8257acb0b202d88c632e89a2aa";
const attesterKey =
  process.env.ATTESTER_PRIVATE_KEY ||
  "0x921b6717d892601367ea6c37e33743e13e07ed613f357ae064da1e343c11f1af";

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
  },
  etherscan: {
    apiType: "etherscan",
    enabled: true,
  },
  paths: {
    sources: "./contracts/src",
    tests: "./contracts/test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
