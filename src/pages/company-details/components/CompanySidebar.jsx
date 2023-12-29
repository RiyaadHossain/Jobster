import { useState } from "react";
import SocialIcons from "@/components/ui/SocialIcons";
import DetailsPageSidebar from "@/components/other/details-page-sidebar/DetailsPageSidebar";

export default function CompanySidebar({ companyInfo }) {
  const [showNum, setShowNum] = useState(false);

  const numberFirst = companyInfo.phoneNumber.slice(0, 12);
  const numberSecond = companyInfo.phoneNumber.slice(12);

  return (
    <DetailsPageSidebar bg="bg-secondaryLight">
      <div className="">
        <div className="sidebar_item_title">Industry</div>
        <div className="sidebar_content_info">{companyInfo.industry}</div>
      </div>
      <div className="">
        <div className="sidebar_item_title">Company size</div>
        <div className="sidebar_content_info ">{companyInfo.companySize}</div>
      </div>
      <div className="">
        <div className="sidebar_item_title">Founded in</div>
        <div className="sidebar_content_info ">{companyInfo.founded}</div>
      </div>
      <div className="">
        <div className="sidebar_item_title">Phone</div>
        <div className={`sidebar_content_info ${showNum && "text-primary"}`}>
          {numberFirst}
          {showNum ? numberSecond : "****"}
          {!showNum && (
            <button onClick={() => setShowNum(true)} className="btn_sm ml-2">
              Show
            </button>
          )}
        </div>
      </div>
      <div className="">
        <div className="sidebar_item_title">Email</div>
        <div className="sidebar_content_info text-primary">
          {companyInfo.email}
        </div>
      </div>
      <div className="">
        <div className="sidebar_item_title">Location</div>
        <div className="sidebar_content_info ">{companyInfo.location}</div>
      </div>

      <div className="mt-4">
        <SocialIcons customLinks={companyInfo.socialLinks} className="gap-6" />
      </div>
    </DetailsPageSidebar>
  );
}
