import React, { useLayoutEffect } from "react";
import Styles from "./style.module.scss";
import { useAppSelector } from "../../redux/hooks";
import { IPhoto, PhotoPostPage, PropsPhotos } from "../../types";
import Photo from "./components/Photo/Photo";
import classNames from "classnames/bind";
import { useArrayRef, UseGsapEffect } from "../../hooks/UseGsapEffect";

const Photos: React.FC<PropsPhotos> = ({ photoPostPage }) => {
  const { showPhotos } = useAppSelector((state) => state.photos);
  const [refs, setRef] = useArrayRef();
  const cx = classNames.bind(Styles);
  const styleContainPhotos = cx("photos", { photos__gallery: photoPostPage === PhotoPostPage.photoGalleryPage });

  useLayoutEffect(() => {
    setTimeout(() => {
      animationPhotosWithOutReverse();
    }, 0);
  }, []);

  const animationPhotosWithOutReverse = new UseGsapEffect(refs.current, {
    duration: 0.5,
    y: 70,
    opacity: 0,
    stagger: 0.05,
    ease: "back",
  }).animationWithOutReverse;

  return (
    <ul className={styleContainPhotos}>
      {showPhotos.map((image: IPhoto, index: number) => {
        return <Photo image={image} photoPostPage={photoPostPage} key={index} setRef={setRef} />;
      })}
    </ul>
  );
};

export default Photos;
