import { useState } from "react";
import DetailsPageSidebar from "@/components/other/details-page-sidebar/DetailsPageSidebar";
import { userFormatText } from "../../../utils/userFormatText";

export default function CandidateSidebar({ candidateInfo }) {
  const [showNum, setShowNum] = useState(false);

  const numberFirst = candidateInfo?.phoneNumber?.slice(0, 8);
  const numberSecond = candidateInfo?.phoneNumber?.slice(8);

  return (
    <DetailsPageSidebar bg="bg-secondaryLight">
      <div className="">
        <div className="sidebar_item_title">Email</div>
        <div className="sidebar_content_info text-primary">
          {candidateInfo?.email}
        </div>
      </div>
      <div className="">
        <div className="sidebar_item_title">Location</div>
        <div className="sidebar_content_info">
          {userFormatText(candidateInfo?.location) || "Not Added"}
        </div>
      </div>
      <div className="">
        <div className="sidebar_item_title">Phone</div>
        {candidateInfo?.phoneNumber ? (
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
          <p className="sidebar_content_info">Not Added</p>
        )}
      </div>
      <div>
        {candidateInfo?.resume?.fileURL ? (
          <a
            href={candidateInfo?.resume?.fileURL}
            rel="noreferrer"
            target="_blank"
            className="btn_secondary w-full inline-block flex_cen"
          >
            Download Resume
          </a>
        ) : (
          <button className="btn_secondary w-full" disabled>
            Download Resume
          </button>
        )}
      </div>
    </DetailsPageSidebar>
  );
}
