import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiApp } from "../../utils/apiApp";
import { PropsText } from "../../types";

export const createTextOnPage: any = createAsyncThunk(
  "editor/createTextOnPage",
  async (data: { text: string; typePhotoSession: string }, { rejectWithValue }) => {
    try {
      const res = await apiApp().createTextOnPage(data);
      return res.data;
    } catch (e) {
      return rejectWithValue("Ошибка,добавить текст не получилось");
    }
  }
);

export const getTextOnPage: any = createAsyncThunk("editor/getTextOnPage", async (_, { rejectWithValue }) => {
  try {
    const res = await apiApp().getTextOnPage();
    return res.data;
  } catch (e) {
    return rejectWithValue("Ошибка, текст не удалось загрузить с сервера");
  }
});

export const updateTextOnPage: any = createAsyncThunk("editor/updateTextOnPage", async (data, { rejectWithValue }) => {
  try {
    const res = await apiApp().addOrUpdateTextOnPage(data);
    return res.data;
  } catch (e) {
    return rejectWithValue("Ошибка, обновить тект не получилось");
  }
});

export interface PropsInitialStateEditor {
  aboutPhotoSession: {
    newborn: PropsText[];
    family: PropsText[];
  };
  error: {
    createTextAboutPhotoSession: string;
    getTextsAboutPhotoSession: string;
  };
  loading: {
    createTextAboutPhotoSession: boolean;
    getTextsAboutPhotoSession: boolean;
  };
}

const initialState: PropsInitialStateEditor = {
  aboutPhotoSession: {
    newborn: [],
    family: [],
  },
  error: {
    createTextAboutPhotoSession: "",
    getTextsAboutPhotoSession: "",
  },
  loading: {
    createTextAboutPhotoSession: false,
    getTextsAboutPhotoSession: false,
  },
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    handleOptionsAddTextOnPage: (state, action) => {},
  },
  extraReducers: {
    [createTextOnPage.pending]: (state) => {
      state.loading.createTextAboutPhotoSession = true;
    },
    [createTextOnPage.rejected]: (state, action: any) => {
      state.error.createTextAboutPhotoSession = action.payload;
      state.loading.createTextAboutPhotoSession = false;
    },
    [createTextOnPage.fulfilled]: (state) => {
      state.loading.createTextAboutPhotoSession = false;
    },
    [getTextOnPage.pending]: (state) => {
      state.loading.getTextsAboutPhotoSession = true;
    },
    [getTextOnPage.rejected]: (state, action: any) => {
      state.error.getTextsAboutPhotoSession = action.payload;
      state.loading.getTextsAboutPhotoSession = false;
    },
    [getTextOnPage.fulfilled]: (state, action: any) => {
      action.payload.map((item: any) => {
        if (item.typePhotoSession.includes("family")) {
          state.aboutPhotoSession.family = [...state.aboutPhotoSession.family, item];
        }
        if (item.typePhotoSession.includes("newborn")) {
          state.aboutPhotoSession.newborn = [...state.aboutPhotoSession.newborn, item];
        }
      });
      state.loading.getTextsAboutPhotoSession = false;
    },
  },
});

export const {} = editorSlice.actions;
export default editorSlice.reducer;
