import Styles from "./style.module.scss";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import { IPacket } from "../../types";
import { handlerBasketIsNotEmpty, handlerDeletePacketFromBasket } from "../../redux/Reducers/packetSlice";
import { Button } from "../../components/Button";
import PacketsInBasket from "./components/PacketsInBasket/PacketsInBasket";
import { Link, useHistory } from "react-router-dom";

const Basket: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { packetInBasket } = useAppSelector((state) => state.packets);
  const { auth } = useAppSelector((state) => state.user);

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
            {!auth ? (
              <div className={Styles.basket__containerLinkRegister}>
                <p>Вы не авторизованны! Для оформления заказа необходимо авторизоваться.</p>
                <Link className={Styles.basket__linkRegister} to="/signin">
                  Авторизоваться!
                </Link>
              </div>
            ) : (
              <Button
                styleButton="ping"
                editStyle="buttonBasket"
                edit
                type="button"
                onClick={() => history.push("/checkout")}
              >
                Продолжить оформление заказа
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
