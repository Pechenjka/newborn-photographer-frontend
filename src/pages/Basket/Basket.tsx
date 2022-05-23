import Styles from "./style.module.scss";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import { IPacket } from "../../types";
import { handlerDeletePacketFromBasket } from "../../redux/Reducers/packetSlice";
import Button from "../../components/Button/Button";
import FormOrder from "./components/FormOrder/FormOrder";

const Basket: React.FC = () => {
  const dispatch = useAppDispatch();
  const { packetInBasket } = useAppSelector((state) => state.packets);
  const [formOrder, setFormOder] = useState<boolean>(false);

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

  const titleBasket = () =>
    (packetInBasket.length === 1 && "пакет") ||
    (packetInBasket.length <= 4 && "пакета") ||
    (packetInBasket.length > 4 && "пакетов");

  return (
    <div className={Styles.basket}>
      <BackgroundImage />
      <div className={Styles.basket__container}>
        {!packetInBasket.length ? (
          <p className="list__not-posts">Корзина пуста</p>
        ) : (
          <div className={Styles.basket__wrapperTable}>
            <h3 className={Styles.basket__title}>
              В корзине:{" "}
              <span className={Styles.basket__title_span}>
                {packetInBasket.length} {titleBasket()}
              </span>
            </h3>
            <table className={Styles.basket__table}>
              <thead>
                <tr className={Styles.basket__tableHeaderContainer}>
                  <th className={Styles.basket__tableHeader}>Удалить из корзины</th>
                  <th className={Styles.basket__tableHeader}>Пакет</th>
                  <th className={Styles.basket__tableHeader}>Название</th>
                  <th className={Styles.basket__tableHeader}>Категория</th>
                  <th className={Styles.basket__tableHeader}>Цена</th>
                </tr>
              </thead>
              <tbody>
                {packetInBasket.map((packet: IPacket, index: number) => {
                  return (
                    <tr className={Styles.basket__tableRowContainer} key={index}>
                      <th className={Styles.basket__tableRow}>
                        <button
                          className={Styles.basket__buttonDeletePacket}
                          onClick={() => handlerClickDeletePacketFromBasket(packet._id)}
                        />
                      </th>
                      <th className={Styles.basket__tableRow}>
                        <img src={packet.image} style={{ width: "100px" }} alt="image from paket" />
                      </th>
                      <th className={Styles.basket__tableRow}>{packet.title}</th>
                      <th className={Styles.basket__tableRow}>{packet.packet}</th>
                      <th className={Styles.basket__tableRow}>{packet.price}</th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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
