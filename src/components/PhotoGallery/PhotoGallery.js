import "./PhotoGallery.scss";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Photos from "../Photos/Photos";
import { categoryPhoto } from "../../utils/config";
import { handlerShowAddPhotos, handlerShowPhotos } from "../../redux/Reducers/photoSlice";

const PhotoGallery = ({ timerRef }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { showPhotos, getPhotosOneType } = useSelector((state) => state.photos);

  useEffect(() => {
    categoryPhoto.some((item) => {
      if (pathname.includes(item.type)) {
        dispatch(handlerShowPhotos({ type: item.type, order: "sort" }));
      }
    });
  }, []);

  const addPhotos = () => {
    if (window.innerWidth >= 1025) {
      return getPhotosOneType.slice(0, showPhotos.length + 4);
    }
    if (window.innerWidth >= 769) {
      return getPhotosOneType.slice(0, showPhotos.length + 3);
    }
    if (window.innerWidth >= 320) {
      return getPhotosOneType.slice(0, showPhotos.length + 2);
    }
  };

  const handlerClickAddPhotos = () => {
    dispatch(handlerShowAddPhotos(addPhotos()));
  };

  const handlerHideButton = showPhotos.length !== getPhotosOneType.length ? "" : "photoGallery__button_disabled";

  return (
    <Fragment>
      <Header timerRef={timerRef} />
      <section className="photoGallery" id="#photoGallery">
        <BackgroundImage />
        {categoryPhoto.map((item) => {
          return (
            pathname === item.pathSelect && (
              <h2 className="photoGallery__title" key={item.type}>
                {item.title}
              </h2>
            )
          );
        })}
        <Photos />
        <button className={`photoGallery__button ${handlerHideButton}`} type="button" onClick={handlerClickAddPhotos}>
          Показать больше
        </button>
      </section>
      <Footer />
    </Fragment>
  );
};

export default PhotoGallery;
