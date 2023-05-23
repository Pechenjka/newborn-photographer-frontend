import React from "react";
import "./ContactMeForm.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IOrderFields, PropsContactMeForm } from "../../types";
import { FormikFormComponent } from "../FormikFormComponent";
import { sendMessageGetInTouch } from "../../redux/Reducers/appSlice";
import { MyTextField } from "../MyTextField";
import { validationSchemaContactWithMe } from "../../validationForms";
import { ShowInfoToolTip } from "../ShowInfoToolTip";
import { useTranslation } from "react-i18next";

const initialValues: IOrderFields = {
  name: "",
  email: "",
  phone: "",
  text: "",
};

const ContactMeForm: React.FC<PropsContactMeForm> = ({ title }) => {
  const dispatch = useAppDispatch();
  const { loading, confirmationGetInTouch, errorGetInTouch } = useAppSelector((state) => state.app);
  const { t } = useTranslation();

  const handlerSubmitGetInTouch = (values: { name: string; email: string; phone: string; text: string }): void => {
    dispatch(sendMessageGetInTouch({ data: values }));
  };

  return (
    <div className="contactMeForm">
      <h2 className="contactMeForm__title">{title}</h2>
      <ShowInfoToolTip
        error={errorGetInTouch}
        textErrorMessage={t("contactMeForm textErrorMessage")}
        textConfirmMessage={t("contactMeForm textConfirmMessage")}
        confirmation={confirmationGetInTouch}
      />
      <FormikFormComponent
        initialValues={initialValues}
        validationSchema={validationSchemaContactWithMe}
        onSubmit={handlerSubmitGetInTouch}
        buttonProps={{
          title: `${t("contactMeForm btn")}`,
          style: "ping",
          onDirty: false,
          edit: true,
          editStyle: "contactMeButton",
        }}
        loading={loading}
      >
        <MyTextField nameLabel={t("contactMeForm name")} type="text" name="name" component="input" id="name" />
        <MyTextField nameLabel={t("contactMeForm email")} type="email" name="email" component="input" id="email" />
        <MyTextField nameLabel={t("contactMeForm phone")} type="phone" name="phone" component="input" id="phone" />
        <MyTextField nameLabel={t("contactMeForm message")} type="text" name="text" component="textarea" id="text" />
      </FormikFormComponent>
    </div>
  );
};

export default ContactMeForm;
