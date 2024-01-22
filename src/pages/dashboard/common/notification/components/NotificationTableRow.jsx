import { IoTrashOutline } from "react-icons/io5";
import GetNotificationContent from "../helpers/GetNotificationContent";
import { useDeleteNotificaitonMutation } from "../../../../../redux/api/notification";
import { catchAsync } from "../../../../../helpers/catchAsync";
import toast from "react-hot-toast";
import { timeAgoCreated } from "../../../../../utils/timeAgoCreated";

export default function NotificationTableRow({ notification }) {
  const [deleteNotification] = useDeleteNotificaitonMutation();
  const handleOnDelete = catchAsync(async () => {
    const res = await deleteNotification(notification?._id).unwrap();
    toast.success(res?.message);
  });

  return (
    <tr className="[&>*]:p-2 border-b hover:bg-secondaryLight transition-colors">
      <td className="w-[70%]">
        <GetNotificationContent notification={notification} />
      </td>

      <td className="w-[20%] time_text">
        {timeAgoCreated(notification?.createdAt)}
      </td>
      <td>
        <div className="flex justify-end">
          <button onClick={handleOnDelete} className="btn_icon">
            <IoTrashOutline />
          </button>
        </div>
      </td>
    </tr>
  );
}
