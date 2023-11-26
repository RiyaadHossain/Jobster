import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

export default function ProfileMenu({ props }) {
  const {
    toggleProfile,
    profileMenuRef,
    avatar,
    openProfile,
    // email,
    // role,
    handleLogOut,
  } = props;

  return (
    <div className="relative" ref={profileMenuRef}>
      <div onClick={toggleProfile} className="flex items-center cursor-pointer">
        <img
          className="w-11 h-11 rounded-full border border-primary"
          src={avatar}
          alt=""
        />
        <h4 className="font-semibold ml-2">Riyad Hossain</h4>
        <FaCaretDown />
      </div>

      {openProfile && (
        <div className="absolute p-4 bg-slate-50 rounded-xl right-0 border top-[50px] shadow-md w-52">
          <ul className="flex flex-col gap-5">
            <li className="hover:text-primary hover:tracking-wider transition-all cursor-pointer">
              <Link to="/edit-profile">Edit Profile</Link>
            </li>
            <li className="hover:text-primary hover:tracking-wider transition-all cursor-pointer">
              <Link to="/register">Register</Link>
            </li>
            <li className="hover:text-primary hover:tracking-wider transition-all cursor-pointer">
              <Link to={`/dashboard`}>Dashboard</Link>
            </li>
            <li>
              <button
                onClick={handleLogOut}
                className="border border-black px-3 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all"
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
