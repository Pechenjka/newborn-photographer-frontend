import React, { useRef } from "react";
import Styles from "./style.module.scss";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { arrSlides } from "../../utils/config";
import { IArrSlides } from "../../types";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useWindowResize } from "../../hooks/useWindowResize";

export const SliderComponent: React.FC = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const { width } = useWindowResize();

  const handleChangeSlide = arrSlides.map((item: IArrSlides): string => {
    if (width <= 768 && item.mobile) {
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
              <span className={Styles.slideShow__welcomeTitle_span}>Hello</span>
              <br /> I'm Alena Lobacheva
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className={Styles.slideShow__welcomeDescription}
            >
              Professional Newborn Photographer.
              <br />
              I help people to save the best moments, feelings, emotions for a long time" <br /> to catch the moment
              which will never repeat and happen again.
            </motion.h2>
            <Link className={Styles.slideShow__welcomeLink} to="/contact" title="contact">
              Contact
            </Link>
          </div>
          <div className={Styles.slideShow__linkAboutNewbornContainer}/>
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
                  alt={`photography newborn - ${index + 1} slide`}
                  title={`photography newborn - ${index + 1} slide`}
                />
              </SwiperSlide>
            );
          })}
        </div>
        <button className={stylePrevBtn} ref={navigationPrevRef} title="prev slide">
          &#10094;
        </button>
        <button className={styleNextBtn} ref={navigationNextRef} title="next slide">
          &#10095;
        </button>
      </Swiper>
    </div>
  );
};
