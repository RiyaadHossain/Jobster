import React from "react";

export default function ListingPageContainer({ sidebar, cards }) {
  return (
    <div className="flex flex-col lg:flex-row mt-28 px-8 gap-6 max_container">
      {/* SideBar________________ */}
      <div className="">{sidebar}</div>

      {/* Job Cards________________ */}
      <div className="flex-auto">{cards}</div>
    </div>
  );
}
