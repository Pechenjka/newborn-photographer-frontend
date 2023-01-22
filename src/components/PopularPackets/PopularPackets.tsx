import Styles from "./style.module.scss";
import React from "react";
import Packets from "../Packets/Packets";
import { useAppSelector } from "../../redux/hooks";
import PreLoader from "../PreLoader/PreLoader";
import { PropsPopularPackets } from "../../types";
import { framerMotionPinnedPackets } from "../../helpers/framerMotion";

const PopularPackets: React.FC<PropsPopularPackets> = ({ editStyleForPrice = false }) => {
  const { getPinnedPackets, loading, error } = useAppSelector((state) => state.packets);

  const { container, item } = framerMotionPinnedPackets();

  return (
    <div className={Styles.popularPackets}>
      <h3 className={Styles.popularPackets__title}>Популярные пакеты</h3>
      <div className={Styles.popularPackets__container}>
        {loading.getPacketsPinned ? (
          <div style={{ gridColumn: "1/-1" }}>
            <PreLoader />
          </div>
        ) : (
          <Packets
            getPackets={getPinnedPackets}
            editStyleForPrice={editStyleForPrice}
            item={item}
            container={container}
            styleContainer={Styles.popularPackets__packets}
          />
        )}
        {error.packetsPinned && <p style={{ gridColumn: "1/-1" }}>{error.packetsPinned}</p>}
      </div>
    </div>
  );
};

export default PopularPackets;
