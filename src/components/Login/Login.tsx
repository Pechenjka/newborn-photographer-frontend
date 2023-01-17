import React, { useEffect } from "react";
import AuthForm from "../AuthForm/AuthForm";
import { MyTextField } from "../MyTextField";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { login } from "../../redux/Reducers/userSlice";
import { useNavigate } from "react-router-dom";
import { useDisabledScroll } from "../../hooks/useDisabledScroll";
import { validationSchemaLogin } from "../../validationForms";
import { ILoginUser, PropsLogin } from "../../types";

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { handlerDisabledScroll } = useDisabledScroll;
  const { error, loading, showError } = useAppSelector((state) => state.user);

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

  // console.log(error, loading)

  return (
    <AuthForm
      titleAuthorization="Войти в личный кабинет"
      textQuestion="Ещё не зарегистрированы?"
      textAnswer="Зарегестрироваться"
      pathOnAnotherAuthorization="/signup"
      initialValues={initialValues}
      validationSchema={validationSchemaLogin}
      textButton="Войти"
      handleSubmit={handleSubmit}
      error={error}
      loading={loading.login}
      showError={showError}
    >
      <MyTextField nameLabel="Email" type="email" name="email" component="input" id="email" />
      <MyTextField
        nameLabel="Пароль"
        type="password"
        name="password"
        component="input"
        id="password"
        editStyleField="password"
      />
    </AuthForm>
  );
};
