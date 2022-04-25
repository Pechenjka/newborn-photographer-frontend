import MessageToTheUser from "../MessageToTheUser/MessageToTheUser";
import { useDispatch, useSelector } from "react-redux";
import iconError from "../../images/icon-error.png";
import { handlerModalNotSendOrder } from "../../redux/Reducers/appSlice";
import Popup from "../Popup/Popup";

const PopupTheErrorWhenOderNotSend = () => {
  const dispatch = useDispatch();
  const { openModalNotSendOrder } = useSelector((state) => state.app);

  const handleClosePopup = () => {
    dispatch(handlerModalNotSendOrder(false));
  };

  return (
    <Popup openPopup={openModalNotSendOrder}>
      {openModalNotSendOrder && (
        <MessageToTheUser
          title="Заказ не доставлен!"
          text="На сервере произошла ошибка или возможны проблемы с интернет-соединением"
          icon={iconError}
          onClose={handleClosePopup}
        />
      )}
    </Popup>
  );
};

export default PopupTheErrorWhenOderNotSend;
