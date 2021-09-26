import "./App.scss";
import { Switch, Route, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import { useEffect, useRef } from "react";
import { handleGetPhotos } from "../../redux/Actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import PopupWithImage from "../PopupWithImage/PopupWithImage";
import { animatedItems } from "../AnimatedItems/AnimatedItems";
import AboutMe from "../AboutMe/AboutMe";
import Contacts from "../Contacts/Contacts";
import NotFound from "../NotFound/NotFound";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Prices from "../Prices/Prices";
import PopupWithDescriptionPacket from "../PopupWithDescriptonPakets/PopupWithDescriptionPackets";
import PopupOrderPhotoSession from "../PopupOrderPhotoSession/PopupOrderPhotoSession";
import PopupConfirmationGetMessageFromTheUser from "../PopupConfirmationGetMessageFromTheUser/PopupConfirmationGetMessageFromTheUser";
import PopupConfirmationGetOrderFromTheUser from "../PopupConfirmationGetOrderFromTheUser/PopupConfirmationGetOrderFromTheUser";
import PhotoProducts from "../PhotoProducts/PhotoProducts";
import PopupTheErrorWhenMessageNotSend from "../PopupTheErrorWhenMessageNotSend/PopupTheErrorWhenMessageNotSend";
import PopupTheErrorWhenOderNotSend from "../PopupTheErrorWhenOrderNotSend/PopupTheErrorWhenMessageNotSend";

function App() {
  const timerRef = useRef(null);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const typesPhotos = useSelector((state) => state.photos.typesPhotos);

  useEffect(() => {
    dispatch(handleGetPhotos(typesPhotos, pathname));
  }, [dispatch, typesPhotos, pathname]);

  useEffect(() => {
    if (pathname) animatedItems();
  }, [pathname]);

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main timerRef={timerRef} />
        </Route>
        <Route exact path="/aboutMe">
          <AboutMe timerRef={timerRef} />
        </Route>
        <Route
          exact
          path={[
            "/photoGallery/newborn",
            "/photoGallery/pregnancy",
            "/photoGallery/baby",
            "/photoGallery/family",
            "/photoGallery/woman",
            "/photoGallery/discharge",
            "/photoGallery/christening",
          ]}
        >
          <PhotoGallery timerRef={timerRef} />
        </Route>
        <Route exact path="/contacts">
          <Contacts timerRef={timerRef} />
        </Route>
        <Route
          exact
          path={[
            "/prices/newborn",
            "/prices/pregnancy",
            "/prices/baby",
            "/prices/family",
            "/prices/woman",
            "/prices/discharge-christening",
          ]}
        >
          <Prices timerRef={timerRef} />
        </Route>
        <Route exact path="/photo-products">
          <PhotoProducts timerRef={timerRef} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <PopupWithImage />
      <PopupWithDescriptionPacket />
      <PopupOrderPhotoSession />
      <PopupConfirmationGetMessageFromTheUser />
      <PopupTheErrorWhenMessageNotSend />
      <PopupConfirmationGetOrderFromTheUser />
      <PopupTheErrorWhenOderNotSend />
    </div>
  );
}

export default App;
