import Style from "./style.module.scss";
import React, { useRef } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useTranslation } from "react-i18next";
import { animationScaleAndOpacity } from "../../helpers/framerMotion";
import { PostComponent } from "./components/PostComponent";
import { motion } from "framer-motion";
import { useWindowResize } from "../../hooks/useWindowResize";
import { PostInstagramProfile } from "../../types";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export const Instagram: React.FC = () => {
  const { error, instagramProfile } = useAppSelector((state) => state.app);
  const { t } = useTranslation();
  const { width } = useWindowResize();

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const countIns: any = () => {
    if (width > 1024) return 5;
    if (width >= 768) return 4;
    if (width > 414) return 3;
    if (width >= 320) return 2;
  };

  const handleViewPostInstagram: any = (posts: PostInstagramProfile[]) => {
    return posts.slice(0, 10);
  };

  return (
    <motion.div className={Style.instagram} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <h3 className={Style.instagram__title}>{t("instagram title")}</h3>
      <motion.a
        className={Style.instagram__user}
        href="https://www.instagram.com/lobachevaphotography/"
        target="_blank"
        rel="noopener noreferrer"
        title="go to the profile of Alena Lobacheva in Instagram"
        variants={animationScaleAndOpacity}
        custom={1}
      >
        @lobachevaphotography
        <br />
      </motion.a>
      {error.instagram ? (
        <p>{error.instagram}</p>
      ) : (
        <Swiper
          grabCursor={true}
          freeMode={true}
          speed={5000}
          loop={true}
          slidesPerView={countIns()}
          spaceBetween={10}
          autoplay={{
            stopOnLastSlide: false,
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
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
          modules={[Autoplay, Navigation]}
          className={Style.instagram__swiper}
        >
          <ul className={Style.instagram__container}>
            {handleViewPostInstagram(instagramProfile).map((post: PostInstagramProfile) => {
              return (
                <SwiperSlide key={post.id}>
                  <PostComponent post={post} />
                </SwiperSlide>
              );
            })}
          </ul>
        </Swiper>
      )}
    </motion.div>
  );
};
