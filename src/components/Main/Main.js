import "./Main.scss";
import { Fragment } from "react";
import PhotoGalleryOfTheMainPage from "./PhotoGalleryOfTheMainPage/PhotoGalleryOfTheMainPage";
import PhotosSlideShow from "./PhotosSlideShow/PhotosSlideShow";
import Instagram from "../Instagram/Instagram";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Main({ timerRef }) {
  return (
    <Fragment>
      <Header timerRef={timerRef} />
      <main className="main">
        <PhotosSlideShow timerRef={timerRef} />
        <PhotoGalleryOfTheMainPage />
        <Instagram />
      </main>
      <Footer />
    </Fragment>
  );
}

export default Main;
