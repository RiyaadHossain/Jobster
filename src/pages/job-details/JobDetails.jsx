import React from "react";
import { useParams } from "react-router-dom";
import meeting from "../../assets/meeting.jpg";
// import Loading from "../../components/loader/Loading";
import companyLogo from "../../assets/company-logo-5.png";
import JobSidebar from "./components/JobSidebar";
import JobInfo from "./components/JobInfo";
import "./module.style.css";

const JobDetails = () => {
  const { id } = useParams();

  const companyInfo = {
    experience: "Fresher",
    workLevel: "Junior",
    employmentType: "Remote",
    salaryRange: "100k / year",
    location: "Dhaka",
    companyLogo,
    companyName: "Programming Hero",
  };

  const jobInfo = {
    overview: "Please apply for this Job",
    position: "Frontend Developer",
    companyName: "Programming Hero",
    location: "Dhaka, Bangladesh",
    skills: [],
    responsibilities: [],
    requirements: [],
  };

  const userData = {
    comapnySize: "11 - 50",
    companyEmail: "program@gmail.com",
    companyLocation: "Dhaka, Bangladesh",
    companySite: "www.program.com",
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
            <JobInfo jobInfo={jobInfo} jobId={id} />
          </div>
        </div>

        {/* --------------- Sidebar Content --------------- */}
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <JobSidebar companyInfo={companyInfo} userData={userData} />
        </div>
      </div>

      {/* -------------- Queries -------------- */}
      <div className="mt-10">
        {/* <JobQueries queries={queries} jobId={id} /> */}
      </div>
    </div>
  );
};

export default JobDetails;
