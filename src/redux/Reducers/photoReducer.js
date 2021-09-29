import {
  CLOSE_IMAGE_POPUP,
  OPEN_IMAGE_POPUP,
  SHOW_GALLERY_PHOTOS,
  SLIDE_SHOW,
  RANDOM_SORT_PHOTOS,
  GET_ALL_PHOTOS_ONE_TYPE,
  TYPES_PHOTOS,
  BTN_OF_THE_TYPE_PHOTOS,
  OPEN_POPUP_WITH_DESCRIBE_PACKET,
  CLOSE_POPUP_WITH_DESCRIBE_PACKET,
  DELETE_DATA_PACKETS_OF_THE_PRICE,
  SHOW_DATA_PACKETS_OF_THE_PRICE,
  SHOW_IMAGE_IN_THE_POPUP,
  DISPLAY_PHOTOS_ON_THE_PAGE_PHOTO_GALLERY,
  NOT_DISPLAY_PHOTOS_ON_THE_PAGE_PHOTO_GALLERY,
  DELETE_ALL_PHOTOS_ONE_TYPE,
  OPEN_ORDER_PHOTO_SESSION_POPUP,
  CLOSE_ORDER_PHOTO_SESSION_POPUP,
  DATA_ORDER,
  DISPLAY_LOADING,
  HIDE_LOADING,
} from "../types";

const initialState = {
  getPhotos: [],
  openImagePopup: false,
  popupWithDescribePacket: false,
  orderPhotoSessionPopup: false,
  showImageInThePopup: null,
  slideShow: [],
  randomSortPhotos: false,
  allPhotosOneType: [],
  typesPhotos: "",
  btnOfTheTypePhotos: { activeBtn: "typeBtn" },
  showDataPacket: [],
  displayPhotosOnThePagePhotoGallery: false,
  dataOrder: [],
  loading: false,
};
const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_GALLERY_PHOTOS:
      return { ...state, getPhotos: action.payload };
    case OPEN_IMAGE_POPUP:
      return { ...state, openImagePopup: true };
    case CLOSE_IMAGE_POPUP:
      return { ...state, openImagePopup: false };
    case OPEN_ORDER_PHOTO_SESSION_POPUP:
      return { ...state, orderPhotoSessionPopup: true };
    case CLOSE_ORDER_PHOTO_SESSION_POPUP:
      return { ...state, orderPhotoSessionPopup: false };
    case OPEN_POPUP_WITH_DESCRIBE_PACKET:
      return { ...state, popupWithDescribePacket: true };
    case CLOSE_POPUP_WITH_DESCRIBE_PACKET:
      return { ...state, popupWithDescribePacket: false };
    case SHOW_IMAGE_IN_THE_POPUP:
      return { ...state, showImageInThePopup: action.payload };
    case SLIDE_SHOW:
      return { ...state, slideShow: action.payload };
    case RANDOM_SORT_PHOTOS:
      return { ...state, randomSortPhotos: true };
    case GET_ALL_PHOTOS_ONE_TYPE:
      return { ...state, allPhotosOneType: action.payload };
    case DELETE_ALL_PHOTOS_ONE_TYPE:
      return { ...state, allPhotosOneType: action.payload };
    case TYPES_PHOTOS:
      return { ...state, typesPhotos: action.payload };
    case BTN_OF_THE_TYPE_PHOTOS:
      return { ...state, btnOfTheTypePhotos: { activeBtn: action.payload } };
    case SHOW_DATA_PACKETS_OF_THE_PRICE:
      return { ...state, showDataPacket: state.showDataPacket.concat(action.payload) };
    case DELETE_DATA_PACKETS_OF_THE_PRICE:
      return { ...state, showDataPacket: action.payload };
    case DISPLAY_PHOTOS_ON_THE_PAGE_PHOTO_GALLERY:
      return { ...state, displayPhotosOnThePagePhotoGallery: true };
    case NOT_DISPLAY_PHOTOS_ON_THE_PAGE_PHOTO_GALLERY:
      return { ...state, displayPhotosOnThePagePhotoGallery: false };
    case DATA_ORDER:
      return { ...state, dataOrder: action.payload };
    case DISPLAY_LOADING:
      return { ...state, loading: true };
    case HIDE_LOADING:
      return { ...state, loading: false };

    default:
      return state;
  }
};
export default photoReducer;
