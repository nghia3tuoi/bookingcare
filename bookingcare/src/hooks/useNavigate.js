import { useNavigate } from "react-router-dom";

function useAppNavigate() {
  const navigate = useNavigate();
  return navigate;
}

export default useAppNavigate;
