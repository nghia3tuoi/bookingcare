function DownloadApp() {
  return (
    <div className="py-[40px] px-[15px] bg-[#f5f5f5]">
      <div className="w-[1170px] mx-auto">
        <div className="bg-[url('assets/bg-download-app.png')] bg-no-repeat  bg-cover w-[200px] h-full ml-[300px]">
          <div className="w-screen h-full relative left-[180px] p-[50px]">
            <div className="text-2xl font-bold mb-[24px] ">
              Tải ứng dụng BookingCare
            </div>
            <ul className="list-inside list-disc text-sm">
              <li className="mb-[5px]"> Đặt khám nhanh hơn</li>
              <li className="mb-[5px]"> Nhận thông báo từ hệ thống</li>
              <li className="mb-[5px]">Nhận hướng dẫn đi khám chi tiết</li>
            </ul>
            <div className="flex mt-[15px] gap-3">
              <div className="">
                <div className="bg-[url('assets/chplay.svg')] w-[135px] h-10 bg-no-repeat bg-contain"></div>
              </div>
              <div>
                <div className="bg-[url('assets/appstore.svg')] w-[135px] h-10 bg-no-repeat bg-contain"></div>
              </div>
            </div>
            <div className="text-[#45c3d2] text-xs mt-[10px]">
              Hoặc mở liên kết: https://bookingcare.vn/app
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
