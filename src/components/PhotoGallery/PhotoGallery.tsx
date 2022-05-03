import "./PhotoGallery.scss";
import React, { Fragment, useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import Photos from "../Photos/Photos";
import { photosCategoryInGallery } from "../../utils/config";
import { handlerShowAddPhotos, handlerShowPhotos } from "../../redux/Reducers/photoSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IPhoto, IPhotosCategoryInGallery } from "../../types";
import { UseGsapEffect } from "../../hooks/UseGsapEffect";
import { handlerTimeOutClick } from "../../redux/Reducers/appSlice";

const PhotoGallery: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { showPhotos, getPhotosOneType } = useAppSelector((state) => state.photos);
  const firstUpdatePhotoGallery = useRef(true);

  const animationPhotosFirstRender = new UseGsapEffect(".animElement", {
    duration: 0.4,
    y: 50,
    opacity: 0,
    stagger: 0.05,
    ease: "back",
    onComplete: () => {
      dispatch(handlerTimeOutClick(true));
    },
  }).animationWithOutReverse;

  const animationPhotos = new UseGsapEffect(".animElement", {
    duration: 0.4,
    y: 50,
    opacity: 0,
    stagger: {
      each: 0.05,
      from: "end",
    },
    ease: "back.in(1.7)",
    onComplete: () => {
      setTimeout(() => {
        dispatch(handlerTimeOutClick(true));
      }, 1300);
    },
  }).animation;

  useEffect(() => {
    dispatch(handlerTimeOutClick(false));
  }, []);

  useLayoutEffect(() => {
    photosCategoryInGallery.some((item: IPhotosCategoryInGallery) => {
      if (pathname.includes(item.type)) {
        if (firstUpdatePhotoGallery.current) {
          setTimeout(() => {
            animationPhotosFirstRender();
          }, 0);
          dispatch(handlerShowPhotos({ type: item.type, order: "sort" }));
          firstUpdatePhotoGallery.current = false;
        } else {
          animationPhotos();
          setTimeout(() => {
            dispatch(handlerShowPhotos({ type: item.type, order: "sort" }));
          }, window.innerWidth < 769 ? 600 : 1200);
        }
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

  const handlerHideButton = showPhotos.length !== getPhotosOneType.length ? "" : "photoGallery__button_disabled";

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
        <Photos firstUpdate={firstUpdatePhotoGallery} />
        <button className={`photoGallery__button ${handlerHideButton}`} type="button" onClick={handlerClickAddPhotos}>
          Показать больше
        </button>
      </section>
    </Fragment>
  );
};

export default PhotoGallery;
