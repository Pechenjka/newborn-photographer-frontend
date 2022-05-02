import React, { useEffect } from "react";
import "./PhotoGalleryOfTheMainPage.scss";
import Photos from "../../Photos/Photos";
import PreLoader from "../../PreLoader/PreLoader";
import { handlerActiveCategoryPhotosBtn, handlerShowPhotos } from "../../../redux/Reducers/photoSlice";
import { photosCategoryInMainPage } from "../../../utils/config";
import { UseGsapEffect } from "../../../hooks/UseGsapEffect";
import { handlerTimeOutClick } from "../../../redux/Reducers/appSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {IPhotosCategoryInMainPage} from "../../../types";

const PhotoGalleryOfTheMainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error, categoryPhotosBtn } = useAppSelector((state) => state.photos);
  const { timeOutClick } = useAppSelector((state) => state.app);

  useEffect(() => {
    dispatch(handlerShowPhotos({ type: "all", order: "random" }));
    dispatch(handlerActiveCategoryPhotosBtn("all"));
  }, []);

  const handlerClick = (event: React.MouseEvent, typePhotos: string): void => {
    if (timeOutClick) {
      dispatch(handlerTimeOutClick(false));
      dispatch(handlerShowPhotos({ type: typePhotos, order: "random" }));
      animationPhotos();
      dispatch(handlerActiveCategoryPhotosBtn(typePhotos));
      timeOut();
    } else {
      event.preventDefault();
    }
  };

  const animationPhotos = new UseGsapEffect(".animElement", {
    duration: 0.4,
    y: 50,
    opacity: 0,
    stagger: 0.05,
    ease: "back",
  }).animation

  // const { animation } = useGsapEffect(".animElement", {
  //   duration: 0.4,
  //   y: 100,
  //   opacity: 0,
  //   stagger: 0.05,
  //   ease: "back",
  // });

  const timeOut = (): void => {
    setTimeout(() => {
      dispatch(handlerTimeOutClick(true));
    }, 1000);
  };

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
