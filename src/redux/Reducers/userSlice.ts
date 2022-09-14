import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiAuthorization } from "../../utils/apiAuth";
import { ILoginUser, IUpdateUser, IUser, PropsBoolean, PropsInitialStateUserSlice } from "../../types";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (data: { name: string; email: string; password: string; role: string }, { dispatch, rejectWithValue }) => {
    try {
      const res = await apiAuthorization().registration(data);
      dispatch(handleIsRegister(true));
      return res.data;
    } catch (error: any) {
      if (error.response.status === 409) {
        await dispatch(handlerError(true));
        return rejectWithValue("Ошибка, пользователь с таким email или паролем, уже существует");
      }
    }
  }
);

export const login = createAsyncThunk("user/login", async (data: ILoginUser, { dispatch, rejectWithValue }) => {
  try {
    const res = await apiAuthorization().login(data);
    if (res.status === 200) {
      localStorage.setItem("token", res.data.accessToken);
      await dispatch(authorization(true));
      await dispatch(getUserInfo());
      data.history.push("/");
    }
    return res.data.user;
  } catch (error: any) {
    await dispatch(handlerError(true));
    if (error.response.status === 400) {
      return rejectWithValue("Ошибка, не удалось авторизоваться, не правильный email или пароль");
    }
    return rejectWithValue("Ошибка, не удалось авторизоваться, попробуйте позже");
  }
});

export const checkAuth = createAsyncThunk(
  "user/checkAuth",
  async (data: { pathname: string; history: any }, { dispatch, rejectWithValue }) => {
    try {
      const res = await apiAuthorization().refresh();
      if (res) {
        localStorage.setItem("token", res.data.accessToken);
        await dispatch(authorization(true));
        await dispatch(getUserInfo());
        if (data.pathname === "/signup" || data.pathname === "/signin") {
          return data.history.push("/");
        }
        data.history.push(`${data.pathname}`);
      }
    } catch (e) {
      localStorage.removeItem("token");
      return rejectWithValue("Ошибка, необходимо авторизоваться");
    }
  }
);

export const getUserInfo = createAsyncThunk("user/userInfo", async () => {
  try {
    const res = await apiAuthorization().userInfo();
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const logOut = createAsyncThunk("user/logout", async () => {
  try {
    const res = await apiAuthorization().logout();
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (data: IUpdateUser, { dispatch, rejectWithValue }) => {
    try {
      const res = await apiAuthorization().updateUser(data);
      if (res.data.role === "ADMIN") dispatch(setAdminEmail(res.data.email));
      if (res.data) dispatch(getUserInfo());
      return res.data;
    } catch (e) {
      return rejectWithValue("Ошибка, обновить данные пользователя не получилось");
    }
  }
);

const initialState: PropsInitialStateUserSlice = {
  user: {
    name: "",
    email: "",
    phone: "",
    _id: "",
    isActivated: false,
    prevOrders: [],
    role: "",
    orders: [],
  },
  adminEmail: "testaccfordevelop@gmail.com",
  auth: false,
  isRegister: false,
  loading: false,
  error: "",
  showError: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleIsRegister: (state, action: PropsBoolean) => {
      state.isRegister = action.payload;
    },
    authorization: (state, action: PropsBoolean) => {
      state.auth = action.payload;
    },
    setAdminEmail(state, action: { payload: string }) {
      state.adminEmail = action.payload;
    },
    handlerError(state, action: PropsBoolean) {
      state.showError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(createUser.rejected, (state, action: { payload: any }) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(login.rejected, (state, action: { payload: any }) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getUserInfo.fulfilled, (state, action: { payload: IUser }) => {
      state.user = action.payload;
    });

    builder.addCase(logOut.rejected, (state, action: { payload: any }) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(logOut.fulfilled, (state) => {
      state.auth = false;
      state.user = {
        name: "",
        email: "",
        phone: "",
        _id: "",
        isActivated: false,
        prevOrders: [],
        role: "",
        orders: [],
      };
    });
    builder.addCase(checkAuth.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(checkAuth.rejected, (state, action: { payload: any }) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(checkAuth.fulfilled, (state) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUser.rejected, (state, action: { payload: any }) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(updateUser.fulfilled, (state) => {
      state.loading = false;
    });
  },
});

export const { authorization, setAdminEmail, handleIsRegister, handlerError } = userSlice.actions;
export default userSlice.reducer;
