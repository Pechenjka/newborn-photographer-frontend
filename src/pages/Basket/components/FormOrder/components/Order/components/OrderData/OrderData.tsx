import React from "react";
import Styles from "./style.module.scss";
import { IPacketInOrder } from "../../../../../../../../types";
import { useTranslation } from "react-i18next";

export interface PropsOrderData {
  orderData: IPacketInOrder[];
  orderInMyProfile: boolean;
}

export const OrderData: React.FC<PropsOrderData> = ({ orderData, orderInMyProfile }) => {
  const { t } = useTranslation();
  return (
    <ul className={Styles.orderData}>
      {orderData.map((packet, index) => {
        return (
          <li className={Styles.orderData__packet} key={packet.namePacket}>
            <ul className={Styles.orderData__containerPacket}>
              <li className={Styles.orderData__describePacket}>
                {t("cart table order package")}: <span className={Styles.orderData__describePacket_span}>{packet.namePacket}</span>
              </li>
              <li className={Styles.orderData__describePacket}>
                {t("cart table order category")}: <span className={Styles.orderData__describePacket_span}>{packet.photosessionType}</span>
              </li>
              <li className={Styles.orderData__describePacket}>
                {t("cart table order cost")}: <span className={Styles.orderData__describePacket_span}>{packet.price}</span>
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
