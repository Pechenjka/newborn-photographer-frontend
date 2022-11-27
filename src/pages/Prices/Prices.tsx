import React, { Fragment, useEffect, useState } from "react";
import Styles from "./style.module.scss";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import Packets from "../../components/Packets/Packets";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getArrPackets } from "../../redux/Reducers/packetSlice";
import { useLocation, useRouteMatch } from "react-router-dom";
import PreLoader from "../../components/PreLoader/PreLoader";
import { MetaData } from "../../helpers/MetaData";
import { framerMotionPhotosAndPackets } from "../../helpers/framerMotion";

const Prices: React.FC = () => {
  const dispatch = useAppDispatch();
  const { getPackets, getPacketsCategories, loading, error } = useAppSelector((state) => state.packets);
  const [nameCategory, setNameCategory] = useState("");
  const { path } = useRouteMatch();
  const { pathname } = useLocation();
const [typePhotosession, setTypePhotosession] = useState<string>('')

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

  const { container, item } = framerMotionPhotosAndPackets();

  const allType = {
    'newborn': 'фотосессию новорожденного',
    'baby': 'фотосессию малышей до 1 года',
    'family': 'семейную фотосессию',
    'discharge-christening': 'фотосессию выписка из роддома и крещение',
    'woman': 'женскую фотосессию и съемку для контента'
  }

  const handleTypePhotosession = (allType: any) => {
    for ( let key in allType) {
      if(pathname.includes(key)) {
        setTypePhotosession(allType[key])
      }
    }
  }

  useEffect(()=> {
    if(pathname) handleTypePhotosession(allType)
  }, [pathname])

  return (
    <Fragment>
      <MetaData
        title={`Цены на ${typePhotosession} | Фотограф новорожденных в Москве Алена Лобачева`}
        description={`Узнать стоимость и подобрать нужный пакет на  - ${typePhotosession}. `}
        canonicalLink={`https://alenalobacheva.net${pathname}/`}
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
            <Packets getPackets={getPackets} item={item} container={container} styleContainer={Styles.prices__packets}/>
          )}
          {error.packets && <p style={{ gridColumn: "1/-1" }}>{error.packets}</p>}
        </div>
      </div>
    </Fragment>
  );
};

export default Prices;
