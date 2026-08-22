import { Routes, Route, Navigate } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import Splash from "./pages/Splash";
import How from "./pages/How";
import Markets from "./pages/Markets";
import Portfolio from "./pages/Portfolio";

// Persistent layout: nav + routed pages. The wallet provider and router live in
// main.tsx so every page shares Wagmi/React-Query state.
export default function App() {
  return (
    <>
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
