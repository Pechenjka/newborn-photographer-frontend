import "./Packets.scss";
import React from "react";
import { IPacket, PropsPackets } from "../../types";
import Packet from "./components/Packet/Packet";
import { motion } from "framer-motion";

const Packets: React.FC<PropsPackets> = ({ getPackets, editStyleForPrice,styleContainer, container, item }) => {
  return (
    <motion.ul className={styleContainer}  variants={container} initial="hidden" animate="show">
      {getPackets.map((packet: IPacket) => {
        return <Packet packet={packet} key={packet._id} editStyleForPrice={editStyleForPrice} variants={item} />;
      })}
    </motion.ul>
  );
};

export default Packets;
