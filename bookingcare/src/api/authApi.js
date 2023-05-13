import {
  loginError,
  loginStart,
  loginSuccess,
  registerError,
  registerStart,
  registerSuccess,
} from "redux/createSlice/authSlice";

import axiosClient from "./axiosClient";

const authApi = {
  register: async (dataUser, dispatch) => {
    dispatch(registerStart());
    try {
      const url = "api/v1/auth/register";
      const res = await axiosClient.post(url, { ...dataUser });
      dispatch(registerSuccess(res.data));
      return res.data;
    } catch (error) {
      dispatch(registerError(error.response.data));
      return error.response.data;
    }
  },
  login: async (dataUser, dispatch, navigate) => {
    dispatch(loginStart());
    try {
      const url = "api/v1/auth/login";
      const res = await axiosClient.post(url, { ...dataUser });
      dispatch(loginSuccess(res.data.data));
      navigate("/system/user-manager");
    } catch (error) {
      dispatch(loginError(error.response.data));
    }
  },
  logout: () => {},
};

export default authApi;
