import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

const rootElement = document.getElementById("root") as HTMLElement;
// const root = createRoot(rootElement);

ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </BrowserRouter>,
  rootElement
);
// root.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <HelmetProvider>
//         <App />
//       </HelmetProvider>
//     </Provider>
//   </BrowserRouter>
// );
