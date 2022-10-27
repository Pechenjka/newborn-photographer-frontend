import Styles from "./style.module.scss";
import React from "react";
import Packets from "../Packets/Packets";
import { useAppSelector } from "../../redux/hooks";
import classNames from "classnames/bind";
import PreLoader from "../PreLoader/PreLoader";
import { PropsPopularPackets } from "../../types";

const PopularPackets: React.FC<PropsPopularPackets> = ({ editStyleForPrice = false }) => {
  const { getPinnedPackets, loading, error } = useAppSelector((state) => state.packets);

  const cx = classNames.bind(Styles);
  const classNameContainer = cx("popularPackets", { popularPackets_edit: editStyleForPrice });
  const classNameTitle = cx("popularPackets__title", { popularPackets__title_edit: editStyleForPrice });
  const classNameTitleSpan = cx("popularPackets__titleSpan", {
    popularPackets__titleSpan_edit: editStyleForPrice,
  });
  const classNameContainerPackets = cx("popularPackets__packets", {
    popularPackets__packets_edit: editStyleForPrice,
  });

  return (
    <div className={classNameContainer}>
      <h3 className={classNameTitle}>
        Популярные<span className={classNameTitleSpan}> пакеты</span>
      </h3>
      <ul className={classNameContainerPackets}>
        {loading.getPacketsPinned ? (
          <div style={{ gridColumn: "1/-1" }}>
            <PreLoader />
          </div>
        ) : (
          <Packets getPackets={getPinnedPackets} editStyleForPrice={editStyleForPrice} />
        )}
        {error.packetsPinned && <p style={{ gridColumn: "1/-1" }}>{error.packetsPinned}</p>}
      </ul>
    </div>
  );
};

export default PopularPackets;
