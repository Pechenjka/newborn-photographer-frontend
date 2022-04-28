import MessageToTheUser from "../MessageToTheUser/MessageToTheUser";
import { useDispatch, useSelector } from "react-redux";
import iconError from "../../images/icon-error.png";
import Popup from "../Popup/Popup";
import { handlerModalErrorGetInTouch } from "../../redux/Reducers/appSlice";

const PopupTheErrorWhenMessageNotSend = () => {
  const dispatch = useDispatch();
  const { openModalErrorGetInTouch } = useSelector((state) => state.app);

  const handleClosePopup = () => {
    dispatch(handlerModalErrorGetInTouch(false));
  };

  return (
    <Popup openPopup={openModalErrorGetInTouch}>
      openModalErrorGetInTouch &&
      <MessageToTheUser
        title="Сообщение не доставлено!"
        text="На сервере произошла ошибка или возможны проблемы с интернет-соединением"
        icon={iconError}
        onClose={handleClosePopup}
      />
    </Popup>
  );
};

export default PopupTheErrorWhenMessageNotSend;
