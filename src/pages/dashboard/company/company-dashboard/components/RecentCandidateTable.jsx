import React from "react";
import { Link } from "react-router-dom";
import { FaGlobeAsia } from "react-icons/fa";
import { useAppliedCandidatesQuery } from "@/redux/api/company";
import NameLogo from "@/components/ui/NameLogo";
import { userFormatText } from "../../../../../utils/userFormatText";

export default function RecentCandidateTable() {
  const { data } = useAppliedCandidatesQuery();
  const recentCandidates = data?.data;

  return (
    <div>
      <table className="w-full">
        <tbody>
          {recentCandidates?.slice(0,4)?.map((application, i) => (
            <tr
              key={i}
              className="border-b hover:bg-secondaryLight transition-colors [&>*]:p-2"
            >
              <td className="w-[50%]">
                <div className="flex items-center gap-3">
                  <div>
                    {application?.candidate?.avatar ? (
                      <img
                        src={application?.candidate?.avatar}
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                    ) : (
                      <NameLogo name={application?.candidate?.name} />
                    )}
                  </div>
                  <div>
                    <Link
                      to={`/candidates/${application?.candidate?._id}`}
                      className="font-semibold cursor-pointer hover:text-primary transition-all"
                    >
                      {application?.candidate?.name}
                    </Link>
                    <span className="block text-xs font-light">
                      {userFormatText(application?.candidate?.industry) || "No Industry"}
                    </span>
                  </div>
                </div>
              </td>
              <td className="w-[15%] text-sm font-light leading-5">
                <div className="opacity-[0.7] flex items-center gap-1 text-[13px] font-medium leading-5 ">
                  <FaGlobeAsia />{" "}
                  {userFormatText(application?.candidate?.location) || "No Location"}
                </div>
              </td>
              <td className="w-[35%]">
                <div className="flex justify-end">
                  <div className="text-sm font-light leading-5 opacity-[0.8] flex items-center gap-2">
                    Applied for
                    <Link
                      to={`/jobs/${application?.job?._id}`}
                      className="opacity-100 ml-1 font-medium hover:text-grayColor"
                    >
                      {application?.job?.title}
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
