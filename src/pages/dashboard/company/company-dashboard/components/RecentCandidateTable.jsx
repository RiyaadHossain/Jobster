import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../../../../assets/person.png";
import { FaGlobeAsia } from "react-icons/fa";

export default function RecentCandidateTable() {
  return (
    <div>
      <table className="w-full">
        <tbody>
          <tr className="border-b hover:bg-fifth transition-colors">
            <td className="w-[55%] p-2">
              <div className="flex items-center gap-3">
                <div>
                  <img src={avatar} alt="" className="w-10 h-10 rounded-full" />
                </div>
                <div className="">
                  <Link
                    to={"/candidates/1"}
                    className="font-semibold cursor-pointer hover:text-primary transition-all"
                  >
                    Riyad Hossain
                  </Link>
                  <span className="block text-xs font-light">
                    Frontend Developer
                  </span>
                </div>
              </div>
            </td>
            <td className="w-[25%] p-2 text-sm font-light leading-5">
              <div className="flex items-center gap-1 text-[13px] font-medium leading-5 ">
                <FaGlobeAsia /> San Diego, CA
              </div>
            </td>
            <td className="w-[20%] p-2 ">
              <div className="flex justify-end">
                <div className="text-sm font-light leading-5 opacity-[0.8] flex items-center gap-2">
                  Applied for{" "}
                  <Link
                    to="/"
                    className="opacity-100 font-medium hover:text-grayColor"
                  >
                    Frontend
                  </Link>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
