import { useAccount, useConnect, useDisconnect, useChainId, useSwitchChain } from "wagmi";
import { injected } from "wagmi/connectors";
import { shortAddr } from "../sluice";
import { DREAMDEX_CHAIN_ID, DREAMDEX_EXPLORER_URL, DREAMDEX_RPC_URLS } from "../dreamdex";

// Reusable connect/disconnect control. Used in the site nav on every page.
export default function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connectAsync } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChainAsync } = useSwitchChain();
  const walletChainId = useChainId();
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

  async function connectWallet() {
    try {
      await connectAsync({ connector: injected() });
      await ensureDreamdexChain();
    } catch (err) {
      console.error("Wallet connection/network switch failed", err);
    }
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
    <button className="primary" onClick={connectWallet}>
      Connect Wallet
    </button>
  );
}
