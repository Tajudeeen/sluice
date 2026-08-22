import {
  CONFIGURED, GATE_ADDRESS, ASSET_ADDRESS, ATTESTER_ADDRESS,
  CHAIN_NAME, NETWORK_TAG, explorerAddr, shortAddr,
} from "../sluice";

// DeploymentInfo: one block that adapts to whether the build was wired with live
// contract addresses.
//  - Unconfigured build (default / pre-token): an intentional "Demo mode" banner
//    that explains the firewall is proven and shows exactly how it goes live,
//    instead of a scary "No deployed contract addresses" warning.
//  - Configured build (after mainnet/testnet deploy): shows the deployed
//    addresses with explorer links so a judge can verify everything on-chain.
export default function DeploymentInfo() {
  if (!CONFIGURED) {
    return (
      <section className="card deploy-info demo-mode">
        <div className="card-label">DEPLOYMENT</div>
        <h2>Demo mode</h2>
        <p className="muted">
          This hosted build is not wired to public contracts. The same gate, asset, and
          settlement flow run locally and are ready for {CHAIN_NAME} ({NETWORK_TAG}).
        </p>
        <div className="demo-steps">
          <div><span className="ds-n">1</span> Fund the deployer with network gas</div>
          <div><span className="ds-n">2</span><code>npm run deploy:somnia</code> deploys to {CHAIN_NAME}</div>
          <div><span className="ds-n">3</span> Add addresses and rebuild the interface</div>
        </div>
        <p className="muted small">
          The policy model and breach test mirror the current contract path. See <code>docs/PROOF-local-e2e.md</code> for the local end-to-end record.
        </p>
      </section>
    );
  }

  const links: [string, string][] = [
    ["SluiceGate", GATE_ADDRESS],
    ["SluiceAsset (SLUSD)", ASSET_ADDRESS],
  ];
  if (ATTESTER_ADDRESS) links.push(["Attester", ATTESTER_ADDRESS]);

  return (
    <section className="card deploy-info live">
      <div className="card-label">DEPLOYMENT</div>
      <h2>Deployed on {CHAIN_NAME}</h2>
      <div className="deploy-links">
        {links.map(([label, addr]) => (
          <a key={label} className="deploy-link" href={explorerAddr(addr)} target="_blank" rel="noreferrer">
            <span className="dl-label">{label}</span>
            <span className="dl-addr">{shortAddr(addr)} ↗</span>
          </a>
        ))}
      </div>
      <p className="muted small">All contracts are verifiable on {NETWORK_TAG}. The gate is the final enforcement point.</p>
    </section>
  );
}
