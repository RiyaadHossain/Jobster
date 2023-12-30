import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { useRef } from "react";
import avatar from "@/assets/images/avatar/avatar-5.jpeg"
import { ENUM_USER_ROLE } from "@/enums/userRole";
import { useTooltip } from "@/hooks/useTooltip";

export default function ProfileMenu({ props }) {
  const { handleLogOut } = props;

  const profileMenuRef = useRef(null);
  const { openTooltip, toggleTooltip } = useTooltip(profileMenuRef);

  const role = ENUM_USER_ROLE.candidate;

  return (
    <div className="relative" ref={profileMenuRef}>
      <div onClick={toggleTooltip} className="flex items-center cursor-pointer">
        <img
          className="w-10 h-10 rounded-full border border-primary"
          src={avatar}
          alt=""
        />
        <h4 className="font-semibold ml-2">Riyad Hossain</h4>
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
