import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api";
import {
  AppState,
  IDataDescriptionPacket,
  IDataOrder,
  PropsBoolean,
  PropsPayLoadGetInTouch,
  PropsPayLoadSendEmail,
} from "../../types";

const initialState: AppState = {
  loading: false,
  openModalWithDescribePacket: false,
  dataOrder: { type: "", title: "", price: "", location: "" },
  dataDescriptionPacket: {
    title: "",
    description: [],
    imageDescriptionPacket: "",
    imageDescriptionPacketMobile: "",
    price: "",
  },
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

export const sendOrder = createAsyncThunk("app/sendOrder", async (data: any, { dispatch }) => {
  try {
    const res = await api.sendOrder(data);
    dispatch(handlerModalConfirmationOrder(true));
    return res;
  } catch (e) {
    dispatch(handlerModalNotSendOrder(true));
  }
});

export const sendEmail = createAsyncThunk("app/sendEmail", async ({ data }: PropsPayLoadSendEmail, { dispatch }) => {
  try {
    const res = await api.newsLetter({ data });
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

export const sendMessageGetInTouch = createAsyncThunk(
  "app/sendMessageGetInTouch",
  async ({ data }: PropsPayLoadGetInTouch, { dispatch }) => {
    try {
      const res = await api.getInTouch({ data });
      dispatch(handlerModalConfirmationGetInTouch(true));
      return res;
    } catch (e) {
      dispatch(handlerModalErrorGetInTouch(true));
    }
  }
);

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    handlerTimeOutClick: (state, action: PropsBoolean): void => {
      state.timeOutClick = action.payload;
    },
    handlerConfirmationSendEmail: (state, action: PropsBoolean): void => {
      state.confirmationSendEmail = action.payload;
    },
    handlerErrorSendEmail: (state, action: PropsBoolean): void => {
      state.errorSendEmail = action.payload;
    },

    handlerModalConfirmationGetInTouch: (state, action: PropsBoolean): void => {
      state.openModalConfirmationGetInTouch = action.payload;
    },
    handlerModalErrorGetInTouch: (state, action: PropsBoolean): void => {
      state.openModalErrorGetInTouch = action.payload;
    },

    handlerModalNotSendOrder: (state, action: PropsBoolean): void => {
      state.openModalNotSendOrder = action.payload;
    },
    handlerModalConfirmationOrder: (state, action: PropsBoolean): void => {
      state.openModalConfirmationOrder = action.payload;
    },
    handlerModalWithDescribePacket: (state, action: PropsBoolean): void => {
      state.openModalWithDescribePacket = action.payload;
    },
    handlerModalOrder: (state, action: PropsBoolean): void => {
      state.openModalOrder = action.payload;
    },
    handlerDataOrder: (state, action: { payload: IDataOrder }): void => {
      state.dataOrder = action.payload;
    },
    handlerDataDescription: (state, action: { payload: IDataDescriptionPacket }): void => {
      state.dataDescriptionPacket = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendOrder.pending, (state): void => {
      state.loading = true;
    });
    builder.addCase(sendOrder.fulfilled, (state): void => {
      state.loading = false;
    });
    builder.addCase(sendOrder.rejected, (state): void => {
      state.loading = false;
    });
    builder.addCase(sendMessageGetInTouch.pending, (state): void => {
      state.loading = true;
    });
    builder.addCase(sendMessageGetInTouch.fulfilled, (state): void => {
      state.loading = false;
    });
    builder.addCase(sendMessageGetInTouch.rejected, (state): void => {
      state.loading = false;
    });
  },
});

export const {
  handlerModalWithDescribePacket,
  handlerDataOrder,
  handlerDataDescription,
  handlerModalOrder,
  handlerModalConfirmationOrder,
  handlerModalNotSendOrder,
  handlerConfirmationSendEmail,
  handlerErrorSendEmail,
  handlerModalConfirmationGetInTouch,
  handlerModalErrorGetInTouch,
} = appSlice.actions;

export default appSlice.reducer;
