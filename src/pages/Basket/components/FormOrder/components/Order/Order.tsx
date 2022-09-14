import React from "react";
import Styles from "./style.module.scss";
import { OrderData } from "./components/OrderData";
import classNames from "classnames/bind";
import { IPacketInOrder, PropsOrderCheckout } from "../../../../../../types";

const positionCount = (packets: IPacketInOrder[]) =>
  (packets.length === 1 && `${packets.length} позиция`) ||
  (packets.length <= 4 && `${packets.length} позиции`) ||
  (packets.length > 4 && ` ${packets.length} позиций`);

export const Order: React.FC<PropsOrderCheckout> = ({ orderData, orderNumber, orderInMyProfile = false, title }) => {
  const cx = classNames.bind(Styles);
  const styles = cx("order", { order_checkout: !orderInMyProfile });

  return (
    <div className={styles}>
      <h3 className={Styles.order__title}>
        {title}
        <span className={Styles.order__title_span}>{orderInMyProfile ? orderNumber : positionCount(orderData)}</span>
      </h3>
      <OrderData orderData={orderData} orderInMyProfile={orderInMyProfile} />
    </div>
  );
};
