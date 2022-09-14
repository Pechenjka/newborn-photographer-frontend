import Styles from "./style.module.scss";
import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { MyTextField } from "../MyTextField";
import {createUser, handleIsRegister} from "../../redux/Reducers/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Link } from "react-router-dom";
import LogoMain from "../LogoMain/LogoMain";
import { validationSchemaRegister } from "../../validationForms";
import { PropsRegister } from "../../types";

export const Register: React.FC = () => {
  const dispatch = useAppDispatch();

  const { adminEmail, error, loading, isRegister, showError } = useAppSelector((state) => state.user);

  const initialValues: PropsRegister = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values: { name: string; email: string; password: string }): void => {
    const { name, email, password } = values;
    dispatch(createUser({ name, email, password, role: email === adminEmail ? "ADMIN" : "USER" }));
  };

  if (isRegister)
    return (
      <div className={Styles.confirmMessage}>
        <div className={Styles.confirmMessage__logo}>
          <LogoMain />
        </div>
        <h3 className={Styles.confirmMessage__title}>Вы успешно заполнили форму регистрации!</h3>
        <ul className={Styles.confirmMessage__container}>
          <li className={Styles.confirmMessage__text}>Ваша учетная запись создана, но еще не активирована!</li>
          <li className={Styles.confirmMessage__text}>
            На ваш Email указанный в форме регистрации - отправлено письмо, с дальнейшими инструкциями.
          </li>
          <li className={Styles.confirmMessage__text}>
            Чтобы завершить регистрацию, следуйте указаниям, содержащимися в письме!
          </li>
        </ul>
        <Link className={Styles.confirmMessage__backButton} to="/" onClick={() => dispatch(handleIsRegister(false))}>
          Вернуться на главную страницу
        </Link>
      </div>
    );

  return (
    <AuthForm
      titleAuthorization="Регистрация"
      textQuestion="Уже зарегестрированы?"
      textAnswer="Войти"
      pathOnAnotherAuthorization="/signin"
      initialValues={initialValues}
      validationSchema={validationSchemaRegister}
      textButton="Зарегестрироваться"
      handleSubmit={handleSubmit}
      error={error}
      loading={loading}
      showError={showError}
    >
      <MyTextField nameLabel="Имя" type="text" name="name" component="input" id="name" />
      <MyTextField nameLabel="Email" type="email" name="email" component="input" id="email" />
      <MyTextField
        nameLabel="Пароль"
        type="password"
        name="password"
        component="input"
        id="password"
        editStyleField="password"
      />
      <MyTextField
        nameLabel="Подтверждение пароля"
        type="password"
        name="confirmPassword"
        component="input"
        id="confirmPassword"
        editStyleField="password"
      />
    </AuthForm>
  );
};
