import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PropsInitialStateAppSlice, PropsBoolean, PropsPayLoadGetInTouch, PropsPayLoadSendEmail } from "../../types";
import { apiApp } from "../../utils/apiApp";

const initialState: PropsInitialStateAppSlice = {
  loading: false,
  confirmationGetInTouch: false,
  errorGetInTouch: false,
  displayPricePackets: [],
  confirmationSendEmail: false,
  errorSendEmail: false,
  language: "en",
};

export const sendEmail = createAsyncThunk("app/sendEmail", async ({ data }: PropsPayLoadSendEmail, { dispatch }) => {
  try {
    const res = await apiApp().newsLetter({ data });
    dispatch(handlerConfirmationSendEmail(true));
    setTimeout(() => {
      dispatch(handlerConfirmationSendEmail(false));
    }, 4000);
    return res.data;
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
      const res = await apiApp().getInTouch({ data });
      dispatch(handlerConfirmationGetInTouch(true));
      setTimeout(() => {
        dispatch(handlerConfirmationGetInTouch(false));
      }, 5000);
      return res.data;
    } catch (e) {
      dispatch(handlerErrorGetInTouch(true));
      setTimeout(() => {
        dispatch(handlerErrorGetInTouch(false));
      }, 5000);
    }
  }
);

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    handleSetLanguage: (state, action: { payload: string }) => {
      state.language = action.payload;
    },
    handlerConfirmationSendEmail: (state, action: PropsBoolean): void => {
      state.confirmationSendEmail = action.payload;
    },
    handlerErrorSendEmail: (state, action: PropsBoolean): void => {
      state.errorSendEmail = action.payload;
    },

    handlerConfirmationGetInTouch: (state, action: PropsBoolean): void => {
      state.confirmationGetInTouch = action.payload;
    },
    handlerErrorGetInTouch: (state, action: PropsBoolean): void => {
      state.errorGetInTouch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendMessageGetInTouch.pending, (state): void => {
      state.loading = true;
    });
    builder.addCase(sendMessageGetInTouch.fulfilled, (state): void => {
      state.loading = false;
    });
    builder.addCase(sendMessageGetInTouch.rejected, (state, action: { payload: any }): void => {
      state.loading = false;
    });
  },
});

export const {
  handlerConfirmationSendEmail,
  handlerErrorSendEmail,
  handlerConfirmationGetInTouch,
  handlerErrorGetInTouch,
  handleSetLanguage
} = appSlice.actions;

export default appSlice.reducer;
