import "./style/style.css";
import toast from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";
import ProfileMenu from "../components/ProfileMenu";
import { DashboardSidebar } from "./DashboardSidebar";
import NotificationToltip from "@/components/dashboard/NotificationToltip";
import { removeUserInfo } from "@/services/auth.services";
import { useRefetchMe } from "@/hooks/useRefetchMe";
import { ENUM_SIDEBAR_ITEM } from "@/enums/sidebarItems";
import { useDispatch } from "react-redux";
import { selectTab } from "@/redux/slices/sidebarItemSlice";
import ScrollToTop from "@/helpers/ScrollToTop";

const Dashboard = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const refetch = useRefetchMe();

  const currentRoute = location.pathname.split("/dashboard/")[1];
  const routes = Object.values(ENUM_SIDEBAR_ITEM);
  routes.forEach((route) => {
    if (route === currentRoute) {
      dispatch(selectTab(route));
    }
  });

  const handleLogOut = () => {
    removeUserInfo();
    refetch();
    toast.success("Sign Out successfully", { id: "signout" });
  };

  return (
    <div className="grid grid-cols-12">
      <ScrollToTop/>
      <DashboardSidebar />
      <div className=" col-span-12 ml-80">
        <div className=" h-full w-full mx-auto">
          <div className="py-8 flex items-center gap-4 justify-end bg-secondaryLight w-full pr-8">
            <NotificationToltip />
            <ProfileMenu
              props={{
                handleLogOut,
              }}
            />
          </div>
          <div className="rounded-t-2xl bg-white min-h-screen p-14">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
