import { useAccount, useConnect, useDisconnect, useChainId } from "wagmi";
import { injected } from "wagmi/connectors";
import { CHAIN_ID, shortAddr } from "../sluice";
import { BOT_CHAIN_PARAMS } from "../wagmi";

// Reusable connect/disconnect control. Used in the site nav on every page.
export default function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connectAsync } = useConnect();
  const { disconnect } = useDisconnect();
  const walletChainId = useChainId();

  async function ensureBotChain() {
    const provider = (window as any).ethereum;
    if (!provider) return;
    try {
      await provider.request({ method: "wallet_switchEthereumChain", params: [{ chainId: BOT_CHAIN_PARAMS.chainId }] });
    } catch (err: any) {
      if (err?.code !== 4902) throw err;
      await provider.request({ method: "wallet_addEthereumChain", params: [BOT_CHAIN_PARAMS] });
    }
  }

  async function connectWallet() {
    try {
      await connectAsync({ connector: injected() });
      await ensureBotChain();
    } catch (err) {
      console.error("Wallet connection/network switch failed", err);
    }
  }

  async function switchWalletNetwork() {
    try {
      await ensureBotChain();
    } catch (err) {
      console.error("Wallet network switch failed", err);
    }
  }

  if (isConnected) {
    return (
      <div className="wallet">
        <span className="addr">{shortAddr(address!)}</span>
        {walletChainId !== CHAIN_ID && <button className="ghost network-warning" onClick={switchWalletNetwork}>Switch to {CHAIN_ID}</button>}
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
