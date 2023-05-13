function Media() {
  return (
    <div className="bg-white w-full h-full">
      <div className="pt-[20px] pb-[30px] w-[1140px] mx-auto ">
        <div className="text-2xl font-bold pt-3 p-1 mb-4">
          Truyền thông nói về BookingCare
        </div>
        <div className="flex">
          <div className="w-1/2">
            <iframe
              width="570"
              height="322"
              src="https://www.youtube.com/embed/FyDQljKtWnI"
              title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="w-1/2">
            <div className="w-[570px] my-[10px] flex flex-col items-center">
              <div className="flex mb-[20px]">
                <div className="w-[122px] h-[30px]">
                  <div className="bg-[url('assets/media-1.png')] w-full h-full bg-no-repeat bg-contain bg-center "></div>
                </div>
                <div className="w-[122px] h-[30px]">
                  <div className="bg-[url('assets/media-2.png')] w-full h-full bg-no-repeat bg-contain bg-center"></div>
                </div>
                <div className="w-[122px] h-[30px]">
                  <div className="bg-[url('assets/media-3.png')] w-full h-full bg-no-repeat bg-contain bg-center"></div>
                </div>
              </div>
              <div className="flex mb-[20px]">
                <div className="w-[122px] h-[30px]">
                  <div className="bg-[url('assets/media-4.png')] w-full h-full bg-no-repeat bg-contain bg-center "></div>
                </div>
                <div className="w-[122px] h-[30px] bg-red-500">
                  <div className="bg-[url('assets/media-5.png')] w-full h-full bg-no-repeat bg-contain bg-center "></div>
                </div>
                <div className="w-[122px] h-[30px]">
                  <div className="bg-[url('assets/media-6.png')] w-full h-full bg-no-repeat bg-contain bg-center"></div>
                </div>
              </div>
              <div className="flex mb-[20px]">
                <div className="w-[122px] h-[30px]">
                  <div className="bg-[url('assets/media-7.png')] w-full h-full bg-no-repeat bg-contain bg-center "></div>
                </div>
                <div className="w-[122px] h-[30px]">
                  <div className="bg-[url('assets/media-2.png')] w-full h-full bg-no-repeat bg-contain bg-center"></div>
                </div>
                <div className="w-[122px] h-[30px] bg-blue-500">
                  <div className="bg-[url('assets/media-8.png')] w-full h-full bg-no-repeat bg-contain bg-center "></div>
                </div>
                <div className="w-[122px] h-[30px]">
                  <div className="bg-[url('assets/media-2.png')] w-full h-full bg-no-repeat bg-contain bg-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media;
