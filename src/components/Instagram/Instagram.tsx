import Style from "./style.module.scss";
import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { useTranslation } from "react-i18next";
import { animationScaleAndOpacity } from "../../helpers/framerMotion";
import { PostComponent } from "./components/PostComponent";
import { motion } from "framer-motion";
import { useWindowResize } from "../../hooks/useWindowResize";
import { PostInstagramProfile } from "../../types";

export const Instagram: React.FC = () => {
  const { error, instagramProfile } = useAppSelector((state) => state.app);
  const { t } = useTranslation();
  const { width } = useWindowResize();

  const handleViewPostInstagram: any = (posts: PostInstagramProfile[]) => {
    if (width > 1024) {
      return posts.slice(0, 5);
    }
    if (width >= 768) {
      return posts.slice(0, 4);
    }
    if (width > 414) {
      return posts.slice(0, 3);
    }
    if (width >= 320) {
      return posts.slice(0, 2);
    }
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
        <ul className={Style.instagram__container}>
          {handleViewPostInstagram(instagramProfile).map((post: PostInstagramProfile) => {
            return <PostComponent post={post} key={post.id} />;
          })}
        </ul>
      )}
    </motion.div>
  );
};
