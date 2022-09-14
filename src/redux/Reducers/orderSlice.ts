import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PropsInitialStateOrderSlice, IMeOrders, INewOrder, IOrderData } from "../../types";
import { apiOrder } from "../../utils/apiOrder";

export const newOrder = createAsyncThunk("order/newOrder", async (data: INewOrder, { rejectWithValue }) => {
  try {
    const res = await apiOrder().newOrder(data);
    return res.data;
  } catch (e) {
    return rejectWithValue("Ошибка, не удалось отправить заказ");
  }
});

export const getOrders = createAsyncThunk("order/getOrders", async (_, { rejectWithValue }) => {
  try {
    const res = await apiOrder().getOrders();
    return res.data;
  } catch (e) {
    return rejectWithValue("Ошибка, не удалось получить список заказов");
  }
});

export const getMeOrders = createAsyncThunk(`order/getOwnOrder`, async (_, { rejectWithValue }) => {
  try {
    const res = await apiOrder().getMeOrders();
    const handleMyOrders = (orders: IOrderData[]): IMeOrders[] => {
      return orders.map((item: IOrderData) => {
        const { completed, orderNumber, packets, text } = item;
        return { orderNumber, packets, completed, text };
      });
    };
    return handleMyOrders(res.data);
  } catch (e) {
    return rejectWithValue("Ошибка, не удалось отобразить действующие заказы");
  }
});

const initialState: PropsInitialStateOrderSlice = {
  dataOrders: [],
  meOrders: [],
  loading: false,
  error: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    deleteMeOrders: (state) => {
      state.meOrders = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(newOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(newOrder.rejected, (state, action: { payload: any }) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(getOrders.rejected, (state, action: { payload: any }) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(getOrders.fulfilled, (state, action: { payload: IOrderData[] }) => {
      state.dataOrders = action.payload;
    });
    builder.addCase(getMeOrders.rejected, (state, action: { payload: any }) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(getMeOrders.fulfilled, (state, action: { payload: IMeOrders[] }) => {
      state.meOrders = action.payload;
      state.loading = false;
    });
  },
});

export const { deleteMeOrders } = orderSlice.actions;
export default orderSlice.reducer;
