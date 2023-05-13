function NotFound() {
  return (
    <div className="w-full h-full ">
      <div>
        <div className="p-5">
          <div className="bg-[url('assets/logo-header.svg')] bg-contain bg-no-repeat h-[40px] w-[160px]"></div>
        </div>
        <div className="text-center">
          <div className="bg-[url('assets/404.svg')] bg-center bg-no-repeat w-full h-[200px] py-5 "></div>
          <div className="text-5xl font-black mb-7">Not Found! 😓</div>
          <ul className="text-sm font-semibold">
            <li className="pb-2">
              URL của nội dung này đã bị thay đổi hoặc không còn tồn tại.
            </li>
            <li className="pb-2">
              Nếu bạn đang lưu URL này, hãy thử truy cập lại từ trang chủ thay
              vì dùng URL đã lưu.
            </li>
          </ul>
          <div className="mt-8">
            <a
              href="/"
              className="py-[14px] px-[28px] bg-[#f05123] rounded-full text-white font-semibold text-sm"
            >
              Way Back Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
