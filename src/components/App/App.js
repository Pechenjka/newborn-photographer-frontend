import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { useEffect } from "react";
import { handleGetPhotos, handleGetSlideShow } from "../../redux/Actions/photosActions";
import { useDispatch } from "react-redux";
import PopupWithImage from "../PopupWithImage/PopupWithImage";
import Footer from "../Footer/Footer";
import { changeColorPage } from "../ChangeColorPage/ChangeColorPage";
import { animatedItems } from "../AnimatedItems/AnimatedItems";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetPhotos());
    dispatch(handleGetSlideShow());
  }, [dispatch]);

  useEffect(() => {
    animatedItems();
  }, []);

  window.localStorage.removeItem("getPhotos");

  window.addEventListener("scroll", changeColorPage);


  return (
    <div className="page">
      <Header />
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
      <PopupWithImage />
    </div>
  );
}

export default App;
