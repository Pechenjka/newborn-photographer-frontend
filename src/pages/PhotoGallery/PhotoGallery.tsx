import "./PhotoGallery.scss";
import React, { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import Photos from "../../components/Photos/Photos";
import { photosCategoryInGallery } from "../../utils/config";
import {
  fetchPhotos,
  handlerShowAddPhotos,
  handlerOpenChangeSortPhotos,
  saveChangeSortPhotos,
} from "../../redux/Reducers/photoSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IPhoto, PhotoPostPage } from "../../types";
import { Button } from "../../components/Button";
import PreLoader from "../../components/PreLoader/PreLoader";
import { MetaData } from "../../helpers/MetaData";

const PhotoGallery: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { showPhotos, getPhotos, loading, error, openChangeSortPhotos } = useAppSelector((state) => state.photos);
  const { user } = useAppSelector((state) => state.user);
  const { language } = useAppSelector((state) => state.app);

  useEffect(() => {
    photosCategoryInGallery.some((item: string) => {
      if (pathname.includes(item)) {
        dispatch(fetchPhotos({ type: item, order: "sort" }));
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

  const handleChangeSortPhotos = (): void => {
    if (!openChangeSortPhotos) {
      dispatch(handlerOpenChangeSortPhotos(true));
    } else {
      dispatch(saveChangeSortPhotos(showPhotos));
      dispatch(handlerOpenChangeSortPhotos(false));
    }
  };

  return (
    <Fragment>
      <MetaData
        title={`Photo gallery - ${photosCategoryInGallery.filter(
          (item) => pathname.includes(item) && item
        )} | Family photographer in New York Alena Lobacheva`}
        description={`Author's retouch - ${photosCategoryInGallery.filter(
          (item) => pathname.includes(item) && item
        )}. Save beautiful moments for the hole life.`}
        canonicalLink={`https://alenalobacheva.net${pathname}`}
      />
      <section className="photoGallery" id="photoGallery">
        <BackgroundImage />
        {photosCategoryInGallery.map((item: string, index: number) => {
          const title = item.split("").slice(1).join("");
          return (
            pathname.includes(item) && (
              <h1 className="photoGallery__title" key={index}>
                {item[0].toUpperCase() + title}
              </h1>
            )
          );
        })}
        {loading ? (
          <div style={{ height: "1000px" }}>
            <PreLoader />
          </div>
        ) : (
          <>
            {user.role.includes("ADMIN") && (
              <Button styleButton="ping" type="button" onClick={handleChangeSortPhotos}>
                {!openChangeSortPhotos ? "Изменить последовательность фотографий" : "Сохранить"}
              </Button>
            )}
            <Photos photoPostPage={PhotoPostPage.photoGalleryPage} />
          </>
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
