import { NavLink, Link } from "react-router-dom";
import { CHAIN_ID, NETWORK_TAG } from "../sluice";
import ThemeToggle from "./ThemeToggle";
import WalletButton from "./WalletButton";

// Persistent site navigation shown on every route.
export default function SiteNav() {
  return (
    <header className="hero">
      <Link to="/" className="brand">
        <span className="logo-mark" aria-hidden="true"><i /><i /><i /></span>
        <span className="logo">SLUICE</span>
        <span className="net"><span className="dot" />{NETWORK_TAG}<span className="net-id">{CHAIN_ID}</span></span>
      </Link>
      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "navlink on" : "navlink")}>
          Home
        </NavLink>
        <NavLink to="/firewall" className={({ isActive }) => (isActive ? "navlink on" : "navlink")}>
          Firewall
        </NavLink>
        <NavLink to="/how" className={({ isActive }) => (isActive ? "navlink on" : "navlink")}>
          Protocol
        </NavLink>
      </nav>
      <div className="nav-actions">
        <ThemeToggle />
        <WalletButton />
      </div>
    </header>
  );
}
