import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
  return (
    <div className="page">
      <Header />
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
