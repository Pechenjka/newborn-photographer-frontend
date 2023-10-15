import React from "react";
import Styles from "./style.module.scss";
import retouchBefore from "../../images/retouch-before.jpg";
import retouchAfter from "../../images/retouch-after.jpg";
import arrowsSplit from "../../images/split-arrows.svg";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { useWindowResize } from "../../hooks/useWindowResize";
import classNames from "classnames/bind";
import { motion } from "framer-motion";
import { animationOpacityTransitionRightToLeft } from "../../helpers/framerMotion";
import { useTranslation } from "react-i18next";

export const ComparePhotos: React.FC = () => {
  const { width } = useWindowResize();
  const cx = classNames.bind(Styles);
  const { t } = useTranslation();

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
        <ReactCompareSlider
          onlyHandleDraggable={true}
          handle={<MyCustomHandle />}
          itemOne={
            <>
              <ReactCompareSliderImage
                src={retouchBefore}
                alt="photography before editing"
                title="photography before editing"
                className={Styles.comparePhotos__photo}
              />
              {width > 768 && (
                <span className={cx("comparePhotos__overlay", "comparePhotos__overlay_before")}>Before</span>
              )}
            </>
          }
          itemTwo={
            <div>
              <ReactCompareSliderImage
                src={retouchAfter}
                alt="photography after editing"
                title="photography after editing"
                className={Styles.comparePhotos__photo}
              />
              {width > 768 && (
                <span className={cx("comparePhotos__overlay", "comparePhotos__overlay_after")}>After</span>
              )}
            </div>
          }
        />
      </motion.div>
    </motion.section>
  );
};
