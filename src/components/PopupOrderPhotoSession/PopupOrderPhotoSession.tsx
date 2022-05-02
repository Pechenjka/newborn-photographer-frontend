import React, { useEffect } from "react";
import Popup from "../Popup/Popup";
import OrderPhotoSessionForm from "../OrderPhotoSessionForm/OrderPhotoSessionForm";
import useFormWithValidation from "../../hooks/useForm";
import { handlerDataOrder, handlerModalOrder, sendOrder } from "../../redux/Reducers/appSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const PopupOrderPhotoSession: React.FC = () => {
  const dispatch = useAppDispatch();
  const { dataOrder, openModalOrder, openModalConfirmationOrder } = useAppSelector((state) => state.app);
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

  const handleCloseOrderPhotoSessionPopup = (): void => {
    dispatch(handlerModalOrder(false));
    dispatch(handlerDataOrder({ type: "", title: "", price: "", location: "" }));
    resetForm();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(sendOrder({ data: {values, dataOrder} }));
  };

  useEffect(() => {
    openModalConfirmationOrder && resetForm();
  }, [openModalConfirmationOrder]);

  return (
    <Popup onClick={handleCloseOrderPhotoSessionPopup} openPopup={openModalOrder}>
      {openModalOrder && (
        <OrderPhotoSessionForm
          values={values}
          errors={errors}
          handleChange={handleChange}
          onSubmit={handleSubmit}
          isValid={isValid}
          onClose={handleCloseOrderPhotoSessionPopup}
          dataOrder={dataOrder}
        />
      )}
    </Popup>
  );
};

export default PopupOrderPhotoSession;
