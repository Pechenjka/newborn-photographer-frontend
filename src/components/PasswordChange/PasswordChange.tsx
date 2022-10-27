import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { MyTextField } from "../MyTextField";
import * as Yup from "yup";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import { passwordChange } from "../../redux/Reducers/userSlice";

export const PasswordChange: React.FC = () => {
  const {user} = useAppSelector(state => state.user)
  const dispatch = useAppDispatch();
  const validationSchemaPasswordChange = Yup.object().shape({
    newPassword: Yup.string()
      .min(8, "Минимальное кол-во символов 8")
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z]{8,}/,
        "Пароль должен состоять из цифр, строчных и заглавных латинских букв"
      )
      .required("Поле 'Пароль' обязательное к заполнению"),
    newPasswordConfirm: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Пароли не совпадают")
      .required("Поле 'Подтверждение пароля' обязательное к заполнению"),
  });

  const initialValues = {
    newPassword: "",
    newPasswordConfirm: "",
  };

  const handlerSubmit = (values: { newPassword: string }): void => {
    dispatch(passwordChange(values));
  };

  return (
    <AuthForm
      titleAuthorization="Введите новый пароль"
      initialValues={initialValues}
      validationSchema={validationSchemaPasswordChange}
      textButton="Изменить пароль"
      handleSubmit={handlerSubmit}
      error={""}
      loading={false}
      showError={false}
      showLinkForgotPassword={false}
      textQuestion="У меня есть пароль?"
      textAnswer="Войти"
      pathOnAnotherAuthorization="/signin"
    >
      <MyTextField nameLabel="Новый пароль" type="password" name="newPassword" component="input" id="newPassword" />
      <MyTextField
        nameLabel="Подтвердить новый пароль"
        type="password"
        name="newPasswordConfirm"
        component="input"
        id="newPasswordConfirm"
      />
    </AuthForm>
  );
};
