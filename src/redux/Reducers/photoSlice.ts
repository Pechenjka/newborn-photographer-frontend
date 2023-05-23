import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  PropsInitialStatePhotoSlice,
  IPhoto,
  PropsArrPhotos,
  PropsBoolean,
  PropsRandomPhotos,
  PropsAddNewPhoto,
  PropsDeletePhoto,
} from "../../types";

import { apiApp } from "../../utils/apiApp";

export const fetchPhotos = createAsyncThunk(
  "photo/fetchPhotos",
  async (arg: { type: string | null; order: string }, { dispatch, rejectWithValue }) => {
    try {
      const res = await apiApp().getArrPhotos(
        `${
          arg.type === null
            ? "?type=newborn&type=baby&type=family&type=pregnancy&type=christening"
            : `?type=${arg.type}`
        }`
      );
      if (arg.order === "random") {
        dispatch(handlerRandomPhotos({ arr: res.data, n: res.data.length }));
      } else {
        dispatch(handlerSortPhotos(res.data));
      }
      return res.data;
    } catch (e) {
      return rejectWithValue("Error, the photos were not loaded!");
    }
  }
);

export const addNewPhoto = createAsyncThunk(
  "photo/addNewPhoto",
  async (data: PropsAddNewPhoto, { rejectWithValue }) => {
    try {
      const res = await apiApp().uploadPhoto(data);
      return res.data;
    } catch (e) {
      return rejectWithValue("Error, the photo was not loaded!");
    }
  }
);

export const deletePhoto: any = createAsyncThunk(
  "photo/deletePhoto",
  async (data: PropsDeletePhoto, { rejectWithValue, dispatch }) => {
    try {
      const res = await apiApp().deletePhoto(data.photoId);
      if (res) {
        dispatch(fetchPhotos({ type: data.type, order: data.path }));
      }
      return res.data;
    } catch (e) {
      return rejectWithValue("Error, the photo was not delete");
    }
  }
);

export const saveChangeSortPhotos: any = createAsyncThunk("photo/saveChangeSortPhotos", async (newArr: IPhoto[], { rejectWithValue }) => {
  try {
    const res = apiApp().changeOrderPhoto(newArr);
    return res.data;
  } catch (e) {
    return rejectWithValue("Error, the sort was not a happen");
  }
});

const initialState: PropsInitialStatePhotoSlice = {
  getPhotos: [],
  showPhotos: [],
  categoryPhotosBtn: null,
  loading: false,
  error: "",
  openModalWithImage: false,
  dataForImageModal: "",
  openChangeSortPhotos: false,
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
      action.payload.sort((a: any, b: any) => a.order - b.order);

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
    handlerOpenChangeSortPhotos: (state, action: { payload: boolean }) => {
      state.openChangeSortPhotos = action.payload;
    },
    changeOrderPhoto: (state, action: { payload: { id: string; duration: string } }) => {
      const arr = state.showPhotos;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i]._id === action.payload.id) {
          let tmp;
          if (action.payload.duration.includes("down") && i !== arr.length - 1) {
            tmp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = tmp;
            break;
          }
          if (action.payload.duration.includes("up") && i !== 0) {
            tmp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = tmp;
            break;
          }
        }
      }
      state.showPhotos = arr;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.pending, (state): void => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchPhotos.fulfilled, (state, action: { payload: IPhoto[] }): void => {
      // console.log(action.payload)
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
  changeOrderPhoto,
  handlerOpenChangeSortPhotos,
} = photoSlice.actions;
export default photoSlice.reducer;
