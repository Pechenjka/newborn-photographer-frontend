import "./App.scss";
import { Switch, Route, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import React from "react";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import PopupWithImage from "../PopupWithImage/PopupWithImage";
import { animatedItems } from "../AnimatedItems/AnimatedItems";
import AboutMe from "../AboutMe/AboutMe";
import Contacts from "../Contacts/Contacts";
import NotFound from "../NotFound/NotFound";
// import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Prices from "../Prices/Prices";
import PopupWithDescriptionPacket from "../PopupWithDescriptonPakets/PopupWithDescriptionPackets";
import PopupOrderPhotoSession from "../PopupOrderPhotoSession/PopupOrderPhotoSession";
// import PopupConfirmationGetMessageFromTheUser from "../PopupConfirmationGetMessageFromTheUser/PopupConfirmationGetMessageFromTheUser";
import PopupConfirmationGetOrderFromTheUser from "../PopupConfirmationGetOrderFromTheUser/PopupConfirmationGetOrderFromTheUser";
import PhotoProducts from "../PhotoProducts/PhotoProducts";
//import PopupTheErrorWhenMessageNotSend from "../PopupTheErrorWhenMessageNotSend/PopupTheErrorWhenMessageNotSend";
import PopupTheErrorWhenOderNotSend from "../PopupTheErrorWhenOrderNotSend/PopupTheErrorWhenOrderNotSend";
import { fetchPhotos, showPhotos } from "../../redux/Reducers/photoSlice";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const App = () => {
  const timerRef = useRef(null);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!sessionStorage.getItem("getPhotos")) {
      dispatch(fetchPhotos())
        .unwrap()
        .then((res) => {
          dispatch(showPhotos({ type: "all", order: "random" }));
        });
    } else {
      dispatch(showPhotos({ type: "all", order: "random" }));
    }
  }, []);

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
          {/*<PhotoGallery timerRef={timerRef} />*/}
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
        <Route path="*" component={NotFound}/>
      </Switch>
      <PopupWithImage />
      <PopupWithDescriptionPacket />
      <PopupOrderPhotoSession />
      {/*<PopupConfirmationGetMessageFromTheUser />*/}
      {/*<PopupTheErrorWhenMessageNotSend />*/}
      <PopupConfirmationGetOrderFromTheUser />
      <PopupTheErrorWhenOderNotSend />
    </div>
  );
};

export default App;
