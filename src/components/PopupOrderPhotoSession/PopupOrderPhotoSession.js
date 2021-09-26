import Popup from "../Popup/Popup";
import { useDispatch, useSelector } from "react-redux";
import {
  closeOrderPhotoSessionPopup,
  dataOrder,
  handleSendOrder,
} from "../../redux/Actions/userAction";

import OrderPhotoSessionForm from "../OrderPhotoSessionForm/OrderPhotoSessionForm";
import useFormWithValidation from "../../hooks/useForm";


function PopupOrderPhotoSession() {
  const dispatch = useDispatch();
  const orderPhotoSessionPopup = useSelector((state) => state.photos.orderPhotoSessionPopup);
  const dataOrderUser = useSelector((state) => state.photos.dataOrder);


  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

  const handleCloseOrderPhotoSessionPopup = () => {
    dispatch(closeOrderPhotoSessionPopup());
    dispatch(dataOrder([]));
    resetForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(handleSendOrder(handleCloseOrderPhotoSessionPopup, resetForm,[values, dataOrderUser]));
  };
  return (
    <Popup onClick={handleCloseOrderPhotoSessionPopup} openPopup={orderPhotoSessionPopup}>
      <OrderPhotoSessionForm
        values={values}
        errors={errors}
        handleChange={handleChange}
        onSubmit={handleSubmit}
        isValid={isValid}
        resetForm={resetForm}
        onClose={handleCloseOrderPhotoSessionPopup}
        dataOrderUser={dataOrderUser}
      />
    </Popup>
  );
}

export default PopupOrderPhotoSession;
