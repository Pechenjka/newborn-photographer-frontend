import Styles from "./style.module.scss";
import React from "react";
import { IPacket, PropsPacketsInBasket } from "../../../../types";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PacketsInBasket: React.FC<PropsPacketsInBasket> = ({ packetInBasket, onClickDeletePacket }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleDeletePackets = (packetId: string): void => {
    onClickDeletePacket(packetId);
    packetInBasket.length < 2 && navigate("/");
  };

  const titleBasket = () =>
    (packetInBasket.length === 1 && `${t("cart count unit 1")}`) ||
    (packetInBasket.length <= 4 && `${t("cart count unit 2-4")}`) ||
    (packetInBasket.length > 4 && `${t("cart count unit > 4")}`);

  return (
    <div className={Styles.packetsInBasket}>
      <h3 className={Styles.packetsInBasket__title}>
        {t("cart in cart")}:{" "}
        <span className={Styles.packetsInBasket__title_span}>
          {packetInBasket.length} {titleBasket()}
        </span>
      </h3>
      <table className={Styles.packetsInBasket__table}>
        <thead>
          <tr className={Styles.packetsInBasket__tableHeaderContainer}>
            <th className={Styles.packetsInBasket__tableHeader}>{t("cart delete unit from cart")}</th>
            <th className={Styles.packetsInBasket__tableHeader}>{t("cart table order package")}</th>
            <th className={Styles.packetsInBasket__tableHeader}>{t("cart table order name")}</th>
            <th className={Styles.packetsInBasket__tableHeader}>{t("cart table order category")}</th>
            <th className={Styles.packetsInBasket__tableHeader}>{t("cart table order cost")}</th>
          </tr>
        </thead>
        <tbody>
          {packetInBasket.map((packet: IPacket, index: number) => {
            return (
              <tr className={Styles.packetsInBasket__tableRowContainer} key={index}>
                <th className={Styles.packetsInBasket__tableRow}>
                  <button
                    className={Styles.packetsInBasket__buttonDeletePacket}
                    onClick={() => handleDeletePackets(packet._id)}
                  />
                </th>
                <th className={Styles.packetsInBasket__tableRow}>
                  <img className={Styles.packetsInBasket__image} src={packet.image} alt="img-from-paket" />
                </th>
                <th className={Styles.packetsInBasket__tableRow}>{packet.namePacket}</th>
                <th className={Styles.packetsInBasket__tableRow}>{packet.photosessionType}</th>
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
