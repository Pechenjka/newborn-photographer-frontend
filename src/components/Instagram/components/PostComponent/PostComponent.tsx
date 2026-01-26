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
    <div className={Style.instagramPost__container}>
      {/*{post.media_type === "VIDEO" ? (*/}
      {/*  <video className={Style.instagramPost__urlVideo} src={post.media_url} />*/}
      {/*) : (*/}
        <img className={Style.instagramPost__urlImage} src={post.media_url} />
      {/*)}*/}
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
    </div>
  );
};
