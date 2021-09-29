import MessageToTheUser from "../MessageToTheUser/MessageToTheUser";
import {
  closeOrderPhotoSessionPopup,
  closePopupConfirmationOfTheOrder,
  dataOrder,
} from "../../redux/Actions/userAction";
import { useDispatch, useSelector } from "react-redux";

function PopupConfirmationGetOrderFromTheUser() {
  const dispatch = useDispatch();
  const popupConfirmationOfTheOrder = useSelector((state) => state.user.popupConfirmationOfTheOrder);

  const handleClosePopup = () => {
    dispatch(closePopupConfirmationOfTheOrder());
    dispatch(closeOrderPhotoSessionPopup());
    dispatch(dataOrder([]));
  };

  return (
    <MessageToTheUser
      title="Ваша заявка успешно отправлена"
      openPopup={popupConfirmationOfTheOrder}
      onClose={handleClosePopup}
    />
  );
}

export default PopupConfirmationGetOrderFromTheUser;
