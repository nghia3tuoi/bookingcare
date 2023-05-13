import userApi from "api/userApi";
import HeaderSystem from "components/component/HeaderSystem";
import ModalAdd from "components/component/Modal/ModalAdd";
import ModalEdit from "components/component/Modal/ModalEdit";
import ModalRemove from "components/component/Modal/ModalRemove.";

import { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function UserManager() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usersList = useSelector((state) => state.user.getAllUsers?.data?.data);
  const userInfor = useSelector((state) => state.auth.login?.data);
  const [isEdit, setIsEdit] = useState(false);
  const [isRemove, setRemove] = useState(false);
  const [isAddUser, setAddUser] = useState(false);
  const [user, setUsers] = useState(null);
  useEffect(() => {
    userApi.getAllUsers(dispatch);
  }, []);
  useEffect(() => {
    const handleCheckLogin = () => {
      if (!userInfor) {
        navigate("/login");
      }
    };
    handleCheckLogin();
  }, []);
  const handleToggleModalEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleToggleModalRemove = () => {
    setRemove(!isRemove);
  };
  const handleToggleModalAdd = () => {
    setAddUser(!isAddUser);
  };
  const handleDeleteUserApi = async (id) => {
    await userApi.deleteUser(id, dispatch);
    await userApi.getAllUsers(dispatch);
  };
  // const handleAddUserApi = async (dataUser) => {
  //   const res = await authApi.register(dataUser, dispatch);
  //   return res.data;
  // };
  return (
    <div className="">
      <div>
        <HeaderSystem />
        <div className="flex flex-col">
          <div className="text-center w-full text-2xl py-5 font-semibold text-blue-700">
            Manager user
          </div>
          <button
            type="button"
            id="button_add-user"
            className="bg-blue-500 w-[100px] ml-5 text-center hover:opacity-90"
            onClick={handleToggleModalAdd}
          >
            <div className="text-white font-bold p-2">Add +</div>
          </button>
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr className="">
                      <th scope="col" className="px-6 py-4 border">
                        EMAIL
                      </th>
                      <th scope="col" className="px-6 py-4 border">
                        FIRST NAME
                      </th>
                      <th scope="col" className="px-6 py-4 border">
                        LAST NAME
                      </th>
                      <th scope="col" className="px-6 py-4 border">
                        ADDRESS
                      </th>
                      <th scope="col" className="px-6 py-4 border">
                        ACTIONS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersList?.map((value, index) => {
                      return (
                        <tr
                          key={index}
                          className="border-b dark:border-neutral-500"
                        >
                          <td className="whitespace-nowrap px-6 py-4 border font-medium">
                            {value.email}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 border">
                            {value.firstName}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 border">
                            {value.lastName}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 border">
                            {value.address}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 border">
                            <div className="flex gap-4">
                              <button
                                className="text-xl text-green-500"
                                onClick={handleToggleModalEdit}
                              >
                                <AiFillEdit
                                  onClick={() => {
                                    setUsers(value);
                                  }}
                                />
                              </button>
                              <button
                                className="text-xl text-red-500"
                                onClick={() => {
                                  setUsers(value);
                                  handleToggleModalRemove();
                                }}
                              >
                                <RiDeleteBin2Line />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isEdit ? (
        <ModalEdit user={user} handleToggleModalEdit={handleToggleModalEdit} />
      ) : null}
      {isRemove ? (
        <ModalRemove
          user={user}
          handleToggleModalRemove={handleToggleModalRemove}
          handleDeleteUserApi={handleDeleteUserApi}
        />
      ) : null}
      {isAddUser && (
        <ModalAdd
          handleToggleModalAdd={handleToggleModalAdd}
          // handleAddUserApi={handleAddUserApi}
          setAddUser={setAddUser}
        />
      )}
    </div>
  );
}

export default UserManager;
