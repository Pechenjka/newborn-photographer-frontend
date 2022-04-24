import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById("root")
);
