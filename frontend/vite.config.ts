import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// Vite config for the Sluice demo frontend.
// VITE_* env vars are inlined at BUILD time (see .env.example). Point the app at a
// deployed SluiceGate + SluiceAsset by setting VITE_GATE_ADDRESS / VITE_ASSET_ADDRESS.
export default defineConfig({
  root: resolve(__dirname),
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          if (id.includes("wagmi") || id.includes("viem") || id.includes("@walletconnect") || id.includes("@reown") || id.includes("@coinbase") || id.includes("@base-org")) return "wallet";
          if (id.includes("ethers")) return "ethers";
          return undefined;
        },
      },
    },
  },
});
