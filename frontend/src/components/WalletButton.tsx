import { useAccount, useConnect, useDisconnect, useChainId } from "wagmi";
import { injected } from "wagmi/connectors";
import { shortAddr } from "../sluice";
import { DREAMDEX_CHAIN_ID, DREAMDEX_EXPLORER_URL, DREAMDEX_RPC_URL } from "../dreamdex";

// Reusable connect/disconnect control. Used in the site nav on every page.
export default function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connectAsync } = useConnect();
  const { disconnect } = useDisconnect();
  const walletChainId = useChainId();

  async function ensureDreamdexChain() {
    const provider = (window as any).ethereum;
    if (!provider) return;
    try {
      await provider.request({ method: "wallet_switchEthereumChain", params: [{ chainId: `0x${DREAMDEX_CHAIN_ID.toString(16)}` }] });
    } catch (err: any) {
      if (err?.code !== 4902) throw err;
      await provider.request({ method: "wallet_addEthereumChain", params: [{ chainId: `0x${DREAMDEX_CHAIN_ID.toString(16)}`, chainName: "Somnia Shannon Testnet", nativeCurrency: { name: "STT", symbol: "STT", decimals: 18 }, rpcUrls: [DREAMDEX_RPC_URL], blockExplorerUrls: [DREAMDEX_EXPLORER_URL] }] });
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
      await ensureDreamdexChain();
    } catch (err) {
      console.error("Wallet network switch failed", err);
    }
  }

  if (isConnected) {
    return (
      <div className="wallet">
        <span className="addr">{shortAddr(address!)}</span>
        {walletChainId !== DREAMDEX_CHAIN_ID && <button className="ghost network-warning" onClick={switchWalletNetwork}>Switch to Shannon</button>}
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
