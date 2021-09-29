import MessageToTheUser from "../MessageToTheUser/MessageToTheUser";
import { useDispatch, useSelector } from "react-redux";
import { closePopupTheErrorWhenMessageNotSend } from "../../redux/Actions/userAction";
import iconError from "../../images/icon-error.png";

const PopupTheErrorWhenMessageNotSend = () => {
  const dispatch = useDispatch();
  const popupTheErrorWhenMessageNotSend = useSelector((state) => state.user.popupTheErrorWhenMessageNotSend);

  const handleClosePopup = () => {
    dispatch(closePopupTheErrorWhenMessageNotSend());
  };

  return (
    <MessageToTheUser
      title={"Сообщение не доставлено!"}
      text={"На сервере произошла ошибка или возможны проблемы с интернет-соединением"}
      icon={iconError}
      onClose={handleClosePopup}
      openPopup={popupTheErrorWhenMessageNotSend}
    />
  );
};

export default PopupTheErrorWhenMessageNotSend;
