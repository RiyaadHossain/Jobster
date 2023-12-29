import "./module.style.css";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { notificationsData } from "@/data/notifications";
import NotificationTableRow from "./components/NotificationTableRow";

export default function Notification() {
  return (
    <div>
      <DashboardHeader
        title="Notification"
        subtitle="History of all your received notifications."
      />

      <div>
        <table className="w-full">
          <tbody>
            {notificationsData.map((notification, i) => (
              <NotificationTableRow key={i} notification={notification} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
