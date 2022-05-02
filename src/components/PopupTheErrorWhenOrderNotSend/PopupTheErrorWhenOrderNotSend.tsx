import React from "react";
import MessageToTheUser from "../MessageToTheUser/MessageToTheUser";
import iconError from "../../images/icon-error.png";
import { handlerModalNotSendOrder } from "../../redux/Reducers/appSlice";
import Popup from "../Popup/Popup";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const PopupTheErrorWhenOderNotSend: React.FC = () => {
  const dispatch = useAppDispatch();
  const { openModalNotSendOrder } = useAppSelector((state) => state.app);

  const handleClosePopup = (): void => {
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
