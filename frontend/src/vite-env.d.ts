/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BOT_RPC_URL?: string;
  readonly VITE_CHAIN_ID?: string;
  readonly VITE_CHAIN_NAME?: string;
  readonly VITE_NETWORK_TAG?: string;
  readonly VITE_EXPLORER_URL?: string;
  readonly VITE_ASSET_ADDRESS?: string;
  readonly VITE_GATE_ADDRESS?: string;
  readonly VITE_ATTESTER_ADDRESS?: string;
  readonly VITE_DEMO_ATTACKER_KEY?: string;
  readonly VITE_DEMO_ATTACK_TARGET?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
