import { useCallback, useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect, useChainId, useSwitchChain } from "wagmi";
import { shortAddr } from "../sluice";
import { DREAMDEX_CHAIN_ID, DREAMDEX_EXPLORER_URL, DREAMDEX_RPC_URLS } from "../dreamdex";

// Reusable connect/disconnect control. Used in the site nav on every page.
//
// The picker is built from wagmi's `connectors` list, which automatically
// includes:
//   - every EIP-6963 browser wallet extension that announces itself
//     (MetaMask, Rabby, OKX, Brave, Trust, ...) on desktop,
//   - the generic injected() fallback ("Browser Wallet"),
//   - Coinbase Wallet (also opens on mobile),
//   - WalletConnect (QR / deep-link to any mobile wallet) when a Reown
//     projectId is configured.
// This means the same control works on desktop extensions AND mobile browsers.
export default function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connectAsync, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChainAsync } = useSwitchChain();
  const walletChainId = useChainId();
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

  const connectWith = useCallback(
    async (connector: (typeof connectors)[number]) => {
      try {
        await connectAsync({ connector });
        await ensureDreamdexChain();
      } catch (err) {
        console.error("Wallet connection/network switch failed", err);
      } finally {
        setPickerOpen(false);
      }
    },
    [connectAsync, connectors]
  );

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
      <button className="primary" onClick={() => setPickerOpen(true)}>
        Connect Wallet
      </button>

      {pickerOpen && (
        <div className="wallet-picker-overlay" onClick={() => setPickerOpen(false)} role="presentation">
          <div className="wallet-picker" role="dialog" aria-modal="true" aria-label="Connect a wallet" onClick={(e) => e.stopPropagation()}>
            <div className="wallet-picker-head">
              <strong>Connect a wallet</strong>
              <button className="wallet-picker-close" aria-label="Close" onClick={() => setPickerOpen(false)}>×</button>
            </div>
            <p className="wallet-picker-sub">Choose how you want to connect.</p>
            <div className="wallet-picker-list">
              {connectors.map((c) => {
                const label = c.id === "injected" ? "Browser Wallet" : c.name;
                return (
                  <button key={c.uid} className="wallet-picker-option" onClick={() => connectWith(c)}>
                    {c.icon ? <img src={c.icon} alt="" className="wallet-picker-icon" /> : <span className="wallet-picker-icon wallet-picker-icon--fallback" />}
                    <span className="wallet-picker-name">{label}</span>
                  </button>
                );
              })}
            </div>
            {connectors.length === 0 && (
              <p className="wallet-picker-sub">No wallet found. Install a browser wallet extension, or configure a WalletConnect projectId to connect from mobile.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
