import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import { IPhoto, PhotosState, PropsArrPhotos, PropsBoolean, PropsRandomPhotos } from "../../types";

export const fetchPhotos = createAsyncThunk(
  "photo/fetchPhotos",
  async (arg: { type: string | null; order: string }, { dispatch, rejectWithValue }) => {
    try {
      const res = await api.getArrPhotos(
        `${
          arg.type === null
            ? "?type=newborn&type=baby&type=family&type=pregnancy&type=christening"
            : `?type=${arg.type}`
        }`
      );
      if (arg.order === "random") {
        dispatch(handlerRandomPhotos({ arr: res, n: res.length }));
      } else {
        dispatch(handlerSortPhotos(res));
      }
      return res;
    } catch (e) {
      return rejectWithValue("Ошибка, не удалось загрузить фотографии!");
    }
  }
);

const initialState: PhotosState = {
  getPhotos: [],
  showPhotos: [],
  categoryPhotosBtn: null,
  loading: false,
  error: "",
  openModalWithImage: false,
  dataForImageModal: "",
};

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    handlerDataImageForModal: (state, action: { payload: string }): void => {
      state.dataForImageModal = action.payload;
    },
    handlerModalWithImage: (state, action: PropsBoolean): void => {
      state.openModalWithImage = action.payload;
    },
    handlerActiveCategoryPhotosBtn: (state, action: { payload: string | null }): void => {
      state.categoryPhotosBtn = action.payload;
    },
    handlerRandomPhotos: (state, action: PropsRandomPhotos): void => {
      let randomN: IPhoto[] = [];
      while (randomN.length < action.payload.n) {
        const randomIndex = Math.floor(Math.random() * action.payload.arr.length);
        randomN = [...randomN, action.payload.arr[randomIndex]];
        action.payload.arr.splice(randomIndex, 1);
      }
      const countPhotos = (arrItem: IPhoto[]): IPhoto[] => {
        if (window.innerWidth >= 1025) {
          return arrItem.slice(0, 12);
        }
        if (window.innerWidth > 768) {
          return arrItem.slice(0, 9);
        }
        if (window.innerWidth > 568) {
          return arrItem.slice(0, 8);
        }
        if (window.innerWidth >= 320) {
          return arrItem.slice(0, 5);
        }
        return arrItem;
      };
      state.showPhotos = countPhotos(randomN);
    },
    handlerSortPhotos: (state, action: PropsArrPhotos) => {
      const countSortPhotos = (arrItem: IPhoto[]): IPhoto[] => {
        if (window.innerWidth >= 1025) {
          return arrItem.slice(0, 16);
        }
        if (window.innerWidth > 768) {
          return arrItem.slice(0, 12);
        }
        if (window.innerWidth > 568) {
          return arrItem.slice(0, 8);
        }
        if (window.innerWidth >= 320) {
          return arrItem.slice(0, 5);
        }
        return arrItem;
      };
      state.showPhotos = countSortPhotos(action.payload);
    },
    handlerShowAddPhotos: (state, action: PropsArrPhotos) => {
      state.showPhotos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.pending, (state): void => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchPhotos.fulfilled, (state, action: { payload: IPhoto[] }): void => {
     state.getPhotos = action.payload;
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchPhotos.rejected, (state, action: { payload: any }): void => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {
  handlerRandomPhotos,
  handlerActiveCategoryPhotosBtn,
  handlerModalWithImage,
  handlerDataImageForModal,
  handlerSortPhotos,
  handlerShowAddPhotos,
} = photoSlice.actions;
export default photoSlice.reducer;
