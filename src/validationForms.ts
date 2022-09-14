import * as Yup from "yup";

export const validationSchemaPacket = Yup.object().shape({
  namePacket: Yup.string()
    .min(2, "Минимальное кол-во символов 2")
    .max(50, "Максимальное кол-во символов 50")
    .required("Поле обязательное к заполнению"),
  photosessionType: Yup.string()
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
  image: Yup.string().min(2, "Минимальное кол-во символов 2").required("Поле обязательное к заполнению"),
  imageDescription: Yup.string().min(2, "Минимальное кол-во символов 2").required("Поле обязательное к заполнению"),
});

export const validationSchemaOrderForm = Yup.object().shape({
  name: Yup.string()
    .min(2, "Минимальное кол-во символов 2")
    .max(50, "Максимальное кол-во символов 50")
    .required("Поле 'Имя' обязательное к заполнению"),
  email: Yup.string()
    .min(2, "Минимальное кол-во символов 2")
    .max(50, "Максимальное кол-во символов 50")
    .email('"Email" не корректный')
    .required("Поле 'Email' обязательное к заполнению"),
  phone: Yup.string()
    .required("Поле 'Телефон' обязательное к заполнению")
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/,
      "Введите корректный номер талефона"
    ),
  text: Yup.string().max(250, "Максимальное кол-во символов 250"),
});

export const validationSchemaContactWithMe = Yup.object().shape({
  name: Yup.string()
    .min(2, "Минимальное кол-во символов 2")
    .max(50, "Максимальное кол-во символов 50")
    .required("Поле 'Имя' обязательное к заполнению"),
  email: Yup.string()
    .min(2, "Минимальное кол-во символов 2")
    .max(50, "Максимальное кол-во символов 50")
    .email('"Email" не корректный')
    .required("Поле 'Email' обязательное к заполнению"),
  phone: Yup.string().matches(
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/,
    "Введите корректный номер талефона"
  ),
  text: Yup.string().max(250, "Максимальное кол-во символов 250").required("Поле 'Email' обязательное к заполнению"),
});

export const validationSchemaUserInProfile = Yup.object().shape({
  name: Yup.string()
    .min(2, "Минимальное кол-во символов 2")
    .max(50, "Максимальное кол-во символов 50")
    .required("Поле 'Имя' обязательное к заполнению"),
  email: Yup.string()
    .min(2, "Минимальное кол-во символов 2")
    .max(50, "Максимальное кол-во символов 50")
    .email('"Email" не корректный')
    .required("Поле 'Email' обязательное к заполнению"),
  phone: Yup.string()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/,
      "Введите корректный номер талефона"
    ),
});

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string().email("пример: example@mail.com").required("Поле 'Email' обязательное к заполнению"),
  password: Yup.string()
    .min(8, "Минимальное кол-во символов 8")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z]{8,}/,
      "Пароль должен состоять из цифр, строчных и заглавных латинских букв"
    )
    .required("Поле 'Пароль' обязательное к заполнению"),
});

export const validationSchemaRegister = Yup.object().shape({
  name: Yup.string()
    .min(2, "Минимальное кол-во символов 2")
    .max(30, "Минимальное кол-во символов 30")
    .required("Поле 'Имя' обязательное к заполнению"),
  email: Yup.string().email("пример: example@mail.com").required("Поле 'Email' обязательное к заполнению"),
  password: Yup.string()
    .min(8, "Минимальное кол-во символов 8")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z]{8,}/,
      "Пароль должен состоять из цифр, строчных и заглавных латинских букв"
    )
    .required("Поле 'Пароль' обязательное к заполнению"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Пароли не совпадают")
    .required("Поле 'Подтверждение пароля' обязательное к заполнению"),
});

export const validationSchemaNewPhoto = Yup.object().shape({
  image: Yup.string().required("Поле обязательное к заполнению"),
  type: Yup.string().required("Требуется выбрать тип загружаемой фотографии"),
});
