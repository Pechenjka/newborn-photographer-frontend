import {
  ICategory,
  IPacket,
  IPhoto,
  PropsAddNewPhoto,
  PropsPayLoadGetInTouch,
  PropsPayLoadSendEmail,
  PropsText,
} from "../types";
import $api from "./apiCreate";
import { AxiosResponse } from "axios";

export const apiApp = (): {
  createPacket: any;
  getArrPackets: any;
  getPacketsCategories: any;
  getPacketWithDetailsDescription: any;
  getArrPhotos: any;
  uploadPhoto: any;
  getInTouch: any;
  newsLetter: any;
  createTextOnPage: any;
  editTextOnPage: any;
  getTextOnPage: any;
  deleteTextBlock: any;
  deletePhoto: any
} => {
  return {
    createPacket: async (data: IPacket): Promise<AxiosResponse<IPacket>> => {
      return await $api.post("/packets", {
        namePacket: data.namePacket,
        photosessionType: data.photosessionType,
        duration: data.duration,
        price: data.price,
        description: data.description,
        shortDescription: data.shortDescription,
        image: data.image,
        imageDescription: data.imageDescription,
        getFromPhotosession: data.getFromPhotosession,
        countLocations: data.countLocations,
        pinned: data.pinned,
      });
    },

    getArrPackets: async (path: string): Promise<AxiosResponse<IPacket[]>> => {
      return await $api.get(`/packets/${path}`);
    },

    getPacketsCategories: async (): Promise<AxiosResponse<ICategory[]>> => {
      return await $api.get("/categories");
    },

    getPacketWithDetailsDescription: async (id: string): Promise<AxiosResponse<IPacket[]>> => {
      return await $api.get(`/packets/${id}`);
    },

    getArrPhotos: async (path: string): Promise<AxiosResponse<IPhoto[]>> => {
      return await $api.get(`/mediaContent/gallery/${path}`);
    },

    deletePhoto: async (dataId: string): Promise<void> => {
      return await $api.delete(`/mediaContent/gallery/${dataId}`)
    },
    uploadPhoto: async (data: PropsAddNewPhoto): Promise<AxiosResponse<IPhoto>> => {
      return await $api.post("/mediaContent/gallery", {
        image: data.image,
        type: data.type,
      });
    },

    getInTouch: async ({ data }: PropsPayLoadGetInTouch): Promise<void> => {
      return await $api.post("/contacts/getInTouch", {
        name: data.name,
        email: data.email,
        tel: data.phone,
        text: data.text,
      });
    },

    newsLetter: async ({ data }: PropsPayLoadSendEmail): Promise<any> => {
      return await $api.post("/contacts/newsLetter", {
        email: data.email,
      });
    },
    createTextOnPage: async (data: { text: string; typePhotoSession: string }): Promise<AxiosResponse<PropsText>> => {
      return await $api.post("/editor/createTextOnPage", { text: data.text, typePhotoSession: data.typePhotoSession });
    },
    getTextOnPage: async (): Promise<AxiosResponse<PropsText[]>> => {
      return await $api.get("/editor");
    },
    editTextOnPage: async (data: { _id: string; text: string }): Promise<any> => {
      return await $api.patch(`/editor/${data._id}`, { text: data.text });
    },
    deleteTextBlock: async (dataId: string): Promise<any> => {
      return await $api.delete(`/editor/${dataId}`);
    },
  };
};
