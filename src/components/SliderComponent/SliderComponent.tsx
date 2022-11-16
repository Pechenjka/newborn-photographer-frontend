import React, { useRef } from "react";
import Styles from "./style.module.scss";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";
import * as Scroll from 'react-scroll'
import { arrSlides } from "../../utils/config";
import { IArrSlides } from "../../types";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom'

export const SliderComponent: React.FC = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const LinkScroll = Scroll.Link

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
            <h1 className={Styles.slideShow__welcomeTitle}>
              <br /> Я Алена Лобачева
            </h1>
            <p className={Styles.slideShow__welcomeDescription}>
              Профессиональный фотограф новорожденных.
              <br />
              Знаю, как оставить на память самые ценные <br /> и неповторимые моменты вашей жизни
            </p>
            <Link className={Styles.slideShow__welcomeLink} to='/contacts' >
              Мои контакты
            </Link>
          </div>
          <div className={Styles.slideShow__linkAboutNewbornContainer}>
            <LinkScroll className={Styles.slideShow__linkAboutNewborn} to='aboutNewborn' spy={true}  smooth={true} offset={-100} duration={1000}>
              О фотосесии новорожденного в видеоформате
            </LinkScroll>
          </div>
        </div>
        <div className={Styles.slideShow__imageContainer}>
          {handleChangeSlide.map((slide: string, index: number) => {
            return (
              <SwiperSlide key={index}>
                <img className={Styles.slideShow__image} src={slide} alt={`${index + 1}`} />
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
