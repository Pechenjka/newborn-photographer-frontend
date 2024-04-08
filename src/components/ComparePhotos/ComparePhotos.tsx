import React, { useState } from "react";
import Styles from "./style.module.scss";
import arrowsSplit from "../../images/split-arrows.svg";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { useWindowResize } from "../../hooks/useWindowResize";
import classNames from "classnames/bind";
import { motion } from "framer-motion";
import { animationOpacityTransitionRightToLeft } from "../../helpers/framerMotion";
import { useTranslation } from "react-i18next";

export interface PropsArrRetouchPhotos {
  type: string;
  imageAfter: string;
  imageBefore: string;
}

export const ComparePhotos: React.FC = () => {
  const [typePhoto, setTypePhoto] = useState<{ newborn: boolean; family: boolean }>({ newborn: true, family: false });
  const [arrRetouchPhotos, setArrRetouchPhotos] = useState<PropsArrRetouchPhotos>({
    type: "newborn",
    imageAfter: 'https://cdn.alenalobacheva.com/staticPhotos/retouch/retouch-after-newborn.jpg',
    imageBefore: 'https://cdn.alenalobacheva.com/staticPhotos/retouch/retouch-before-newborn.jpg',
  });

  const { width } = useWindowResize();
  const cx = classNames.bind(Styles);
  const { t } = useTranslation();

  const ArrRetouchPhotos: PropsArrRetouchPhotos[] = [
    {
      type: "newborn",
      imageAfter: 'https://cdn.alenalobacheva.com/staticPhotos/retouch/retouch-after-newborn.jpg',
      imageBefore: 'https://cdn.alenalobacheva.com/staticPhotos/retouch/retouch-before-newborn.jpg',
    },

    {
      type: "family",
      imageAfter: 'https://cdn.alenalobacheva.com/staticPhotos/retouch/retouch-after-family.webp',
      imageBefore: 'https://cdn.alenalobacheva.com/staticPhotos/retouch/retouch-before-family.webp',
    },
  ];

  const onClick = (arr: PropsArrRetouchPhotos[], typePhoto: string) => {
    arr.forEach((item: { type: string; imageAfter: string; imageBefore: string }) => {
      item.type === typePhoto &&
        typePhoto &&
        setArrRetouchPhotos({ type: item.type, imageAfter: item.imageAfter, imageBefore: item.imageBefore });
    });
    setTypePhoto({ newborn: typePhoto === "newborn" && true, family: typePhoto === "family" && true });
  };

  const MyCustomHandle = () => {
    return (
      <div className={Styles.comparePhotos__buttonContainer}>
        <div className={Styles.comparePhotos__line} />
        <button className={Styles.comparePhotos__button} title="image comparison slider">
          <img className={Styles.comparePhotos__buttonIcon} src={arrowsSplit} alt="image comparison slider" />
        </button>
        <div className={Styles.comparePhotos__line} />
      </div>
    );
  };

  return (
    <motion.section
      className={Styles.comparePhotos}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <h3 className={Styles.comparePhotos__title}>{t("image compare title")}</h3>
      <motion.div
        className={Styles.comparePhotos__container}
        variants={animationOpacityTransitionRightToLeft}
        custom={1}
      >
        <ul className={Styles.comparePhotos__chooseTypePhoto}>
          <li
            className={cx("comparePhotos__typePhotoOverlay", {
              ["comparePhotos__typePhotoOverlay_active"]: typePhoto.newborn,
            })}
          >
            <button
              className={cx("comparePhotos__typePhoto", {
                ["comparePhotos__typePhoto_active"]: typePhoto.newborn,
              })}
              onClick={() => onClick(ArrRetouchPhotos, "newborn")}
            >
              Newborn
            </button>
          </li>
          <li
            className={cx("comparePhotos__typePhotoOverlay", {
              ["comparePhotos__typePhotoOverlay_active"]: typePhoto.family,
            })}
          >
            <button
              className={cx("comparePhotos__typePhoto", {
                ["comparePhotos__typePhoto_active"]: typePhoto.family,
              })}
              onClick={() => onClick(ArrRetouchPhotos, "family")}
            >
              Family
            </button>
          </li>
        </ul>
        <div className={Styles.comparePhotos__containerSlide}>
          <ReactCompareSlider
            onlyHandleDraggable={true}
            handle={<MyCustomHandle />}
            itemOne={
              <>
                <ReactCompareSliderImage
                  src={arrRetouchPhotos.imageBefore}
                  alt="photography before editing"
                  title="photography before editing"
                  className={Styles.comparePhotos__photo}
                />
                {width > 568 && (
                  <span className={cx("comparePhotos__overlay", "comparePhotos__overlay_before")}>Before</span>
                )}
              </>
            }
            itemTwo={
              <div>
                <ReactCompareSliderImage
                  src={arrRetouchPhotos.imageAfter}
                  alt="photography after editing"
                  title="photography after editing"
                  className={Styles.comparePhotos__photo}
                />
                {width > 568 && (
                  <span className={cx("comparePhotos__overlay", "comparePhotos__overlay_after")}>After</span>
                )}
              </div>
            }
          />
        </div>
      </motion.div>
    </motion.section>
  );
};
