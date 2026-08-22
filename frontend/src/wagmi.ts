import { http, createConfig } from "wagmi";
import { somniaShannon } from "@somnia-chain/markets-sdk/chains";
import { DREAMDEX_RPC_URL } from "./dreamdex";

export const wagmiConfig = createConfig({
  chains: [somniaShannon],
  transports: { [somniaShannon.id]: http(DREAMDEX_RPC_URL) },
});
