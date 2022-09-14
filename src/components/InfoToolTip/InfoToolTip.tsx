import Styles from "./style.module.scss";
import React from "react";
import classNames from "classnames/bind";

export interface PropsInfoToolTip {
  text: string;
  error?: boolean;
  animation?: boolean;
}
const InfoToolTip: React.FC<PropsInfoToolTip> = ({ text, error = false, animation = false }) => {

  const cx = classNames.bind(Styles);
  const classNamesContainer = cx("infoToolTip", { infoToolTip_animation: animation }, { infoToolTip_error: error });
  const classNamesText = cx("infoToolTip__text", { infoToolTip__text_error: error });

  return (
    <div className={classNamesContainer}>
      <p className={classNamesText}>{text}</p>
    </div>
  );
};

export default InfoToolTip;
