import React from "react";
import MessageToTheUser from "../MessageToTheUser/MessageToTheUser";
import iconError from "../../images/icon-error.png";
import Popup from "../Popup/Popup";
import { handlerModalErrorGetInTouch } from "../../redux/Reducers/appSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const PopupTheErrorWhenMessageNotSend: React.FC = () => {
  const dispatch = useAppDispatch();
  const { openModalErrorGetInTouch } = useAppSelector((state) => state.app);

  const handleClosePopup = (): void => {
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
