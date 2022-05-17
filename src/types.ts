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
  type: string;
  location: string;
  time: string;
  shortDescription: string;
  packet: string;
  price: string;
  image: string;
  imageDescriptionPacket: string;
  imageDescriptionPacketMobile: string;
  description: Array<string | Array<string>>;
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
  data: {
    values: {
      name: string;
      email: string;
      tel: string;
      text?: string;
    };
    dataOrder: {
      type: string;
      title: string;
      price: string;
      location: string;
    };
  };

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

export interface PropsShowPhotos {
  type: string;
  order: string;
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
  payload: string;
}

export interface IPhoto {
  kind: string;
  id: string;
  selfLink: string;
  mediaLink: string;
  name: string;
  bucket: string;
  generation: string;
  metageneration: string;
  contentType: string;
  storageClass: string;
  size: string;
  md5Hash: string;
  crc32c: string;
  etag: string;
  temporaryHold: string;
  eventBasedHold: string;
  timeCreated: string;
  updated: string;
  timeStorageClassUpdated: string;
  customTime: string;
  metadata: { type: string };
}

export interface PhotosState {
  getPhotosOneType: IPhoto[];
  showPhotos: IPhoto[];
  categoryPhotosBtn: string;
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

export interface PropsOrderPhotoSessionForm {
  values: { name: string; email: string; tel: string; text: string };
  errors: { name: string; email: string; tel: string; text: string };
  isValid: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClose: () => void;
  onSubmit: (event: React.FormEvent) => void;
  dataOrder: IDataOrder;
}

export interface PropsMessageToTheUser {
  title: string;
  text?: string;
  icon?: string;
  onClose: () => void;
}

export interface IPhotosCategoryInMainPage {
  name: string;
  type: string;
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

