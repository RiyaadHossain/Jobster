
import { Link } from "react-router-dom";
import SocialIcons from "../../../components/ui/SocialIcons";

export default function JobSidebar({ companyInfo, userData }) {
  const {
    experience,
    workLevel,
    employmentType,
    salaryRange,
    location,
    companyLogo,
    companyName,
  } = companyInfo;

  return (
    <>
      <div className="rounded-xl bg-third p-5  space-y-5">
        <div className="">
          <p className="sidebar_item_title">Experience</p>
          <h1 className="sidebar_content_info">{experience}</h1>
        </div>
        <div>
          <p className="sidebar_item_title">Work Level</p>
          <h1 className="sidebar_content_info">{workLevel}</h1>
        </div>
        <div>
          <p className="sidebar_item_title">Employment Type</p>
          <h1 className="sidebar_content_info">{employmentType}</h1>
        </div>
        <div>
          <p className="sidebar_item_title">Salary Range</p>
          <h1 className="sidebar_content_info">{salaryRange}</h1>
        </div>
        <div>
          <p className="sidebar_item_title">Location</p>
          <h1 className="sidebar_content_info">{location}</h1>
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-third p-5 space-y-5">
        <div className="flex  gap-2">
          <div>
            <img src={companyLogo} className="h-16 w-1h-16 rounded-xl" alt="" />
          </div>
          <div>
            <h1 className="sidebar_content_info font-bold">{companyName}</h1>
            <Link className="text-primary mt-1 font-light block">
              View Profile
            </Link>
          </div>
        </div>

        <div>
          <p className="sidebar_item_title">Company Size</p>
          <h1 className="sidebar_content_info">
            {userData?.data?.comapnySize}
          </h1>
        </div>
        <div>
          <p className="sidebar_item_title">Founded</p>
          <h1 className="sidebar_content_info">2001</h1>
        </div>
        <div>
          <p className="sidebar_item_title">Email</p>
          <h1 className="font-semibold text-sm text-primary">
            {userData?.data?.companyEmail}
          </h1>
        </div>
        <div>
          <p className="sidebar_item_title">Company Location</p>
          <h1 className="sidebar_content_info">
            {userData?.data?.companyLocation || "N/A"}
          </h1>
        </div>
        <div>
          <p className="sidebar_item_title">Website</p>
          <a className="font-semibold text-sm text-primary" href="#d">
            {userData?.data?.companySite}
          </a>
        </div>

        <div className="mt-4">
          <SocialIcons className="gap-6" />
        </div>
      </div>
    </>
  );
}
