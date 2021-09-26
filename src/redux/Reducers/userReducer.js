import {
  CLOSE_BURGER_MENU,
  CLOSE_POPUP_CONFIRMATION_MESSAGE_FROM_THE_USER,
  CLOSE_POPUP_CONFIRMATION_OF_THE_ORDER,
  CLOSE_POPUP_THE_ERROR_WHEN_MESSAGE_NOT_SEND,
  CLOSE_POPUP_THE_ERROR_WHEN_ODER_NOT_SEND,
  DISPLAY_PRICE_PACKETS,
  DISPLAY_SUBSCRIPTION_CONFIRMATION,
  DISPLAY_SUBSCRIPTION_ERROR,
  HIDE_SUBSCRIPTION_CONFIRMATION,
  HIDE_SUBSCRIPTION_ERROR,
  INSTAGRAM_USER,
  OPEN_BURGER_MENU,
  OPEN_POPUP_CONFIRMATION_MESSAGE_FROM_THE_USER,
  OPEN_POPUP_CONFIRMATION_OF_THE_ORDER,
  OPEN_POPUP_THE_ERROR_WHEN_MESSAGE_NOT_SEND,
  OPEN_POPUP_THE_ERROR_WHEN_ODER_NOT_SEND,
} from "../types";

const initialState = {
  instagramUser: [],
  popupConfirmationOfTheOrder: false,
  popupTheErrorWhenOrderNotSend: false,
  popupConfirmationGetMessageFromTheUser: false,
  popupTheErrorWhenMessageNotSend: false,
  pricePackets: [],
  burgerMenu: false,
  subscriptionConfirmation: false,
  subscriptionError: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSTAGRAM_USER:
      return { ...state, instagramUser: action.payload };
    case OPEN_POPUP_CONFIRMATION_OF_THE_ORDER:
      return { ...state, popupConfirmationOfTheOrder: true };
    case CLOSE_POPUP_CONFIRMATION_OF_THE_ORDER:
      return { ...state, popupConfirmationOfTheOrder: false };
    case OPEN_POPUP_THE_ERROR_WHEN_ODER_NOT_SEND:
      return { ...state, popupTheErrorWhenOrderNotSend: true };
    case CLOSE_POPUP_THE_ERROR_WHEN_ODER_NOT_SEND:
      return { ...state, popupTheErrorWhenOrderNotSend: false };
    case OPEN_POPUP_CONFIRMATION_MESSAGE_FROM_THE_USER:
      return { ...state, popupConfirmationGetMessageFromTheUser: true };
    case CLOSE_POPUP_CONFIRMATION_MESSAGE_FROM_THE_USER:
      return { ...state, popupConfirmationGetMessageFromTheUser: false };
    case OPEN_POPUP_THE_ERROR_WHEN_MESSAGE_NOT_SEND:
      return { ...state, popupTheErrorWhenMessageNotSend: true };
    case CLOSE_POPUP_THE_ERROR_WHEN_MESSAGE_NOT_SEND:
      return { ...state, popupTheErrorWhenMessageNotSend: false };
    case DISPLAY_PRICE_PACKETS:
      return { ...state, pricePackets: action.payload };
    case OPEN_BURGER_MENU:
      return { ...state, burgerMenu: true };
    case CLOSE_BURGER_MENU:
      return { ...state, burgerMenu: false };
    case DISPLAY_SUBSCRIPTION_CONFIRMATION:
      return { ...state, subscriptionConfirmation: true };
    case HIDE_SUBSCRIPTION_CONFIRMATION:
      return { ...state, subscriptionConfirmation: false };
    case DISPLAY_SUBSCRIPTION_ERROR:
      return { ...state, subscriptionError: true };
    case HIDE_SUBSCRIPTION_ERROR:
      return { ...state, subscriptionError: false };
    default:
      return state;
  }
};

export default userReducer;
