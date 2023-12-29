import GetRecentNotficationContent from "@/helpers/GetRecentNotficationContent";

export default function RecentNotificationRow({ notification }) {
  return (
    <div className="flex items-center justify-between font-light mb-2">
      <div className="flex items-center">
        <GetRecentNotficationContent notification={notification} />
      </div>
      <div>3h</div> {/* Make a util function to calculate time */}
    </div>
  );
}
