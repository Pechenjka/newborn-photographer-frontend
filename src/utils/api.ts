import { IPhoto, PropsPayLoadGetInTouch, PropsPayLoadSendEmail, PropsPayLoadSendOrder } from "../types";

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
    return fetch(`${this.baseUrl}/user/newsLetter`, {
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
    return fetch(`${this.baseUrl}/user/getInTouch`, {
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

  sendOrder({ data }: PropsPayLoadSendOrder) {
    const { values, dataOrder } = data;
    return fetch(`${this.baseUrl}/user/order`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        tel: values.tel,
        text: values.text,
        type: dataOrder.type,
        title: dataOrder.title,
        price: dataOrder.price,
        location: dataOrder.location,
      }),
    })
      .then(checkResponse)
      .then((res) => res);
  }

  getArrPhotos() {
    return fetch(`${this.baseUrl}/mediaContent/gallery`, {
      method: "GET",
      headers: this.headers,
    })
      .then(checkResponse)
      .then((res: IPhoto[]) => {
        console.log(res);
        return res;
      });
  }
}

const api = new Api("https://api.alenalobacheva.net", {
  "Content-Type": "application/json",
});

export default api;
