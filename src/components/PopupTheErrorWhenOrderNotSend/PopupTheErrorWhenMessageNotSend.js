import MessageToTheUser from "../MessageToTheUser/MessageToTheUser";
import { useDispatch, useSelector } from "react-redux";
import iconError from "../../images/icon-error.png";
import { closePopupTheErrorWhenOderNotSend } from "../../redux/Actions/userAction";

const PopupTheErrorWhenOderNotSend = () => {
  const dispatch = useDispatch();
  const popupTheErrorWhenOrderNotSend = useSelector((state) => state.user.popupTheErrorWhenOrderNotSend);

  const handleClosePopup = () => {
    dispatch(closePopupTheErrorWhenOderNotSend());
  };

  return (
    <MessageToTheUser
      title={"Заказ не доставлен!"}
      text={"На сервере произошла ошибка или возможны проблемы с интернет-соединением"}
      icon={iconError}
      openPopup={popupTheErrorWhenOrderNotSend}
      onClose={handleClosePopup}
    />
  );
};

export default PopupTheErrorWhenOderNotSend;
