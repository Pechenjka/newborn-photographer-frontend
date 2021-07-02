const checkResponse = (res) => (res.ok ? res.json() : Promise.reject(new Error(`Error: ${res.status}`)));

class Api {
  constructor(options) {
    this._headers = options.headers;
    this._baseUrl = options.baseUrl;
  }

  newsLetter(data) {
    return fetch(`${this._baseUrl}/user/newsLetter`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then(checkResponse)
      .then((res) => res)
      .catch((err) => console.log(err));
  }

  getArrPhotos() {
    return fetch(`${this._baseUrl}/mediaContent/photos`, {
      method: "GET",
      headers: this._headers,
    })
      .then(checkResponse)
      .then((res) => res)
      .catch((err) => console.log(err));
  }

  getInstagramProfile() {
    return fetch(`${this._baseUrl}/mediaContent/instagram`, {
      method: "GET",
      headers: this._headers,
    })
      .then(checkResponse)
      .then((res) => res)
      .catch((err) => console.log(err));
  }
}

const api = new Api({
  baseUrl: "http://localhost:3002",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
