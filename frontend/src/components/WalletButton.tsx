import { useCallback, useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect, useChainId, useSwitchChain } from "wagmi";
import { injected } from "wagmi/connectors";
import { shortAddr } from "../sluice";
import { DREAMDEX_CHAIN_ID, DREAMDEX_EXPLORER_URL, DREAMDEX_RPC_URLS } from "../dreamdex";

// ---- EIP-6963 multi-wallet discovery ---------------------------------------
// Rather than blindly grabbing whatever extension set `window.ethereum` (which
// silently favours one wallet when several are installed), we announce for and
// collect every EIP-6963-compatible wallet extension (MetaMask, Rabby, Coinbase
// Wallet, OKX, Brave, BlockWallet, Trust, etc.) and let the user pick. Works in
// any browser that supports wallet extensions.
interface Eip6963ProviderInfo {
  uuid: string;
  name: string;
  icon: string; // data URI
  rdns: string;
}
interface DiscoveredWallet {
  info: Eip6963ProviderInfo;
  provider: unknown;
}

function useWalletExtensions() {
  const [wallets, setWallets] = useState<DiscoveredWallet[]>([]);
  useEffect(() => {
    const found = new Map<string, DiscoveredWallet>();
    const onAnnounce = (event: Event) => {
      const detail = (event as CustomEvent).detail as { info: Eip6963ProviderInfo; provider: unknown };
      if (!detail?.info?.uuid) return;
      found.set(detail.info.uuid, { info: detail.info, provider: detail.provider });
      setWallets(Array.from(found.values()));
    };
    window.addEventListener("eip6963:announceProvider", onAnnounce as EventListener);
    // Ask every installed extension to announce itself.
    window.dispatchEvent(new Event("eip6963:requestProvider"));
    return () => window.removeEventListener("eip6963:announceProvider", onAnnounce as EventListener);
  }, []);
  return wallets;
}

// Reusable connect/disconnect control. Used in the site nav on every page.
export default function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connectAsync } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChainAsync } = useSwitchChain();
  const walletChainId = useChainId();
  const extensions = useWalletExtensions();
  const [pickerOpen, setPickerOpen] = useState(false);

  const shannonParams = {
    chainId: `0x${DREAMDEX_CHAIN_ID.toString(16)}`,
    chainName: "Somnia Shannon Testnet",
    nativeCurrency: { name: "STT", symbol: "STT", decimals: 18 },
    rpcUrls: [...DREAMDEX_RPC_URLS],
    blockExplorerUrls: [DREAMDEX_EXPLORER_URL],
  };

  async function ensureDreamdexChain() {
    const provider = (window as any).ethereum;
    if (!provider) return;
    try {
      await provider.request({ method: "wallet_switchEthereumChain", params: [{ chainId: shannonParams.chainId }] });
    } catch (err: any) {
      if (err?.code !== 4902) throw err;
      await provider.request({ method: "wallet_addEthereumChain", params: [shannonParams] });
    }
  }

  const connectWithProvider = useCallback(
    async (target: { id: string; name: string; provider?: unknown } | undefined) => {
      try {
        if (target) {
          await connectAsync({
            connector: injected({
              target: { id: target.id, name: target.name, provider: target.provider as any },
            }),
          });
        } else {
          // Fallback: generic injected() for browsers/extensions that don't
          // announce via EIP-6963 (older extensions, plain window.ethereum).
          await connectAsync({ connector: injected() });
        }
        await ensureDreamdexChain();
      } catch (err) {
        console.error("Wallet connection/network switch failed", err);
      } finally {
        setPickerOpen(false);
      }
    },
    [connectAsync]
  );

  function openPicker() {
    // No extensions announced? Go straight to the generic injected provider.
    if (extensions.length === 0) {
      connectWithProvider(undefined);
      return;
    }
    setPickerOpen(true);
  }

  async function switchWalletNetwork() {
    try {
      if (switchChainAsync) await switchChainAsync({ chainId: DREAMDEX_CHAIN_ID });
      else await ensureDreamdexChain();
    } catch (err: any) {
      if (err?.code === 4902) {
        try { await ensureDreamdexChain(); return; } catch (addError) { console.error("Somnia network add failed", addError); }
      }
      console.error("Wallet network switch failed", err);
    }
  }

  async function selectWalletNetwork(chainId: 1 | 50312) {
    try {
      await switchChainAsync({ chainId });
    } catch (err) {
      console.error("Wallet network switch failed", err);
    }
  }

  const isWrongNetwork = isConnected && walletChainId !== DREAMDEX_CHAIN_ID;

  // Close on Escape.
  useEffect(() => {
    if (!pickerOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setPickerOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pickerOpen]);

  if (isConnected) {
    return (
      <div className="wallet">
        <span className="addr">{shortAddr(address!)}</span>
        <select className="network-select" aria-label="Wallet network" value={walletChainId === 1 || walletChainId === DREAMDEX_CHAIN_ID ? walletChainId : ""} onChange={(event) => selectWalletNetwork(Number(event.target.value) as 1 | 50312)}>
          {walletChainId !== 1 && walletChainId !== DREAMDEX_CHAIN_ID && <option value="">Unsupported network</option>}
          <option value={DREAMDEX_CHAIN_ID}>Somnia Shannon</option>
          <option value={1}>Ethereum</option>
        </select>
        {isWrongNetwork && <button className="ghost network-warning" onClick={switchWalletNetwork}>Switch to Shannon</button>}
        <button className="ghost" onClick={() => disconnect()}>
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <>
      <button className="primary" onClick={openPicker}>
        Connect Wallet
      </button>

      {pickerOpen && (
        <div className="wallet-picker-overlay" onClick={() => setPickerOpen(false)} role="presentation">
          <div className="wallet-picker" role="dialog" aria-modal="true" aria-label="Connect a wallet extension" onClick={(e) => e.stopPropagation()}>
            <div className="wallet-picker-head">
              <strong>Connect a wallet</strong>
              <button className="wallet-picker-close" aria-label="Close" onClick={() => setPickerOpen(false)}>×</button>
            </div>
            <p className="wallet-picker-sub">Choose a browser wallet extension to continue.</p>
            <div className="wallet-picker-list">
              {extensions.map((w) => (
                <button key={w.info.uuid} className="wallet-picker-option" onClick={() => connectWithProvider({ id: w.info.uuid, name: w.info.name, provider: w.provider })}>
                  {w.info.icon ? <img src={w.info.icon} alt="" className="wallet-picker-icon" /> : <span className="wallet-picker-icon wallet-picker-icon--fallback" />}
                  <span className="wallet-picker-name">{w.info.name}</span>
                </button>
              ))}
              <button className="wallet-picker-option wallet-picker-option--fallback" onClick={() => connectWithProvider(undefined)}>
                <span className="wallet-picker-icon wallet-picker-icon--fallback" />
                <span className="wallet-picker-name">Browser wallet</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
