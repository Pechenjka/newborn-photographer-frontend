import Styles from "./style.module.scss";
import React from "react";
import { PhotoPostPage, PropsPhoto } from "../../../../types";
import { handlerDataImageForModal, handlerModalWithImage } from "../../../../redux/Reducers/photoSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import classNames from "classnames/bind";
import { motion } from "framer-motion";

const Photo: React.FC<PropsPhoto> = ({ image, photoPostPage, variants, handleDeletePhoto, showPhotos }) => {
  const { user } = useAppSelector((state) => state.user);
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
    <motion.li className={styleContainerPhoto} variants={variants}>
      {user.role.includes("ADMIN") && (
        <button className={Styles.photo__delete} onClick={() => handleDeletePhoto(image._id, showPhotos)} />
      )}
      <img className={Styles.photo__image} src={image.image} alt="img" />
      <div className={Styles.photo__overlay} onClick={() => handleOpenImagePopup(image.image)}>
        <div className={Styles.photo__overlayIcon} />
      </div>
    </motion.li>
  );
};

export default Photo;
