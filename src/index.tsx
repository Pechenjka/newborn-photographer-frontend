import React, { StrictMode, Suspense } from "react";
import "./index.scss";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import "./18n";

const container = document.getElementById("root") as HTMLElement;

if (container.hasChildNodes()) {
  hydrateRoot(
    container,
    <BrowserRouter>
      <Provider store={store}>
        <StrictMode>
          <HelmetProvider>
            <Suspense fallback={<div>Loading...</div>}>
            <App />
            </Suspense>
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
          <Suspense fallback={<div>Loading...</div>}>
            <App />
          </Suspense>
        </HelmetProvider>
      </Provider>
    </BrowserRouter>
  );
}
