import React from "react";
import { TypeFieldComponent } from "./components/MyTextField";
import { RouteComponentProps } from "react-router-dom";


export interface PropsPayLoadSendEmail {
  data: {
    email?: string;
  };
}
export interface PropsPayLoadGetInTouch {
  data: {
    name: string;
    email: string;
    phone?: string;
    text: string;
  };
}

//Photo
export interface PropsInitialStatePhotoSlice {
  getPhotos: IPhoto[];
  showPhotos: IPhoto[];
  categoryPhotosBtn: string | null;
  loading: boolean;
  error: string | undefined;
  openModalWithImage: boolean;
  dataForImageModal: string;
}
export interface PropsArrPhotos {
  payload: IPhoto[];
}
export interface PropsPayloadString {
  payload: string | null;
}
export interface IPhoto {
  type: string;
  image: string;
  _id: string;
  createdAt: string;
}
export interface IPhotosCategoryInMainPage {
  name: string;
  type: string | null;
  onClick: any;
  id: string;
}

export interface IPhotosCategoryInGallery {
  title: string;
  type: string;
}

export interface PropsPhotos {
  photoPostPage: string;
}

export interface PropsPhoto {
  image: IPhoto;
  photoPostPage: string;
  setRef: any;
}

//Route
export interface IRoute {
  component: React.FC;
  path: string | Array<string>;
  name: string;
  isAdmin: boolean;
  isAuth: boolean;
  protectRouteBasket?: boolean
}

export interface PropsProtectedRoute {
  component: React.FC;
  authorization: boolean;
  exact: boolean;
  path: string;
}

//Paket
export interface PropsInitialStatePacketSlice {
  loading: boolean;
  error: string;
  getPackets: IPacket[];
  getPinnedPackets: IPacket[];
  packetWithDetailsDescription: IPacket | null;
  getPacketsCategories: ICategory[];
  packetInBasket: IPacket[];
  basketIsNotEmpty: boolean
}
export interface IPacket {
  namePacket: string;
  countLocations: string;
  getFromPhotosession: string;
  duration: string;
  shortDescription: string;
  photosessionType: string;
  price: string;
  image: string;
  pinned: boolean;
  imageDescription: string;
  imageDescriptionMobile: string;
  description: string;
  _id: string;
  createdAt: string;
}
export interface PropsPopularPackets {
  editStyleForPrice?: boolean;
}
export interface PropsPacketsInBasket {
  packetInBasket: IPacket[];
  onClickDeletePacket: (id: string) => void;
}
export interface PropsPackets {
  getPackets: IPacket[];
  editStyleForPrice?: boolean;
}
export interface ICategory {
  title: string;
  nameRU: string;
  _id: string;
}

//User
export interface IUser {
  name: string;
  email: string;
  phone?: string;
  prevOrders?: [];
  _id: string;
  isActivated: boolean;
  role: string;
  orders?: Array<string>;
}
export interface PropsInitialStateUserSlice {
  user: IUser;
  auth: boolean;
  loading: boolean;
  error: string;
  adminEmail: string;
  isRegister: boolean;
  showError: boolean;
}
export interface IUserProfile {
  name: string;
  email: string;
  phone: string | undefined;
  _id?: string;
  orders?: [];
}
export interface IUpdateUser {
  name?: string;
  email?: string;
  phone?: string;
  orders?: Array<string>;
}
export interface IUserResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
export interface ICreateUser {
  name: string;
  email: string;
  password: string;
  role: string;
}
export interface ILoginUser {
  email: string;
  password: string;
  history: RouteComponentProps["history"];
}
export interface IRefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface PropsLogin {
  email: string;
  password: string;
}
export interface PropsRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface PropsAuthForm {
  titleAuthorization: string;
  textQuestion: string;
  textAnswer: string;
  pathOnAnotherAuthorization: string;
  children?: React.ReactNode;
  initialValues: Object;
  validationSchema: any;
  textButton: string;
  handleSubmit: any;
  error: string;
  loading: boolean;
  showError: boolean;
}

//Orders
export interface IMeOrders {
  orderNumber: string;
  packets: IPacketInOrder[];
  text: string;
  completed: boolean;
}
export interface IOrderData {
  orderNumber: string;
  text: string;
  packets: IPacketInOrder[];
  createdAt: string;
  completed: boolean;
  user: IUserProfile;
}
export interface INewOrder {
  orderNumber: string;
  text?: string;
  packets: IPacketInOrder[];
  user: IUserProfile;
}
export interface IPacketInOrder {
  namePacket: string;
  photosessionType: string;
  price: string;
  link?: string;
}
export interface PropsInitialStateOrderSlice {
  dataOrders: IOrderData[];
  meOrders: Array<IMeOrders>;
  loading: boolean;
  error: string;
}
export interface PropsOrderCheckout {
  orderInMyProfile?: boolean;
  orderData: IPacketInOrder[];
  orderNumber?: string;
  title: string;
}

export interface PropsDataUser {
  title: string;
  children: React.ReactNode;
}

//Admin
export interface ILinkListAdmin {
  title: string;
  path: string;
}
export interface PropsAddNewPhoto {
  image: string;
  type: string;
}
export interface PropsAdminContainer {
  children: React.ReactNode;
  title: string;
  linkBack: { title: string; link: string };
}

//other interfaces
export interface PropsNavMenu {
  handlerOpenAndCloseBurgerMenu: () => void;
  openBurgerMenu: boolean;
}

export interface PropsContactMeForm {
  title: string;
}

export interface PropsMessageToTheUser {
  title: string;
  text?: string;
  icon?: string;
  onClose: () => void;
}

export interface ITable {
  table: ITablesPhotoProducts[];
}

export interface PropsPopup {
  onClick?: () => void;
  children: React.ReactNode;
  openPopup: boolean;
}

export interface ITablesPhotoProducts {
  title?: Array<string>;
  product?: IProduct[];
}

export interface IProduct {
  size: string;
  printQuality?: string;
  price: string;
}
export interface PropsInitialStateAppSlice {
  loading: boolean;
  confirmationGetInTouch: boolean;
  errorGetInTouch: boolean;
  displayPricePackets: IPacket[];
  confirmationSendEmail: boolean;
  errorSendEmail: boolean;
}

export interface PropsMyTextField {
  nameLabel: string;
  label?: boolean;
  type: string;
  rows?: number;
  name: string;
  component: TypeFieldComponent;
  id: string;
  checkbox?: boolean;
  editStyleContainer?: string;
  editStyleField?: string;
  select?: boolean;
  options?: Array<{ value: string; title: string; hidden?: boolean }>;
  placeholder?: string;
}

export interface PropsBoolean {
  payload: boolean;
}

export interface PropsRandomPhotos {
  payload: {
    arr: IPhoto[];
    n: number;
  };
}

export interface ILink {
  name?: string;
  path?: string;
  logo?: string;
  select?: ISubLink[];
}

export interface ISubLink {
  name: string;
  pathSelect: string;
  type?: string;
}

export interface IArrSlides {
  desktop: string;
  mobile: string;
}

export interface IOrderFields {
  name: string;
  email: string;
  phone: string | undefined;
  text?: string;
}

//enum
export enum PhotoPostPage {
  mainPage = "main",
  photoGalleryPage = "photoGallery",
}
