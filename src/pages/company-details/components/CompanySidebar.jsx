import { useState } from "react";
import SocialIcons from "../../../components/ui/SocialIcons";
import DetailsPageSidebar from "../../../components/other/details-page-sidebar/DetailsPageSidebar";

export default function CompanySidebar() {
  const [showNum, setShowNum] = useState(false);

  return (
    <DetailsPageSidebar bg="bg-secondaryLight">
      <div className="">
        <div className="sidebar_item_title">Industry</div>
        <div className="sidebar_content_info">Marketing & Communication</div>
      </div>
      <div className="">
        <div className="sidebar_item_title">Company size</div>
        <div className="sidebar_content_info ">120 employees</div>
      </div>
      <div className="">
        <div className="sidebar_item_title">Founded in</div>
        <div className="sidebar_content_info ">2005</div>
      </div>
      <div className="">
        <div className="sidebar_item_title">Phone</div>
        <div className={`sidebar_content_info ${showNum && "text-primary"}`}>
          +(880) 170379{showNum ? "0978" : "****"}{" "}
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
          artistre.studio@pixelprime.co
        </div>
      </div>
      <div className="">
        <div className="sidebar_item_title">Location</div>
        <div className="sidebar_content_info ">San Francisco</div>
      </div>

      <div className="mt-4">
        <SocialIcons className="gap-6" />
      </div>
    </DetailsPageSidebar>
  );
}
