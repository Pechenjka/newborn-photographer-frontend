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
      <h2 className="contactMeForm__title">{title}</h2>
      <ShowInfoToolTip
        error={errorGetInTouch}
        textErrorMessage='Error, your message has not been sent, please try again later'
        textConfirmMessage='Your message has been sent! We will connect with you is nearest time'
        confirmation={confirmationGetInTouch}
      />
      <FormikFormComponent
        initialValues={initialValues}
        validationSchema={validationSchemaContactWithMe}
        onSubmit={handlerSubmitGetInTouch}
        buttonProps={{
          title: 'Send message',
          style: "ping",
          onDirty: false,
          edit: true,
          editStyle: "contactMeButton",
        }}
        loading={loading.sendMessageGetInTouch}
      >
        <MyTextField nameLabel='Name' type="text" name="name" component="input" id="name" />
        <MyTextField nameLabel='Email' type="email" name="email" component="input" id="email" />
        <MyTextField nameLabel='Phone' type="phone" name="phone" component="input" id="phone" />
        <MyTextField nameLabel='Your message' type="text" name="text" component="textarea" id="text" />
      </FormikFormComponent>
    </div>
  );
};

export default ContactMeForm;
