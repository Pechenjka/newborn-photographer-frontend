import Styles from "./style.module.scss";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import LogoMain from "../LogoMain/LogoMain";
import { Button } from "../Button";
import { PropsAuthForm } from "../../types";
import Spinner from "../Spinner/Spinner";
import InfoToolTip from "../InfoToolTip/InfoToolTip";
import { useAppDispatch } from "../../redux/hooks";
import { handlerError } from "../../redux/Reducers/userSlice";

const AuthForm: React.FC<PropsAuthForm> = ({
  titleAuthorization,
  textQuestion,
  textAnswer,
  pathOnAnotherAuthorization,
  children,
  initialValues,
  validationSchema,
  textButton,
  handleSubmit,
  error,
  loading,
  showError,
}) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      if (showError) {
        dispatch(handlerError(false));
      }
    }, 5000);
  }, [showError, dispatch]);

  return (
    <div className={Styles.auth}>
      <div className={Styles.auth__logo}>
        <LogoMain />
      </div>
      <h3 className={Styles.auth__title}>{titleAuthorization}</h3>
      {showError && error && <InfoToolTip text={error} error />}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, action) => {
          handleSubmit(values);
          action.resetForm();
        }}
      >
        {(props) => {
          return (
            <Form style={{ width: "100%" }} onSubmit={props.handleSubmit}>
              {children}
              <Link className={Styles.auth__forgotPassword} to="#">
                Забыли пароль?
              </Link>
              <Button
                edit
                editStyle="authButton"
                styleButton="ping"
                type="submit"
                disabled={!props.isValid || !props.dirty}
              >
                {loading ? <Spinner /> : textButton}
              </Button>
            </Form>
          );
        }}
      </Formik>
      <p className={Styles.auth__question}>
        {textQuestion}
        <Link className={Styles.auth__question_linkToAnotherAuthorisation} to={pathOnAnotherAuthorization}>
          {textAnswer}
        </Link>
      </p>
      <Link className={Styles.auth__linkToMainPage} to="/">
        Вернуться на главную страницу
      </Link>
    </div>
  );
};
export default AuthForm;
