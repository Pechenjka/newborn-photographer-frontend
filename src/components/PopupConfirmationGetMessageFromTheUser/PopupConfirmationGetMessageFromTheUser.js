import MessageToTheUser from "../MessageToTheUser/MessageToTheUser";
import { closePopupConfirmationGetLetterFromTheUser } from "../../redux/Actions/userAction";
import { useDispatch, useSelector } from "react-redux";

function PopupConfirmationGetMessageFromTheUser() {
  const dispatch = useDispatch();
  const popupConfirmationGetLetterFromTheUser = useSelector(
    (state) => state.user.popupConfirmationGetLetterFromTheUser
  );

  const handleClosePopup = () => {
    dispatch(closePopupConfirmationGetLetterFromTheUser());
  };

  return (
    <MessageToTheUser
      title="Ваше письмо успешно доставлено"
      onClose={handleClosePopup}
      openPopup={popupConfirmationGetLetterFromTheUser}
    />
  );
}

export default PopupConfirmationGetMessageFromTheUser;
