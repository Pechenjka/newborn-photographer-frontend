import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const fetchPhotos = createAsyncThunk("photo/fetchPhotos", async (_, { rejectWithValue }) => {
  try {
    const res = await api.getArrPhotos();
    console.log(res);
    return res;
  } catch (e) {
    return rejectWithValue("Ошибка, не удалось загрузить фотографии!");
  }
});

export const showPhotos = createAsyncThunk("photo/showPhotos", async ({ type, order }, { dispatch, getState }) => {
  try {
    const allPhotos = JSON.parse(sessionStorage.getItem("getPhotos"));
    const arrRes = allPhotos.filter((item) => {
      if (item.metadata.type.includes(type)) {
        return item;
      } else if (!item.metadata.type.includes(type) && type === "all") {
        return !item.metadata.type.includes("woman") && !item.metadata.type.includes("discharge");
      }
    });
    if (order === "random") {
      dispatch(handlerRandomPhotos({ arr: arrRes, n: arrRes.length }));
    }
  } catch (e) {
    console.log(e);
  }
});

const initialState = {
  showPhotos: [],
  categoryPhotosBtn: "all",
  loading: false,
  error: "",
  openModalWithImage: false,
  dataForImageModal: null
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

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    handlerDataImageForModal: (state, action) => {
      state.dataForImageModal = action.payload
    },
    handlerModalWithImage: (state, action) => {
      state.openModalWithImage = action.payload
    },
    handlerActiveCategoryPhotosBtn: (state, action) => {
      state.categoryPhotosBtn = action.payload;
    },
    handlerRandomPhotos: (state, action) => {
      let randomN = [];
      while (randomN.length < action.payload.n) {
        const randomIndex = Math.floor(Math.random() * action.payload.arr.length);
        randomN = [...randomN, action.payload.arr[randomIndex]];
      }
      const countPhotos = () => {
        if (window.innerWidth >= 1025) {
          return randomN.slice(0, 12);
        }
        if (window.innerWidth > 768) {
          return randomN.slice(0, 9);
        }
        if (window.innerWidth > 568) {
          return randomN.slice(0, 8);
        }
        if (window.innerWidth >= 320) {
          return randomN.slice(0, 5);
        }
      };
      state.showPhotos = countPhotos();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      sessionStorage.setItem("getPhotos", JSON.stringify(action.payload));
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchPhotos.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { handlerRandomPhotos, handlerActiveCategoryPhotosBtn, handlerModalWithImage, handlerDataImageForModal } = photoSlice.actions;
export default photoSlice.reducer;
