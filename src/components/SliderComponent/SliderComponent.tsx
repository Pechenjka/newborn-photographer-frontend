import React, { useRef, useState } from "react";
import Styles from "./style.module.scss";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";
import * as Scroll from "react-scroll";
import { arrSlides } from "../../utils/config";
import { IArrSlides } from "../../types";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../redux/hooks";

export const SliderComponent: React.FC = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const LinkScroll = Scroll.Link;
  const { language } = useAppSelector((state) => state.app);

  const { t } = useTranslation();

  const handleChangeSlide = arrSlides.map((item: IArrSlides): string => {
    if (window.innerWidth <= 768 && item.mobile) {
      return item.mobile;
    } else {
      return item.desktop;
    }
  });

  const cx = classNames.bind(Styles);
  const stylePrevBtn = cx("swiperBtn", "swiperBtn_prev");
  const styleNextBtn = cx("swiperBtn", "swiperBtn_next");

  return (
    <div className={Styles.slideShow}>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className={Styles.mySwiper}
      >
        <div className={Styles.slideShow__welcomeContainer}>
          <div className={Styles.slideShow__aboutMeContainer}>
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className={Styles.slideShow__welcomeTitle}
            >
              <span className={Styles.slideShow__welcomeTitle_span}>{t("mainPage hello")}</span>
              <br /> {t("mainPage nameAuthor")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className={Styles.slideShow__welcomeDescription}
            >
              {t("mainPage aboutMe 1 part")}
              <br />
              {t("mainPage aboutMe 2 part")} <br /> {t("mainPage aboutMe 3 part")}
            </motion.p>
            <Link className={Styles.slideShow__welcomeLink} to="/contacts">
              {t("mainPage My contacts")}
            </Link>
          </div>
          <div className={Styles.slideShow__linkAboutNewbornContainer}>
            {language === "ru" && (
              <LinkScroll
                className={Styles.slideShow__linkAboutNewborn}
                to="aboutNewborn"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                О фотосесии новорожденного в видеоформате
              </LinkScroll>
            )}
          </div>
        </div>
        <div className={Styles.slideShow__imageContainer}>
          {handleChangeSlide.map((slide: string, index: number) => {
            return (
              <SwiperSlide key={index}>
                <motion.img
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className={Styles.slideShow__image}
                  src={slide}
                  alt={`${index + 1}`}
                />
              </SwiperSlide>
            );
          })}
        </div>
        <button className={stylePrevBtn} ref={navigationPrevRef}>
          &#10094;
        </button>
        <button className={styleNextBtn} ref={navigationNextRef}>
          &#10095;
        </button>
      </Swiper>
    </div>
  );
};
