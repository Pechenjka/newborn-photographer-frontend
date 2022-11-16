import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PropsInitialStateOrderSlice, IMeOrders, INewOrder, IOrderData, PropsBoolean } from "../../types";
import { apiOrder } from "../../utils/apiOrder";
import { handlerDeletePacketFromBasket } from "./packetSlice";

export const newOrder = createAsyncThunk("order/newOrder", async (data: INewOrder, { rejectWithValue, dispatch }) => {
  try {
    const res = await apiOrder().newOrder(data);
    if (res.data) {
      dispatch(handlerDeletePacketFromBasket(null));
    }
    return res.data;
  } catch (e) {
    return rejectWithValue("Ошибка, не удалось отправить заказ, ведутся технические работы. В ближайшее время сможете отправить заказ")
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
  confirmSendOrder: false,
  loading: {
    newOrder: false,
    getOrders: false,
    getMeOrders: false,
  },
  error: {
    newOrder: '',
    getOrders: '',
    getMeOrders: '',
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    deleteMeOrders: (state) => {
      state.meOrders = [];
    },
    handleConfirmSendOrder: (state, action: PropsBoolean) => {
      state.confirmSendOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(newOrder.pending, (state) => {
      state.loading.newOrder = true;
    });
    builder.addCase(newOrder.rejected, (state, action: { payload: any }) => {
      state.error.newOrder = action.payload;
      state.loading.newOrder = false;
    });
    builder.addCase(newOrder.fulfilled, (state) => {
      state.loading.newOrder = false;
      state.confirmSendOrder = true;
    });
    builder.addCase(getOrders.rejected, (state, action: { payload: any }) => {
      state.error.getOrders = action.payload;
    });
    builder.addCase(getOrders.fulfilled, (state, action: { payload: IOrderData[] }) => {
      state.dataOrders = action.payload;
    });
    builder.addCase(getMeOrders.rejected, (state, action: { payload: any }) => {
      state.error.getMeOrders = action.payload;
    });
    builder.addCase(getMeOrders.fulfilled, (state, action: { payload: IMeOrders[] }) => {
      state.meOrders = action.payload;
    });
  },
});

export const { deleteMeOrders, handleConfirmSendOrder } = orderSlice.actions;
export default orderSlice.reducer;
