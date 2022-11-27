import React from "react";
import Styles from "./style.module.scss";
import { VideoComponent } from "../../../../components/VideoComponent";
import coverOnTheInterview from '../../../../images/cover-for-interview.webp'

export const AboutNewborn: React.FC = () => {
  return (
    <div className={Styles.aboutNewborn} id='aboutNewborn'>
      <h2 className={Styles.aboutNewborn__title}>О фотосессии новорожденного</h2>
      <VideoComponent
        link="https://storage.yandexcloud.net/newborn-photographer-alena-lobacheva/video/interview.mp4"
        poster={coverOnTheInterview}
      />
    </div>
  );
};
