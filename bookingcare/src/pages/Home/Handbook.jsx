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
export default function HandBook() {
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
    <div className="bg-[#f5f5f5] w-full h-full">
      <div className="pt-[20px] pb-[30px] w-[1140px] mx-auto">
        <div className="flex items-center h-full w-full justify-between pr-[50px] pt-3 p-1 mb-4">
          <div className="text-2xl font-bold ">Cẩm nang</div>
          <button className="py-[10px] px-[15px] bg-[#ebebeb] text-xs hover:bg-[#FFC419] hover:text-white uppercase">
            Tất cả bài viết
          </button>
        </div>
        <Slider {...settings}>
          <div className="pr-3">
            <a href="/#" className="flex h-[150px] gap-3">
              <div className="bg-[url('assets/doctor-1.jpg')] bg-no-repeat bg-center bg-cover w-[50%] h-full"></div>
              <div className="text-base font-semibold pt-[5px] w-[50%]">
                Tư vấn, trị liệu tâm lí từ xa
              </div>
            </a>
          </div>
          <div className="pr-3">
            <a href="/#" className="flex h-[150px] gap-3">
              <div className="bg-[url('assets/doctor-1.jpg')] bg-no-repeat bg-center bg-cover w-[50%] h-full"></div>
              <div className="text-base font-semibold pt-[5px] w-[50%]">
                Tư vấn, trị liệu tâm lí từ xa
              </div>
            </a>
          </div>
          <div className="pr-3">
            <a href="/#" className="flex h-[150px] gap-3">
              <div className="bg-[url('assets/doctor-1.jpg')] bg-no-repeat bg-center bg-cover w-[50%] h-full"></div>
              <div className="text-base font-semibold pt-[5px] w-[50%]">
                Tư vấn, trị liệu tâm lí từ xa
              </div>
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
}
