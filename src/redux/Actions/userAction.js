import api from "../../utils/api";
import {
  CLOSE_IMAGE_POPUP,
  INSTAGRAM_USER,
  OPEN_IMAGE_POPUP,
  SHOW_GALLERY_PHOTOS,
  SLIDE_SHOW,
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
  HIDE_LOADING,
  DISPLAY_LOADING,
  OPEN_POPUP_CONFIRMATION_OF_THE_ORDER,
  CLOSE_POPUP_CONFIRMATION_OF_THE_ORDER,
  OPEN_POPUP_CONFIRMATION_MESSAGE_FROM_THE_USER,
  CLOSE_POPUP_CONFIRMATION_MESSAGE_FROM_THE_USER,
  DISPLAY_PRICE_PACKETS,
  OPEN_BURGER_MENU,
  CLOSE_BURGER_MENU,
  DISPLAY_SUBSCRIPTION_CONFIRMATION,
  HIDE_SUBSCRIPTION_CONFIRMATION,
  DISPLAY_SUBSCRIPTION_ERROR,
  HIDE_SUBSCRIPTION_ERROR,
  OPEN_POPUP_THE_ERROR_WHEN_MESSAGE_NOT_SEND,
  CLOSE_POPUP_THE_ERROR_WHEN_MESSAGE_NOT_SEND,
  OPEN_POPUP_THE_ERROR_WHEN_ODER_NOT_SEND,
  CLOSE_POPUP_THE_ERROR_WHEN_ODER_NOT_SEND,
  DISPLAY_LOADING_PHOTOS,
  HIDE_LOADING_PHOTOS,
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

export const openOrderPhotoSessionPopup = () => {
  return {
    type: OPEN_ORDER_PHOTO_SESSION_POPUP,
  };
};

export const closeOrderPhotoSessionPopup = () => {
  return {
    type: CLOSE_ORDER_PHOTO_SESSION_POPUP,
  };
};

export const showImageInThePopup = (data) => {
  return {
    type: SHOW_IMAGE_IN_THE_POPUP,
    payload: data,
  };
};

export const slideShow = (data) => {
  return {
    type: SLIDE_SHOW,
    payload: data,
  };
};

export const getAllPhotosOneType = (data) => {
  return {
    type: GET_ALL_PHOTOS_ONE_TYPE,
    payload: data,
  };
};

export const deleteAllPhotosOneType = (data) => {
  return {
    type: DELETE_ALL_PHOTOS_ONE_TYPE,
    payload: data,
  };
};

export const typesPhotos = (type) => {
  return {
    type: TYPES_PHOTOS,
    payload: type,
  };
};

export const buttonOfTheTypePhotos = (data) => {
  return {
    type: BTN_OF_THE_TYPE_PHOTOS,
    payload: data,
  };
};

export const openPopupWithDescribePacket = () => {
  return {
    type: OPEN_POPUP_WITH_DESCRIBE_PACKET,
  };
};

export const closePopupWithDescribePacket = () => {
  return {
    type: CLOSE_POPUP_WITH_DESCRIBE_PACKET,
  };
};

export const openPopupConfirmationOfTheOrder = () => {
  return {
    type: OPEN_POPUP_CONFIRMATION_OF_THE_ORDER,
  };
};

export const closePopupConfirmationOfTheOrder = () => {
  return {
    type: CLOSE_POPUP_CONFIRMATION_OF_THE_ORDER,
  };
};

export const openPopupTheErrorWhenOderNotSend = () => {
  return {
    type: OPEN_POPUP_THE_ERROR_WHEN_ODER_NOT_SEND,
  };
};

export const closePopupTheErrorWhenOderNotSend = () => {
  return {
    type: CLOSE_POPUP_THE_ERROR_WHEN_ODER_NOT_SEND,
  };
};

export const openPopupConfirmationGetMessageFromTheUser = () => {
  return {
    type: OPEN_POPUP_CONFIRMATION_MESSAGE_FROM_THE_USER,
  };
};

export const closePopupConfirmationGetMessageFromTheUser = () => {
  return {
    type: CLOSE_POPUP_CONFIRMATION_MESSAGE_FROM_THE_USER,
  };
};

export const openPopupTheErrorWhenMessageNotSend = () => {
  return {
    type: OPEN_POPUP_THE_ERROR_WHEN_MESSAGE_NOT_SEND,
  };
};

export const closePopupTheErrorWhenMessageNotSend = () => {
  return {
    type: CLOSE_POPUP_THE_ERROR_WHEN_MESSAGE_NOT_SEND,
  };
};

export const showDataPacket = (data) => {
  return {
    type: SHOW_DATA_PACKETS_OF_THE_PRICE,
    payload: data,
  };
};

export const deleteDataPacket = (data) => {
  return {
    type: DELETE_DATA_PACKETS_OF_THE_PRICE,
    payload: data,
  };
};

export const displayPhotosOnThePagePhotoGallery = () => {
  return {
    type: DISPLAY_PHOTOS_ON_THE_PAGE_PHOTO_GALLERY,
  };
};

export const notDisplayPhotosOnThePagePhotoGallery = () => {
  return {
    type: NOT_DISPLAY_PHOTOS_ON_THE_PAGE_PHOTO_GALLERY,
  };
};

export const dataOrder = (data) => {
  return {
    type: DATA_ORDER,
    payload: data,
  };
};

export const displayLoading = () => {
  return {
    type: DISPLAY_LOADING,
  };
};

export const hideLoading = () => {
  return {
    type: HIDE_LOADING,
  };
};

export const displayLoadingPhotos = () => {
  return {
    type: DISPLAY_LOADING_PHOTOS,
  };
};

export const hideLoadingPhotos = () => {
  return {
    type: HIDE_LOADING_PHOTOS,
  };
};

export const displayPricePackets = (data) => {
  return {
    type: DISPLAY_PRICE_PACKETS,
    payload: data,
  };
};

export const openBurgerMenu = () => {
  return {
    type: OPEN_BURGER_MENU,
  };
};

export const closeBurgerMenu = () => {
  return {
    type: CLOSE_BURGER_MENU,
  };
};

export const displaySubscriptionConfirmation = () => {
  return {
    type: DISPLAY_SUBSCRIPTION_CONFIRMATION,
  };
};

export const hideSubscriptionConfirmation = () => {
  return {
    type: HIDE_SUBSCRIPTION_CONFIRMATION,
  };
};

export const displaySubscriptionError = () => {
  return {
    type: DISPLAY_SUBSCRIPTION_ERROR,
  };
};

export const hideSubscriptionError = () => {
  return {
    type: HIDE_SUBSCRIPTION_ERROR,
  };
};

export const handlePricePackets = (data, pathname) => {
  return (dispatch) => {
    const packets = data.filter((item) => {
      return item.path === pathname && item;
    });
    dispatch(displayPricePackets(packets));
  };
};

// Получать массив фотографий с удаленного сервера при отсутствии в сессионом хранилище
export const handleGetPhotos = (typesPhotos, pathname) => {
  return (dispatch) => {
    if (!sessionStorage.getItem("getPhotos")) {
      dispatch(displayLoadingPhotos());
      setTimeout(() => {
        return api
          .getArrPhotos()
          .then((res) => {
            return res.map((item) => item);
          })
          .then((res) => {
            sessionStorage.setItem("getPhotos", JSON.stringify(res));
            if (pathname === "/") {
              dispatch(handleTypesPhotos(typesPhotos, pathname));
              dispatch(buttonOfTheTypePhotos("allBtn"));
            }
          })
          .catch((err) => console.log(err))
          .finally(() => {
            dispatch(hideLoadingPhotos());
          });
      }, 800);
    }
  };
};

//Определить тип фотографии
export const handleTypePhotosOfThePage = (arrLinks, pathname) => {
  return (dispatch) => {
    return arrLinks.filter((item) => {
      return (
        Array.isArray(item.select) &&
        item.select.map((el) => {
          if (el.pathSelect === pathname) {
            dispatch(typesPhotos(el.type));
          }
          return null;
        })
      );
    });
  };
};

//Обработчик получения медиаданных инстаграм профиля
export const handleGetInstagramUser = () => {
  return (dispatch) => {
    api
      .getInstagramProfile()
      .then((res) => res.data.map((item) => item))
      .then((res) => {
        dispatch(actionInstagramUser(res));
      })
      .catch((err) => console.log(err));
  };
};

//Обработчик подписки посетителя на рассылку
export const handleNewsLetter = (email) => {
  return (dispatch) => {
    api
      .newsLetter(email)
      .then((res) => {
        if (res) {
          console.log(res);
          dispatch(displaySubscriptionConfirmation());
          setTimeout(() => {
            dispatch(hideSubscriptionConfirmation());
          }, 5000);
        }
        if (!res || !res.response.includes("OK")) {
          dispatch(displaySubscriptionError());
          setTimeout(() => {
            dispatch(hideSubscriptionError());
          }, 5000);
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(displaySubscriptionError());
        setTimeout(() => {
          dispatch(hideSubscriptionError());
        }, 5000);
      });
  };
};

//Обработчик отправки сообщения пользователя
export const handleGetInTouch = (resetForm, data) => {
  return (dispatch) => {
    dispatch(displayLoading());
    api
      .getInTouch(data)
      .then((res) => {
        dispatch(hideLoading());
        if (res) {
          console.log(res);
          dispatch(openPopupConfirmationGetMessageFromTheUser());
          resetForm();
        }
        if (!res || !res.response.includes("OK")) {
          dispatch(openPopupTheErrorWhenMessageNotSend());
        }
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => {
          dispatch(hideLoading());
          dispatch(openPopupTheErrorWhenMessageNotSend());
        }, 2000);
      });
  };
};

export const handleSendOrder = (handleCloseOrderPhotoSessionPopup, resetForm, data) => {
  return (dispatch) => {
    dispatch(displayLoading());
    api
      .sendOrder(data)
      .then((res) => {
        dispatch(hideLoading());
        if (res) {
          dispatch(openPopupConfirmationOfTheOrder());
          resetForm();
        }
        if (!res || !res.response.includes("OK")) {
          dispatch(openPopupTheErrorWhenOderNotSend());
        }
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => {
          dispatch(hideLoading());
          dispatch(openPopupTheErrorWhenOderNotSend());
        }, 2000);
      });
  };
};

export const handleTypesPhotos = (type, pathname) => {
  return (dispatch) => {
    const photos = JSON.parse(sessionStorage.getItem("getPhotos"));
    const showPhotos = photos.filter((item) => {
      if (item.metadata.type.includes(type) || item.contentType.includes(type)) {
        if (pathname === "/") {
          return !item.metadata.type.includes("woman") && !item.metadata.type.includes("discharge");
        }
        return item;
      }
      return null;
    });
    if (pathname === "/") {
      return dispatch(showGalleryPhotos(handlerDisplayPhotoMainPage(randomPhotos(showPhotos, showPhotos.length))));
    }
    dispatch(getAllPhotosOneType(sortPhotos(showPhotos)));
    dispatch(showGalleryPhotos(handlerDisplayPhotoGallery(sortPhotos(showPhotos))));
  };
};

//Сортировать фотографии одного типа
export const sortPhotos = (arrPhotos) => {
  return [...arrPhotos].sort((a, b) => {
    return a.name.match(/\d+/) - b.name.match(/\d+/);
  });
};

// Выводить рандомные фотографии при клике на 'все фотографии', на главной странице
const randomPhotos = (arr, n) => {
  let randomN = [];
  while (randomN.length < n) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    randomN = [...randomN, arr[randomIndex]];
    arr.splice(randomIndex, 1);
  }
  return randomN;
};

//Выводить на экран разное кол-во фотографий при разных разрешениях на главной странице
const handlerDisplayPhotoMainPage = (arrPhotos) => {
  if (window.innerWidth >= 1025) {
    return arrPhotos.slice(0, 12);
  }
  if (window.innerWidth > 768) {
    return arrPhotos.slice(0, 9);
  }
  if (window.innerWidth > 568) {
    return arrPhotos.slice(0, 8);
  }
  if (window.innerWidth >= 320) {
    return arrPhotos.slice(0, 5);
  }
};

//Выводить на экран разное кол-во фотографий при разных разрешениях в фотогалереи
const handlerDisplayPhotoGallery = (arrPhotos) => {
  if (window.innerWidth >= 1280) {
    return arrPhotos.slice(0, 16);
  }
  if (window.innerWidth >= 769) {
    return arrPhotos.slice(0, 12);
  }
  if (window.innerWidth > 569) {
    return arrPhotos.slice(0, 8);
  }
  if (window.innerWidth >= 320) {
    return arrPhotos.slice(0, 5);
  }
};
