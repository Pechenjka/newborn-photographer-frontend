import React from "react";

export interface AppState {
  loading: boolean;
  openModalWithDescribePacket: boolean;
  dataOrder: IDataOrder;
  dataDescriptionPacket: IDataDescriptionPacket;
  openModalOrder: boolean;
  openModalConfirmationGetInTouch: boolean;
  openModalErrorGetInTouch: boolean;
  openModalConfirmationOrder: boolean;
  openModalNotSendOrder: boolean;
  displayPricePackets: IPacket[];
  confirmationSendEmail: boolean;
  errorSendEmail: boolean;
}

export interface IPacket {
  title: string;
  countLocations: string;
  getFromPhotosession: string;
  duration: string;
  shortDescription: string;
  packet: string;
  price: string;
  image: string;
  pinned: boolean;
  imageDescription: string;
  description: string;
  _id: string;
  createdAt: string;
}

export interface ICategory {
  title: string;
  nameRU: string;
  _id: string;
}

export interface IOrderFields {
  name: string;
  email: string;
  tel: string;
  text?: string;
}
export interface IDataOrder {
  type: string;
  title: string;
  price: string;
  location: string;
}

export interface IDataDescriptionPacket {
  title: string;
  description: Array<string | Array<string>>;
  imageDescriptionPacket: string;
  imageDescriptionPacketMobile: string;
  price: string;
}

export interface PropsPayLoadSendOrder {
  values: {
    name: string;
    email: string;
    tel: string;
    text?: string;
  };
  packetInBasket: IPacket[];
}
export interface PropsPayLoadSendEmail {
  data: {
    email?: string;
  };
}

export interface PropsPayLoadGetInTouch {
  data: {
    name: string;
    email: string;
    tel?: string;
    text: string;
  };
}

export interface PropsDisplayPricePackets {
  payload: {
    path?: string;
    packets: IPacket[] | null;
  };
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
export interface PhotosState {
  getPhotos: IPhoto[];
  showPhotos: IPhoto[];
  categoryPhotosBtn: string | null;
  loading: boolean;
  error: string | undefined;
  openModalWithImage: boolean;
  dataForImageModal: string;
}

export interface PropsTimeRef {
  timerRef: any;
}

export interface ILink {
  name: string;
  path?: string;
  select?: ISubLink[];
}

export interface ISubLink {
  name: string;
  pathSelect: string;
  type: string;
}

export interface IArrSlides {
  desktop: string;
  mobile: string;
}

export interface PropsNavMenu {
  timerRef: React.RefObject<any>;
  handlerOpenAndCloseBurgerMenu: () => void;
  openBurgerMenu: boolean;
}

export interface PropsContactMeForm {
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (evt: React.FormEvent) => void;
  title: string;
  values: { name: string; email: string; text: string; tel: number };
  errors: { name: string; email: string; text: string; tel: number };
  isValid: boolean;
}

export interface PropsMessageToTheUser {
  title: string;
  text?: string;
  icon?: string;
  onClose: () => void;
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

export interface PropsPhotos {
  photoPostPage: string;
}

export interface PropsPhoto {
  image: IPhoto;
  photoPostPage: string;
  setRef: any;
}

export enum PhotoPostPage {
  mainPage = "main",
  photoGalleryPage = "photoGallery",
}

export interface PropsPackets {
  getPackets: IPacket[];
  editStyleForPrice?: boolean;
  timerRef: any;
}

export interface PropsField {
  nameLabel: string;
  label?: boolean;
  type: string;
  rows?: number;
  name: string;
  component: string;
  id: string;
  checkbox?: boolean;
  editStyleContainer?: string;
  editStyleField?: string;
}

export interface PropsPopularPackets {
  editStyleForPrice?: boolean;
  timerRef: any;
}
