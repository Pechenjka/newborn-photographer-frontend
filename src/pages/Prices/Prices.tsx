import React, { Fragment, useEffect, useState } from "react";
import Styles from "./style.module.scss";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import Packets from "../../components/Packets/Packets";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getArrPackets } from "../../redux/Reducers/packetSlice";
import { useLocation } from "react-router-dom";
import PreLoader from "../../components/PreLoader/PreLoader";
import { MetaData } from "../../helpers/MetaData";
import { framerMotionPhotosAndPackets } from "../../helpers/framerMotion";

const Prices: React.FC = () => {
  const dispatch = useAppDispatch();
  const { getPackets, getPacketsCategories, loading, error } = useAppSelector((state) => state.packets);
  const [nameCategory, setNameCategory] = useState("");
  const { pathname } = useLocation();
  const [typePhotosession, setTypePhotosession] = useState<string>("");

  useEffect(() => {
    if (getPacketsCategories.length > 0) {
      getPacketsCategories.map((category) => {
        if (pathname.includes(category.title)) {
          dispatch(getArrPackets({ photosessionType: category.title }));
          setNameCategory(category.nameRU);
        }
      });
    }
  }, [pathname, getPacketsCategories, dispatch]);

  const { container, item } = framerMotionPhotosAndPackets();

  const allType = {
    newborn: "photo session newborn",
    baby: "photo session baby under 1 years",
    family: "family photo session",
    "discharge-christening": "photo session discharge and christening",
    woman: "woman photo session",
  };

  const handleTypePhotosession = (allType: any) => {
    for (let key in allType) {
      if (pathname.includes(key)) {
        setTypePhotosession(allType[key]);
      }
    }
  };

  useEffect(() => {
    if (pathname) handleTypePhotosession(allType);
  }, [pathname]);

  const sortPackets = [...getPackets].sort((a, b) => Number(a.price) - Number(b.price));

  return (
    <Fragment>
      <MetaData
        title={`Prices on ${typePhotosession} | Photographer newborn Alena Lobacheva`}
        description={`Information regarding prices and conditions - ${typePhotosession}. `}
        canonicalLink={`https://alenalobacheva.net${pathname}`}
      />
      <BackgroundImage />
      <div className={Styles.prices}>
        <div className={Styles.prices__container}>
          <h1 className={Styles.prices__title}>{nameCategory}</h1>
          {loading.getArrPackets ? (
            <div style={{ gridColumn: "1/-1" }}>
              <PreLoader />
            </div>
          ) : (
            <Packets
              getPackets={sortPackets}
              item={item}
              container={container}
              styleContainer={Styles.prices__packets}
            />
          )}
          {error.packets && <p style={{ gridColumn: "1/-1" }}>{error.packets}</p>}
        </div>
      </div>
    </Fragment>
  );
};

export default Prices;
