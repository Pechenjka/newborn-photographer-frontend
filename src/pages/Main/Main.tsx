import React, { Fragment, useEffect } from "react";
import "./Main.scss";
import PhotoGalleryOfTheMainPage from "./components/PhotoGalleryOfTheMainPage/PhotoGalleryOfTheMainPage";
import PopularPackets from "../../components/PopularPackets/PopularPackets";
import { SliderComponent } from "../../components/SliderComponent";
import { MetaData } from "../../helpers/MetaData";
import { AboutNewborn } from "./components/AboutNewborn";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getPacketsPinned } from "../../redux/Reducers/packetSlice";

export const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const { language } = useAppSelector((state) => state.app);

  useEffect(() => {
    dispatch(getPacketsPinned({ pinned: true }));
  }, []);

  return (
    <Fragment>
      <main className="main">
        <MetaData
          title="Newborn photographer in New York Alena Lobacheva"
          description="Professional newborn photo shoot, author's retouching, assistance with preparation for the photo session."
          canonicalLink="https://alenalobacheva.net/"
        />
        <SliderComponent />
        <PhotoGalleryOfTheMainPage />
        {language === "ru" && <AboutNewborn />}
        {/*<PopularPackets editStyleForPrice={window.innerWidth < 768 && true} />*/}
      </main>
    </Fragment>
  );
};
