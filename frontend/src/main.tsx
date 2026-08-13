import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { wagmiConfig } from "./wagmi";
import App from "./App";
import LaunchSplash from "./components/LaunchSplash";
import "./styles.css";

const queryClient = new QueryClient();

function Root() {
  const [splashDone, setSplashDone] = useState(false);
  return (
    <>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </WagmiProvider>
      {!splashDone && <LaunchSplash onDone={() => setSplashDone(true)} />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
