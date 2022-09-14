import React from "react";
import Styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { PropsAdminContainer } from "../../../../types";

export const AdminContainer: React.FC<PropsAdminContainer> = ({ children, title, linkBack }) => {
  return (
    <div className={Styles.adminContainer}>
      <Link className={Styles.adminContainer__linkBack} to={linkBack.link}>
        {linkBack.title}
      </Link>
      <h3 className={Styles.adminContainer__title}>{title}</h3>
      {children}
    </div>
  );
};
