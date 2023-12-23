import { Link } from "react-router-dom";
import DashboardHeader from "../../../../components/dashboard/DashboardHeader";
import { MdForwardToInbox } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";

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
            {/* Use 'NotificationTableRow' component */}
            <tr className="[&>*]:p-2 border-b hover:bg-secondaryLight transition-colors">
              <td className="w-[70%]">
                <div className="flex items-center text-base">
                  <MdForwardToInbox className="mr-3 opacity-[0.8]" />
                  <div className="">
                    <Link
                      to={"/candidates/1"}
                      className="text-primary font-medium cursor-pointer"
                    >
                      Riyad Hossain{" "}
                    </Link>
                    <span className="opacity-[0.8]">sent you a message</span>
                  </div>
                </div>
              </td>
              <td className="w-[20%] text-sm font-light leading-5 opacity-[0.8]">
                45m
              </td>
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
            <tr className="[&>*]:p-2 border-b hover:bg-secondaryLight transition-colors">
              <td className="w-[70%]">
                <div className="flex items-center text-base ">
                  <FaBriefcase className="mr-3 opacity-[0.8]" />
                  <div className="">
                    <Link
                      to={"/candidates/1"}
                      className="text-primary font-medium cursor-pointer"
                    >
                      Someone{" "}
                    </Link>
                    <span className="opacity-[0.8]">applied for </span>
                    <Link
                      to={"/jobs/1"}
                      className="text-primary font-medium cursor-pointer"
                    >
                      Frontend Developer{" "}
                    </Link>
                  </div>
                </div>
              </td>
              <td className="w-[20%] text-sm font-light leading-5 opacity-[0.8]">
                5h
              </td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}
