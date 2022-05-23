import "./PhotoGallery.scss";
import React, { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import Photos from "../../components/Photos/Photos";
import { photosCategoryInGallery } from "../../utils/config";
import { fetchPhotos, handlerShowAddPhotos } from "../../redux/Reducers/photoSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IPhoto, IPhotosCategoryInGallery, PhotoPostPage } from "../../types";
import Button from "../../components/Button/Button";
import PreLoader from "../../components/PreLoader/PreLoader";

const PhotoGallery: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { showPhotos, getPhotos, loading, error } = useAppSelector((state) => state.photos);

  useEffect(() => {
    photosCategoryInGallery.some((item: IPhotosCategoryInGallery) => {
      if (pathname.includes(item.type)) {
        dispatch(fetchPhotos({ type: item.type, order: "sort" }));
      }
    });
  }, [pathname]);

  const addPhotos = (photos: IPhoto[]): IPhoto[] => {
    if (window.innerWidth >= 1025) {
      return getPhotos.slice(0, photos.length + 4);
    }
    if (window.innerWidth >= 769) {
      return getPhotos.slice(0, photos.length + 3);
    }
    if (window.innerWidth >= 320) {
      return getPhotos.slice(0, photos.length + 2);
    }
    return getPhotos;
  };

  const handlerClickAddPhotos = (): void => {
    dispatch(handlerShowAddPhotos(addPhotos(showPhotos)));
  };

  const handlerHideButton = showPhotos.length === getPhotos.length;

  return (
    <Fragment>
      <section className="photoGallery" id="photoGallery">
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
        {loading ? (
          <div style={{ height: "1000px" }}>
            <PreLoader />
          </div>
        ) : (
          <Photos photoPostPage={PhotoPostPage.photoGalleryPage} />
        )}
        {error && <p>{error}</p>}
        <Button styleButton="ping" onClick={handlerClickAddPhotos} type="button" hide={handlerHideButton}>
          Показать больше
        </Button>
      </section>
    </Fragment>
  );
};

export default PhotoGallery;
