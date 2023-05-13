import { useDispatch } from "react-redux";

function useAppDispatch() {
  const dispatch = useDispatch();
  return dispatch;
}

export default useAppDispatch;
