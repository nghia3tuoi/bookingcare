const {
  getUserStart,
  getUserSuccess,
  getUserFailed,
  getAllUsersStart,
  getAllUsersSuccess,
  getAllUsersFailed,
  updateUserStart,
  updateUserSuccess,
  updateUserFailed,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailed,
} = require("redux/createSlice/userSlice");
const { default: axiosClient } = require("./axiosClient");

const userApi = {
  getUser: async (id, dispatch, navigate) => {
    dispatch(getUserStart());
    try {
      const url = "api/v1/user/get-users";
      const res = await axiosClient.get(url, {
        params: id,
      });
      dispatch(getUserSuccess(res.data));
    } catch (error) {
      dispatch(getUserFailed(error.response.data));
    }
  },
  getAllUsers: async (dispatch, navigate) => {
    dispatch(getAllUsersStart());
    try {
      const url = "api/v1/user/get-users";
      const res = await axiosClient.get(url);
      dispatch(getAllUsersSuccess(res.data));
    } catch (error) {
      dispatch(getAllUsersFailed(error.response.data));
    }
  },
  updateUser: async (id, dataUser, dispatch) => {
    dispatch(updateUserStart());
    try {
      const url = `api/v1/user/update-user?id=${id}`;
      const res = await axiosClient.post(url, {
        ...dataUser,
      });
      dispatch(updateUserSuccess(res.data));
      console.log(dataUser);
    } catch (error) {
      dispatch(updateUserFailed(error.response.data));
    }
  },
  deleteUser: async (id, dispatch) => {
    dispatch(deleteUserStart());
    try {
      const url = `api/v1/user/delete-user`;
      const res = await axiosClient.delete(url, {
        params: { id },
      });
      dispatch(deleteUserSuccess(res.data));
    } catch (error) {
      dispatch(deleteUserFailed(error.response.data));
    }
  },
};
export default userApi;
