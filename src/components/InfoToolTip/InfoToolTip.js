import "./InfoToolTip.scss";

import { useSelector } from "react-redux";

const InfoToolTip = ({ text }) => {
  const subscriptionError = useSelector((state) => state.user.subscriptionError);
  return (
    <div className={`infoToolTip ${subscriptionError && "infoToolTip__error"}`}>
      <p className={`infoToolTip__text ${subscriptionError && "infoToolTip__text_error"}`}>{text}</p>
    </div>
  );
};
export default InfoToolTip;
