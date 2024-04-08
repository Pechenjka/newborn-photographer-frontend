import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  PropsInitialStateAppSlice,
  PropsBoolean,
  PropsPayLoadGetInTouch,
  PropsPayLoadSendEmail,
  PostInstagramProfile,
} from "../../types";
import { apiApp } from "../../utils/apiApp";

const initialState: PropsInitialStateAppSlice = {
  loading: {
    sendMessageGetInTouch: false,
    instagram: false,
    sendEmail: false,
  },
  confirmationGetInTouch: false,
  errorGetInTouch: false,
  displayPricePackets: [],
  confirmationSendEmail: false,
  errorSendEmail: false,
  error: {
    instagram: "",
  },
  language: "en",
  instagramProfile: [],
};

export const handleGetInstagramProfile = createAsyncThunk("app/getInstagramProfile", async (_, { rejectWithValue }) => {
  try {
    const res = await apiApp().getInstagramProfile();
    return res.data;
  } catch (e) {
    return rejectWithValue("Error, instagram profile has not been get");
  }
});

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
    builder.addCase(handleGetInstagramProfile.pending, (state) => {
      state.loading.instagram = true;
    });
    builder.addCase(handleGetInstagramProfile.rejected, (state, action: { payload: any }) => {
      state.loading.instagram = false;
      state.error.instagram = action.payload;
    });
    builder.addCase(handleGetInstagramProfile.fulfilled, (state, action: { payload: any }) => {
      state.loading.instagram = false;
      state.instagramProfile = action.payload.data.filter((post: PostInstagramProfile) => post.media_type !== "VIDEO");
    });
    builder.addCase(sendMessageGetInTouch.pending, (state): void => {
      state.loading.sendMessageGetInTouch = true;
    });
    builder.addCase(sendMessageGetInTouch.fulfilled, (state): void => {
      state.loading.sendMessageGetInTouch = false;
    });
    builder.addCase(sendMessageGetInTouch.rejected, (state): void => {
      state.loading.sendMessageGetInTouch = false;
    });
    builder.addCase(sendEmail.pending, (state): void => {
      state.loading.sendEmail = true;
    });
    builder.addCase(sendEmail.fulfilled, (state): void => {
      state.loading.sendEmail = false;
    });
    builder.addCase(sendEmail.rejected, (state): void => {
      state.loading.sendEmail = false;
    });
  },
});

export const {
  handlerConfirmationSendEmail,
  handlerErrorSendEmail,
  handlerConfirmationGetInTouch,
  handlerErrorGetInTouch,
} = appSlice.actions;

export default appSlice.reducer;
