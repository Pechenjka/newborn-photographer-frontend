import React from "react";
import "./App.scss";
import { Switch, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { animatedItems } from "../AnimatedItems/AnimatedItems";
import { unwrapResult } from "@reduxjs/toolkit";
import { fetchPhotos, handlerShowPhotos } from "../../redux/Reducers/photoSlice";
import { useAppDispatch } from "../../redux/hooks";

import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PopupWithImage from "../PopupWithImage/PopupWithImage";
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
import PopupTheErrorWhenOderNotSend from "../PopupTheErrorWhenOrderNotSend/PopupTheErrorWhenOrderNotSend";

const App: React.FC = () => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!sessionStorage.getItem("getPhotos")) {
      dispatch(fetchPhotos())
        .then(unwrapResult)
        .then(() => {
          dispatch(handlerShowPhotos({ type: "all", order: "random" }));
        });
    }
  }, [dispatch]);

  useEffect(() => {
    if (pathname) animatedItems();
  }, [pathname]);

  return (
    <div className="page">
      <Header timerRef={timerRef} />
      <Switch>
        <Route exact path="/">
          <Main timerRef={timerRef} />
        </Route>
        <Route exact path="/aboutMe" component={AboutMe} />
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
          component={PhotoGallery}
        />
        <Route exact path="/contacts" component={Contacts} />
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
          component={Prices}
        />
        <Route exact path="/photo-products" component={PhotoProducts} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
      <PopupWithImage />
      <PopupWithDescriptionPacket />
      <PopupOrderPhotoSession />
      <PopupConfirmationGetMessageFromTheUser />
      <PopupTheErrorWhenMessageNotSend />
      <PopupConfirmationGetOrderFromTheUser />
      <PopupTheErrorWhenOderNotSend />
    </div>
  );
};

export default App;
