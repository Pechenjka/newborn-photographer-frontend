import React from "react";
import Styles from "./style.module.scss";
import { Link } from "react-router-dom";

export interface BackLinkProp {
  linkName: string;
  path: any;
  onClick?: () => any;
}

export const BackLink: React.FC<BackLinkProp> = ({ linkName, path, onClick }) => {
  return (
    <Link className={Styles.backLink} to={path} title={linkName} onClick={onClick}>
      {linkName}
    </Link>
  );
};
