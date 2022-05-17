import "./PhotoGallery.scss";
import React, { Fragment, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import Photos from "../Photos/Photos";
import { photosCategoryInGallery } from "../../utils/config";
import { handlerShowAddPhotos, handlerShowPhotos } from "../../redux/Reducers/photoSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IPhoto, IPhotosCategoryInGallery } from "../../types";

import Button from "../Button/Button";

const PhotoGallery: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { showPhotos, getPhotosOneType } = useAppSelector((state) => state.photos);

  useLayoutEffect(() => {
    photosCategoryInGallery.some((item: IPhotosCategoryInGallery) => {
      if (pathname.includes(item.type)) {
        dispatch(handlerShowPhotos({ type: item.type, order: "sort" }));
      }
    });
  }, [pathname, dispatch]);

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

  const handlerHideButton = showPhotos.length === getPhotosOneType.length;

  return (
    <Fragment>
      <section className="photoGallery" id="#photoGallery">
        <BackgroundImage />
        {photosCategoryInGallery.map((item: IPhotosCategoryInGallery, index: number) => {
          return (
            pathname.includes(item.type) && (
              <h2 className="photoGallery__title" key={index}>
                {item.title}
              </h2>
            )
          );
        })}
        <Photos />
        <Button styleButton="ping" onClick={handlerClickAddPhotos} type="button" hide={handlerHideButton}>
          Показать больше
        </Button>
      </section>
    </Fragment>
  );
};

export default PhotoGallery;
