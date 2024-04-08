import React from "react";
import Styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { useWindowResize } from "../../../../hooks/useWindowResize";
import classNames from "classnames/bind";

export interface PropsSessionArticle {
  article: {
    title: string;
    description: string;
    imgLink: string;
    imgLinkMobile: string;
    imgLinkMobile1: string
    nameLink: string;
    path: string;
    link: string;
    gradientDirection: string;
  };
}

export const SessionArticle: React.FC<PropsSessionArticle> = ({ article }) => {
  const { width } = useWindowResize();

  const cx = classNames.bind(Styles);
  const gradientStyle = cx("sessionArticle__coverImage", `sessionArticle__coverImage-${article.gradientDirection}` );
  const textContainer = cx("sessionArticle__containerText", `sessionArticle__containerText-${article.gradientDirection}` );

  return (
    <article className={Styles.sessionArticle}>
      <div className={Styles.sessionArticle__container}>
        <div className={gradientStyle} />
        <img
          src={width > 768 ? article.imgLink : (width > 458 ? article.imgLinkMobile : article.imgLinkMobile1)}
          alt={article.title}
          className={Styles.sessionArticle__image}
        />
        <div className={textContainer}>
          <h2 className={Styles.sessionArticle__title}>{article.title}</h2>
          <p className={Styles.sessionArticle__description}>{article.description}</p>
          <Link to={article.path} className={Styles.sessionArticle__link}>
            {article.link}
          </Link>
        </div>
      </div>
    </article>
  );
};
