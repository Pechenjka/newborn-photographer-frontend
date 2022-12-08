import React from "react";
import Styles from "./style.module.scss";
import { VideoComponent } from "../../../../components/VideoComponent";

export const AboutNewborn: React.FC = () => {
  return (
    <div className={Styles.aboutNewborn} id='aboutNewborn'>
      <h2 className={Styles.aboutNewborn__title}>О фотосессии новорожденного</h2>
      <VideoComponent
        link="https://storage.yandexcloud.net/newborn-photographer-alena-lobacheva/video/interview.mp4"
        poster='https://storage.yandexcloud.net/newborn-photographer-alena-lobacheva/video/cover-for-interview.webp'
      />
    </div>
  );
};
