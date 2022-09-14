import React from "react";
import Styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { ILinkListAdmin } from "../../../../types";

export const LinkList: React.FC<{ links: ILinkListAdmin[] }> = ({ links }) => {
  return (
    <ul className={Styles.linkList}>
      {links.map((item: ILinkListAdmin, index: number) => {
        return (
          <li className={Styles.linkList__linkContainer} key={index}>
            <Link className={Styles.linkList__link} to={item.path}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
