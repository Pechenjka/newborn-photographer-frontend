import {OPEN_IMAGE_POPUP, CLOSE_IMAGE_POPUP, SHOW_GALLERY_PHOTOS, SHOW_IMAGE} from "../types";
import photosApi from "../../utils/PhotosApi";

export const showGalleryPhotos = (dataPhotos) => {
  return {
    type: SHOW_GALLERY_PHOTOS,
    payload: dataPhotos,
  };
};

export const openImagePopup = () => {
  return {
    type: OPEN_IMAGE_POPUP,
  };
};

export const closeImagePopup = () => {
  return {
    type: CLOSE_IMAGE_POPUP,
  };
};

export const showImage = (data) => {
  return {
    type: SHOW_IMAGE,
    payload: data
  }
}
// export const falseActiveButtonAction = () => {
//   return {
//     type: FALSE_ACTIVE_BUTTON,}
// }

export function handleGetPhotos() {
  return (dispatch) => {
    if (!localStorage.getItem("getPhotos")) {
      return photosApi
        .getGalleryPhotos()
        .then((res) => {
          return res._embedded.items.map((item) => {
            return item;
          });
        })
        .then((res) => {
          if (res) {
            localStorage.setItem("getPhotos", JSON.stringify(res));
            dispatch(showGalleryPhotos(randomImage(res, res.length)));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
}

export const handleTypesPhotos = (type) => {
  return (dispatch) => {
    const photos = JSON.parse(localStorage.getItem("getPhotos"));
    const showPhotos = photos.filter((item) => {
      if (item.name.toLowerCase().includes(type)) {
        return item;
      }
      return undefined;
    });
    dispatch(showGalleryPhotos(randomImage(showPhotos, showPhotos.length)));
  };
};

export const randomImage = (arr, n) => {
  let randomN = [];
  while (randomN.length < n) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    randomN = [...randomN, arr[randomIndex]];
    arr.splice(randomIndex, 1);
  }
  return randomN;
};
