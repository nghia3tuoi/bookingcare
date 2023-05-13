import { Trans, useTranslation } from "react-i18next";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { Link } from "react-router-dom";
function HeaderSystem() {
  const { t, i18n } = useTranslation("system");
  const onChangeLanguae = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="bg-blue-500 relative">
      <div className="flex justify-between items-center w-full h-10 px-5">
        <div>
          <div className="text-white font-semibold group-items">
            {t("system.system")}
          </div>
          <div className="absolute w-52 h-8 bg-black top-[100%] left-0  group-hover/items:bg-white">
            <p className="text-blue-500 text-xs ml-5"> Quản trị hệ thống</p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-2">
            <button
              className="text-xs font-bold text-white hover:opacity-90"
              style={i18n.language === "vi" ? { color: "red" } : null}
              onClick={() => {
                onChangeLanguae("vi");
              }}
            >
              VI
            </button>
            <button
              className="text-xs font-bold text-white hover:opacity-90"
              style={i18n.language === "en" ? { color: "red" } : null}
              onClick={() => {
                onChangeLanguae("en");
              }}
            >
              EN
            </button>
          </div>
          <Link to="/login">
            <RiLogoutBoxRFill className="text-2xl text-white" />
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default HeaderSystem;
