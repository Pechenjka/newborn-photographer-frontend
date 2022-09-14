import React, { useRef } from "react";
import Styles from "./style.module.scss";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";
import { Link } from "react-scroll";
import { arrSlides } from "../../utils/config";
import { IArrSlides } from "../../types";
import classNames from "classnames/bind";

export const SliderComponent: React.FC = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const handleChangeSlide = arrSlides.map((item: IArrSlides): string => {
    if (window.innerWidth <= 768 && item.mobile) {
      return item.mobile;
    } else {
      return item.desktop;
    }
  });

  const cx = classNames.bind(Styles);
  const styleWelcomeTitle = cx("slideShow__welcomeTitle", "animItems");
  const styleWelcomeDescription = cx("slideShow__welcomeDescription", "animItems");
  const styleWelcomeLink = cx("slideShow__welcomeLink", "animItems");
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
        <div className={Styles.slideShow__aboutMeContainer}>
          <h3 className={styleWelcomeTitle}>
            <br /> Я Алена Лобачева
          </h3>
          <p className={styleWelcomeDescription}>
            Профессиональный фотограф новорожденных.
            <br />
            Знаю, как оставить на память самые ценные <br /> и неповторимые моменты вашей жизни
          </p>
          <Link className={styleWelcomeLink} to="footer" spy={true} smooth={true} offset={50} duration={1000}>
            Мои контакты
          </Link>
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
