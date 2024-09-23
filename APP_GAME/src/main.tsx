import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Root";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
); 