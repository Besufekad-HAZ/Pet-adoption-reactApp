import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { loadableReady } from "@loadable/component";

loadableReady(() => {
  hydrateRoot(
    document.getElementById("root"),
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
});
