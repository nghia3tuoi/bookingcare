import { Facebook, YouTube } from "@mui/icons-material";

function Footer() {
  return (
    <div className="w-full bg-[#efefef] ">
      <div className="w-[1170px] mx-auto py-7">
        <div className="flex gap-1">
          <div className="w-2/4">
            <div className="bg-[url('assets/logo-header.svg')] w-full h-[44px] bg-no-repeat bg-contain"></div>
            <div className="text-sm">
              <div className="font-semibold my-[5px]">
                Công ty Cổ phần Công nghệ BookingCare
              </div>
              <div className="my-[5px]">
                Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận
                Cầu Giấy, Thành phố Hà Nội, Việt Nam
              </div>
              <div className="my-[5px]">
                ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015
              </div>
            </div>
            <div className="flex mt-[10px]">
              <div className="bg-[url('assets/footer-logo.svg')] w-[78px] h-10 bg-no-repeat bg-contain"></div>
              <div className="bg-[url('assets/footer-logo.svg')] w-[78px] h-10 bg-no-repeat bg-contain"></div>
            </div>
          </div>
          <div className="w-1/4">
            <ul>
              <li className="py-[5px] text-[#45c3d2] text-sm">
                Liên hệ hợp tác
              </li>
              <li className="py-[5px] text-[#45c3d2] text-sm">
                Sức khỏe doanh nghiệp
              </li>
              <li className="py-[5px] text-[#45c3d2] text-sm">
                Gói chuyển đổi số doanh nghiệp
              </li>
              <li className="py-[5px] text-[#45c3d2] text-sm">Tuyển dụng</li>
              <li className="py-[5px] text-[#45c3d2] text-sm">
                Câu hỏi thường gặp
              </li>
              <li className="py-[5px] text-[#45c3d2] text-sm">
                Câu hỏi thường gặp
              </li>
              <li className="py-[5px] text-[#45c3d2] text-sm">
                Chính sách Bảo mật
              </li>
              <li className="py-[5px] text-[#45c3d2] text-sm">
                Quy trình hỗ trợ giải quyết khiếu nại
              </li>
              <li className="py-[5px] text-[#45c3d2] text-sm">
                Quy chế hoạt động
              </li>
            </ul>
          </div>
          <div className="w-1/4 text-sm flex flex-col gap-5">
            <div>
              <div className="font-semibold">Trụ sở tại Hà Nội</div>
              <div>
                Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận
                Cầu Giấy, Thành phố Hà Nội, Việt Nam
              </div>
            </div>
            <div>
              <div className="font-semibold">Văn phòng tại TP Hồ Chí Minh</div>
              <div>Số 01, Hồ Bá Kiện, Phường 15, Quận 10</div>
            </div>
            <div>
              <div className="font-semibold">Hỗ trợ khách hàng</div>
              <div>support@bookingcare.vn (7h - 18h)</div>
            </div>
          </div>
        </div>

        <div>
          <hr className="bg-gray-300 h-[2px]" />
          <div className="p-[15px] text-sm">
            Tải ứng dụng BookingCare cho điện thoại hoặc máy tính bảng:
            AndroidiPhone/iPadKhác
          </div>
        </div>
      </div>
      <div className="bg-[#64b9e5] w-full h-[80px]">
        <div className="w-[1170px] mx-auto">
          <div className="flex justify-between p-[15px]">
            <div className="text-xs text-white">© 2023 BookingCare.</div>
            <div className="flex gap-2">
              <div className="bg-red-600 rounded-md">
                <YouTube fontSize="large" className="text-white" />
              </div>
              <div className="bg-blue-800 rounded-md">
                <Facebook fontSize="large" className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
