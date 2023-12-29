import { Link } from "react-router-dom";
import SocialIcons from "@/components/ui/SocialIcons";
import DetailsPageSidebar from "@/components/other/details-page-sidebar/DetailsPageSidebar";

export default function JobSidebar({ jobInfo }) {
  console.log(jobInfo);

  return (
    <>
      <DetailsPageSidebar bg="bg-primaryLight">
        <div className="">
          <p className="sidebar_item_title">Experience</p>
          <h1 className="sidebar_content_info">{jobInfo.experienceLevel}</h1>
        </div>
        <div>
          <p className="sidebar_item_title">Work Level</p>
          <h1 className="sidebar_content_info">{jobInfo.workLevel}</h1>
        </div>
        <div>
          <p className="sidebar_item_title">Employment Type</p>
          <h1 className="sidebar_content_info">{jobInfo.employmentType}</h1>
        </div>
        <div>
          <p className="sidebar_item_title">Salary Range</p>
          <h1 className="sidebar_content_info">{jobInfo.salaryRange}</h1>
        </div>
        <div>
          <p className="sidebar_item_title">Location</p>
          <h1 className="sidebar_content_info">{jobInfo.location}</h1>
        </div>
      </DetailsPageSidebar>

      <div className="mt-5"></div>

      <DetailsPageSidebar bg="bg-primaryLight">
        <div className="flex gap-2">
          <div>
            <img
              src={jobInfo.company.logo}
              className="h-16 w-1h-16 rounded-xl"
              alt=""
            />
          </div>
          <div>
            <h1 className="sidebar_content_info font-bold">
              {jobInfo.company.name}
            </h1>
            <Link className="text-primary mt-1 font-light block">
              View Profile
            </Link>
          </div>
        </div>

        <div>
          <p className="sidebar_item_title">Company Size</p>
          <h1 className="sidebar_content_info">
            {jobInfo.company.companySize}
          </h1>
        </div>
        <div>
          <p className="sidebar_item_title">Founded</p>
          <h1 className="sidebar_content_info">{jobInfo.company.founded}</h1>
        </div>
        <div>
          <p className="sidebar_item_title">Email</p>
          <h1 className="font-semibold text-sm text-primary">
            {jobInfo.company.email}
          </h1>
        </div>
        <div>
          <p className="sidebar_item_title">Company Location</p>
          <h1 className="sidebar_content_info">{jobInfo.company.location}</h1>
        </div>
        <div>
          <p className="sidebar_item_title">Website</p>
          <a className="font-semibold text-sm text-primary" href="#d">
            {jobInfo.company.website}
          </a>
        </div>

        <div className="mt-4">
          <SocialIcons className="gap-6" />
        </div>
      </DetailsPageSidebar>
    </>
  );
}
