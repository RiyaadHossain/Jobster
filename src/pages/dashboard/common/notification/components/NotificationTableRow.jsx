import { FaBriefcase } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./module.style.css";

export default function NotificationTableRow({ notification }) {
  /* Types - Profile view, Message Received, Applied for Job, Application Accepted/Rejected */

  return (
    <tr className="[&>*]:p-2 border-b hover:bg-secondaryLight transition-colors">
      <td className="w-[70%]">
        <div className="flex items-center text-base">
          <FaBriefcase className="mr-3 opacity-[0.8]" />
          <div className="">
            <Link to={"/candidates/1"} className="highlighted_text">
              Someone
            </Link>
            <span className="opacity-[0.8] ml-1">applied for </span>
            <Link to={"/jobs/1"} className="highlighted_text">
              Frontend Developer
            </Link>
          </div>
        </div>
      </td>
      <td className="w-[20%] time_text">5h</td>
      <td>
        <div className="flex justify-end ">
          <div
            to="/jobs/63e11077c942dd2644639864"
            className="inside_table_icon"
          >
            <IoTrashOutline />
          </div>
        </div>
      </td>
    </tr>
  );
}
