import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ProfileMenu from "../main/ProfileMenu";
import avatar from "../../assets/person.png";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import NotificationToltip from "./NotificationToltip";

const Dashboard = () => {

  const {
    user: { email, role },
  } = useSelector((state) => state.auth);


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
