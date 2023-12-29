import { useRef } from "react";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import { notificationsData } from "../../data/notifications";
import GetTooltipNotificaitonContent from "../../helpers/GetTooltipNotificaitonContent";
import { useTooltip } from "../../hooks/useTooltip";

export default function NotificationToltip() {
  const notificationRef = useRef(null);
  const { openTooltip, toggleTooltip } = useTooltip(notificationRef);

  return (
    <div className="relative" ref={notificationRef}>
      <div onClick={toggleTooltip} className="cursor-pointer">
        <IoMdNotifications className="text-2xl" />
        {false && (
          <div className="absolute -right-[6px] -bottom-[6px] w-4 h-4 bg-primary text-white text-xs font-semibold rounded-full flex_cen">
            2
          </div>
        )}
      </div>
      {openTooltip && (
        <div className="absolute bg-slate-50 rounded-xl -right-1 border top-[30px] shadow-md w-96 z-30">
          <ul className="px-5 [&>*]:py-[6px] text-sm opacity-[0.8] text-grayColor py-3">
            {notificationsData.map((notification, i) => (
              <li key={i} className="flex justify-between gap-1 items-baseline">
                <GetTooltipNotificaitonContent notification={notification} />
                <span className="text-xs">3h</span>
              </li>
            ))}
          </ul>
          <div className="w-full h-[1px] bg-grayColor"></div>

          <Link
            to={`/dashboard/notifications`}
            className="text-primary font-semibold inline-block px-5 py-3 hover:text-opacity-70"
          >
            Read All
          </Link>
        </div>
      )}
    </div>
  );
}
