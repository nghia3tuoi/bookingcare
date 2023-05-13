import { useEffect } from "react";

function ModalRemove(props) {
  const { user, handleToggleModalRemove, handleDeleteUserApi } = props;
  const handleDeleteUser = async (userId) => {
    await handleDeleteUserApi(userId);
    handleToggleModalRemove();
  };
  return (
    <div className="fixed top-0 left-0 bg-black/80 w-screen h-screen flex justify-center items-center">
      <div className="bg-white w-[512px]">
        <div className="p-6">
          <div className="text-base font-semibold leading-6 text-gray-900">
            Deactivate account
          </div>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            onClick={() => {
              handleDeleteUser(user.id);
            }}
          >
            Remove
          </button>
          <button
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            onClick={() => {
              handleToggleModalRemove();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalRemove;
