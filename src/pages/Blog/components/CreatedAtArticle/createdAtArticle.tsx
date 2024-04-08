import React from "react";
import Styles from "./style.module.scss";

export interface PropsCreatedAtArticle {
  createdAt: string;
}

export const CreatedAtArticle: React.FC<PropsCreatedAtArticle> = ({ createdAt }) => {
  const createdAtString: string = createdAt;
  const createdAtDate = new Date(createdAtString);

  return (
    <p className={Styles.createdAt}>{`${
      createdAtDate.toLocaleString("default", { month: "long" }) +
      " " +
      createdAtDate.getDate() +
      ", " +
      createdAtDate.getFullYear()
    }`}</p>
  );
};
