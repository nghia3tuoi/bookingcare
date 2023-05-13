import HelpIcon from "@mui/icons-material/Help";
import PositionedMenu from "../Menu/MenuPositioned";
import "i18n";
import { useTranslation } from "react-i18next";
function Header() {
  const { t, i18n } = useTranslation(["header", "system"]);
  const lng = i18n.language;
  const handleChangeLangue = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div id="header" className="relative w-screen p-[10px] bg-white">
      <div className="w-[1170px] mx-auto">
        <div className="flex">
          <div id="header-logo" className="w-[25%] flex justify-center h-full">
            <div className="pr-2">
              <PositionedMenu />
            </div>
            <div className="pt-[5px] w-full h-full">
              <div className="bg-[url('assets/logo-header.svg')] bg-contain bg-no-repeat h-[40px] w-[160px]"></div>
            </div>
          </div>
          <div id="header-items" className="">
            <div className="w-full">
              <ul className="flex justify-between gap-4 my-3 ml-6 w-full">
                <li className="">
                  <div className="text-xs font-semibold">
                    {t("header.specialist")}
                  </div>
                  <div className="text-[10px] ">Chuyên khoa</div>
                </li>

                <li className="">
                  <div className="text-xs font-semibold">
                    {t("header.health_facilities")}
                  </div>
                  <div className="text-[10px] ">Chọn bệnh viện phòng khám</div>
                </li>
                <li className="">
                  <div className="text-xs font-semibold">
                    {t("header.doctor")}
                  </div>
                  <div className="text-[10px] ">Chọn bác sĩ giỏi</div>
                </li>
                <li className="">
                  <div className="text-xs font-semibold">
                    {t("header.examination_package")}
                  </div>
                  <div className="text-[10px] ">Khám sức khỏe tổng quát</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end items-center w-[25%] gap-5 mb-[5px] h-full mt-[10px]">
            <div className="flex gap-2 text-sm font-bold cursor-pointer text-gray-400">
              <button
                type="button"
                onClick={() => {
                  handleChangeLangue("en");
                }}
              >
                <p style={lng === "en" ? { color: "red" } : null}>EN</p>
              </button>
              <button
                type="button"
                onClick={() => {
                  handleChangeLangue("vi");
                }}
              >
                <p className={lng === "vi" ? "text-red-500" : null}>VI</p>
              </button>
            </div>
            <div className="flex">
              <HelpIcon fontSize="small" className="text-[#45c3d2]" />
              <div className="text-sm font-bold">
                {t("system.suport", { ns: "system" })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
