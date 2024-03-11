import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/main.css";
import { Index } from "./pages/index";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
