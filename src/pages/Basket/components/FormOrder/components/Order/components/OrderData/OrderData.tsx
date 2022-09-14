import React from "react";
import Styles from "./style.module.scss";
import { IPacketInOrder } from "../../../../../../../../types";

export interface PropsOrderData {
  orderData: IPacketInOrder[];
  orderInMyProfile: boolean;
}

export const OrderData: React.FC<PropsOrderData> = ({ orderData, orderInMyProfile }) => {
  return (
    <ul className={Styles.orderData}>
      {orderData.map((packet, index) => {
        return (
          <li className={Styles.orderData__packet} key={packet.namePacket}>
            <ul className={Styles.orderData__containerPacket}>
              <li className={Styles.orderData__describePacket}>
                Пакет: <span className={Styles.orderData__describePacket_span}>{packet.namePacket}</span>
              </li>
              <li className={Styles.orderData__describePacket}>
                Тип фотосессии: <span className={Styles.orderData__describePacket_span}>{packet.photosessionType}</span>
              </li>
              <li className={Styles.orderData__describePacket}>
                Цена: <span className={Styles.orderData__describePacket_span}>{packet.price}р</span>
              </li>
              {orderInMyProfile && (
                <li className={Styles.orderData__describePacket}>
                  Ссылка:
                  {packet.link ? (
                    <a download href={packet.link} className={Styles.orderData__describePacket_span}>
                      Скачать готовые фотографии
                    </a>
                  ) : (
                    <p>Фотографии еще не готовы</p>
                  )}
                </li>
              )}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};
