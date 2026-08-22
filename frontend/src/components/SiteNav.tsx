import { NavLink, Link } from "react-router-dom";
import { DREAMDEX_CHAIN_ID } from "../dreamdex";
import ThemeToggle from "./ThemeToggle";
import WalletButton from "./WalletButton";

// Persistent site navigation shown on every route.
export default function SiteNav() {
  return (
    <header className="hero">
      <Link to="/" className="brand">
        <span className="logo-mark" aria-hidden="true"><i /><i /><i /></span>
        <span className="logo">SLUICE MARKETS</span>
        <span className="net"><span className="dot" />SOMNIA SHANNON<span className="net-id">{DREAMDEX_CHAIN_ID}</span></span>
      </Link>
      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "navlink on" : "navlink")}>
          Home
        </NavLink>
        <NavLink to="/markets" className={({ isActive }) => (isActive ? "navlink on" : "navlink")}>
          Markets
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "navlink on" : "navlink")}>
          Portfolio
        </NavLink>
        <NavLink to="/how" className={({ isActive }) => (isActive ? "navlink on" : "navlink")}>
          Architecture
        </NavLink>
      </nav>
      <div className="nav-actions">
        <ThemeToggle />
        <WalletButton />
      </div>
    </header>
  );
}
