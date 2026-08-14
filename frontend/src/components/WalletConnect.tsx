import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";
import { shortAddr } from "../sluice";

// WalletConnect — the spec's required connect/disconnect control.
// Used in the site nav on every page (see SiteNav).
export default function WalletConnect() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <div className="wallet">
        <span className="addr" title={address ?? ""}>{shortAddr(address!)}</span>
        <button className="ghost" onClick={() => disconnect()}>Disconnect</button>
      </div>
    );
  }
  return (
    <button className="primary" onClick={() => connect({ connector: injected() })}>
      Connect Wallet
    </button>
  );
}
