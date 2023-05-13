import {
  GiHospital,
  GiNotebook,
  GiDeskLamp,
  GiBrainFreeze,
  GiTooth,
} from "react-icons/gi";
import { BsSearch, BsFillPhoneVibrateFill, BsClock } from "react-icons/bs";
import { SiAirtable } from "react-icons/si";
import { FaAmbulance } from "react-icons/fa";
function Banner() {
  return (
    <div id="banner">
      <div className="bg-[url('assets/bg-banner.jpg')] bg-no-repeat bg-cover bg-center w-full h-full">
        <div className="w-full bg-gradient-to-b from-[#00000040] to-[#ffffff1a]">
          <div className="py-[70px] w-[1140px] mx-auto text-center">
            <div id="banner_title" className=" mb-5 text-3xl text-[#ffffff]">
              <div className="">NỀN TẢNG Y TẾ</div>
              <div className="">CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
            </div>
            <div
              id="banner_input-search"
              className="w-[456px] h-[12] rounded-full my-[20px]  mx-auto bg-[#f7d800]  flex items-center"
            >
              <div className=" w-[50px] h-[50px] flex justify-center items-center">
                <BsSearch />
              </div>
              <input
                type="text"
                className="w-full h-full  pr-[25px] outline-none border-none bg-transparent text-sm"
                placeholder="Tìm kiếm ...."
              />
            </div>
            <div
              id="banner_app"
              className="flex justify-center items-center pt-[25px] mt-[80px]"
            >
              <div className="bg-[url('assets/ggplay.svg')] bg-contain bg-no-repeat w-[108px] h-8"></div>
              <div className="bg-[url('assets/appstore.svg')] bg-contain bg-no-repeat w-[108px] h-8"></div>
            </div>
          </div>
        </div>
        <div
          id="banner_services"
          className="pt-[80px] pb-[20px] bg-gradient-to-b from-[#ffffff1a]  via-[#ffffffe6] to-[#ffffff]"
        >
          <ul className="flex justify-around mx-[30px]">
            <li className=" p-1 ">
              <a href="/#" className="flex flex-col items-center text-center">
                <div>
                  <GiHospital className="rounded-full w-[50px] h-[50px] bg-white" />
                </div>
                <div className="font-semibold">
                  Khám chuyên <br /> khoa
                </div>
              </a>
            </li>
            <li className=" p-1 ">
              <a href="/#" className="flex flex-col items-center text-center">
                <div>
                  <BsFillPhoneVibrateFill className="rounded-full w-[50px] h-[50px] bg-white" />
                </div>
                <div className="font-semibold">
                  Khám <br /> từ xa
                </div>
              </a>
            </li>
            <li className=" p-1 ">
              <a href="/#" className="flex flex-col items-center text-center">
                <div>
                  <GiNotebook className="rounded-full w-[50px] h-[50px] bg-white" />
                </div>
                <div className="font-semibold">
                  Khám <br /> tổng quát
                </div>
              </a>
            </li>
            <li className=" p-1 ">
              <a href="/#" className="flex flex-col items-center text-center">
                <div>
                  <GiDeskLamp className="rounded-full w-[50px] h-[50px] bg-white" />
                </div>
                <div className="font-semibold">
                  Xét nghiệm <br /> y học
                </div>
              </a>
            </li>
            <li className=" p-1 ">
              <a href="/#" className="flex flex-col items-center text-center">
                <div>
                  <GiBrainFreeze className="rounded-full w-[50px] h-[50px] bg-white" />
                </div>
                <div className="font-semibold">
                  Sức khỏe <br /> tinh thần
                </div>
              </a>
            </li>
            <li className=" p-1 ">
              <a href="/#" className="flex flex-col items-center text-center">
                <div>
                  <GiTooth className="rounded-full w-[50px] h-[50px] bg-white" />
                </div>
                <div className="font-semibold">
                  Khám <br /> nha khoa
                </div>
              </a>
            </li>
            <li className=" p-1 ">
              <a href="/#" className="flex flex-col items-center text-center">
                <div>
                  <SiAirtable className="rounded-full w-[50px] h-[50px] bg-white" />
                </div>
                <div className="font-semibold">
                  Gói <br /> phẩu khuật
                </div>
              </a>
            </li>
            <li className=" p-1 ">
              <a href="/#" className="flex flex-col items-center text-center">
                <div>
                  <FaAmbulance className="rounded-full w-[50px] h-[50px] bg-white" />
                </div>
                <div className="font-semibold">
                  Sản phẩm <br /> y tế
                </div>
              </a>
            </li>
            <li className=" p-1 ">
              <a href="/#" className="flex flex-col items-center text-center">
                <div>
                  <BsClock className="rounded-full w-[50px] h-[50px] bg-white" />
                </div>
                <div className="font-semibold">
                  Bài test <br /> sức khỏe
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Banner;
