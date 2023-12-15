import { Link } from "react-router-dom";
import DashboardHeader from "../../../../components/ui/DashboardHeader";
import { MdForwardToInbox } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";

// const dataSource = []

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
            <tr className="border-b hover:bg-fifth transition-colors">
              <td className="w-[70%] p-2">
                <div className="flex items-center text-base ">
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
              <td className="w-[20%] p-2 text-sm font-light leading-5 opacity-[0.8]">
                45m
              </td>
              <td className="w-[12%] p-2 ">
                <div className="flex justify-end ">
                  <div
                    to="/jobs/63e11077c942dd2644639864"
                    className="bg-third p-[6px] rounded-lg hover:bg-primary hover:text-white transition-colors cursor-pointer"
                  >
                    <IoTrashOutline />
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border-b hover:bg-fifth transition-colors">
              <td className="w-[70%] p-2">
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
              <td className="w-[20%] p-2 text-sm font-light leading-5 opacity-[0.8]">
                5h
              </td>
              <td className="w-[12%] p-2 ">
                <div className="flex justify-end ">
                  <div
                    to="/jobs/63e11077c942dd2644639864"
                    className="bg-third p-[6px] rounded-lg hover:bg-primary hover:text-white transition-colors cursor-pointer"
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
