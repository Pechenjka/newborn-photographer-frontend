import MessageToTheUser from "../MessageToTheUser/MessageToTheUser";
import { closePopupConfirmationGetMessageFromTheUser } from "../../redux/Actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import iconChecked from "../../images/icon-checked.svg";

function PopupConfirmationGetMessageFromTheUser() {
  const dispatch = useDispatch();
  const popupConfirmationGetMessageFromTheUser = useSelector(
    (state) => state.user.popupConfirmationGetMessageFromTheUser
  );

  const handleClosePopup = () => {
    dispatch(closePopupConfirmationGetMessageFromTheUser());
  };

  return (
    <MessageToTheUser
      title="Ваше письмо успешно отправлено!"
      text="Мы свяжемся с вами в ближайшее время"
      icon={iconChecked}
      onClose={handleClosePopup}
      openPopup={popupConfirmationGetMessageFromTheUser}
    />
  );
}

export default PopupConfirmationGetMessageFromTheUser;
