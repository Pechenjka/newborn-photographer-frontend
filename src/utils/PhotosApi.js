const checkResponse = (res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`));

class PhotosApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getGalleryPhotos() {
    return fetch(`${this._baseUrl}/BdNewbornPhotographer/gallery&limit=50&media_type=image`, {
      method: "GET",
      headers: this._headers,
    })
      .then(checkResponse)
      .then((res) => res);
  }
}

const photosApi = new PhotosApi({
  baseUrl: "https://cloud-api.yandex.net/v1/disk/resources/?path=",
  headers: {
    "Content-Type": "application/json",
    'Authorization': 'OAuth AQAAAAAQIPa9AADLW3plBqlLFUz6r-ShG7c9430',
  },
});

export default photosApi;
