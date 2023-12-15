import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ProfileMenu from "../../components/other/ProfileMenu";
import avatar from "../../assets/person.png";
import toast from "react-hot-toast";
import { ENUM_USER_ROLE } from "../../enum/userRole";
import NotificationToltip from "../../components/dashboard/NotificationToltip";

const Dashboard = () => {
  const email = "riyad@gmail.com";
  const role = ENUM_USER_ROLE.candidate;

  const handleLogOut = () => toast.success("hello world!");

  return (
    <div className="grid grid-cols-12 ">
      <Sidebar />
      <div className=" col-span-12 ml-80">
        <div className=" h-full w-full mx-auto">
          <div className="py-8 flex items-center gap-4 justify-end bg-fifth w-full pr-8">
            <NotificationToltip />
            <ProfileMenu
              props={{
                avatar,
                email,
                role,
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
