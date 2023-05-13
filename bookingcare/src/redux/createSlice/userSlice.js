const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "user",
  initialState: {
    getUser: {
      isFetChing: false,
      isError: false,
      data: null,
    },
    getAllUsers: {
      isFetChing: false,
      isError: false,
      data: null,
    },
    updateUser: {
      isFetChing: false,
      isError: false,
      data: null,
    },
    deleteUser: {
      isFetChing: false,
      isError: false,
      data: null,
    },
  },
  reducers: {
    //get user
    getUserStart: (state) => {
      state.getUser.isFetChing = true;
    },
    getUserSuccess: (state, action) => {
      state.getUser.isFetChing = false;
      state.getUser.isError = false;
      state.getUser.data = action.payload;
    },
    getUserFailed: (state) => {
      state.getUser.isFetChing = false;
      state.getUser.isError = true;
    },
    //get all users
    getAllUsersStart: (state) => {
      state.getAllUsers.isFetChing = true;
    },
    getAllUsersSuccess: (state, action) => {
      state.getAllUsers.isFetChing = false;
      state.getAllUsers.isError = false;
      state.getAllUsers.data = action.payload;
    },
    getAllUsersFailed: (state) => {
      state.getAllUsers.isFetChing = false;
      state.getAllUsers.isError = true;
    },
    //update user
    updateUserStart: (state) => {
      state.updateUser.isFetChing = true;
    },
    updateUserSuccess: (state, action) => {
      state.updateUser.isFetChing = false;
      state.updateUser.isError = false;
      state.updateUser.data = action.payload;
    },
    updateUserFailed: (state, action) => {
      state.updateUser.isFetChing = false;
      state.updateUser.isError = true;
      state.updateUser.data = action.payload;
    },
    //delete user
    deleteUserStart: (state) => {
      state.deleteUser.isFetChing = true;
    },
    deleteUserSuccess: (state, action) => {
      state.deleteUser.isFetChing = false;
      state.deleteUser.isError = false;
      state.deleteUser.data = action.payload;
    },
    deleteUserFailed: (state, action) => {
      state.deleteUser.isFetChing = false;
      state.deleteUser.isError = true;
      state.deleteUser.data = action.payload;
    },
  },
});

export const {
  //get user
  getUserStart,
  getUserSuccess,
  getUserFailed,
  //get all users
  getAllUsersStart,
  getAllUsersSuccess,
  getAllUsersFailed,
  //update user
  updateUserStart,
  updateUserSuccess,
  updateUserFailed,
  //delete user
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailed,
} = userSlice.actions;
export default userSlice.reducer;
