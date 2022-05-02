import "./PhotoGallery.scss";
import React, { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import Photos from "../Photos/Photos";
import { photosCategoryInGallery } from "../../utils/config";
import { handlerShowAddPhotos, handlerShowPhotos } from "../../redux/Reducers/photoSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IPhoto, IPhotosCategoryInGallery } from "../../types";

const PhotoGallery: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { showPhotos, getPhotosOneType } = useAppSelector((state) => state.photos);

  useEffect(() => {
    photosCategoryInGallery.some((item: IPhotosCategoryInGallery) => {
      if (pathname.includes(item.type)) {
        dispatch(handlerShowPhotos({ type: item.type, order: "sort" }));
      }
    });
  }, []);

  const addPhotos = (photos: IPhoto[]): IPhoto[] => {
    if (window.innerWidth >= 1025) {
      return getPhotosOneType.slice(0, photos.length + 4);
    }
    if (window.innerWidth >= 769) {
      return getPhotosOneType.slice(0, photos.length + 3);
    }
    if (window.innerWidth >= 320) {
      return getPhotosOneType.slice(0, photos.length + 2);
    }
    return getPhotosOneType;
  };

  const handlerClickAddPhotos = (): void => {
    dispatch(handlerShowAddPhotos(addPhotos(showPhotos)));
  };

  const handlerHideButton = showPhotos.length !== getPhotosOneType.length ? "" : "photoGallery__button_disabled";

  return (
    <Fragment>
      <section className="photoGallery" id="#photoGallery">
        <BackgroundImage />
        {photosCategoryInGallery.map((item: IPhotosCategoryInGallery) => {
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
    </Fragment>
  );
};

export default PhotoGallery;
