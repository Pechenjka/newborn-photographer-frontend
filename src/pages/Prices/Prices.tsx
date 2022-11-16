import React, { Fragment, useEffect, useState } from "react";
import Styles from "./style.module.scss";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import Packets from "../../components/Packets/Packets";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import PopularPackets from "../../components/PopularPackets/PopularPackets";
import { getArrPackets } from "../../redux/Reducers/packetSlice";
import { useLocation, useRouteMatch } from "react-router-dom";
import PreLoader from "../../components/PreLoader/PreLoader";
import { MetaData } from "../../helpers/MetaData";

const Prices: React.FC = () => {
  const dispatch = useAppDispatch();
  const { getPackets, getPacketsCategories, loading, error } = useAppSelector((state) => state.packets);
  const [nameCategory, setNameCategory] = useState("");
  const { path } = useRouteMatch();
  const { pathname } = useLocation();

  useEffect(() => {
    if (getPacketsCategories.length > 0) {
      getPacketsCategories.map((category) => {
        if (path.includes(category.title)) {
          dispatch(getArrPackets({ photosessionType: category.title }));
          setNameCategory(category.nameRU);
        }
      });
    }
  }, [path, getPacketsCategories, dispatch]);

  return (
    <Fragment>
      <MetaData
        title={`Узнать стоимость на фотосессию ${nameCategory.toLowerCase()}`}
        description={`Подобрать пакет и заказать фотосессию - ${nameCategory.toLowerCase()}.`}
        canonicalLink={`https://alenalobacheva.net${pathname}/`}
      />
      <BackgroundImage />
      <div className={Styles.prices}>
        <ul className={Styles.prices__packets}>
          <h1 className={Styles.prices__title}>{nameCategory}</h1>
          {loading.getArrPackets ? (
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
