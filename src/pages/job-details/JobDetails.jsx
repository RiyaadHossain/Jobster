import { useNavigate, useParams } from "react-router-dom";
import JobSidebar from "./components/JobSidebar";
import JobInfo from "./components/JobInfo";
import PageBanner from "@/components/ui/PageBanner";
import "./module.style.css";
import { useGetSingleJobQuery } from "../../redux/api/jobApi";
import toast from "react-hot-toast";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetSingleJobQuery(id);

  const jobInfo = data?.data;

  // setTimeout(() => {
  //   if (!Object.keys(jobInfo || {}).length) {
  //     toast.error("This job has been removed", { id: "job_remove" });
  //     navigate(-1);
  //   }
  // }, 2000);

  return (
    <div className="max_container my-20">
      <div className="grid grid-cols-12 gap-5 ">
        {/* --------------- Main Content --------------- */}
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 mb-8 lg:mb-0">
          {/* -------------- Comapany Images -------------- */}

          <PageBanner
            banner={jobInfo?.company?.banner}
            title={jobInfo?.company?.name}
            brandImg={jobInfo?.company?.logo}
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
