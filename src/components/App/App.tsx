import React from "react";
import "./App.scss";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { animatedItems } from "../AnimatedItems/AnimatedItems";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import PopupWithImage from "../PopupWithImage/PopupWithImage";
import PopupWithDescriptionPacket from "../PopupWithDescriptonPakets/PopupWithDescriptionPackets";
import PopupConfirmationGetMessageFromTheUser from "../PopupConfirmationGetMessageFromTheUser/PopupConfirmationGetMessageFromTheUser";
import PopupConfirmationGetOrderFromTheUser from "../PopupConfirmationGetOrderFromTheUser/PopupConfirmationGetOrderFromTheUser";
import PopupTheErrorWhenMessageNotSend from "../PopupTheErrorWhenMessageNotSend/PopupTheErrorWhenMessageNotSend";
import PopupTheErrorWhenOderNotSend from "../PopupTheErrorWhenOrderNotSend/PopupTheErrorWhenOrderNotSend";
import Layout from "../../layout/Layout";
import { getPacketsCategories, getPacketsPinned, handlerAddPacketInBasket } from "../../redux/Reducers/packetSlice";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { packetInBasket } = useAppSelector((state) => state.packets);

  useEffect(() => {
    if (pathname) animatedItems();
  }, [pathname]);

  useEffect(() => {
    dispatch(getPacketsPinned({ pinned: true }));
    dispatch(getPacketsCategories());
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("packetsInBasket") && !packetInBasket.length) {
      const arr = JSON.parse(sessionStorage.getItem("packetsInBasket") as string);
      dispatch(handlerAddPacketInBasket(arr));
    }
  }, []);

  return (
    <div className="page">
      <Layout />
      <PopupWithImage />
      <PopupWithDescriptionPacket />
      <PopupConfirmationGetMessageFromTheUser />
      <PopupTheErrorWhenMessageNotSend />
      <PopupConfirmationGetOrderFromTheUser />
      <PopupTheErrorWhenOderNotSend />
    </div>
  );
};

export default App;
