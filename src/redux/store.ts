import { configureStore } from "@reduxjs/toolkit";
import photoSlice from "./Reducers/photoSlice";
import appSlice from "./Reducers/appSlice";
import packetSlice from "./Reducers/packetSlice";
import userSlice from "./Reducers/userSlice";
import orderSlice from "./Reducers/orderSlice";

export const store = configureStore({
  reducer: {
    photos: photoSlice,
    packets: packetSlice,
    app: appSlice,
    user: userSlice,
    order: orderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
