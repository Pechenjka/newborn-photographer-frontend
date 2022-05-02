import React from "react";
import MessageToTheUser from "../MessageToTheUser/MessageToTheUser";
import { handlerDataOrder, handlerModalConfirmationOrder, handlerModalOrder } from "../../redux/Reducers/appSlice";
import Popup from "../Popup/Popup";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const PopupConfirmationGetOrderFromTheUser: React.FC = () => {
  const dispatch = useAppDispatch();
  const { openModalConfirmationOrder } = useAppSelector((state) => state.app);

  const handleClosePopup = (): void => {
    dispatch(handlerModalConfirmationOrder(false));
    dispatch(handlerModalOrder(false));
    dispatch(handlerDataOrder({ type: "", title: "", price: "", location: "" }));

  };

  return (
    <Popup openPopup={openModalConfirmationOrder}>
      openModalConfirmationOrder && (
      <MessageToTheUser title="Ваша заявка успешно отправлена" onClose={handleClosePopup} />)
    </Popup>
  );
};

export default PopupConfirmationGetOrderFromTheUser;
