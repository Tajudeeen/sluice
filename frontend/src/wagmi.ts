import { http, createConfig } from "wagmi";
import { somniaShannon } from "@somnia-chain/markets-sdk/chains";
import { mainnet } from "viem/chains";
import { DREAMDEX_RPC_URL } from "./dreamdex";

export const wagmiConfig = createConfig({
  chains: [somniaShannon, mainnet],
  transports: {
    [somniaShannon.id]: http(DREAMDEX_RPC_URL),
    [mainnet.id]: http(),
  },
});
