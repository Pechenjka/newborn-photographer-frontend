import MessageToTheUser from "../MessageToTheUser/MessageToTheUser";
import { useDispatch, useSelector } from "react-redux";
import iconChecked from "../../images/icon-checked.svg";
import Popup from "../Popup/Popup";
import { handlerModalConfirmationGetInTouch } from "../../redux/Reducers/appSlice";

const PopupConfirmationGetMessageFromTheUser = () => {
  const dispatch = useDispatch();
  const { openModalConfirmationGetInTouch } = useSelector((state) => state.app);

  const handleClosePopup = () => {
    dispatch(handlerModalConfirmationGetInTouch(false));
  };

  return (
    <Popup openPopup={openModalConfirmationGetInTouch}>
      openModalErrorGetInTouch &&
      <MessageToTheUser
        title="Ваше письмо успешно отправлено!"
        text="Мы свяжемся с вами в ближайшее время"
        icon={iconChecked}
        onClose={handleClosePopup}
      />
    </Popup>
  );
};

export default PopupConfirmationGetMessageFromTheUser;
