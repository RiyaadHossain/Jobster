import React, { useEffect, useRef, useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

export default function NotificationToltip() {
  const [openNotification, setOpenNotification] = useState(false);
  const toggleNotification = () => setOpenNotification(!openNotification);
  const notificationRef = useRef(null);

  useEffect(() => {
    // Close the profile menu - on outside click
    const handleClickOutside = (event) => {
      if (!notificationRef.current.contains(event.target)) {
        setOpenNotification(false);
      }
    };

    // Listen for clicks outside the profile menu
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Remove the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={notificationRef}>
      <IoMdNotifications className="text-2xl" onClick={toggleNotification} />
      {openNotification && (
        <div className="absolute bg-slate-50 rounded-xl -right-1 border top-[50px] shadow-md w-80 z-30">
          <ul className="[&>*]:px-5 [&>*]:py-2 [&>*]:text-sm [&>*]:opacity-[0.8] [&>*]:text-accent py-3">
            <li>
              <Link to={"/candidates/1"} className="text-black font-medium">
                Riyad Hossain{" "}
              </Link>
              sent you a message
              <span className="ml-2 text-xs text-slate-400">1h</span>
            </li>
            <li>
              <Link to={"/candidates/1"} className="text-black font-medium">
                Riyad Hossain{" "}
              </Link>
              applied for{" "}
              <Link to={"/jobs/1"} className="text-black font-medium">
                Frontend
              </Link>
              <span className="ml-2 text-xs text-slate-400">1h</span>
            </li>
          </ul>
          <div className="w-full h-[1px] bg-accent"></div>

          <Link
            to={`/dashboard/notifications`}
            className="text-primary font-semibold inline-block px-5 py-3"
          >
            Read All
          </Link>
        </div>
      )}
    </div>
  );
}
