import { Link, useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { useRef } from "react";
import { useTooltip } from "@/hooks/useTooltip";
import { getUserInfo } from "@/services/auth.services";
import { useMeQuery } from "@/redux/api/user";
import { ENUM_USER_ROLE } from "@/enums/userRole";
import NameLogo from "@/components/ui/NameLogo";
import { removeUserInfo } from "../../services/auth.services";
import { useRefetchMe } from "../../hooks/useRefetchMe";
import toast from "react-hot-toast";

export default function ProfileMenu() {
  const refetch = useRefetchMe();
  const navigate = useNavigate();
  const profileMenuRef = useRef(null);
  const { openTooltip, toggleTooltip } = useTooltip(profileMenuRef);
  const userInfo = getUserInfo();

  const { data } = useMeQuery();

  const role = userInfo?.role;
  let profileIcon = data?.data?.avatar;
  if (role === ENUM_USER_ROLE.company) profileIcon = data?.data?.logo;

  const handleLogOut = () => {
    removeUserInfo();
    refetch();
    navigate("/");
    toast.success("Sign Out successfully", { id: "signout" });
  };

  return (
    <div className="relative" ref={profileMenuRef}>
      <div onClick={toggleTooltip} className="flex items-center cursor-pointer">
        {profileIcon ? (
          <img
            className="w-10 h-10 rounded-full object-cover border border-primary"
            src={profileIcon}
            alt=""
          />
        ) : (
          <NameLogo name={data?.data?.name} />
        )}
        <h4 className="font-semibold ml-2">{data?.data?.name}</h4>
        <FaCaretDown />
      </div>

      {openTooltip && (
        <div className="absolute p-4 bg-slate-50 rounded-xl -right-1 border top-[50px] shadow-md w-52">
          <ul className="flex flex-col gap-5">
            <li className="hover:text-primary hover:tracking-wider transition-all cursor-pointer">
              <Link to={`/dashboard/${role}/edit-profile`}>Edit Profile</Link>
            </li>
            <li className="hover:text-primary hover:tracking-wider transition-all cursor-pointer">
              <Link to={`/dashboard`}>Dashboard</Link>
            </li>
            <li>
              <button
                onClick={handleLogOut}
                className="border border-black px-3 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary transition-all"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
