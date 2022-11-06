import React from "react";
import Styles from "./style.module.scss";
import { VideoComponent } from "../../../../components/VideoComponent";

export const AboutNewborn: React.FC = () => {
  return (
    <div className={Styles.aboutNewborn}>
      <VideoComponent
        link="https://storage.yandexcloud.net/newborn-photographer-alena-lobacheva/video/interview.mp4"
        title="О фотосессии новорожденного"
        poster="https://storage.yandexcloud.net/newborn-photographer-alena-lobacheva/video/Cover-for-interview.png"
      />
    </div>
  );
};
