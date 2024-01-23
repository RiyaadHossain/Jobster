import { useState } from "react";
import SocialIcons from "@/components/ui/SocialIcons";
import DetailsPageSidebar from "@/components/other/details-page-sidebar/DetailsPageSidebar";
import { userFormatText } from "../../../utils/userFormatText";

export default function CompanySidebar({ companyInfo }) {
  const [showNum, setShowNum] = useState(false);

  const numberFirst = companyInfo?.phoneNumber?.slice(0, 8);
  const numberSecond = companyInfo?.phoneNumber?.slice(8);

  return (
    <DetailsPageSidebar bg="bg-secondaryLight">
      <div className="">
        <div className="sidebar_item_title">Industry</div>
        <div className="sidebar_content_info">
          {userFormatText(companyInfo?.industry) || "N/A"}
        </div>
      </div>
      <div className="">
        <div className="sidebar_item_title">Company size</div>
        <div className="sidebar_content_info ">
          {companyInfo?.companySize || "N/A"}
        </div>
      </div>
      <div className="">
        <div className="sidebar_item_title">Founded in</div>
        <div className="sidebar_content_info ">
          {companyInfo?.founded || "N/A"}
        </div>
      </div>
      <div className="">
        <div className="sidebar_item_title">Phone</div>
        {numberFirst ? (
          <div className={`sidebar_content_info ${showNum && "text-primary"}`}>
            {numberFirst}
            {showNum ? numberSecond : "****"}
            {!showNum && (
              <button onClick={() => setShowNum(true)} className="btn_sm ml-2">
                Show
              </button>
            )}
          </div>
        ) : (
          <p className="sidebar_content_info">N/A</p>
        )}
      </div>
      <div className="">
        <div className="sidebar_item_title">Email</div>
        <div className="sidebar_content_info text-primary">
          {companyInfo?.email}
        </div>
      </div>
      <div className="">
        <div className="sidebar_item_title">Location</div>
        <div className="sidebar_content_info ">
          {userFormatText(companyInfo?.location) || "N/A"}
        </div>
      </div>

      <div className="mt-4">
        {companyInfo?.socialLinks && (
          <SocialIcons
            customLinks={companyInfo?.socialLinks}
            className="gap-6"
          />
        )}
      </div>
    </DetailsPageSidebar>
  );
}
