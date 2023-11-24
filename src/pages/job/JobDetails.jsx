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
import JobQueries from "./jobDetails/JobQueries";
import JobSidebar from "./jobDetails/JobSidebar";
import JobInfo from "./jobDetails/JobInfo";
import "./style/style.css";

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
    <div className="max_container my-20">
      <div className="grid grid-cols-12 gap-5 ">
        {/* --------------- Main Content --------------- */}
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 mb-8 lg:mb-0">
          {/* -------------- Comapany Images -------------- */}
          <div className="relative">
            <div
              style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
              className="absolute w-full rounded-xl h-full"
            ></div>
            <div className="h-96 rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={meeting}
                alt=""
              />
            </div>
            <div className="p-1 bg-white absolute left-[6%] bottom-[-16%]  company_logo">
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
      <div className="mt-10">
        <JobQueries queries={queries} jobId={id} />
      </div>
    </div>
  );
};

export default JobDetails;
