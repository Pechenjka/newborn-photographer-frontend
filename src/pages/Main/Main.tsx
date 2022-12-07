import React, { Fragment, useEffect } from "react";
import "./Main.scss";
import PhotoGalleryOfTheMainPage from "./components/PhotoGalleryOfTheMainPage/PhotoGalleryOfTheMainPage";
import PopularPackets from "../../components/PopularPackets/PopularPackets";
import { SliderComponent } from "../../components/SliderComponent";
import { MetaData } from "../../helpers/MetaData";
import { AboutNewborn } from "./components/AboutNewborn";
import { useAppDispatch } from "../../redux/hooks";
import { getPacketsPinned } from "../../redux/Reducers/packetSlice";

export const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPacketsPinned({ pinned: true }));
  }, []);

  return (
    <Fragment>
      <main className="main">
        <MetaData
          title="Фотограф новорожденных в Москве Алена Лобачева"
          description="Профессиональная фотосессия новорожденных в студии и на дому, экслюзивные локации, авторская обработка снимков, помощь в подборе образов, творческий подход к фотосессии."
          canonicalLink="https://alenalobacheva.net/"
        />
        <SliderComponent />
        <PhotoGalleryOfTheMainPage />
        <AboutNewborn />
        <PopularPackets editStyleForPrice={window.innerWidth < 768 && true} />
      </main>
    </Fragment>
  );
};
