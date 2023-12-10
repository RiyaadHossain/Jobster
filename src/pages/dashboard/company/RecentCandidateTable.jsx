import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { Link } from "react-router-dom";
import avatar from "../../../assets/person.png";

export default function RecentCandidateTable() {
  return (
    <table className="w-full">
      <tbody>
        <tr className="border-b">
          <td className="w-[3%] pb-2 ">
            <img src={avatar} alt="" className="rounded-full" />
          </td>
          <td className="w-[55%] p-2">
            <Link to="/jobs/63e11077c942dd2644639864">
              <h3 className="text-base font-semibold leading-6 hover:opacity-[0.5] transition-colors">
                Riyad Hossain
              </h3>
              <p className="text-sm font-light leading-5 hover:opacity-[0.5] transition-colors">
                Frontend Developer
              </p>
            </Link>
          </td>
          <td className="w-[25%] p-2 gap-2">
            <div className="flex items-center gap-2 text-[13px] font-medium leading-5 text-accent">
              <FaGlobeAmericas />
              <span>San Dieago, SA</span>
            </div>
          </td>
          <td className=" p-2 ">
            <div className="flex justify-end text-sm font-light gap-2">
              <span className="opacity-[0.7]"> Applied for</span>
              <Link
                to="/jobs/63e11077c942dd2644639864"
                className="font-medium hover:opacity-[0.7]"
              >
                Frontend
              </Link>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
