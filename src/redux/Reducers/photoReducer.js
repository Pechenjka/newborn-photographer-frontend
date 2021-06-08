import { CLOSE_IMAGE_POPUP, OPEN_IMAGE_POPUP, SHOW_GALLERY_PHOTOS, SHOW_IMAGE } from "../types";

const initialState = {
  getPhotos: [],
  openImagePopup: false,
  showImage: null,
};
const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_GALLERY_PHOTOS:
      return { ...state, getPhotos: action.payload };
    case OPEN_IMAGE_POPUP:
      return { ...state, openImagePopup: true };
    case CLOSE_IMAGE_POPUP:
      return { ...state, openImagePopup: false };
    case SHOW_IMAGE:
      return { ...state, showImage: action.payload };

    default:
      return state;
  }
};
export default photoReducer;
