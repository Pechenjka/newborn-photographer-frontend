import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api";

const initialState = {
  loading: false,
  openModalWithDescribePacket: false,
  dataOrder: null,
  openModalOrder: false,
  openModalConfirmationOrder: false,
  openModalNotSendOrder: false,

  // popupWithDescribePacket: false,
  // orderPhotoSessionPopup: false,
  // showImageInThePopup: null,
  // slideShow: [],
  // randomSortPhotos: false,
  // allPhotosOneType: [],
  // typesPhotos: "",
  // showDataPacket: [],
  // displayPhotosOnThePagePhotoGallery: false,
  // dataOrder: [],
  // loadingPhotos: false,
};

export const sendOrder = createAsyncThunk("app/sendOrder", async ({ data }, { dispatch }) => {
  try {
    const res = await api.sendOrder(data);
    dispatch(handlerModalConfirmationOrder(true));
    return res;
  } catch (e) {
    dispatch(handlerModalNotSendOrder(true));
  }
});

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    handlerModalNotSendOrder: (state, action) => {
      state.openModalNotSendOrder = action.payload;
    },
    handlerModalConfirmationOrder: (state, action) => {
      state.openModalConfirmationOrder = action.payload;
    },
    handlerModalWithDescribePacket: (state, action) => {
      state.openModalWithDescribePacket = action.payload;
    },
    handlerModalOrder: (state, action) => {
      state.openModalOrder = action.payload;
    },
    handlerDataOrder: (state, action) => {
      state.dataOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendOrder.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(sendOrder.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(sendOrder.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const {
  handlerModalWithDescribePacket,
  handlerDataOrder,
  handlerModalOrder,
  handlerModalConfirmationOrder,
  handlerModalNotSendOrder,
} = appSlice.actions;
export default appSlice.reducer;
