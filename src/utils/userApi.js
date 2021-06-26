const checkResponse = (res) => (res.ok ? res.json() : Promise.reject( new Error(`Error: ${res.status}`)))

class UserApi {
  constructor(options) {
    this._headers = options.headers;
    this._baseUrl = options.baseUrl;
  }

  newsLetter(data) {
    return fetch(`${this._baseUrl}/newsLetter`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then((res) => checkResponse(res))
      .catch((err) => console.log(err))
  }
}

const userApi = new UserApi({
  baseUrl: "http://localhost:3002",
  headers: {
    "Content-Type": "application/json",
  },
});

export default userApi;
