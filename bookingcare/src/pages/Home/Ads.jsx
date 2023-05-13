import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }
export default function Ads() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="bg-white w-full h-full">
      <div className="pt-[20px] pb-[30px] w-[1140px] mx-auto">
        <Slider {...settings}>
          <div className="pr-[50px]">
            <a href="/#">
              <div className="bg-[url('assets/ads-2.jpg')] bg-no-repeat bg-center bg-cover pt-[56.25%]"></div>
              <div>
                <div className="text-sm font-semibold pt-[5px]">
                  Tư vấn trọn gói phẩu thuật cắt bao quy đầu
                </div>
                <ul className="my-[5px] text-xs list-disc list-inside ml-3">
                  <li>Thực hiện bởi bác sĩ nam học</li>
                  <li>Thực hiện tại cơ sở y tế</li>
                  <li>Chi phí minh bạch</li>
                </ul>
              </div>
            </a>
            <button className="text-sm font-bold text-[#45c3d2] pb-[5px]">
              Xem chi tiết
            </button>
          </div>
          <div className="pr-[50px]">
            <a href="/#">
              <div className="bg-[url('assets/ads-2.jpg')] bg-no-repeat bg-center bg-cover pt-[56.25%]"></div>
              <div className="">
                <div className="text-sm font-semibold pt-[5px] pt-[5px]">
                  Tư vấn trọn gói phẩu thuật cắt bao quy đầu
                </div>
                <ul className="my-[5px] text-xs list-disc list-inside ml-3">
                  <li>Thực hiện bởi bác sĩ nam học</li>
                  <li>Thực hiện tại cơ sở y tế</li>
                  <li>Chi phí minh bạch</li>
                </ul>
              </div>
            </a>
            <button className="text-sm font-bold text-[#45c3d2] pb-[5px] pb-[5px]">
              Xem chi tiết
            </button>
          </div>
          <div className="pr-[50px]">
            <a href="/#">
              <div className="bg-[url('assets/ads-2.jpg')] bg-no-repeat bg-center bg-cover pt-[56.25%]"></div>
              <div>
                <div className="text-sm font-semibold pt-[5px]">
                  Tư vấn trọn gói phẩu thuật cắt bao quy đầu
                </div>
                <ul className="my-[5px] text-xs list-disc list-inside ml-3">
                  <li>Thực hiện bởi bác sĩ nam học</li>
                  <li>Thực hiện tại cơ sở y tế</li>
                  <li>Chi phí minh bạch</li>
                </ul>
              </div>
            </a>
            <button className="text-sm font-bold text-[#45c3d2] pb-[5px]">
              Xem chi tiết
            </button>
          </div>
          <div className="pr-[50px]">
            <a href="/#">
              <div className="bg-[url('assets/ads-2.jpg')] bg-no-repeat bg-center bg-cover pt-[56.25%]"></div>
              <div>
                <div className="text-sm font-semibold pt-[5px]">
                  Tư vấn trọn gói phẩu thuật cắt bao quy đầu
                </div>
                <ul className="my-[5px] text-xs list-disc list-inside ml-3">
                  <li>Thực hiện bởi bác sĩ nam học</li>
                  <li>Thực hiện tại cơ sở y tế</li>
                  <li>Chi phí minh bạch</li>
                </ul>
              </div>
            </a>
            <button className="text-sm font-bold text-[#45c3d2] pb-[5px]">
              Xem chi tiết
            </button>
          </div>
          <div className="pr-[50px]">
            <a href="/#">
              <div className="bg-[url('assets/ads-2.jpg')] bg-no-repeat bg-center bg-cover pt-[56.25%]"></div>
              <div>
                <div className="text-sm font-semibold pt-[5px]">
                  Tư vấn trọn gói phẩu thuật cắt bao quy đầu
                </div>
                <ul className="my-[5px] text-xs list-disc list-inside ml-3">
                  <li>Thực hiện bởi bác sĩ nam học</li>
                  <li>Thực hiện tại cơ sở y tế</li>
                  <li>Chi phí minh bạch</li>
                </ul>
              </div>
            </a>
            <button className="text-sm font-bold text-[#45c3d2] pb-[5px]">
              Xem chi tiết
            </button>
          </div>
          <div className="pr-[50px]">
            <a href="/#">
              <div className="bg-[url('assets/ads-2.jpg')] bg-no-repeat bg-center bg-cover pt-[56.25%]"></div>
              <div>
                <div className="text-sm font-semibold pt-[5px]">
                  Tư vấn trọn gói phẩu thuật cắt bao quy đầu
                </div>
                <ul className="my-[5px] text-xs list-disc list-inside ml-3">
                  <li>Thực hiện bởi bác sĩ nam học</li>
                  <li>Thực hiện tại cơ sở y tế</li>
                  <li>Chi phí minh bạch</li>
                </ul>
              </div>
            </a>
            <button className="text-sm font-bold text-[#45c3d2] pb-[5px]">
              Xem chi tiết
            </button>
          </div>
          <div className="pr-[50px]">
            <a href="/#">
              <div className="bg-[url('assets/ads-2.jpg')] bg-no-repeat bg-center bg-cover pt-[56.25%]"></div>
              <div>
                <div className="text-sm font-semibold pt-[5px]">
                  Tư vấn trọn gói phẩu thuật cắt bao quy đầu
                </div>
                <ul className="my-[5px] text-xs list-disc list-inside ml-3">
                  <li>Thực hiện bởi bác sĩ nam học</li>
                  <li>Thực hiện tại cơ sở y tế</li>
                  <li>Chi phí minh bạch</li>
                </ul>
              </div>
            </a>
            <button className="text-sm font-bold text-[#45c3d2] pb-[5px]">
              Xem chi tiết
            </button>
          </div>
          <div className="pr-[50px]">
            <a href="/#">
              <div className="bg-[url('assets/ads-2.jpg')] bg-no-repeat bg-center bg-cover pt-[56.25%]"></div>
              <div>
                <div className="text-sm font-semibold pt-[5px]">
                  Tư vấn trọn gói phẩu thuật cắt bao quy đầu
                </div>
                <ul className="my-[5px] text-xs list-disc list-inside ml-3">
                  <li>Thực hiện bởi bác sĩ nam học</li>
                  <li>Thực hiện tại cơ sở y tế</li>
                  <li>Chi phí minh bạch</li>
                </ul>
              </div>
            </a>
            <button className="text-sm font-bold text-[#45c3d2] pb-[5px]">
              Xem chi tiết
            </button>
          </div>
          <div className="pr-[50px]">
            <a href="/#">
              <div className="bg-[url('assets/ads-2.jpg')] bg-no-repeat bg-center bg-cover pt-[56.25%]"></div>
              <div>
                <div className="text-sm font-semibold pt-[5px]">
                  Tư vấn trọn gói phẩu thuật cắt bao quy đầu
                </div>
                <ul className="my-[5px] text-xs list-disc list-inside ml-3">
                  <li>Thực hiện bởi bác sĩ nam học</li>
                  <li>Thực hiện tại cơ sở y tế</li>
                  <li>Chi phí minh bạch</li>
                </ul>
              </div>
            </a>
            <button className="text-sm font-bold text-[#45c3d2] pb-[5px]">
              Xem chi tiết
            </button>
          </div>
        </Slider>
      </div>
    </div>
  );
}
