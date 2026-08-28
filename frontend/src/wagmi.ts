import { http, createConfig, type CreateConnectorFn } from "wagmi";
import { somniaShannon } from "@somnia-chain/markets-sdk/chains";
import { mainnet } from "viem/chains";
import { injected, coinbaseWallet, walletConnect } from "@wagmi/connectors";
import { DREAMDEX_RPC_URL } from "./dreamdex";

// WalletConnect requires a free Reown projectId (https://cloud.reown.com).
// Without it the connector is omitted and the mobile QR option stays hidden;
// the Coinbase Wallet connector still works for mobile users with no setup.
const walletConnectProjectId = (import.meta.env.VITE_WALLETCONNECT_PROJECT_ID as string | undefined)?.trim();

const connectors: CreateConnectorFn[] = [
  // Enables EIP-6963 discovery: every installed browser wallet extension
  // (MetaMask, Rabby, OKX, Brave, ...) is auto-detected and listed.
  injected(),
  // Coinbase Wallet: works on desktop extension AND mobile (opens the app).
  coinbaseWallet({ appName: "Sluice", preference: "all" }),
];

if (walletConnectProjectId) {
  connectors.push(
    walletConnect({
      projectId: walletConnectProjectId,
      showQrModal: true,
      metadata: {
        name: "Sluice",
        description: "Downside-capped Event Contract execution on Somnia",
        url: typeof window !== "undefined" ? window.location.origin : "https://sluice.app",
        icons: [],
      },
    })
  );
}

export const wagmiConfig = createConfig({
  chains: [somniaShannon, mainnet],
  connectors,
  transports: {
    [somniaShannon.id]: http(DREAMDEX_RPC_URL),
    [mainnet.id]: http(),
  },
});
