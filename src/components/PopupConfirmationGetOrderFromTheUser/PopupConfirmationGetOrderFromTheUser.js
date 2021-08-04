import MessageToTheUser from "../MessageToTheUser/MessageToTheUser";
import { closePopupConfirmationOfTheOrder } from "../../redux/Actions/userAction";
import { useDispatch, useSelector } from "react-redux";

function PopupConfirmationGetOrderFromTheUser() {
  const dispatch = useDispatch();
  const popupConfirmationOfTheOrder = useSelector((state) => state.user.popupConfirmationOfTheOrder);

  const handleClosePopup = () => {
    dispatch(closePopupConfirmationOfTheOrder());
  };

  return (
    <MessageToTheUser
      title="Ваша заявка успешно доставлена"
      openPopup={popupConfirmationOfTheOrder}
      onClose={handleClosePopup}
    />
  );
}

export default PopupConfirmationGetOrderFromTheUser;
