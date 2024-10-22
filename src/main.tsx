import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NewRegistrationProvider } from "./context/member-registration-context.tsx";
import { App } from "./app.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NewRegistrationProvider>
      <App />
    </NewRegistrationProvider>
  </StrictMode>
);
