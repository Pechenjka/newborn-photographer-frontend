import Popup from "../Popup/Popup";
import { useDispatch, useSelector } from "react-redux";
import OrderPhotoSessionForm from "../OrderPhotoSessionForm/OrderPhotoSessionForm";
import useFormWithValidation from "../../hooks/useForm";
import { handlerDataOrder, handlerModalOrder, sendOrder } from "../../redux/Reducers/appSlice";

const PopupOrderPhotoSession = () => {
  const dispatch = useDispatch();
  const { dataOrder, openModalOrder } = useSelector((state) => state.app);
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

  const handleCloseOrderPhotoSessionPopup = () => {
    dispatch(handlerModalOrder(false));
    dispatch(handlerDataOrder(null));
    resetForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(sendOrder({ data: [values, dataOrder] }));
    // dispatch(handleSendOrder(handleCloseOrderPhotoSessionPopup, resetForm, [values, dataOrder]));
  };
  return (
    <Popup onClick={handleCloseOrderPhotoSessionPopup} openPopup={openModalOrder}>
      {openModalOrder && (
        <OrderPhotoSessionForm
          values={values}
          errors={errors}
          handleChange={handleChange}
          onSubmit={handleSubmit}
          isValid={isValid}
          resetForm={resetForm}
          onClose={handleCloseOrderPhotoSessionPopup}
          dataOrder={dataOrder}
        />
      )}
    </Popup>
  );
};

export default PopupOrderPhotoSession;
