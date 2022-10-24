import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { MyTextField } from "../MyTextField";
import * as Yup from "yup";
import { useAppDispatch } from "../../redux/hooks";
import { sendEmailForPasswordRecovery } from "../../redux/Reducers/userSlice";

export const SendOnEmailActivateLink: React.FC = () => {
  const dispatch = useAppDispatch();

  const validationSchemaEmail = Yup.object().shape({
    email: Yup.string()
      .min(2, "Минимальное кол-во символов 2")
      .max(50, "Максимальное кол-во символов 50")
      .email('"Email" не корректный')
      .required("Поле 'Email' обязательное к заполнению"),
  });

  const initialValues: { email: string } = {
    email: "",
  };

  const handleSubmit = (email: string) => {
    dispatch(sendEmailForPasswordRecovery({ email }));
  };

  return (
    <AuthForm
      titleAuthorization="Восстановление пароля"
      initialValues={initialValues}
      validationSchema={validationSchemaEmail}
      textQuestion="У меня есть пароль."
      textAnswer="Войти"
      pathOnAnotherAuthorization="/signin"
      textButton="Отправаить"
      handleSubmit={handleSubmit}
      error=""
      loading={false}
      showError={false}
      showLinkForgotPassword={false}
    >
      <MyTextField nameLabel="Email" type="email" name="email" component="input" id="email" />
    </AuthForm>
  );
};

