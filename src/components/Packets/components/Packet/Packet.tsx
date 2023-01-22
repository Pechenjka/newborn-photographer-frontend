import Styles from "./style.module.scss";
import React from "react";
import { IPacket } from "../../../../types";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { handlerAddPacketInBasket } from "../../../../redux/Reducers/packetSlice";
import { motion } from "framer-motion";

export interface PropsPacket {
  packet: IPacket;
  editStyleForPrice?: boolean;
  variants: any;
}

const Packet: React.FC<PropsPacket> = ({ packet, editStyleForPrice, variants }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { packetInBasket } = useAppSelector((state) => state.packets);
  const { user } = useAppSelector((state) => state.user);

  const showPacketInBasket = packetInBasket.some((item: IPacket) => item._id === packet._id);

  const handlerClickAddPacketInBasket = (itemData: IPacket) => {
    if (showPacketInBasket || user.role.includes("ADMIN")) {
      return;
    }
    dispatch(handlerAddPacketInBasket(itemData));
  };

  const cx = classNames.bind(Styles);
  const classNameLink = cx("packet__namePacketLink", { packet__namePacketLink_edit: editStyleForPrice });
  const classNameButton = cx("packet__addInBasket", {
    packet__addInBasket_success: showPacketInBasket,
  });

  const handlerClickOnImagePacket = () => {
    navigate(`/prices/packets/${packet._id}`);
  };

  return (
    <motion.li className={Styles.packet} variants={variants}>
      <div className={Styles.packet__wrapperImage}>
        <img className={Styles.packet__image} src={packet.image} alt="img-packet" onClick={handlerClickOnImagePacket} />
        {!editStyleForPrice && (
          <button type="button" className={classNameButton} onClick={() => handlerClickAddPacketInBasket(packet)}>
            {showPacketInBasket ? "Уже в корзине" : "Добавить в корзину"}
          </button>
        )}
      </div>
      <Link className={classNameLink} to={`/prices/packets/${packet._id}`} onClick={handlerClickOnImagePacket}>
        Пакет {packet.namePacket} _ <span className={Styles.packet__price}>{packet.price}р</span>
      </Link>
    </motion.li>
  );
};

export default Packet;
