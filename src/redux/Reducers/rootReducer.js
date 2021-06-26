import { combineReducers } from "redux";
import photoReducer from "./photoReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  photos: photoReducer,
  user: userReducer,
});

export default rootReducer;
