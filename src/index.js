import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StoreContext from "./StoreContext";
import { categoryStore } from "./State/CategoryStore";
import "./styles/common.css";
import "./styles/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreContext.Provider value={{ categoryStore }}>
    <App />
  </StoreContext.Provider>
);
