/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DREAMDEX_INDEXER_URL?: string;
  readonly VITE_DREAMDEX_RPC_URL?: string;
  readonly VITE_DREAMDEX_WS_URL?: string;
  readonly VITE_DREAMDEX_EXPLORER_URL?: string;
  readonly VITE_RPC_URL?: string;
  readonly VITE_CHAIN_ID?: string;
  readonly VITE_CHAIN_NAME?: string;
  readonly VITE_NETWORK_TAG?: string;
  readonly VITE_EXPLORER_URL?: string;
  readonly VITE_ASSET_ADDRESS?: string;
  readonly VITE_GATE_ADDRESS?: string;
  readonly VITE_ATTESTER_ADDRESS?: string;
  readonly VITE_DEMO_ATTACKER_ADDRESS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
