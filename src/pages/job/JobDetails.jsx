import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetJobByIdQuery,
  useGetSpecificAppliedJobQuery,
} from "../../features/job/jobAPI";
import meeting from "../../assets/meeting.jpg";
import { useSelector } from "react-redux";
import Loading from "../../components/loader/Loading";
import { useGetRegisteredUserQuery } from "../../features/auth/authAPI";
import companyLogo from "../../assets/company-logo-5.png";
import "../../style/jobDetails.css";
import JobQueries from "./jobDetails/JobQueries";
import JobSidebar from "./jobDetails/JobSidebar";
import JobInfo from "./jobDetails/JobInfo";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    isError,
    isFetching,
    data: queryData,
  } = useGetJobByIdQuery(id, {
    pollingInterval: "100000",
  });

  const {
    user: { email },
  } = useSelector((state) => state.auth);

  const { data: userData, isFetching: userFetching } =
    useGetRegisteredUserQuery(email);

  const { data: jobData, isFetching: jobFetching } =
    useGetSpecificAppliedJobQuery({ email, jobId: id });

  if (isError) navigate("/");

  if (jobFetching) return <Loading />;

  if (userFetching) return <Loading />;

  if (isFetching) return <Loading />;

  const {
    companyName,
    position,
    location,
    experience,
    workLevel,
    employmentType,
    salaryRange,
    skills,
    requirements,
    responsibilities,
    overview,
    queries,
    applicants,
  } = queryData?.data || {};

  const companyInfo = {
    experience,
    workLevel,
    employmentType,
    salaryRange,
    location,
    companyLogo,
    companyName,
  };

  const jobInfo = {
    overview,
    position,
    companyName,
    location,
    skills,
    responsibilities,
    requirements,
  };

  return (
    <div className="max_container my-14">
      <div className="pt-14 grid grid-cols-12 gap-5 ">
        {/* --------------- Main Content --------------- */}
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 mb-10">
          {/* -------------- Comapany Images -------------- */}
          <div className="relative">
            <div className="h-96 rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={meeting}
                alt=""
              />
            </div>
            <div className="p-1 bg-white absolute left-[6%] bottom-[-20%]  company_logo">
              <img src={companyLogo} alt="" className="rounded-2xl" />
            </div>
          </div>

          {/* -------------- Job Title & Info -------------- */}
          <div className="space-y-5 mt-24">
            <JobInfo
              jobInfo={jobInfo}
              jobData={jobData}
              queryData={queryData}
              applicants={applicants}
              jobId={id}
            />
          </div>
        </div>

        {/* --------------- Sidebar Content --------------- */}
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <JobSidebar companyInfo={companyInfo} userData={userData} />
        </div>
      </div>

      {/* -------------- Queries -------------- */}
      <JobQueries queries={queries} jobId={id} />
    </div>
  );
};

export default JobDetails;
