import Login from "pages/Login";
import HeaderDefault from "../components/component/Header/Header";
import Home from "../pages/Home/Home";
import UserManager from "pages/System/UserManager/UserManager";

const publicRoutes = [
  { path: "/", component: Home, layout: HeaderDefault },
  { path: "/login", component: Login, layout: null },
  //systems
  { path: "/system/user-manager", component: UserManager, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
