import React from "react";
import Styles from "./style.module.scss";
import { useAppSelector } from "../../redux/hooks";
import { IPhoto, PhotoPostPage, PropsPhotos } from "../../types";
import Photo from "./components/Photo/Photo";
import classNames from "classnames/bind";
import { motion } from "framer-motion";
import { framerMotionPhotosAndPackets } from "../../helpers/framerMotion";

const Photos: React.FC<PropsPhotos> = ({ photoPostPage }) => {
  const { showPhotos } = useAppSelector((state) => state.photos);
  const cx = classNames.bind(Styles);
  const styleContainPhotos = cx("photos", { photos__gallery: photoPostPage === PhotoPostPage.photoGalleryPage });

  const { container, item } = framerMotionPhotosAndPackets();

  return (
    <motion.ul className={styleContainPhotos} variants={container} initial="hidden" animate="show">
      {showPhotos.map((image: IPhoto) => {
        return <Photo image={image} photoPostPage={photoPostPage} key={image._id} variants={item} />;
      })}
    </motion.ul>
  );
};

export default Photos;
