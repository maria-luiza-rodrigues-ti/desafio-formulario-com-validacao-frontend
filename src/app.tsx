import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Router />
    </BrowserRouter>
  );
}
