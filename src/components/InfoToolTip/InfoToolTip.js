import "./InfoToolTip.scss";

import { useSelector } from "react-redux";

const InfoToolTip = ({ text }) => {
  const { errorSendEmail } = useSelector((state) => state.app);
  return (
    <div className={`infoToolTip ${errorSendEmail && "infoToolTip__error"}`}>
      <p className={`infoToolTip__text ${errorSendEmail && "infoToolTip__text_error"}`}>{text}</p>
    </div>
  );
};
export default InfoToolTip;
