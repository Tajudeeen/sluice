import { NavLink, Link } from "react-router-dom";
import { CHAIN_ID } from "../sluice";
import WalletButton from "./WalletButton";

// Persistent site navigation shown on every route.
export default function SiteNav() {
  return (
    <header className="hero">
      <Link to="/" className="brand">
        <span className="logo">▱ SLUICE</span>
        <span className="net"><span className="dot" />BOT Chain<span className="net-id">{CHAIN_ID}</span></span>
      </Link>
      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "navlink on" : "navlink")}>
          Home
        </NavLink>
        <NavLink to="/firewall" className={({ isActive }) => (isActive ? "navlink on" : "navlink")}>
          Firewall
        </NavLink>
        <NavLink to="/how" className={({ isActive }) => (isActive ? "navlink on" : "navlink")}>
          How it works
        </NavLink>
      </nav>
      <WalletButton />
    </header>
  );
}
