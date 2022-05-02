import React from "react";
import MessageToTheUser from "../MessageToTheUser/MessageToTheUser";
import iconChecked from "../../images/icon-checked.svg";
import Popup from "../Popup/Popup";
import { handlerModalConfirmationGetInTouch } from "../../redux/Reducers/appSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const PopupConfirmationGetMessageFromTheUser: React.FC = () => {
  const dispatch = useAppDispatch();
  const { openModalConfirmationGetInTouch } = useAppSelector((state) => state.app);

  const handleClosePopup = (): void => {
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
