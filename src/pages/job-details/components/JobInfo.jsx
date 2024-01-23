import { AiOutlineLineChart } from "react-icons/ai";

import PreviousBtn from "@/components/ui/PreviousBtn";

import { formatDate } from "../../../utils/formatDate";
import JobActionBtn from "./JobActionBtn";
import { getUserInfo } from "../../../services/auth.services";
import { ENUM_USER_ROLE } from "../../../enums/userRole";
import { Link } from "react-router-dom";
import { userFormatText } from "../../../utils/userFormatText";

export default function JobInfo({ jobInfo }) {
  const { role } = getUserInfo();
  const candidateRole = role === ENUM_USER_ROLE.candidate;

  return (
    <>
      <div className="space-y-5 mt-24">
        <div className="flex justify-between items-center mt-5">
          <div>
            <h1 className="text-3xl bold font-bold">{jobInfo?.title}</h1>
            <h5 className="text-grayColor font-light text-base">
              by
              <Link
                to={`/companies/${jobInfo?.company?._id}`}
                className="text-primary font-medium mx-1"
              >
                {jobInfo?.company?.name}
              </Link>
              in{" "}
              <span className="text-primary font-light">
                {userFormatText(jobInfo?.location) || "Location"}
              </span>
            </h5>
          </div>

          {candidateRole && <JobActionBtn jobId={jobInfo?._id} />}
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-2 group transition-all">
            <div className="bg-primaryLight group-hover:bg-primary transition-all p-[3px] rounded-md">
              <AiOutlineLineChart className="text-[20px] group-hover:text-white transition-all" />
            </div>
            <span className="text-[16px] font-light leading-[21px] group-hover:text-primary transition-all">
              {userFormatText(jobInfo?.industry)}
            </span>
          </div>
          <span className="font-light text-grayColor">
            {formatDate(jobInfo?.createdAt)}
          </span>
        </div>

        {/* -------------- Job Description -------------- */}
        <div className="pt-10">
          <h1 className="job_info_section_header">Overview</h1>
          <p className="text_accent">{jobInfo?.description}</p>
        </div>
        <div>
          <h1 className="job_info_section_header">Skills</h1>
          <ul className="text_accent list-disc pl-10">
            {jobInfo?.skills?.map((item, i) => (
              <li key={i} className="mt-2">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="job_info_section_header">Requirements</h1>
          <ul className="text_accent list-disc pl-10">
            {jobInfo?.requirements?.map((item, i) => (
              <li key={i} className="mt-2">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="job_info_section_header">Responsibilities</h1>
          <ul className="text_accent list-disc pl-10">
            {jobInfo?.responsibilities?.map((item, i) => (
              <li key={i} className="mt-2">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <PreviousBtn />
      </div>
    </>
  );
}
