import { Link } from "react-router-dom";
import SocialIcons from "@/components/ui/SocialIcons";
import DetailsPageSidebar from "@/components/other/details-page-sidebar/DetailsPageSidebar";
import { userFormatText } from "../../../utils/userFormatText";
import NameLogo from "../../../components/ui/NameLogo";

export default function JobSidebar({ jobInfo }) {
  return (
    <>
      <DetailsPageSidebar bg="bg-primaryLight">
        <div className="">
          <p className="sidebar_item_title">Experience</p>
          <h1 className="sidebar_content_info">
            {userFormatText(jobInfo?.experience) || "N/A"}
          </h1>
        </div>
        <div>
          <p className="sidebar_item_title">Work Level</p>
          <h1 className="sidebar_content_info">
            {userFormatText(jobInfo?.workLevel) || "N/A"}
          </h1>
        </div>
        <div>
          <p className="sidebar_item_title">Employment Type</p>
          <h1 className="sidebar_content_info">
            {userFormatText(jobInfo?.employmentType) || "N/A"}
          </h1>
        </div>
        <div>
          <p className="sidebar_item_title">Salary Range</p>
          <h1 className="sidebar_content_info">
            {jobInfo?.salaryRange || "N/A"}
          </h1>
        </div>
        <div>
          <p className="sidebar_item_title">Location</p>
          <h1 className="sidebar_content_info">
            {jobInfo?.location || "N/A"}
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
            <Link className="text-primary mt-1 font-light block">
              View Profile
            </Link>
          </div>
        </div>

        <div>
          <p className="sidebar_item_title">Company Size</p>
          <h1 className="sidebar_content_info">
            {jobInfo?.company?.companySize || "N/A"}
          </h1>
        </div>
        <div>
          <p className="sidebar_item_title">Founded</p>
          <h1 className="sidebar_content_info">
            {jobInfo?.company?.founded || "N/A"}
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
            {jobInfo?.company?.location || "N/A"}
          </h1>
        </div>
        <div>
          <p className="sidebar_item_title">Website</p>
          <a className="font-semibold text-sm text-primary" href="#d">
            {jobInfo?.company?.website || "N/A"}
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
