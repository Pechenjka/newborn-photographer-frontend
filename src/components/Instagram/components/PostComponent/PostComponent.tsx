import Style from "./style.module.scss";
import React from "react";
import { PostInstagramProfile } from "../../../../types";
import { useWindowResize } from "../../../../hooks/useWindowResize";

export interface PropsPostComponent {
  post: PostInstagramProfile;
}

export const PostComponent: React.FC<PropsPostComponent> = ({ post }) => {
  const { width } = useWindowResize();

  return (
    <li className={Style.instagramPost__container}>
      <img className={Style.instagramPost__urlImage} src={post.media_url} alt="instagram post" />
      <a
        className={Style.instagramPost__overlay}
        href={post.permalink}
        target="_blank"
        rel="noopener noreferrer"
        title={`${post.caption}`}
      >
        <div className={Style.instagramPost__overlayIcon} />
        {width > 767 && <p className={Style.instagramPost__caption}>{post.username}</p>}
      </a>
    </li>
  );
};
