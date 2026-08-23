import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { DREAMDEX_CHAIN_ID } from "../dreamdex";
import ThemeToggle from "./ThemeToggle";
import WalletButton from "./WalletButton";

// Persistent site navigation shown on every route.
export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") closeMenu(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className={`hero ${menuOpen ? "menu-open" : ""}`}>
      <Link to="/" className="brand">
        <span className="logo-mark" aria-hidden="true"><i /><i /><i /></span>
        <span className="logo">SLUICE MARKETS</span>
        <span className="net"><span className="dot" />SOMNIA SHANNON<span className="net-id">{DREAMDEX_CHAIN_ID}</span></span>
      </Link>
      <nav className="nav" aria-label="Primary navigation">
        <NavLink onClick={closeMenu} to="/" end className={({ isActive }) => (isActive ? "navlink on" : "navlink")}>
          Home
        </NavLink>
        <NavLink onClick={closeMenu} to="/markets" className={({ isActive }) => (isActive ? "navlink on" : "navlink")}>
          Markets
        </NavLink>
        <NavLink onClick={closeMenu} to="/portfolio" className={({ isActive }) => (isActive ? "navlink on" : "navlink")}>
          Portfolio
        </NavLink>
        <NavLink onClick={closeMenu} to="/how" className={({ isActive }) => (isActive ? "navlink on" : "navlink")}>
          Architecture
        </NavLink>
      </nav>
      <div className="nav-actions">
        <ThemeToggle />
        <WalletButton />
      </div>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen((open) => !open)}>
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      {menuOpen && <>
        <button className="menu-scrim" type="button" onClick={closeMenu} aria-label="Close menu" />
        <aside id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
          <div className="mobile-nav-head"><span><span className="logo-mark" aria-hidden="true"><i /><i /><i /></span>SLUICE MARKETS</span><button type="button" className="mobile-close" onClick={closeMenu} aria-label="Close menu">×</button></div>
          <nav className="mobile-nav-links" aria-label="Mobile primary navigation">
            <NavLink onClick={closeMenu} to="/" end>Home <span>01</span></NavLink>
            <NavLink onClick={closeMenu} to="/markets">Markets <span>02</span></NavLink>
            <NavLink onClick={closeMenu} to="/portfolio">Portfolio <span>03</span></NavLink>
            <NavLink onClick={closeMenu} to="/how">How it works <span>04</span></NavLink>
          </nav>
          <div className="mobile-nav-tools">
            <div><small>Wallet & network</small><WalletButton /></div>
            <div><small>Appearance</small><ThemeToggle /></div>
          </div>
          <p className="mobile-nav-note"><span className="dot" /> DreamDEX Event Contracts on Somnia Shannon</p>
        </aside>
      </>}
    </header>
  );
}
