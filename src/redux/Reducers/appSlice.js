import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api";

const initialState = {
  loading: false,
  openModalWithDescribePacket: false,
  dataOrder: null,
  openModalOrder: false,
  openModalConfirmationGetInTouch: false,
  openModalErrorGetInTouch: false,
  openModalConfirmationOrder: false,
  openModalNotSendOrder: false,
  displayPricePackets: [],
  confirmationSendEmail: false,
  errorSendEmail: false,
  timeOutClick: true,
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

export const sendEmail = createAsyncThunk("app/sendEmail", async ({ data }, { dispatch }) => {
  try {
    const res = await api.newsLetter(data);
    dispatch(handlerConfirmationSendEmail(true));
    setTimeout(() => {
      dispatch(handlerConfirmationSendEmail(false));
    }, 4000);
    return res;
  } catch (e) {
    dispatch(handlerErrorSendEmail(true));
    setTimeout(() => {
      dispatch(handlerErrorSendEmail(false));
    }, 4000);
  }
});

export const sendMessageGetInTouch = createAsyncThunk("app/sendMessageGetInTouch", async ({ data }, { dispatch }) => {
  try {
    const res = await api.getInTouch(data);
    dispatch(handlerModalConfirmationGetInTouch(true));
    return res;
  } catch (e) {
     dispatch(handlerModalErrorGetInTouch(true));
  }
});

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    handlerDisplayPricePackets: (state, action) => {
      if (action.payload.packets === null) {
        state.displayPricePackets = [];
      } else {
        const newArr = action.payload.packets.filter((item) => {
          if (action.payload.path.includes(item.packet)) {
            return item;
          }
          return null
        });
        state.displayPricePackets = newArr;
      }
    },
    handlerTimeOutClick: (state, action) => {
      state.timeOutClick = action.payload;
    },
    handlerConfirmationSendEmail: (state, action) => {
      state.confirmationSendEmail = action.payload;
    },
    handlerErrorSendEmail: (state, action) => {
      state.errorSendEmail = action.payload;
    },

    handlerModalConfirmationGetInTouch: (state, action) => {
      state.openModalConfirmationGetInTouch = action.payload;
    },
    handlerModalErrorGetInTouch: (state, action) => {
      state.openModalErrorGetInTouch = action.payload;
    },

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
    builder.addCase(sendOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(sendOrder.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(sendOrder.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(sendMessageGetInTouch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(sendMessageGetInTouch.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(sendMessageGetInTouch.rejected, (state) => {
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
  handlerDisplayPricePackets,
  handlerConfirmationSendEmail,
  handlerErrorSendEmail,
  handlerModalConfirmationGetInTouch,
  handlerModalErrorGetInTouch,
  handlerTimeOutClick
} = appSlice.actions;
export default appSlice.reducer;
