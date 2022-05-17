import React from "react";
import "./Photos.scss";
import { useLocation } from "react-router-dom";
import { handlerDataImageForModal, handlerModalWithImage } from "../../redux/Reducers/photoSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IPhoto } from "../../types";

const Photos: React.FC = () => {
  const dispatch = useAppDispatch();
  const { showPhotos } = useAppSelector((state) => state.photos);
  const { pathname } = useLocation();

  const handleOpenImagePopup = (linkPhoto: string): void => {
    dispatch(handlerModalWithImage(true));
    dispatch(handlerDataImageForModal(linkPhoto));
  };

  return (
    <ul className={`photos  ${pathname === "/" ? "" : "photos_gallery"} `}>
      {showPhotos.map((image: IPhoto, index: number) => {
        return (
          <li
            key={index}
            className={`animElement  ${
              pathname === "/" ? "photos__photo-container" : "photos__photo-container-gallery"
            }`}
          >
            <img className="photos__photo" src={image.mediaLink} alt="фотография" />
            <div className="photos__overlay" onClick={() => handleOpenImagePopup(image.mediaLink)}>
              <div className="photos__overlay-icon" />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Photos;
