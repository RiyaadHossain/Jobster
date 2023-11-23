import React from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import { IoHeartOutline, IoShareSocialOutline } from "react-icons/io5";
import { RxDotFilled } from "react-icons/rx";
import PreviousBtn from "../../../components/reusable/PreviousBtn";
import { useApplyMutation } from "../../../features/job/jobAPI";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function JobInfo({
  jobData,
  jobInfo,
  jobId,
  applicants,
  queryData,
}) {
  const navigate = useNavigate();

  const [
    apply,
    { isSuccess: applySuccess, isError: applyError, error: applyErr },
  ] = useApplyMutation();

  const {
    user: { email, role, _id: userId } /* isLoading */,
  } = useSelector((state) => state.auth);

  if (applyError) toast.error(applyErr, { id: "applyErr" });

  if (applySuccess)
    toast.success("Successfully applied for the job", {
      id: "apply",
      icon: "✅",
      style: {
        borderRadius: "15px",
        background: "#333",
        color: "#fff",
      },
    });

  const applyJob = () => {
    const data = { userId, jobId, email };
    apply(data);
  };

  const {
    overview,
    position,
    companyName,
    location,
    skills,
    responsibilities,
    requirements,
  } = jobInfo;

  const isJobHolder = queryData?.data?.postedBy?.email === email;

  return (
    <>
      <div className="space-y-5 mt-24">
        <div className="flex justify-between items-center mt-5">
          <div>
            <h1 className="text-3xl bold font-bold">{position}</h1>
            <h5 className="text-accent font-light text-base">
              by <span className="text-primary font-medium">{companyName}</span>{" "}
              in <span className="text-primary font-light">{location}</span>
            </h5>
          </div>

          <div>
            <div className="flex items-center gap-5">
              <span className="border border-black rounded-full group p-3 hover:bg-black transition-colors">
                <IoHeartOutline className="text-2xl group-hover:text-white" />
              </span>
              <span className="border border-black rounded-full group p-3 hover:bg-black transition-colors">
                <IoShareSocialOutline className="text-2xl group-hover:text-white" />
              </span>
              <button onClick={applyJob} className="btn">
                Apply
              </button>
            </div>

            {role === "candidate" && jobData?.data?.length === 0 && (
              <button onClick={applyJob} className="btn">
                Apply
              </button>
            )}
            {role === "candidate" && jobData?.data.length > 0 && (
              <span className=" bg-primary text-sm text-white rounded-full p-1 px-2">
                Already Applied
              </span>
            )}
            {/* {role === "employee" && isJobHolder && (
        <p>
          Total Applied:{" "}
          <span className=" bg-primary text-sm text-white rounded-full p-1 px-3">
            {" "}
            {applicants?.length}
          </span>
        </p>
      )} */}
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-2 group transition-all">
            <div className="bg-primary/20 group-hover:bg-primary transition-all p-[3px] rounded-md">
              <AiOutlineLineChart className="text-[20px] group-hover:text-white  transition-all" />
            </div>
            <span className="text-[16px] font-light leading-[21px] group-hover:text-primary transition-all">
              Finance
            </span>
          </div>
          <span className="font-light text-accent">June 8, 2022</span>
        </div>

        {/* -------------- View Applicants Btn -------------- */}
        {role === "employee" && isJobHolder && applicants?.length ? (
          <div className="text-right ">
            <button
              onClick={() => navigate(`/applications/${queryData?.data?._id}`)}
              className="btn w-48 mx-auto"
            >
              View Applications
            </button>
          </div>
        ) : null}

        {/* -------------- Job Description -------------- */}
        <div className="pt-10">
          <h1 className="job_info_section_header">Overview</h1>
          <p className="job_info_section_content">{overview}</p>
        </div>
        <div>
          <h1 className="job_info_section_header">Skills</h1>
          <ul className="job_info_section_content ml-6">
            {skills.map((item, i) => (
              <li key={i} className="flex items-center">
                <RxDotFilled className="text-base" /> <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="job_info_section_header">Requirements</h1>
          <ul className="job_info_section_content ml-6">
            {requirements.map((item, i) => (
              <li key={i} className="flex items-center">
                <RxDotFilled className="text-base" /> <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="job_info_section_header">Responsibilities</h1>
          <ul className="job_info_section_content ml-6">
            {responsibilities.map((item, i) => (
              <li key={i} className="flex items-center">
                <RxDotFilled className="text-base" /> <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-5" />
        <PreviousBtn />
      </div>
    </>
  );
}
