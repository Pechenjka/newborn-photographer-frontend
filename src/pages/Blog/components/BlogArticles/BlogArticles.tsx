import React from "react";
import Styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../redux/hooks";
import { IBlogArticle } from "../../../../types";
import { CreatedAtArticle } from "../CreatedAtArticle/createdAtArticle";

export const BlogArticles: React.FC = () => {
  const { blogArticles } = useAppSelector((state) => state.blog);
  return (
    <div className={Styles.blogArticle}>
      {blogArticles.map((article: IBlogArticle) => {
        return (
          <ul className={Styles.blogArticle__article} key={article.title}>
            <Link
              to={`/blog/${article.url}`}
              className={Styles.blogArticle__articleLink}
              title={`Read about the ${article.title}`}
            >
              <li className={Styles.blogArticle__articleImageContainer}>
                <img
                  className={Styles.blogArticle__articleImage}
                  src={article.imagePrev}
                  alt={`image ${article.title}`}
                />
              </li>
              <li>
                <p className={Styles.blogArticle__articleType}>{article.typePhotoSession}</p>
              </li>
              <li>
                <div className={Styles.blogArticle__containerDescription}>
                  <h2 className={Styles.blogArticle__title}>{article.title}</h2>
                  <div className={Styles.blogArticle__timeCreate}>
                    <span className={Styles.blogArticle__titleUnderLine} />
                    <CreatedAtArticle createdAt={article.createdAt} />
                  </div>
                </div>
              </li>
            </Link>
          </ul>
        );
      })}
    </div>
  );
};
