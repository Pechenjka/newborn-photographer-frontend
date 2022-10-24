import React, { Fragment, useEffect, useState } from "react";
import Styles from "./style.module.scss";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import Packets from "../../components/Packets/Packets";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import PopularPackets from "../Main/components/PopularPackets/PopularPackets";
import { getArrPackets, handlerErrorGetPackets } from "../../redux/Reducers/packetSlice";
import { useRouteMatch } from "react-router-dom";
import PreLoader from "../../components/PreLoader/PreLoader";

const Prices: React.FC = () => {
  const dispatch = useAppDispatch();
  const { getPackets, getPacketsCategories, loading, error } = useAppSelector((state) => state.packets);
  const [nameCategory, setNameCategory] = useState("");
  const { path } = useRouteMatch();

  useEffect(() => {
    if (getPacketsCategories.length > 0) {
      getPacketsCategories.map((category) => {
        if (path.includes(category.title)) {
          dispatch(getArrPackets({ photosessionType: category.title }));
          setNameCategory(category.nameRU);
        }
        dispatch(handlerErrorGetPackets(""));
      });
    } else {
      dispatch(handlerErrorGetPackets("Ошибка, пакеты не загружены!"));
    }
  }, [path, getPacketsCategories, dispatch]);

  return (
    <Fragment>
      <BackgroundImage />
      <div className={Styles.prices}>
        <ul className={Styles.prices__packets}>
          <h3 className={Styles.prices__title}>{nameCategory}</h3>
          {loading ? (
            <div style={{ gridColumn: "1/-1" }}>
              <PreLoader />
            </div>
          ) : (
            <Packets getPackets={getPackets} />
          )}
          {error.packets && <p style={{ gridColumn: "1/-1" }}>{error.packets}</p>}
        </ul>
        <PopularPackets editStyleForPrice />
      </div>
    </Fragment>
  );
};

export default Prices;
