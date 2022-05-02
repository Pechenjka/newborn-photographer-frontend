import React, { Fragment } from "react";
import "./Main.scss";
import PhotoGalleryOfTheMainPage from "./PhotoGalleryOfTheMainPage/PhotoGalleryOfTheMainPage";
import PhotosSlideShow from "./PhotosSlideShow/PhotosSlideShow";
import { PropsTimeRef } from "../../types";

const Main: React.FC<PropsTimeRef> = ({ timerRef }) => {
  return (
    <Fragment>
      <main className="main">
        <PhotosSlideShow timerRef={timerRef} />
        <PhotoGalleryOfTheMainPage />
      </main>
    </Fragment>
  );
};

export default Main;
