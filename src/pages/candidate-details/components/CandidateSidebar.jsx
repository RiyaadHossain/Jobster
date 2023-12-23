import { useState } from "react";
import DetailsPageSidebar from "../../../components/other/details-page-sidebar/DetailsPageSidebar";

export default function CandidateSidebar() {
  const [showNum, setShowNum] = useState(false);

  return (
    <DetailsPageSidebar bg="bg-secondaryLight">
      <div className="">
        <div className="sidebar_item_title">Email</div>
        <div className="sidebar_item_info text-primary">
          riyadhossain.dev@gmail.com
        </div>
      </div>
      <div className="">
        <div className="sidebar_item_title">Location</div>
        <div className="sidebar_item_info ">Dhaka, Bangladesh</div>
      </div>
      <div className="">
        <div className="sidebar_item_title">Phone</div>
        <div className={`sidebar_item_info ${showNum && "text-primary"}`}>
          +(880) 170379{showNum ? "0978" : "****"}{" "}
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
