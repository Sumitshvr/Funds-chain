import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ThirdwebProvider activeChain="sepolia" clientId="13c149a8b94a2e25824ce5ef3b846d79">
        <Router>
            <StateContextProvider>
                <App />
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>
);
