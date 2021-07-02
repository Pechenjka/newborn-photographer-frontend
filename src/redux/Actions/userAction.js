import api from "../../utils/api";
import {
  CLOSE_IMAGE_POPUP,
  INSTAGRAM_USER,
  OPEN_IMAGE_POPUP,
  SHOW_GALLERY_PHOTOS,
  SHOW_IMAGE,
  SLIDE_SHOW,
} from "../types";

const actionInstagramUser = (dataUser) => {
  return {
    type: INSTAGRAM_USER,
    payload: dataUser,
  };
};

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
    payload: data,
  };
};

export const slideShow = (data) => {
  return {
    type: SLIDE_SHOW,
    payload: data,
  };
};

export const handleGetInstagramUser = () => {
  return (dispatch) => {
    api
      .getInstagramProfile()
      .then((res) => {
        return res.data.map((item) => {
          return item;
        });
      })
      .then((res) => {
        dispatch(actionInstagramUser(res));
      })
      .catch((err) => console.log(err));
  };
};

export const handleNewsLetter = (email) => {
  return () => {
    api
      .newsLetter(email)
      .then((res) => {
        if (res) {
          return res;
        }
      })
      .catch((err) => console.log(err));
  };
};

export const handleGetPhotos = () => {
  return (dispatch) => {
    if (!localStorage.getItem("getPhotos")) {
      api
        .getArrPhotos()
        .then((res) => {
          return res._embedded.items.map((item) => {
            return item;
          });
        })
        .then((res) => {
          localStorage.setItem("getPhotos", JSON.stringify(res));
          dispatch(showGalleryPhotos(randomImage(res, res.length)));
        })
        .catch((err) => console.log(err));
    }
  };
};

export const handleTypesPhotos = (type) => {
  return (dispatch) => {
    const photos = JSON.parse(localStorage.getItem("getPhotos"));
    const showPhotos = photos.filter((item) => {
      if (item.name.toLowerCase().includes(type) || item.media_type.includes(type)) {
        return item;
      }
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
