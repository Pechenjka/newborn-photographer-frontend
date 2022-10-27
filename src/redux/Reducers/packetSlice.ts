import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiApp } from "../../utils/apiApp";
import { ICategory, PropsInitialStatePacketSlice, IPacket, PropsBoolean } from "../../types";

export const createPacket = createAsyncThunk("packet/createPacket", async (data: IPacket, { rejectWithValue }) => {
  try {
    const res = await apiApp().createPacket(data);
    return res.data;
  } catch (e) {
    return rejectWithValue("Ошибка, не удалось создать пакет!");
  }
});

export const getPacketWithDetailsDescription = createAsyncThunk(
  "packet/getPacketWIthDetailsDescription",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await apiApp().getPacketWithDetailsDescription(id);
      return res.data;
    } catch (e) {
      return rejectWithValue("Ошибка, подробные данные пакета не получены");
    }
  }
);

export const getPacketsCategories = createAsyncThunk("packet/getPacketsCategories", async (_, { rejectWithValue }) => {
  try {
    const res = await apiApp().getPacketsCategories();
    return res.data;
  } catch (e) {
    return rejectWithValue("Ошибка, не удалось загрузить категории пакетов!");
  }
});

export const getPacketsPinned = createAsyncThunk(
  "packet/getPacketsPinned",
  async (arg: { pinned: boolean }, { rejectWithValue }) => {
    try {
      const res = await apiApp().getArrPackets(`/?pinned=${arg.pinned}`);

      return res.data;
    } catch (e) {
      return rejectWithValue("Ошибка, не удалось загрузить популярные пакеты!");
    }
  }
);

export const getArrPackets = createAsyncThunk(
  "packet/getArrPackets",
  async (arg: { photosessionType: string }, { rejectWithValue }) => {
    try {
      const res = await apiApp().getArrPackets(`/?photosessionType=${arg.photosessionType}`);
      return res.data;
    } catch (e) {
      return rejectWithValue("Ошибка, не удалось загрузить пакеты!");
    }
  }
);

const initialState: PropsInitialStatePacketSlice = {
  loading: {
    getArrPackets: false,
    getPacketsPinned: false,
    createPacket: false,
    getPacketWithDetailsDescription: false,
  },
  error: {
    newPacket: "",
    packets: "",
    packetDetail: "",
    packetsPinned: "",
  },
  getPackets: [],
  getPinnedPackets: [],
  getPacketsCategories: [],
  packetWithDetailsDescription: null,
  packetInBasket: [],
  basketIsNotEmpty: false,
};

export const packetSlice = createSlice({
  name: "packet",
  initialState,
  reducers: {
    handlerAddPacketInBasket(state, action: { payload: any }) {
      if (!sessionStorage.getItem("packetsInBasket")) {
        sessionStorage.setItem("packetsInBasket", JSON.stringify([action.payload]));
        state.packetInBasket = [...state.packetInBasket, action.payload];
        state.basketIsNotEmpty = true;
      } else {
        if (!state.packetInBasket.length) {
          state.packetInBasket = [...state.packetInBasket, ...action.payload];
          state.basketIsNotEmpty = true;
        } else {
          state.packetInBasket = [...state.packetInBasket, action.payload];
          const obj = JSON.parse(sessionStorage.getItem("packetsInBasket") as string);
          const newArr = obj.filter((item: IPacket) => {
            return item._id !== action.payload._id && item;
          });
          newArr.push(action.payload);
          sessionStorage.setItem("packetsInBasket", JSON.stringify(newArr));
        }
      }
    },
    handlerDeletePacketFromBasket(state, action: { payload: string | null }) {
      if (action.payload === null) {
        sessionStorage.removeItem("packetsInBasket");
        state.packetInBasket = [];
      } else {
        const remainingPackages = state.packetInBasket.filter((packet: IPacket) => {
          return packet._id !== action.payload && packet;
        });
        state.packetInBasket = remainingPackages;
      }
    },
    handlerBasketIsNotEmpty(state, action: PropsBoolean) {
      state.basketIsNotEmpty = action.payload;
    },
    handlerDeleteDetailsPacket(state, action: { payload: null }) {
      state.packetWithDetailsDescription = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getArrPackets.pending, (state) => {
      state.loading.getArrPackets = true;
    });
    builder.addCase(getArrPackets.fulfilled, (state, action: { payload: IPacket[] }) => {
      state.loading.getArrPackets = false;
      state.getPackets = action.payload;
    });
    builder.addCase(getArrPackets.rejected, (state, action: { payload: any }) => {
      state.loading.getArrPackets = false;
      state.error.packets = action.payload;
    });
    builder.addCase(getPacketsCategories.fulfilled, (state, action: { payload: ICategory[] }) => {
      state.getPacketsCategories = action.payload;
    });
    builder.addCase(getPacketsPinned.pending, (state) => {
      state.loading.getPacketsPinned = true;
    });
    builder.addCase(getPacketsPinned.fulfilled, (state, action: { payload: IPacket[] }) => {
      state.getPinnedPackets = action.payload;
      state.loading.getPacketsPinned = false;
    });
    builder.addCase(getPacketsPinned.rejected, (state, action: { payload: any }) => {
      state.error.packetsPinned = action.payload;
      state.loading.getPacketsPinned = false;
    });
    builder.addCase(createPacket.pending, (state) => {
      state.loading.createPacket = true;
    });
    builder.addCase(createPacket.fulfilled, (state) => {
      state.loading.createPacket = false;
    });
    builder.addCase(createPacket.rejected, (state, action: { payload: any }) => {
      state.loading.createPacket = false;
      state.error.newPacket = action.payload;
    });
    builder.addCase(getPacketWithDetailsDescription.pending, (state) => {
      state.loading.getPacketWithDetailsDescription = true;
    });
    builder.addCase(getPacketWithDetailsDescription.fulfilled, (state, action: { payload: IPacket }) => {
      state.loading.getPacketWithDetailsDescription = false;
      state.packetWithDetailsDescription = action.payload;
    });
    builder.addCase(getPacketWithDetailsDescription.rejected, (state, action: { payload: any }) => {
      state.loading.getPacketWithDetailsDescription = false;
      state.error.packetDetail = action.payload;
    });
  },
});

export const {
  handlerAddPacketInBasket,
  handlerDeletePacketFromBasket,
  handlerBasketIsNotEmpty,
  handlerDeleteDetailsPacket
} = packetSlice.actions;

export default packetSlice.reducer;
