import { INSTAGRAM_USER } from "../types";

const initialState = {
  instagramUser: [],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSTAGRAM_USER:
      return { ...state, instagramUser: action.payload };
    default:
      return state;
  }
};

export default userReducer;
