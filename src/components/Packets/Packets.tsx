import "./Packets.scss";
import React from "react";
import { IPacket, PropsPackets } from "../../types";
import { motion } from "framer-motion";
import { PacketWithDetailsDescription } from "../PacketWithDetailsDescription";

const Packets: React.FC<PropsPackets> = ({ getPackets, styleContainer, container }) => {
  return (
    <motion.ul className={styleContainer} variants={container} initial="hidden" animate="show">
      {getPackets.map((packet: IPacket) => {
        return <PacketWithDetailsDescription key={packet._id} packet={packet} />;
      })}
    </motion.ul>
  );
};

export default Packets;
