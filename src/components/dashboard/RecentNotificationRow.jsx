import GetRecentNotficationContent from "../../helpers/GetRecentNotficationContent";
import { timeAgoCreated } from "../../utils/timeAgoCreated";


export default function RecentNotificationRow({ notification }) {
  return (
    <div className="flex items-center justify-between font-light mb-2">
      <div className="flex items-center">
        <GetRecentNotficationContent notification={notification} />
      </div>
      <div>{timeAgoCreated(notification?.createdAt)}</div>
    </div>
  );
}
