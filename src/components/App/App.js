import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { useEffect } from "react";
import { handleGetPhotos } from "../../redux/Actions/photosActions";
import { useDispatch } from "react-redux";
import PopupWithImage from "../PopupWithImage/PopupWithImage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetPhotos());
  }, [dispatch]);

  window.localStorage.removeItem("getPhotos");

  return (
    <div className="page">
      <Header />
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <PopupWithImage/>
    </div>
  );
}

export default App;
