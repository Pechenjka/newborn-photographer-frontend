import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import {
  IPhoto,
  PhotosState,
  PropsArrPhotos,
  PropsBoolean,
  PropsPayloadString,
  PropsRandomPhotos,
  PropsShowPhotos,
} from "../../types";

export const fetchPhotos = createAsyncThunk("photo/fetchPhotos", async (_: void, { rejectWithValue }) => {
  try {
    return await api.getArrPhotos();
  } catch (e) {
    return rejectWithValue("Ошибка, не удалось загрузить фотографии!");
  }
});

export const handlerShowPhotos = createAsyncThunk(
  "photo/showPhotos",
  async ({ type, order }: PropsShowPhotos, { dispatch }) => {
    try {
      const allPhotos: IPhoto[] = await JSON.parse(sessionStorage.getItem("getPhotos") as string);
      const arrRes: IPhoto[] =  allPhotos.filter((item: IPhoto) => {
        if (item.metadata.type.includes(type)) {
          return item;
        } else if (!item.metadata.type.includes(type) && type === "all") {
          return !item.metadata.type.includes("woman") && !item.metadata.type.includes("discharge");
        }
        return null;
      });
      if (order === "random") {
        dispatch(handlerRandomPhotos({ arr: arrRes, n: arrRes.length }));
      } else {
        dispatch(handlerSortPhotos(arrRes));
      }
      return arrRes;
    } catch (e) {
      console.log(e);
    }
  }
);

const initialState: PhotosState = {
  getPhotosOneType: [],
  showPhotos: [],
  categoryPhotosBtn: "all",
  loading: false,
  error: "",
  openModalWithImage: false,
  dataForImageModal: "",
};

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    handlerDataImageForModal: (state, action: PropsPayloadString): void => {
      state.dataForImageModal = action.payload;
    },
    handlerModalWithImage: (state, action: PropsBoolean): void => {
      state.openModalWithImage = action.payload;
    },
    handlerActiveCategoryPhotosBtn: (state, action: PropsPayloadString): void => {
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
      sessionStorage.setItem("getPhotos", JSON.stringify(action.payload));
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchPhotos.rejected, (state, action: { payload: any }): void => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(handlerShowPhotos.fulfilled, (state, action: { payload: any }): void => {
      state.getPhotosOneType = action.payload;
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
