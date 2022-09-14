import $api from "./apiCreate";
import { IMeOrders, INewOrder, IOrderData } from "../types";
import { AxiosResponse } from "axios";

export const apiOrder = (): { newOrder: any; getOrders: any; getMeOrders: any } => {
  return {
    newOrder: async (data: INewOrder): Promise<AxiosResponse<INewOrder>> => {
      return await $api.post("/orders/newOrder", data);
    },

    getOrders: async (): Promise<AxiosResponse<IOrderData>> => {
      return await $api.get("/orders/getOrders");
    },

    getMeOrders: async (): Promise<AxiosResponse<IMeOrders>> => {
      return await $api.get("/orders/meOrders");
    },
  };
};
