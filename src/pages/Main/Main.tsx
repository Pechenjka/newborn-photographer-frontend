import React, { Fragment } from "react";
import "./Main.scss";
import PhotoGalleryOfTheMainPage from "./components/PhotoGalleryOfTheMainPage/PhotoGalleryOfTheMainPage";
import PhotosSlideShow from "./components/PhotosSlideShow/PhotosSlideShow";
import { PropsTimeRef } from "../../types";
import PopularPackets from "./components/PopularPackets/PopularPackets";

const Main: React.FC<PropsTimeRef> = ({ timerRef }) => {
  return (
    <Fragment>
      <main className="main">
        <PhotosSlideShow timerRef={timerRef} />
        <PhotoGalleryOfTheMainPage />
        <PopularPackets editStyleForPrice={window.innerWidth < 768 && true} timerRef={timerRef} />
      </main>
    </Fragment>
  );
};

export default Main;
