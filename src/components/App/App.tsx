import React, { useEffect } from "react";
import "./App.scss";
import { useHistory, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import PopupWithImage from "../PopupWithImage/PopupWithImage";
import { Layout } from "../../layout";
import { getPacketsCategories, getPacketsPinned, handlerAddPacketInBasket } from "../../redux/Reducers/packetSlice";
import { authorization, checkAuth } from "../../redux/Reducers/userSlice";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const history = useHistory();
  const { packetInBasket } = useAppSelector((state) => state.packets);

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      dispatch(checkAuth({ history, pathname }));
    } else {
      dispatch(authorization(false));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPacketsPinned({ pinned: true }));
    dispatch(getPacketsCategories());
  }, [dispatch]);

  useEffect(() => {
    if (sessionStorage.getItem("packetsInBasket") && !packetInBasket.length) {
      const arr = JSON.parse(sessionStorage.getItem("packetsInBasket") as string);
      dispatch(handlerAddPacketInBasket(arr));
      if (pathname === "/basket") {
        history.push(pathname);
      }
    }
  }, []);

  return (
    <div className="page">
      <Layout />
      <PopupWithImage />
    </div>
  );
};

export default App;
