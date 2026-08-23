import { useState } from "react";
import { useAccount, useConnect, useDisconnect, useChainId, useSwitchChain, useWalletClient } from "wagmi";
import { injected } from "wagmi/connectors";
import { shortAddr } from "../sluice";
import { DREAMDEX_CHAIN_ID, DREAMDEX_EXPLORER_URL, DREAMDEX_RPC_URLS, dreamdexExchange } from "../dreamdex";

// Reusable connect/disconnect control. Used in the site nav on every page.
export default function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connectAsync } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChainAsync } = useSwitchChain();
  const { data: walletClient } = useWalletClient();
  const walletChainId = useChainId();
  const [faucetState, setFaucetState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [rpcState, setRpcState] = useState<"idle" | "repairing" | "done" | "error">("idle");
  const [walletError, setWalletError] = useState("");
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

  async function repairShannonRpc() {
    const provider = (window as any).ethereum;
    if (!provider) return;
    setRpcState("repairing");
    setWalletError("");
    try {
      await provider.request({ method: "wallet_addEthereumChain", params: [shannonParams] });
      await provider.request({ method: "wallet_switchEthereumChain", params: [{ chainId: shannonParams.chainId }] });
      setRpcState("done");
    } catch (err) {
      setRpcState("error");
      setWalletError("Your wallet may keep the existing RouteMe RPC. Edit Shannon's network settings manually and use https://api.infra.testnet.somnia.network.");
      console.error("Shannon RPC repair failed", err);
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

  async function claimTestCollateral() {
    if (!walletClient || walletChainId !== DREAMDEX_CHAIN_ID) return;
    setFaucetState("loading");
    setWalletError("");
    try {
      dreamdexExchange.setSigner({ walletClient });
      const receipt = await dreamdexExchange.trader.faucet({ amount: 1_000n * 1_000_000n });
      setFaucetState("done");
      window.dispatchEvent(new CustomEvent("sluice:collateral-claimed", { detail: { hash: receipt.hash } }));
    } catch (err) {
      setFaucetState("error");
      setWalletError("Wallet RPC is rate-limited. Replace Shannon's RouteMe RPC with the official Somnia RPC, then retry.");
      console.error("tUSDC faucet request failed", err);
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
        {!isWrongNetwork && <button className="ghost rpc-repair" onClick={repairShannonRpc} disabled={rpcState === "repairing"} title="Replace a rate-limited Shannon RPC with Somnia's public endpoints">
          {rpcState === "repairing" ? "Repairing RPC..." : rpcState === "done" ? "Shannon RPC ready" : rpcState === "error" ? "Retry RPC repair" : "Repair Shannon RPC"}
        </button>}
        {!isWrongNetwork && <button className="ghost faucet-claim" onClick={claimTestCollateral} disabled={!walletClient || faucetState === "loading"} title="Mint test collateral from the Shannon tUSDC faucet">
          {faucetState === "loading" ? "Claiming..." : faucetState === "done" ? "1,000 tUSDC claimed" : faucetState === "error" ? "Retry tUSDC claim" : "Claim 1,000 tUSDC"}
        </button>}
        <button className="ghost" onClick={() => disconnect()}>
          Disconnect
        </button>
        {walletError && <span className="wallet-error" role="status">{walletError}</span>}
      </div>
    );
  }
  return (
    <button className="primary" onClick={connectWallet}>
      Connect Wallet
    </button>
  );
}
