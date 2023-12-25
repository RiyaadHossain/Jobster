import "./module.style.css";
import DashboardHeader from "../../../../components/dashboard/DashboardHeader";
import { notificationsData } from "../../../../data/notifications";
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















/* <tr className="[&>*]:p-2 border-b hover:bg-secondaryLight transition-colors">
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
            </tr> */
