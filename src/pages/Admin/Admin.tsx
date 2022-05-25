import Styles from "./style.module.scss";
import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import MyTextField from "./MyTextField/MyTextField";
import { IPacket } from "../../types";
import { useAppDispatch } from "../../redux/hooks";
import { createPacket } from "../../redux/Reducers/packetSlice";

const validationPacketSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Минимальное кол-во символов 2")
    .max(50, "Максимальное кол-во символов 50")
    .required("Поле обязательное к заполнению"),
  packet: Yup.string()
    .min(2, "Минимальное кол-во символов 2")
    .max(50, "Максимальное кол-во символов 50")
    .required("Поле обязательное к заполнению"),
  duration: Yup.string()
    .required("Поле обязательное к заполнению")
    .matches(/[0-9\-]/, "Разрешенные символы к вводу '0-9, -'"),
  price: Yup.string()
    .min(2, "Минимальное кол-во символов 2")
    .required("Поле обязательное к заполнению")
    .matches(/[0-9]/, "Ввведите число"),
  getFromPhotosession: Yup.string().min(2, "Минимальное кол-во символов 2").required("Поле обязательное к заполнению"),
  description: Yup.string().min(2, "Минимальное кол-во символов 2").required("Поле обязательное к заполнению"),
  shortDescription: Yup.string()
    .min(2, "Минимальное кол-во символов 2")
    .max(250, "Максимальное кол-во символов 250")
    .required("Поле обязательное к заполнению"),
  countLocations: Yup.string().required("Поле обязательное к заполнению"),
  // .matches(/[0-9\-]/, "Разрешенные символы к вводу '0-9, -'"),
  image: Yup.string().min(2, "Минимальное кол-во символов 2").required("Поле обязательное к заполнению"),
  imageDescription: Yup.string().min(2, "Минимальное кол-во символов 2").required("Поле обязательное к заполнению"),
});

const Admin: React.FC = () => {
  const dispatch = useAppDispatch();
  const initialValues: IPacket = {
    title: "",
    packet: "",
    duration: "",
    price: "",
    description: "",
    shortDescription: "",
    image: "",
    imageDescription: "",
    imageDescriptionMobile: "",
    getFromPhotosession: "",
    countLocations: "",
    pinned: false,
    _id: "",
    createdAt: "",
  };

  return (
    <div className={Styles.admin}>
      <BackgroundImage />
      <div className={Styles.admin__container}>
        <h3 className={Styles.admin__title}>Создание пакета</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationPacketSchema}
          onSubmit={(values) => {
            dispatch(createPacket(values));
          }}
        >
          {(props) => (
            <Form className={Styles.admin__form} onSubmit={props.handleSubmit}>
              <MyTextField nameLabel="Заголовок" type="text" name="title" id="title" component="input" />
              <MyTextField nameLabel="Пакет" type="text" name="packet" id="packet" component="input" />
              <MyTextField
                nameLabel="Продолжительность съемки"
                type="text"
                name="duration"
                id="duration"
                component="input"
              />
              <MyTextField nameLabel="Цена" type="text" name="price" id="price" component="input" />
              <MyTextField
                nameLabel="Описание"
                type="text"
                name="description"
                id="description"
                rows={5}
                component="textarea"
              />
              <MyTextField
                nameLabel="Краткое описание"
                type="text"
                name="shortDescription"
                id="shortDescription"
                rows={5}
                component="textarea"
              />
              <MyTextField
                nameLabel="Что клиент получает с фотосессии"
                type="text"
                name="getFromPhotosession"
                id="getFromPhotosession"
                rows={3}
                component="textarea"
              />
              <MyTextField
                nameLabel="Количество локаций"
                type="text"
                name="countLocations"
                id="countLocations"
                component="input"
              />
              <MyTextField nameLabel="Изображение" type="text" name="image" id="image" component="input" />
              <MyTextField
                nameLabel="Изображение в описании"
                type="text"
                name="imageDescription"
                id="imageDescription"
                component="input"
              />
              <MyTextField nameLabel="Закрепить" type="checkbox" name="pinned" id="pinned" component="input" checkbox />
              <button className={Styles.admin__formButton} type="submit">
                Создать пакет
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Admin;
