import Styles from "./style.module.scss";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import { IPacket } from "../../types";
import { handlerBasketIsNotEmpty, handlerDeletePacketFromBasket } from "../../redux/Reducers/packetSlice";
import { Button } from "../../components/Button";
import PacketsInBasket from "./components/PacketsInBasket/PacketsInBasket";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Basket: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { packetInBasket } = useAppSelector((state) => state.packets);
  const { t } = useTranslation();

  const handlerClickDeletePacketFromBasket = (id: string) => {
    const arr = JSON.parse(sessionStorage.getItem("packetsInBasket") as string);
    if (arr.length > 1) {
      const newArr = arr.filter((item: IPacket) => {
        return item._id !== id && item;
      });
      sessionStorage.setItem("packetsInBasket", JSON.stringify(newArr));
    } else {
      dispatch(handlerBasketIsNotEmpty(false));
      sessionStorage.removeItem("packetsInBasket");
    }
    dispatch(handlerDeletePacketFromBasket(id));
  };

  return (
    <div className={Styles.basket}>
      <BackgroundImage />
      <div className={Styles.basket__container}>
        {!packetInBasket.length ? (
          <p className={Styles.basket__notPackets}>Ваша корзина пуста</p>
        ) : (
          <div className={Styles.basket__wrapperTable}>
            <PacketsInBasket onClickDeletePacket={handlerClickDeletePacketFromBasket} packetInBasket={packetInBasket} />
            <Button
              styleButton="ping"
              editStyle="buttonBasket"
              edit
              type="button"
              onClick={() => navigate("/checkout")}
            >
              {t("continue checkout")}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
