import { http, createConfig } from "wagmi";
import { CHAIN_ID, RPC_URL, EXPLORER_URL, CHAIN_NAME } from "./sluice";

// Configurable chain (defaults to BOT Chain mainnet, chainId 677). The frontend
// only ever READS on-chain state and submits requests; the attester agent
// performs settlement. No funds are moved by the frontend directly.
export const botChain = {
  id: CHAIN_ID,
  name: CHAIN_NAME,
  nativeCurrency: { name: "BOT", symbol: "BOT", decimals: 18 },
  rpcUrls: { default: { http: [RPC_URL] } },
  blockExplorers: { default: { name: "BOTScan", url: EXPLORER_URL.replace(/\/$/, "") } },
} as const;

export const wagmiConfig = createConfig({
  chains: [botChain],
  transports: { [CHAIN_ID]: http(RPC_URL) },
});
