import Styles from "./style.module.scss";
import React from "react";
import { IPacket } from "../../../../types";
import { Link, useHistory } from "react-router-dom";
import classNames from "classnames/bind";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { handlerAddPacketInBasket } from "../../../../redux/Reducers/packetSlice";

export interface PropsPacket {
  packet: IPacket;
  editStyleForPrice?: boolean;
  timerRef: any;
  setRef:any
}

const Packet: React.FC<PropsPacket> = ({ timerRef, packet, editStyleForPrice = false, setRef }) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { packetInBasket } = useAppSelector((state) => state.packets);

  const showPacketInBasket = packetInBasket.some((item: IPacket) => item._id === packet._id);

  const handlerClickAddPacketInBasket = (itemData: IPacket) => {
    clearInterval(timerRef.current);
    dispatch(handlerAddPacketInBasket(itemData));
  };

  const cx = classNames.bind(Styles);
  const classNameLink = cx("packet__namePacketLink", { packet__namePacketLink_edit: editStyleForPrice });
  const classNameButton = cx("packet__addInBasket", {
    packet__addInBasket_success: showPacketInBasket,
  });

  const handlerClickOnTitlePacket = () => {
    clearInterval(timerRef.current);
  };

  const handlerClickOnImagePacket = () => {
    handlerClickOnTitlePacket();
    history.push(`/prices/packets/${packet._id}`);
  };

  return (
    <li className={Styles.packet} ref={setRef}>
      <div className={Styles.packet__wrapperImage}>
        <img
          className={Styles.packet__image}
          src={packet.image}
          alt="image-packet"
          onClick={handlerClickOnImagePacket}
        />
        {!editStyleForPrice && (
          <button type="button" className={classNameButton} onClick={() => handlerClickAddPacketInBasket(packet)}>
            {showPacketInBasket ? "Уже в корзине" : "Добавить в корзину"}
          </button>
        )}
      </div>
      <Link className={classNameLink} to={`/prices/packets/${packet._id}`} onClick={handlerClickOnTitlePacket}>
        {packet.title} _ <span className={Styles.packet__price}>{packet.price}</span>
      </Link>
    </li>
  );
};

export default Packet;
