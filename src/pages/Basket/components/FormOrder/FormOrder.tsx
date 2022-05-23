import Styles from "./style.module.scss";
import React, { Fragment } from "react";
import { Formik } from "formik";
import { IOrderFields } from "../../../../types";
import MyTextField from "../../../Admin/MyTextField/MyTextField";
import Button from "../../../../components/Button/Button";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { sendOrder } from "../../../../redux/Reducers/appSlice";
import { useHistory } from "react-router-dom";
import { handlerDeletePacketFromBasket } from "../../../../redux/Reducers/packetSlice";

const validationPacketSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Минимальное кол-во символов 2")
    .max(50, "Максимальное кол-во символов 50")
    .required("Поле 'Имя' обязательное к заполнению"),
  email: Yup.string()
    .min(2, "Минимальное кол-во символов 2")
    .max(50, "Максимальное кол-во символов 50")
    .email('"Email" не корректный')
    .required("Поле 'Email' обязательное к заполнению"),
  tel: Yup.string()
    .required("Поле 'Телефон' обязательное к заполнению")
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/,
      "Введите корректный номер талефона"
    ),
  text: Yup.string().min(2, "Минимальное кол-во символов 2").max(250, "Максимальное кол-во символов 250"),
});

const FormOrder: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const { packetInBasket } = useAppSelector((state) => state.packets);
  const initialValues: IOrderFields = {
    name: "",
    email: "",
    tel: "",
    text: "",
  };

  return (
    <Fragment>
      <h3 className={Styles.formOrder__formTitle}>Для оформления заказа, заполните форму</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationPacketSchema}
        onSubmit={(values, action) => {
          dispatch(sendOrder({ values, packetInBasket }));
          dispatch(handlerDeletePacketFromBasket(null));
          history.push("/");
          action.resetForm();
          console.log(values, packetInBasket);
        }}
      >
        {(props) => (
          <form className={Styles.formOrder} onSubmit={props.handleSubmit}>
            <MyTextField
              nameLabel="Имя"
              type="text"
              name="name"
              component="input"
              id="name"
              editStyleContainer="nameOrder"
              editStyleField="nameOrder"
            />
            <MyTextField
              nameLabel="Email"
              type="email"
              name="email"
              component="input"
              id="email"
              editStyleContainer="emailOrder"
              editStyleField="emailOrder"
            />
            <MyTextField
              nameLabel="Телефон"
              type="phone"
              name="tel"
              component="input"
              id="tel"
              editStyleContainer="telOrder"
              editStyleField="telOrder"
            />
            <MyTextField
              nameLabel="Сообщение"
              type="text"
              name="text"
              component="textarea"
              id="text"
              editStyleContainer="textOrder"
              editStyleField="textOrder"
            />
            <Button styleButton="ping" editStyle="buttonSubmitOrder" edit type="submit">
              Оформленить заказ
            </Button>
          </form>
        )}
      </Formik>
    </Fragment>
  );
};

export default FormOrder;
