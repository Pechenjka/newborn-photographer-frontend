import Styles from "./style.module.scss";
import React from "react";
import { IPacket, PropsPacketsInBasket } from "../../../../types";

const PacketsInBasket: React.FC<PropsPacketsInBasket> = ({ packetInBasket, onClickDeletePacket }) => {

  const titleBasket = () =>
    (packetInBasket.length === 1 && "пакет") ||
    (packetInBasket.length <= 4 && "пакета") ||
    (packetInBasket.length > 4 && "пакетов");

  return (
    <div className={Styles.packetsInBasket}>
      <h3 className={Styles.packetsInBasket__title}>
        В корзине:{" "}
        <span className={Styles.packetsInBasket__title_span}>
          {packetInBasket.length} {titleBasket()}
        </span>
      </h3>
      <table className={Styles.packetsInBasket__table}>
        <thead>
          <tr className={Styles.packetsInBasket__tableHeaderContainer}>
            <th className={Styles.packetsInBasket__tableHeader}>Удалить из корзины</th>
            <th className={Styles.packetsInBasket__tableHeader}>Пакет</th>
            <th className={Styles.packetsInBasket__tableHeader}>Название</th>
            <th className={Styles.packetsInBasket__tableHeader}>Категория</th>
            <th className={Styles.packetsInBasket__tableHeader}>Цена</th>
          </tr>
        </thead>
        <tbody>
          {packetInBasket.map((packet: IPacket, index: number) => {
            return (
              <tr className={Styles.packetsInBasket__tableRowContainer} key={index}>
                <th className={Styles.packetsInBasket__tableRow}>
                  <button
                    className={Styles.packetsInBasket__buttonDeletePacket}
                    onClick={() => onClickDeletePacket(packet._id)}
                  />
                </th>
                <th className={Styles.packetsInBasket__tableRow}>
                  <img className={Styles.packetsInBasket__image} src={packet.image}  alt="image from paket" />
                </th>
                <th className={Styles.packetsInBasket__tableRow}>{packet.title}</th>
                <th className={Styles.packetsInBasket__tableRow}>{packet.packet}</th>
                <th className={Styles.packetsInBasket__tableRow}>{packet.price}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PacketsInBasket;
