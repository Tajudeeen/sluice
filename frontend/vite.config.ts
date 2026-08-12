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
  },
});
