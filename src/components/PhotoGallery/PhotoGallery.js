import "./PhotoGallery.scss";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import {
  displayPhotosOnThePagePhotoGallery,
  handleTypePhotosOfThePage,
  handleTypesPhotos,
  showGalleryPhotos,
} from "../../redux/Actions/userAction";
import { useLocation } from "react-router-dom";
import Instagram from "../Instagram/Instagram";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Photos from "../Photos/Photos";
import { links } from "../../utils/config";

function PhotoGallery({ timerRef }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const getPhotos = useSelector((state) => state.photos.getPhotos);
  const typesPhotos = useSelector((state) => state.photos.typesPhotos);
  const allPhotosOneType = useSelector((state) => state.photos.allPhotosOneType);

  useEffect(() => {
    dispatch(displayPhotosOnThePagePhotoGallery());
  }, [dispatch]);

  //Выводить фотографии одного типа на страницу при перезагрузки
  useEffect(() => {
    if (sessionStorage.getItem("getPhotos")) {
      dispatch(handleTypesPhotos(typesPhotos, pathname));
    }
  }, [dispatch, pathname, typesPhotos]);

  //Установить тип фотографии для страницы
  useEffect(() => {
    dispatch(handleTypePhotosOfThePage(links, pathname));
  }, [dispatch, pathname]);

  const categoryPhoto = [
    {
      title: "Новорожденные",
      pathSelect: "/photoGallery/newborn",
    },
    {
      title: "В ожидании чуда",
      pathSelect: "/photoGallery/pregnancy",
    },
    {
      title: "Малыши до 1 года",
      pathSelect: "/photoGallery/baby",
    },
    {
      title: "Семейная фотоссесия",
      pathSelect: "/photoGallery/family",
    },
    {
      title: "Woman съемка",
      pathSelect: "/photoGallery/woman",
    },
    {
      title: "Выписка из роддома",
      pathSelect: "/photoGallery/discharge",
    },
    {
      title: "Крещение",
      pathSelect: "/photoGallery/christening",
    },
  ];

  const addPhotos = () => {
    if (window.innerWidth >= 1025) {
      return allPhotosOneType.slice(0, getPhotos.length + 4);
    }
    if (window.innerWidth >= 769) {
      return allPhotosOneType.slice(0, getPhotos.length + 3);
    }
    if (window.innerWidth >= 320) {
      return allPhotosOneType.slice(0, getPhotos.length + 2);
    }
  };

  const handleDisplayAddPhotos = () => {
    dispatch(showGalleryPhotos(addPhotos()));
  };

  const handleHideButton = getPhotos.length !== allPhotosOneType.length ? "" : "photoGallery__button_disabled";

  return (
    <Fragment>
      <Header timerRef={timerRef} />
      <section className="photoGallery" id="#photoGallery">
        <BackgroundImage />
        {categoryPhoto.map((item, index) => {
          return (
            pathname === item.pathSelect && (
              <h2 className="photoGallery__title" key={index}>
                {item.title}
              </h2>
            )
          );
        })}
        <Photos />
        <button className={`photoGallery__button ${handleHideButton}`} type="button" onClick={handleDisplayAddPhotos}>
          Показать больше
        </button>
        <Instagram />
      </section>
      <Footer />
    </Fragment>
  );
}

export default PhotoGallery;
