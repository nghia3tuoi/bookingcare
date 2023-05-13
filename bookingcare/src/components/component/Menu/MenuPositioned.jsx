import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useState, useRef, useEffect } from "react";
export default function PositionedMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      //check xem thằng bự có chứa ref thằng nhỏ hay không nếu có thì set open nó
      if (e.target.contains(ref.current)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isMenuOpen]);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="">
      <div onClick={handleToggleMenu}>
        <MenuIcon className="text-gray-400" fontSize="large" />
      </div>
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-screen bg-gray-800/50 z-10 "
          ref={ref}
        >
          <div className="left-0 top-0 bg-white z-10 w-[260px] animate-sliceRight h-screen overflow-y-scroll">
            <ul className="text-base text-[#45c3d2] overflow-x-auto">
              <li className="py-[10px] px-[15px] border-b border-b-solid border-b-gray-400">
                Trang chủ
              </li>
              <li className="py-[10px] px-[15px] border-b border-b-solid border-b-gray-400">
                Cẩm nang
              </li>
              <li className="py-[10px] px-[15px] border-b border-b-solid border-b-gray-400">
                Liên hệ hợp tác
              </li>
              <li className="py-[10px] px-[15px] border-b border-b-solid border-b-gray-400">
                Sức khỏe doanh nghiệp
              </li>
              <li className="py-[10px] px-[15px] border-b border-b-solid border-b-gray-400">
                Gói chuyển đổi số doanh nghiệp
              </li>
              <li className="py-[10px] px-[15px] border-b border-b-solid border-b-gray-400">
                Tuyển dụng
              </li>
              <li className="py-[5px] px-[15px] border-b border-b-solid border-b-gray-400 bg-gray-[#f1f1f1] text-[#555555] text-xs">
                VỀ BOOKINGCARE
              </li>
              <li className="py-[10px] px-[15px] border-b border-b-solid border-b-gray-400">
                Dành cho bệnh nhân
              </li>
              <li className="py-[10px] px-[15px] border-b border-b-solid border-b-gray-400">
                Dành cho bác sĩ
              </li>
              <li className="py-[10px] px-[15px] border-b border-b-solid border-b-gray-400">
                Vai trò của BookingCare
              </li>
              <li className="py-[10px] px-[15px] border-b border-b-solid border-b-gray-400">
                Liên hệ
              </li>
              <li className="py-[10px] px-[15px] border-b border-b-solid border-b-gray-400">
                Câu hỏi thường gặp
              </li>
              <li className="py-[10px] px-[15px] border-b border-b-solid border-b-gray-400">
                Điều khoản sử dụng
              </li>
              <li className="py-[10px] px-[15px] border-b border-b-solid border-b-gray-400">
                Quy trình hỗ trợ giải quyết khiếu nại
              </li>
              <li className="py-[10px] px-[15px] border-b border-b-solid border-b-gray-400">
                Quy chế hoạt động
              </li>
            </ul>
            <div id="social" className="flex my-[20px] p-3">
              <div className="m-[10px] ml-0">
                <FacebookIcon fontSize="large" color="primary" />
              </div>
              <div className="m-[10px] ml-0">
                <YouTubeIcon fontSize="large" color="error" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
