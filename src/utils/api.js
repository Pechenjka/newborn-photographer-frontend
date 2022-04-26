const checkResponse = (res) =>
  res.ok ? res.json() : Promise.reject(new Error(`status: ${res.status}, message: ${res.statusText}`));

class Api {
  constructor(options) {
    this._headers = options.headers;
    this._baseUrl = options.baseUrl;
  }

  newsLetter(data) {
    return fetch(`${this._baseUrl}/user/newsLetter`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: data.email,
      }),
    })
      .then(checkResponse)
      .then((res) => res);
  }

  getInTouch(data) {
    return fetch(`${this._baseUrl}/user/getInTouch`, {
      method: "POST",
      headers: this._headers,
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

  sendOrder(data) {
    const [values, dataOrder] = data;
    return fetch(`${this._baseUrl}/user/order`, {
      method: "POST",
      headers: this._headers,
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
    return fetch(`${this._baseUrl}/mediaContent/gallery`, {
      method: "GET",
      headers: this._headers,
    })
      .then(checkResponse)
      .then((res) => res);
  }
}

const api = new Api({
  baseUrl: "https://api.alenalobacheva.net",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
