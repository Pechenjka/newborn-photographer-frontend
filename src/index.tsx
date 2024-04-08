import React, { StrictMode, Suspense } from "react";
import "./index.scss";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import PreLoader from "./components/PreLoader/PreLoader";
import "./18n";

const container = document.getElementById("root") as HTMLElement;

const hydrateRoot = (component: React.ReactElement) => {
  createRoot(container).render(
    <BrowserRouter>
      <Provider store={store}>
        <HelmetProvider>
          <Suspense
            fallback={
              <div style={{ margin: "100px 50px" }}>
                <PreLoader />
              </div>
            }
          >
            {component}
          </Suspense>
        </HelmetProvider>
      </Provider>
    </BrowserRouter>
  );
};

hydrateRoot(<App />);
