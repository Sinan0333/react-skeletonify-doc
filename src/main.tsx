import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "react-skeletonify/dist/index.css";
import { SkeletonProvider } from "react-skeletonify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SkeletonProvider>
      <App />
    </SkeletonProvider>
  </StrictMode>
);
