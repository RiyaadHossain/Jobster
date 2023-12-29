import { useState } from "react";
import DetailsPageSidebar from "@/components/other/details-page-sidebar/DetailsPageSidebar";

export default function CandidateSidebar({ candidateInfo }) {
  const [showNum, setShowNum] = useState(false);

  const numberFirst = candidateInfo.phoneNumber.slice(0, 12);
  const numberSecond = candidateInfo.phoneNumber.slice(12);

  return (
    <DetailsPageSidebar bg="bg-secondaryLight">
      <div className="">
        <div className="sidebar_item_title">Email</div>
        <div className="sidebar_content_info text-primary">
          riyadhossain.dev@gmail.com
        </div>
      </div>
      <div className="">
        <div className="sidebar_item_title">Location</div>
        <div className="sidebar_content_info">Dhaka, Bangladesh</div>
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
        <button className="btn_secondary w-full">Download Resume</button>
      </div>
    </DetailsPageSidebar>
  );
}
