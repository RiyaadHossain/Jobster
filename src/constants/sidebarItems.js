import { FaHome } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoIosLock, IoMdMail, IoMdNotifications } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";

export const dashboardSidebardItem = [
  {
    display: (
      <div className="flex items-center gap-2">
        <FaHome className="text-lg" />
        <span>Dashboard</span>
      </div>
    ),
    link: "/dashboard",
  },
  {
    display: (
      <div className="flex items-center gap-2">
        <RiEdit2Fill className="text-lg" />
        <span>Edit Profile</span>
      </div>
    ),
    link: "edit-profile",
  },
  {
    display: (
      <div className="flex items-center gap-2">
        <IoDocumentTextOutline className="text-lg" />
        <span>Applications</span>
      </div>
    ),
    link: "applications",
  },
  {
    display: (
      <div className="flex items-center gap-2">
        <FaRegHeart className="text-lg" />
        <span>Favourite Jobs</span>
      </div>
    ),
    link: "favourite-jobs",
  },
  {
    display: (
      <div className="flex items-center gap-2">
        <IoIosLock className="text-lg" />
        <span>Change Password</span>
      </div>
    ),
    link: "change-password",
  },
];

export const dashboardSidebardItemInsights = [
  {
    display: (
      <div className="flex items-center gap-2">
        <IoMdMail className="text-lg" />
        <span>Inbox</span>
      </div>
    ),
    link: "/dashboard/inbox",
  },
  {
    display: (
      <div className="flex items-center gap-2">
        <IoMdNotifications className="text-lg" />
        <span>Notification</span>
      </div>
    ),
    link: "/dashboard/notifications",
  },
];
