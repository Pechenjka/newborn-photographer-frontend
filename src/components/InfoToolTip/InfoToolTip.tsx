import "./InfoToolTip.scss";
import React from "react";
import { useAppSelector } from "../../redux/hooks";

export interface PropsInfoToolTip {
  text: string;
}

const InfoToolTip: React.FC<PropsInfoToolTip> = ({ text }) => {
  const { errorSendEmail } = useAppSelector((state) => state.app);
  return (
    <div className={`infoToolTip ${errorSendEmail && "infoToolTip__error"}`}>
      <p className={`infoToolTip__text ${errorSendEmail && "infoToolTip__text_error"}`}>{text}</p>
    </div>
  );
};
export default InfoToolTip;
