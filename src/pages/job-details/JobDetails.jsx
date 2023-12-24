import { useParams } from "react-router-dom";
import JobSidebar from "./components/JobSidebar";
import JobInfo from "./components/JobInfo";
import PageBanner from "../../components/ui/PageBanner";
import { jobsData } from "../../data/jobs";
import "./module.style.css";

const JobDetails = () => {
  const { id } = useParams();
  console.log(id);

  const jobInfo = jobsData[0];

  return (
    <div className="max_container my-20">
      <div className="grid grid-cols-12 gap-5 ">
        {/* --------------- Main Content --------------- */}
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 mb-8 lg:mb-0">
          {/* -------------- Comapany Images -------------- */}

          <PageBanner
            banner={jobInfo.banner}
            brandImg={jobInfo.company.logo}
            rounded="rounded-xl"
            insideIcon={false}
          />

          {/* -------------- Job Title & Info -------------- */}
          <div className="space-y-5 mt-24">
            <JobInfo jobInfo={jobInfo} />
          </div>
        </div>

        {/* --------------- Sidebar Content --------------- */}
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <JobSidebar jobInfo={jobInfo} />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
