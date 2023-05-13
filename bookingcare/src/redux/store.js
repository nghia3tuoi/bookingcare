import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./createSlice/authSlice";
import userReducer from "./createSlice/userSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});
