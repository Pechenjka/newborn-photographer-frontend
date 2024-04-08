import React, { useEffect } from "react";
import "./App.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import PopupWithImage from "../PopupWithImage/PopupWithImage";
import { handlerAddPacketInBasket } from "../../redux/Reducers/packetSlice";
import { authorization, checkAuth } from "../../redux/Reducers/userSlice";
import { getTextOnPage } from "../../redux/Reducers/editorSlice";
import { RouterComponent } from "../../router";
import { ScrollUp } from "../ScrollUp";
import { fetchArticlesUrl, fetchBlogArticles } from "../../redux/Reducers/blogSlice";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { packetInBasket } = useAppSelector((state) => state.packets);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(fetchArticlesUrl());
  }, []);

  useEffect(() => {
    dispatch(fetchBlogArticles());
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      dispatch(checkAuth({ navigate, pathname }));
    } else {
      dispatch(authorization(false));
    }
  }, []);

  useEffect(() => {
    dispatch(getTextOnPage());
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("packetsInBasket") && !packetInBasket.length) {
      const arr = JSON.parse(sessionStorage.getItem("packetsInBasket") as string);
      dispatch(handlerAddPacketInBasket(arr));
      if (pathname === "/basket") {
        navigate(pathname);
      }
    }
  }, []);

  return (
    <div className="page">
      <RouterComponent />
      <PopupWithImage />
      <ScrollUp />
    </div>
  );
};

export default App;
