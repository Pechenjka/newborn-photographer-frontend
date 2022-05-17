import React, { useEffect, useLayoutEffect } from "react";
import "./PhotoGalleryOfTheMainPage.scss";
import Photos from "../../Photos/Photos";
import PreLoader from "../../PreLoader/PreLoader";
import { handlerActiveCategoryPhotosBtn, handlerShowPhotos } from "../../../redux/Reducers/photoSlice";
import { photosCategoryInMainPage } from "../../../utils/config";
import { UseGsapEffect } from "../../../hooks/UseGsapEffect";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { IPhotosCategoryInMainPage } from "../../../types";

const PhotoGalleryOfTheMainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error, categoryPhotosBtn } = useAppSelector((state) => state.photos);

  useEffect(() => {
    dispatch(handlerShowPhotos({ type: "all", order: "random" }));
    dispatch(handlerActiveCategoryPhotosBtn("all"));
  }, []);

  const handlerClick = (event: React.MouseEvent, typePhotos: string): void => {
    dispatch(handlerShowPhotos({ type: typePhotos, order: "random" }));
    dispatch(handlerActiveCategoryPhotosBtn(typePhotos));
  };

  const animationPhotosWithOutReverse = new UseGsapEffect(".animElement", {
    duration: 0.4,
    y: 50,
    opacity: 0,
    stagger: 0.05,
    ease: "back",
  }).animationWithOutReverse;

  useLayoutEffect(() => {
    setTimeout(() => {
      animationPhotosWithOutReverse();
    }, 0);
  }, []);


  return (
    <section className="gallery">
      <ul className="gallery__list-title">
        {photosCategoryInMainPage.map((item: IPhotosCategoryInMainPage) => {
          return (
            <li className="gallery__title-element" key={item.id}>
              <button
                type="button"
                className={`gallery__title-link ${item.type === categoryPhotosBtn ? "gallery__title-link_active" : ""}`}
                onClick={(event) => item.onClick(handlerClick, event)}
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
      {loading ? <PreLoader /> : <Photos />}
      {error && <p>{error}</p>}
    </section>
  );
};
export default PhotoGalleryOfTheMainPage;
