/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BOT_RPC_URL?: string;
  readonly VITE_CHAIN_ID?: string;
  readonly VITE_EXPLORER_URL?: string;
  readonly VITE_ASSET_ADDRESS?: string;
  readonly VITE_GATE_ADDRESS?: string;
  readonly VITE_ATTESTER_ADDRESS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
