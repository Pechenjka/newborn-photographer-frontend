import React, { Fragment } from "react";
import "./Main.scss";
import PhotoGalleryOfTheMainPage from "./components/PhotoGalleryOfTheMainPage/PhotoGalleryOfTheMainPage";
import PopularPackets from "./components/PopularPackets/PopularPackets";
import { SliderComponent } from "../../components/SliderComponent";

export const Main: React.FC = () => {
  return (
    <Fragment>
      <main className="main">
        <SliderComponent />
        <PhotoGalleryOfTheMainPage />
        <PopularPackets editStyleForPrice={window.innerWidth < 768 && true}  />
      </main>
    </Fragment>
  );
};
