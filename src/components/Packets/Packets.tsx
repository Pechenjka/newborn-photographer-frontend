import "./Packets.scss";
import React, { Fragment, useLayoutEffect } from "react";
import { IPacket, PropsPackets } from "../../types";
import Packet from "./components/Packet/Packet";
import { useArrayRef, UseGsapEffect } from "../../hooks/UseGsapEffect";

const Packets: React.FC<PropsPackets> = ({ getPackets, editStyleForPrice }) => {
  const [refs, setRef] = useArrayRef();

  useLayoutEffect(() => {
    setTimeout(() => {
      animationPhotosWithOutReverse();
    }, 0);
  }, []);

  const animationPhotosWithOutReverse = new UseGsapEffect(refs.current, {
    duration: 0.5,
    y: 70,
    opacity: 0,
    stagger: 0.05,
    ease: "back",
  }).animationWithOutReverse;

  return (
    <Fragment>
      {getPackets.map((packet: IPacket, index: number) => {
        return (
          <Packet
            packet={packet}
            key={index}
            editStyleForPrice={editStyleForPrice}
            setRef={setRef}
          />
        );
      })}
    </Fragment>
  );
};

export default Packets;
