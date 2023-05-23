import * as Yup from "yup";

export const validationSchemaPacket = Yup.object().shape({
  namePacket: Yup.string()
    .min(2, "Too Short!")
    .max(50, 'Too Long!')
    .required("name packet is required"),
  photosessionType: Yup.string()
    .min(2, "Too Short!")
    .max(50, 'Too Long!')
    .required("Photo session type is required"),
  duration: Yup.string()
    .required("Field is required")
    .matches(/[0-9\-]/, "Valid characters 0-9, -'"),
  price: Yup.string()
    .min(2, "Too Short!")
    .required("Price is required")
    .matches(/[0-9]/, " Enter number"),
  getFromPhotosession: Yup.string().min(2, "Too Short!").required("Get from photo session is required"),
  description: Yup.string().min(2, "Too Short!").required("Description is required"),
  shortDescription: Yup.string()
    .min(2, "Too Short!")
    .max(250, 'Too Long!')
    .required("Short description is required"),
  countLocations: Yup.string().required("Count locations is required"),
  image: Yup.string().min(2, "Too Short!").required("Image is required"),
  imageDescription: Yup.string().min(2, "Too Short!").required("image description is required"),
});

export const validationSchemaOrderForm = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, 'Too Long!')
    .required("Name is required"),
  email: Yup.string()
    .min(2, "Too Short!")
    .max(50, 'Too Long!')
    .email('Invalid email')
    .required("Email is required"),
  phone: Yup.string()
    .required("Phone is required")
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/,
      "Invalid phone"
    ),
  text: Yup.string().max(250, 'Too Long!'),
});

export const validationSchemaContactWithMe = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, 'Too Long!')
    .required("Name is required"),
  email: Yup.string()
    .min(2, "Too Short!")
    .max(50, 'Too Long!')
    .email('Invalid email')
    .required("Email is required"),
  phone: Yup.string().matches(
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/,
    "Invalid phone"
  ),
  text: Yup.string().max(250, 'Too Long!').required("Text is required"),
});

export const validationSchemaUserInProfile = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, 'Too Long!')
    .required("Name is required"),
  email: Yup.string()
    .min(2, "Too Short!")
    .max(50, 'Too Long!')
    .email('Invalid email')
    .required("Email is required"),
  phone: Yup.string()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/,
      "Invalid phone"
    ),
});

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string().email("example: qwery@gmail.com").required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be of minimum 8 characters length")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z]{8,}/,
      "The password must consist of numbers, lowercase and uppercase Latin letters"
    )
    .required("Password is required"),
});

export const validationSchemaRegister = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(30, 'Too Long!')
    .required("Name is required"),
  email: Yup.string().email("example: qwery@gmail.com").required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be of minimum 8 characters length")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z]{8,}/,
      "The password must consist of numbers, lowercase and uppercase Latin letters"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "The password is not correct")
    .required("Confirm password is required"),
});

export const validationSchemaNewPhoto = Yup.object().shape({
  image: Yup.string().required("Image is required"),
  type: Yup.string().required("Type`s photo is required"),
});
