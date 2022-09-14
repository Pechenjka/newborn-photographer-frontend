import React from "react";
import Styles from "./style.module.scss";
import { PropsDataUser } from "../../../../types";

export const DataUser: React.FC<PropsDataUser> = ({ title, children }) => {
  return (
    <div className={Styles.dataUser__card}>
      <h3 className={Styles.dataUser__cardTitle}>{title}</h3>
      {children}
    </div>
  );
};
