import React from "react";
import "./ContactMeForm.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IOrderFields, PropsContactMeForm } from "../../types";
import { FormikFormComponent } from "../FormikFormComponent";
import { sendMessageGetInTouch } from "../../redux/Reducers/appSlice";
import { MyTextField } from "../MyTextField";
import { validationSchemaContactWithMe } from "../../validationForms";
import { ShowInfoToolTip } from "../ShowInfoToolTip";

const initialValues: IOrderFields = {
  name: "",
  email: "",
  phone: "",
  text: "",
};

const ContactMeForm: React.FC<PropsContactMeForm> = ({ title }) => {
  const dispatch = useAppDispatch();
  const { loading, confirmationGetInTouch, errorGetInTouch } = useAppSelector((state) => state.app);

  const handlerSubmitGetInTouch = (values: { name: string; email: string; phone: string; text: string }): void => {
    dispatch(sendMessageGetInTouch({ data: values }));
  };

  return (
    <div className="contactMeForm">
      <h3 className="contactMeForm__title">{title}</h3>
      <ShowInfoToolTip
        error={errorGetInTouch}
        textErrorMessage="Ошибка, отправить сообщение не получилось, попробуйте позже"
        textConfirmMessage="Ваше письмо успешно отправлено!, Мы свяжемся с вами в ближайшее время"
        confirmation={confirmationGetInTouch}
      />
      <FormikFormComponent
        initialValues={initialValues}
        validationSchema={validationSchemaContactWithMe}
        onSubmit={handlerSubmitGetInTouch}
        buttonProps={{
          title: "Отправить сообщение",
          style: "ping",
          onDirty: true,
          edit: true,
          editStyle: "contactMeButton",
        }}
        loading={loading}
      >
        <MyTextField nameLabel="Имя" type="text" name="name" component="input" id="name" />
        <MyTextField nameLabel="Email" type="email" name="email" component="input" id="email" />
        <MyTextField nameLabel="Телефон" type="phone" name="phone" component="input" id="phone" />
        <MyTextField nameLabel="Сообщение" type="text" name="text" component="textarea" id="text" />
      </FormikFormComponent>
    </div>
  );
};

export default ContactMeForm;
