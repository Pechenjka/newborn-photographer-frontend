import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api";
import { ICategory, IPacket } from "../../types";

export const createPacket = createAsyncThunk("packet/createPacket", async (data: IPacket, { rejectWithValue }) => {
  try {
    return await api.createPackets(data);
  } catch (e) {
    return rejectWithValue("Ошибка, не удалось создать пакет!");
  }
});

export const getPacketWithDetailsDescription = createAsyncThunk(
  "packet/getPacketWIthDetailsDescription",
  async (id: string, { rejectWithValue }) => {
    try {
      return await api.getPacketWithDetailsDescription(id);
    } catch (e) {
      return rejectWithValue("Ошибка, детальные данные пакета не получены");
    }
  }
);

export const getPacketsCategories = createAsyncThunk("packet/getPacketsCategories", async (_, { rejectWithValue }) => {
  try {
    return await api.getPacketsCategories();
  } catch (e) {
    return rejectWithValue("Ошибка, не удалось загрузить категории пакетов!");
  }
});

export const getPacketsPinned = createAsyncThunk(
  "packet/getPacketsPinned",
  async (arg: { pinned: boolean }, { rejectWithValue }) => {
    try {
      return await api.getArrPackets(`/?pinned=${arg.pinned}`);
    } catch (e) {
      return rejectWithValue("Ошибка, не удалось загрузить популярные пакеты!");
    }
  }
);

export const getArrPackets = createAsyncThunk(
  "packet/getArrPackets",
  async (arg: { packet: string }, { rejectWithValue }) => {
    try {
      return await api.getArrPackets(`/?packet=${arg.packet}`);
    } catch (e) {
      return rejectWithValue("Ошибка, не удалось загрузить пакеты!");
    }
  }
);

export interface PacketState {
  loading: boolean;
  error: string;
  getPackets: IPacket[];
  getPinnedPackets: IPacket[];
  packetWithDetailsDescription: IPacket | null;
  getPacketsCategories: ICategory[];
  packetInBasket: IPacket[];
}

const initialState: PacketState = {
  loading: false,
  error: "",
  getPackets: [],
  getPinnedPackets: [],
  getPacketsCategories: [],
  packetWithDetailsDescription: null,
  packetInBasket: [],
};

export const packetSlice = createSlice({
  name: "packet",
  initialState,
  reducers: {
    handlerAddPacketInBasket(state, action: { payload: any }) {
      if (!sessionStorage.getItem("packetsInBasket")) {
        sessionStorage.setItem("packetsInBasket", JSON.stringify([action.payload]));
        state.packetInBasket = [...state.packetInBasket, action.payload];
      } else {
        if (!state.packetInBasket.length) {
          state.packetInBasket = [...state.packetInBasket, ...action.payload];
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
        console.log(action.payload);
        sessionStorage.removeItem("packetsInBasket");
        state.packetInBasket = [];
      } else {
        const res = state.packetInBasket.filter((packet: IPacket) => {
          return packet._id !== action.payload && packet;
        });
        state.packetInBasket = res;
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getArrPackets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getArrPackets.fulfilled, (state, action: { payload: any }) => {
      state.loading = false
      state.getPackets = action.payload;
    });
    builder.addCase(getArrPackets.rejected, (state, action: { payload: any }) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getPacketsCategories.fulfilled, (state, action: { payload: any }) => {
      state.getPacketsCategories = action.payload;
    });
    builder.addCase(getPacketsPinned.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPacketsPinned.fulfilled, (state, action: { payload: any }) => {
      state.getPinnedPackets = action.payload;
      state.loading = false;
    });
    builder.addCase(getPacketsPinned.rejected, (state, action: { payload: any }) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(createPacket.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createPacket.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(createPacket.rejected, (state, action: { payload: any }) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getPacketWithDetailsDescription.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPacketWithDetailsDescription.fulfilled, (state, action: { payload: IPacket }) => {
      state.loading = false;
      state.packetWithDetailsDescription = action.payload;
    });
    builder.addCase(getPacketWithDetailsDescription.rejected, (state, action: { payload: any }) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { handlerAddPacketInBasket, handlerDeletePacketFromBasket } = packetSlice.actions;

export default packetSlice.reducer;
