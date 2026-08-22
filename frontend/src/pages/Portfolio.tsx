import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import { dreamdexExchange } from "../dreamdex";

export default function Portfolio() {
  const { address } = useAccount();
  const [portfolio, setPortfolio] = useState<any>(null);
  const [status, setStatus] = useState("Connect a Shannon wallet to load positions.");
  useEffect(() => { if (!address) return; dreamdexExchange.client.getPortfolio(address).then((value) => { setPortfolio(value); setStatus("Portfolio synced from DreamDEX indexer."); }).catch((error) => setStatus(error.message)); }, [address]);
  return <div className="app"><div className="bg" aria-hidden="true" /><section className="pitch"><div className="section-kicker">PORTFOLIO / SETTLEMENT</div><h1>Positions with a<br /><em>chain-sourced exit.</em></h1><p>{status}</p></section><main className="grid"><section className="card wide"><div className="card-label">EVENT POSITIONS</div>{portfolio?.positions?.length ? portfolio.positions.map((position: any) => <div className="position-row" key={`${position.market?.id}-${position.outcome}`}><span><b>{position.market?.asset || "Event"}</b><small>{position.market?.question || "Binary outcome"}</small></span><strong>{position.quantity ?? position.balance ?? "0"}</strong><i>{position.outcome || "UP"}</i></div>) : <p className="muted">{address ? "No indexed positions yet. Execute a small IOC order from the market terminal." : "Connect your wallet, then return to the market terminal."}</p>}<Link className="primary" to="/markets">Back to markets</Link></section></main><footer className="foot">DreamDEX Event Contracts · settlement and redemption remain on-chain.</footer></div>;
}
