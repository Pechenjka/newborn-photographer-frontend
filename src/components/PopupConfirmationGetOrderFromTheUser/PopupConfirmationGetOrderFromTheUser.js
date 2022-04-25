import MessageToTheUser from "../MessageToTheUser/MessageToTheUser";
import { useDispatch, useSelector } from "react-redux";
import { handlerDataOrder, handlerModalConfirmationOrder, handlerModalOrder } from "../../redux/Reducers/appSlice";
import Popup from "../Popup/Popup";

const PopupConfirmationGetOrderFromTheUser = () => {
  const dispatch = useDispatch();
  const { openModalConfirmationOrder } = useSelector((state) => state.app);

  const handleClosePopup = () => {
    dispatch(handlerModalConfirmationOrder(false));
    dispatch(handlerModalOrder(false));
    dispatch(handlerDataOrder(null));
  };

  return (
    openModalConfirmationOrder && (
      <Popup openPopup={openModalConfirmationOrder}>
        <MessageToTheUser title="Ваша заявка успешно отправлена" onClose={handleClosePopup} />
      </Popup>
    )
  );
};

export default PopupConfirmationGetOrderFromTheUser;
