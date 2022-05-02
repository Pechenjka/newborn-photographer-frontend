import { configureStore } from "@reduxjs/toolkit";
import photoSlice from "./Reducers/photoSlice";
import appSlice from "./Reducers/appSlice";

export const store = configureStore({
  reducer: {
    photos: photoSlice,
    app: appSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
