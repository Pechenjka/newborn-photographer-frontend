import React, { useEffect } from "react";
import AuthForm from "../AuthForm/AuthForm";
import { MyTextField } from "../MyTextField";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { login } from "../../redux/Reducers/userSlice";
import { useNavigate } from "react-router-dom";
import { useDisabledScroll } from "../../hooks/useDisabledScroll";
import { validationSchemaLogin } from "../../validationForms";
import { ILoginUser, PropsLogin } from "../../types";
import { useTranslation } from "react-i18next";

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { handlerDisabledScroll } = useDisabledScroll;
  const { error, loading, showError } = useAppSelector((state) => state.user);
  const { t } = useTranslation();

  useEffect(() => {
    handlerDisabledScroll(false);
  }, []);

  const initialValues: PropsLogin = {
    email: "",
    password: "",
  };

  const handleSubmit = (data: ILoginUser) => {
    dispatch(login({ ...data, navigate }));
  };

  return (
    <AuthForm
      titleAuthorization={t("login_title")}
      // textQuestion="Ещё не зарегистрированы?"
      // textAnswer="Зарегестрироваться"
      // pathOnAnotherAuthorization="/signup"
      initialValues={initialValues}
      validationSchema={validationSchemaLogin}
      textButton={t("login_submit_button")}
      handleSubmit={handleSubmit}
      error={error}
      loading={loading.login}
      showError={showError}
      showLinkForgotPassword={false}
    >
      <MyTextField nameLabel="Email" type="email" name="email" component="input" id="email" />
      <MyTextField
        nameLabel="Password"
        type="password"
        name="password"
        component="input"
        id="password"
        editStyleField="password"
      />
    </AuthForm>
  );
};
