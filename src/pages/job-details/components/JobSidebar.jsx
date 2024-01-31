import { Link } from "react-router-dom";
import SocialIcons from "@/components/ui/SocialIcons";
import DetailsPageSidebar from "@/components/other/details-page-sidebar/DetailsPageSidebar";
import { userFormatText } from "@/utils/userFormatText";
import NameLogo from "@/components/ui/NameLogo";

export default function JobSidebar({ jobInfo }) {
  return (
    <>
      <DetailsPageSidebar bg="bg-primaryLight">
        <div className="">
          <p className="sidebar_item_title">Experience</p>
          <h1 className="sidebar_content_info">
            {userFormatText(jobInfo?.experience) || "Not Added"}
          </h1>
        </div>
        <div>
          <p className="sidebar_item_title">Work Level</p>
          <h1 className="sidebar_content_info">
            {userFormatText(jobInfo?.workLevel) || "Not Added"}
          </h1>
        </div>
        <div>
          <p className="sidebar_item_title">Employment Type</p>
          <h1 className="sidebar_content_info">
            {userFormatText(jobInfo?.employmentType) || "Not Added"}
          </h1>
        </div>
        <div>
          <p className="sidebar_item_title">Salary Range</p>
          <h1 className="sidebar_content_info">
            {jobInfo?.salaryRange || "Not Added"}
          </h1>
        </div>
        <div>
          <p className="sidebar_item_title">Location</p>
          <h1 className="sidebar_content_info">
            {userFormatText(jobInfo?.location) || "Not Added"}
          </h1>
        </div>
      </DetailsPageSidebar>

      <div className="mt-5"></div>

      <DetailsPageSidebar bg="bg-primaryLight">
        <div className="flex gap-2">
          <div>
            {jobInfo?.company?.logo ? (
              <img
                src={jobInfo?.company?.logo}
                className="h-16 w-16 object-cover rounded-xl"
                alt=""
              />
            ) : (
              <NameLogo
                width={16}
                rounded="xl"
                text="3xl"
                name={jobInfo?.company?.name}
              />
            )}
          </div>
          <div>
            <h1 className="sidebar_content_info font-bold">
              {jobInfo?.company?.name}
            </h1>
            <Link to={jobInfo?.company?._id} className="text-primary mt-1 font-light block">
              View Profile
            </Link>
          </div>
        </div>

        <div>
          <p className="sidebar_item_title">Company Size</p>
          <h1 className="sidebar_content_info">
            {jobInfo?.company?.companySize || "Not Added"}
          </h1>
        </div>
        <div>
          <p className="sidebar_item_title">Founded</p>
          <h1 className="sidebar_content_info">
            {jobInfo?.company?.founded || "Not Added"}
          </h1>
        </div>
        <div>
          <p className="sidebar_item_title">Email</p>
          <h1 className="font-semibold text-sm text-primary">
            {jobInfo?.email}
          </h1>
        </div>
        <div>
          <p className="sidebar_item_title">Company Location</p>
          <h1 className="sidebar_content_info">
            {userFormatText(jobInfo?.company?.location) || "Not Added"}
          </h1>
        </div>
        <div>
          <p className="sidebar_item_title">Website</p>
          <a className="font-semibold text-sm text-primary" href="#d">
            {jobInfo?.company?.website || "Not Added"}
          </a>
        </div>

        <div className="mt-4">
          <SocialIcons
            customLinks={jobInfo?.company?.socialLinks}
            className="gap-6"
          />
        </div>
      </DetailsPageSidebar>
    </>
  );
}
