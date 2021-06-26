const checkResponse = (res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`));

class InstagramApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getInstagramUser() {
    return fetch(this._baseUrl, {
      method: "GET",
      headers: this._headers,
    })
      .then(checkResponse)
      .then((res) => res)
      .catch((err) => console.log(err));
  }
}

const instagramApi = new InstagramApi({
  baseUrl:
    "https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,timestamp,thumbnail_url,username,permalink&access_token=IGQVJVTkJ3TWI1cnFDUmpVckdsakFEZAVk1VFZAkX3dGQ1JHSkJMd09MbElUUWVsUmZAIZAXlzeVFOdGNTVEw2X3VIUm9uZAm1FYmF5dndoNDRoNlRxZAHdLQmNhWTlJa2tyVmFUcEVPMHlET3BDN3FHQTFUZAQZDZD",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instagramApi;
