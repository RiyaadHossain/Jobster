import "./module.style.css";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import NotificationTableRow from "./components/NotificationTableRow";
import {
  useGetAllNotificationsQuery,
  useGetUnReadItemsCountQuery,
  useMarkAsReadAllMutation,
} from "@/redux/api/notification";
import { useEffect } from "react";

export default function Notification() {
  const { data } = useGetAllNotificationsQuery();
  const { refetch } = useGetUnReadItemsCountQuery();
  const notificationsData = data?.data?.notifications;

  const [markAsReadAll] = useMarkAsReadAllMutation();

  useEffect(() => {
    markAsReadAll();
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <DashboardHeader
        title="Notification"
        subtitle="History of all your received notifications."
      />

      <div>
        <table className="w-full">
          <tbody>
            {notificationsData?.map((notification, i) => (
              <NotificationTableRow key={i} notification={notification} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
