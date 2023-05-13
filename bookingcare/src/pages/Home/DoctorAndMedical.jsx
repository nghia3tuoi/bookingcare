import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrNext
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: "block",
        background: "#ffffff",
        border: "2px solid #d7d7d7",
        position: "absolute",
        top: "40%",
        right: "0",
        padding: "10px",
        margin: "5px",
        width: "45px",
        height: "50px",
        color: "#d7d7d7",
        zIndex: "1",
      }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrPrevious
      className={className}
      onClick={onClick}
      style={{
        ...style,
        zIndex: "1",
        display: "block",
        background: "#ffffff",
        border: "2px solid #d7d7d7",
        position: "absolute",
        top: "40%",
        left: "-1%",
        padding: "10px",
        margin: "5px",
        width: "45px",
        height: "50px",
        color: "#d7d7d7",
      }}
    />
  );
}

function DoctorAndMedical() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-full ">
      <div className="w-[1170px] mx-auto px-4 pt-5 pb-[30px]">
        <div className="flex justify-between mb-6">
          <div className="text-2xl font-semibold pt-4 pb-1">
            Dành cho bác sĩ và cơ sở y tế
          </div>
          <div>
            <ul className="flex text-xs gap-1">
              <li className="py-[10px] px-[15px] bg-[#ebebeb]">BÀI VIẾT</li>
              <li className="py-[10px] px-[15px] bg-[#ebebeb]">HỢP TÁC</li>
              <li className="py-[10px] px-[15px] bg-[#ebebeb]">LIÊN HỆ</li>
            </ul>
          </div>
        </div>

        <Slider {...settings}>
          <div className="w-full pr-3">
            <div className="flex">
              <div className="w-1/2 bg-[url('assets/doctor-medical-1.png')] h-[150px] bg-no-repeat bg-cover"></div>
              <div className="w-1/2 text-base pl-[10px] pt-1 font-semibold">
                10X Content là gì? Cách xây dựng Content SEO Y tế theo 10X
                Content
              </div>
            </div>
          </div>
          <div className="w-full pr-3">
            <div className="flex">
              <div className="w-1/2 bg-[url('assets/doctor-medical-1.png')] h-[150px] bg-no-repeat bg-cover"></div>
              <div className="w-1/2 text-base pl-[10px] pt-1 font-semibold">
                10X Content là gì? Cách xây dựng Content SEO Y tế theo 10X
                Content
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default DoctorAndMedical;
