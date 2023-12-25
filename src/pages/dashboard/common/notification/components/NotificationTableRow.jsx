import { IoTrashOutline } from "react-icons/io5";
import GetNotificationContent from "../helpers/GetNotificationContent";

export default function NotificationTableRow({ notification }) {
  return (
    <tr className="[&>*]:p-2 border-b hover:bg-secondaryLight transition-colors">
      <td className="w-[70%]">
        <GetNotificationContent notification={notification} />
      </td>

      <td className="w-[20%] time_text">
        {/* Make a util function to calculate time */}
        5h
      </td>
      <td>
        <div className="flex justify-end">
          <button className="inside_table_icon">
            <IoTrashOutline />
          </button>
        </div>
      </td>
    </tr>
  );
}
