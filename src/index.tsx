import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import * as ReactDOMClient from "react-dom/client";
import { createRoot } from "react-dom/client";
import { hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container)
// ReactDOMClient.hydrateRoot(
//   rootElement,
//     <BrowserRouter>
//       <HelmetProvider>
//       <Provider store={store}>
//         <App />
//       </Provider>
//       </HelmetProvider>
//     </BrowserRouter>
// );

root.render(
  <BrowserRouter>
    <HelmetProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </HelmetProvider>
  </BrowserRouter>
);

