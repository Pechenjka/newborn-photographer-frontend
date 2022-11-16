import React, { StrictMode } from "react";
import "./index.scss";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

const container = document.getElementById("root") as HTMLElement;

if (container.hasChildNodes()) {
  hydrateRoot(
    container,
    <BrowserRouter>
      <Provider store={store}>
        <StrictMode>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </StrictMode>
      </Provider>
    </BrowserRouter>
  );
} else {
  const root = createRoot(container);
  root.render(
    <BrowserRouter>
        <Provider store={store}>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </Provider>
    </BrowserRouter>
  );
}
