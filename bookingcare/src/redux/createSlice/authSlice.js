import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      isFetching: false,
      isError: false,
      data: null,
    },
    register: {
      isFetching: false,
      isError: false,
      data: null,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.isError = false;
      state.login.data = action.payload;
    },
    loginError: (state, action) => {
      state.login.isFetching = false;
      state.login.isError = true;
      state.login.data = action.payload;
    },
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.register.isFetching = false;
      state.register.isError = false;
      state.register.data = action.payload;
    },
    registerError: (state, action) => {
      state.register.isFetching = false;
      state.register.isError = true;
      state.register.data = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginError,
  registerStart,
  registerSuccess,
  registerError,
} = authSlice.actions;
export default authSlice.reducer;
