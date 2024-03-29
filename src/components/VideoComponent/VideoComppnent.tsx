import React from "react";
import Styles from "./style.module.scss";

export interface PropsVideo {
  link: string;
  title?: string;
  poster?: string;
}

export const VideoComponent: React.FC<PropsVideo> = ({ link, title, poster }) => {
  return (
    <>
      <video
        className={Styles.videoComponent__video}
        src={link}
        controls
        controlsList="nodownload"
        title={title}
        width="100%"
        height='100%'
        poster={poster}
      />
    </>
  );
};
