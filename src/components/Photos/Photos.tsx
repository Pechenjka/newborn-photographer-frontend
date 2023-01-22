import React from "react";
import Styles from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IPhoto, PhotoPostPage, PropsPhotos } from "../../types";
import Photo from "./components/Photo/Photo";
import classNames from "classnames/bind";
import { motion } from "framer-motion";
import { framerMotionPhotosAndPackets } from "../../helpers/framerMotion";
import { changeOrderPhoto, deletePhoto } from "../../redux/Reducers/photoSlice";
import { useLocation } from "react-router-dom";

const Photos: React.FC<PropsPhotos> = ({ photoPostPage }) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { showPhotos, categoryPhotosBtn } = useAppSelector((state) => state.photos);
  const cx = classNames.bind(Styles);
  const styleContainPhotos = cx("photos", { photos__gallery: photoPostPage === PhotoPostPage.photoGalleryPage });

  const { container, item } = framerMotionPhotosAndPackets();

  const handleDeletePhoto = (photoId: string, arrPhoto: IPhoto[]): void => {
    const currentPhoto = arrPhoto.find((photo: IPhoto) => {
      return photo._id.includes(photoId);
    });
    dispatch(
      deletePhoto({
        photoId: currentPhoto?._id,
        path: pathname.length < 2 ? "random" : "sort",
        type: categoryPhotosBtn === null ? null : currentPhoto?.type,
      })
    );
  };

  const handleChangeOrderPhoto = (currentPhoto: IPhoto, duration: string): void => {
    dispatch(
      changeOrderPhoto({ id: currentPhoto._id, duration })
    );
  };

  return (
    <motion.ul className={styleContainPhotos} variants={container} initial="hidden" animate="show">
      {showPhotos.map((image: IPhoto) => {
        return (
          <Photo
            image={image}
            photoPostPage={photoPostPage}
            key={image._id}
            variants={item}
            handleDeletePhoto={handleDeletePhoto}
            handleChangeOrderPhoto={handleChangeOrderPhoto}
            showPhotos={showPhotos}
          />
        );
      })}
    </motion.ul>
  );
};

export default Photos;
