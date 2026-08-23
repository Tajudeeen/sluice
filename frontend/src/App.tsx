import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import Splash from "./pages/Splash";
import How from "./pages/How";
import Markets from "./pages/Markets";
import Portfolio from "./pages/Portfolio";

// Persistent layout: nav + routed pages. The wallet provider and router live in
// main.tsx so every page shares Wagmi/React-Query state.
export default function App() {
  const [launching, setLaunching] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLaunching(false), 3000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {launching && <div className="launch-screen" role="status" aria-label="Loading Sluice Markets"><div className="launch-card"><span className="launch-mark" aria-hidden="true"><i /><i /><i /></span><strong>SLUICE MARKETS</strong><small>EVENT CONTRACT EXECUTION</small><span className="launch-line" /></div></div>}
      <SiteNav />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/how" element={<How />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
