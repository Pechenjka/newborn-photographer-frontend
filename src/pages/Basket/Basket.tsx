import Styles from "./style.module.scss";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import { IPacket, PropsTimeRef } from "../../types";
import { handlerDeletePacketFromBasket } from "../../redux/Reducers/packetSlice";
import Button from "../../components/Button/Button";
import FormOrder from "./components/FormOrder/FormOrder";
import PacketsInBasket from "./components/PacketsInBasket/PacketsInBasket";

const Basket: React.FC<PropsTimeRef> = ({ timerRef }) => {
  const dispatch = useAppDispatch();
  const { packetInBasket } = useAppSelector((state) => state.packets);
  const [formOrder, setFormOder] = useState<boolean>(false);

  useEffect(() => {
    clearInterval(timerRef.current);
  }, []);

  const handlerClickDeletePacketFromBasket = (id: string) => {
    const arr = JSON.parse(sessionStorage.getItem("packetsInBasket") as string);
    if (arr.length > 1) {
      const newArr = arr.filter((item: IPacket) => {
        return item._id !== id && item;
      });
      sessionStorage.setItem("packetsInBasket", JSON.stringify(newArr));
    } else {
      sessionStorage.removeItem("packetsInBasket");
    }
    dispatch(handlerDeletePacketFromBasket(id));
  };

  return (
    <div className={Styles.basket}>
      <BackgroundImage />
      <div className={Styles.basket__container}>
        {!packetInBasket.length ? (
          <p className="list__not-posts">Корзина пуста</p>
        ) : (
          <div className={Styles.basket__wrapperTable}>
            <PacketsInBasket onClickDeletePacket={handlerClickDeletePacketFromBasket} packetInBasket={packetInBasket} />
            {!formOrder ? (
              <Button styleButton="ping" editStyle="buttonBasket" edit type="button" onClick={() => setFormOder(true)}>
                Продолжить оформление заказа
              </Button>
            ) : (
              <FormOrder />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
