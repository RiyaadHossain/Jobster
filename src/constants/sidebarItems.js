import { FaBriefcase, FaHome, FaUserCircle } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoIosLock, IoMdMail, IoMdNotifications } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { ENUM_SIDEBAR_ITEM } from "../enums/sidebarItems";

export const candidateSidebardItems = [
  {
    display: (
      <div className="flex items-center gap-2">
        <FaHome className="text-lg" />
        <span>Dashboard</span>
      </div>
    ),
    link: ENUM_SIDEBAR_ITEM.DASHBOARD,
  },
  {
    display: (
      <div className="flex items-center gap-2">
        <RiEdit2Fill className="text-lg" />
        <span>Edit Profile</span>
      </div>
    ),
    link: ENUM_SIDEBAR_ITEM.CAND_EDIT_PROFILE,
  },
  {
    display: (
      <div className="flex items-center gap-2">
        <IoDocumentTextOutline className="text-lg" />
        <span>Applications</span>
      </div>
    ),
    link: ENUM_SIDEBAR_ITEM.CAND_APPLICATION,
  },
  {
    display: (
      <div className="flex items-center gap-2">
        <FaRegHeart className="text-lg" />
        <span>Favourite Jobs</span>
      </div>
    ),
    link: ENUM_SIDEBAR_ITEM.CAND_FAVOURITE_JOBS,
  },
  {
    display: (
      <div className="flex items-center gap-2">
        <IoIosLock className="text-lg" />
        <span>Change Password</span>
      </div>
    ),
    link: ENUM_SIDEBAR_ITEM.CHANGE_PASSWORD,
  },
];

export const companySidebardItems = [
  {
    display: (
      <div className="flex items-center gap-2">
        <FaHome className="text-lg" />
        <span>Dashboard</span>
      </div>
    ),
    link: ENUM_SIDEBAR_ITEM.DASHBOARD,
  },
  {
    display: (
      <div className="flex items-center gap-2">
        <RiEdit2Fill className="text-lg" />
        <span>Edit Profile</span>
      </div>
    ),
    link: ENUM_SIDEBAR_ITEM.COMP_EDIT_PROFILE,
  },
  {
    display: (
      <div className="flex items-center gap-2">
        <IoDocumentTextOutline className="text-lg" />
        <span>New Job Offers</span>
      </div>
    ),
    link: ENUM_SIDEBAR_ITEM.COMP_NEW_JOB_OFFER,
  },
  {
    display: (
      <div className="flex items-center gap-2">
        <FaBriefcase className="text-lg" />
        <span>Manage Jobs</span>
      </div>
    ),
    link: ENUM_SIDEBAR_ITEM.COMP_MANAGE_JOBS,
  },
  {
    display: (
      <div className="flex items-center gap-2">
        <FaUserCircle className="text-lg" />
        <span>Candidates</span>
      </div>
    ),
    link: ENUM_SIDEBAR_ITEM.COMP_CANDIDATES,
  },
  {
    display: (
      <div className="flex items-center gap-2">
        <IoIosLock className="text-lg" />
        <span>Change Password</span>
      </div>
    ),
    link: ENUM_SIDEBAR_ITEM.CHANGE_PASSWORD,
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
    link: ENUM_SIDEBAR_ITEM.INBOX,
  },
  {
    display: (
      <div className="flex items-center gap-2">
        <IoMdNotifications className="text-lg" />
        <span>Notification</span>
      </div>
    ),
    link: ENUM_SIDEBAR_ITEM.NOTIFICATIONS,
  },
];
