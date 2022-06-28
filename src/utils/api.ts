import { IPacket, IPhoto, PropsPayLoadGetInTouch, PropsPayLoadSendEmail, PropsPayLoadSendOrder } from "../types";

const checkResponse = (res: any) =>
  res.ok ? res.json() : Promise.reject(new Error(`status: ${res.status}, message: ${res.statusText}`));

class Api {
  constructor(
    private baseUrl: string,
    private headers: {
      "Content-Type": string;
    }
  ) {
    this.headers = headers;
    this.baseUrl = baseUrl;
  }

  newsLetter({ data }: PropsPayLoadSendEmail) {
    return fetch(`${this.baseUrl}/contact/newsLetter`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        email: data.email,
      }),
    })
      .then(checkResponse)
      .then((res) => res);
  }

  getInTouch({ data }: PropsPayLoadGetInTouch) {
    return fetch(`${this.baseUrl}/contact/getInTouch`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        tel: data.tel,
        text: data.text,
      }),
    })
      .then(checkResponse)
      .then((res) => res);
  }

  sendOrder({ values, packetInBasket }: PropsPayLoadSendOrder) {
    return fetch(`${this.baseUrl}/contact/order`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        tel: values.tel,
        text: values.text,
        packets: packetInBasket,
      }),
    })
      .then(checkResponse)
      .then((res) => res);
  }

  getArrPhotos(path: string) {
    return fetch(`${this.baseUrl}/mediaContent/gallery/${path}`, {
      method: "GET",
      headers: this.headers,
    })
      .then(checkResponse)
      .then((res: IPhoto[]) => res);
  }
  createPackets(data: IPacket) {
    return fetch(`${this.baseUrl}/packets`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        title: data.title,
        packet: data.packet,
        duration: data.duration,
        price: data.price,
        description: data.description,
        shortDescription: data.shortDescription,
        image: data.image,
        imageDescription: data.imageDescription,
        getFromPhotosession: data.getFromPhotosession,
        countLocations: data.countLocations,
        pinned: data.pinned,
      }),
    })
      .then(checkResponse)
      .then((res) => res);
  }

  getPacketWithDetailsDescription(id: string) {
    return fetch(`${this.baseUrl}/packets/${id}`, {
      method: "GET",
      headers: this.headers,
    })
      .then(checkResponse)
      .then((res: IPacket) => res);
  }

  getArrPackets(path: string) {
    return fetch(`${this.baseUrl}/packets/${path}`, {
      method: "GET",
      headers: this.headers,
    })
      .then(checkResponse)
      .then((res: IPacket[]) => res);
  }

  getPacketsCategories() {
    return fetch(`${this.baseUrl}/categories`, {
      method: "GET",
      headers: this.headers,
    })
      .then(checkResponse)
      .then((res: IPacket[]) => res);
  }
}

const api = new Api("https://api.alenalobacheva.net", {
  "Content-Type": "application/json",
});

export default api;
