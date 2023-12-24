import React from "react";
import { Link } from "react-router-dom";
import { FaGlobeAsia } from "react-icons/fa";
import { recentCandidates } from "../../../../../data/recentCandidates";

export default function RecentCandidateTable() {
  return (
    <div>
      <table className="w-full">
        <tbody>
          {recentCandidates.map((application, i) => (
            <tr
              key={i}
              className="border-b hover:bg-secondaryLight transition-colors [&>*]:p-2"
            >
              <td className="w-[55%]">
                <div className="flex items-center gap-3">
                  <div>
                    <img
                      src={application.candidate.avatar}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  <div>
                    <Link
                      to={`/candidates/${application.candidate.id}`}
                      className="font-semibold cursor-pointer hover:text-primary transition-all"
                    >
                      {application.candidate.name}
                    </Link>
                    <span className="block text-xs font-light">
                      {application.candidate.industry}
                    </span>
                  </div>
                </div>
              </td>
              <td className="w-[25%] text-sm font-light leading-5">
                <div className="opacity-[0.7] flex items-center gap-1 text-[13px] font-medium leading-5 ">
                  <FaGlobeAsia /> {application.candidate.location}
                </div>
              </td>
              <td className="w-[20%]">
                <div className="flex justify-end">
                  <div className="text-sm font-light leading-5 opacity-[0.8] flex items-center gap-2">
                    Applied for
                    <Link
                      to={`/jobs/${application.candidate.id}`}
                      className="opacity-100 ml-1 font-medium hover:text-grayColor"
                    >
                      {application.appliedFor.name}
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
