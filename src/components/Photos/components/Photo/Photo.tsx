import Styles from "./style.module.scss";
import React from "react";
import { PhotoPostPage, PropsPhoto } from "../../../../types";
import { handlerDataImageForModal, handlerModalWithImage } from "../../../../redux/Reducers/photoSlice";
import { useAppDispatch } from "../../../../redux/hooks";
import classNames from "classnames/bind";

const Photo: React.FC<PropsPhoto> = ({ image, photoPostPage, setRef }) => {
  const dispatch = useAppDispatch();

  const handleOpenImagePopup = (linkPhoto: string): void => {
    dispatch(handlerModalWithImage(true));
    dispatch(handlerDataImageForModal(linkPhoto));
  };

  const cx = classNames.bind(Styles);

  const styleContainerPhoto = cx(
    "photo",
    { photo__containerGallery: photoPostPage === PhotoPostPage.photoGalleryPage },
    { photo__container: photoPostPage === PhotoPostPage.mainPage }
  );

  return (
    <li className={styleContainerPhoto} ref={setRef}>
      <img className={Styles.photo__image} src={image.image} alt="img" />
      <div className={Styles.photo__overlay} onClick={() => handleOpenImagePopup(image.image)}>
        <div className={Styles.photo__overlayIcon} />
      </div>
    </li>
  );
};

export default Photo;
