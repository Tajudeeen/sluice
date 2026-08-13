import { Routes, Route, Navigate } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import Splash from "./pages/Splash";
import Firewall from "./pages/Firewall";
import How from "./pages/How";

// Persistent layout: nav + routed pages. The wallet provider and router live in
// main.tsx so every page shares Wagmi/React-Query state.
export default function App() {
  return (
    <>
      <SiteNav />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/firewall" element={<Firewall />} />
        <Route path="/how" element={<How />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
