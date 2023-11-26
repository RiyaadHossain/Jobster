import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ProfileMenu from "../main/ProfileMenu";
import avatar from "../../assets/person.png";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { IoMdNotifications } from "react-icons/io";

const Dashboard = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const toggleProfile = () => setOpenProfile(!openProfile);
  const profileMenuRef = useRef(null);

  const {
    user: { email, role },
  } = useSelector((state) => state.auth);

  useEffect(() => {
    // Close the profile menu - on outside click
    const handleClickOutside = (event) => {
      if (!profileMenuRef.current.contains(event.target)) {
        setOpenProfile(false);
      }
    };

    // Listen for clicks outside the profile menu
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Remove the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogOut = () => toast.success("hello world!");

  return (
    <div className="grid grid-cols-12 ">
      <Sidebar />
      <div className=" col-span-12 ml-80">
        <div className=" h-full w-full mx-auto">
          <div className="py-8 flex items-center gap-4 justify-end bg-fifth w-full pr-8">
            <IoMdNotifications className="text-2xl" />
            <ProfileMenu
              props={{
                toggleProfile,
                profileMenuRef,
                avatar,
                openProfile,
                email,
                role,
                handleLogOut,
              }}
            />
          </div>
          <div className="rounded-t-2xl bg-white h-screen p-14">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
