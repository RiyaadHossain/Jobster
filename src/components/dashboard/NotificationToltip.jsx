import { useRef } from "react";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import GetTooltipNotificaitonContent from "@/helpers/GetTooltipNotificaitonContent";
import { useTooltip } from "@/hooks/useTooltip";
import {
  useGetAllNotificationsQuery,
  useGetUnReadItemsCountQuery,
  useMarkAsReadAllMutation,
} from "../../redux/api/notification";
import { timeAgoCreated } from "../../utils/timeAgoCreated";
import { selectTab } from "../../redux/slices/sidebarItemSlice";
import { ENUM_SIDEBAR_ITEM } from "../../enums/sidebarItems";
import { useDispatch } from "react-redux";

export default function NotificationToltip() {
  const dispatch = useDispatch();
  const notificationRef = useRef(null);
  const { openTooltip, toggleTooltip } = useTooltip(notificationRef);

  const { data } = useGetAllNotificationsQuery();
  const { data: unreadData, refetch } = useGetUnReadItemsCountQuery(null, {
    pollingInterval: 10000,
  });
  const [markAsReadAll] = useMarkAsReadAllMutation();
  const notificationsData = data?.data?.notifications;
  const unreadItems = unreadData?.data?.unreadItems;

  const onClickReadAll = () => {
    toggleTooltip();
    dispatch(selectTab(ENUM_SIDEBAR_ITEM.NOTIFICATIONS));
  };

  const onClickNotification = () => {
    toggleTooltip();
    markAsReadAll();
    refetch();
  };

  return (
    <div className="relative" ref={notificationRef}>
      <div onClick={onClickNotification} className="cursor-pointer">
        <IoMdNotifications className="text-2xl" />
        {unreadItems > 0 && (
          <div className="absolute -right-[7px] -bottom-[7px] w-[18px] h-[18px] bg-primary text-white text-xs font-semibold rounded-full flex_cen">
            {unreadItems}
          </div>
        )}
      </div>
      {openTooltip && (
        <div className="absolute bg-slate-50 rounded-xl -right-1 border top-[30px] shadow-md w-96 z-30">
          <ul className="px-5 [&>*]:py-[6px] text-sm opacity-[0.8] text-grayColor py-3">
            {notificationsData?.slice(0, 5)?.map((notification, i) => (
              <li key={i} className="flex justify-between gap-1 items-baseline">
                <GetTooltipNotificaitonContent notification={notification} />
                <span className="text-xs">
                  {timeAgoCreated(notification?.createdAt)}
                </span>
              </li>
            ))}
          </ul>
          <div className="w-full h-[1px] bg-grayColor"></div>

          <Link
            onClick={onClickReadAll}
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
