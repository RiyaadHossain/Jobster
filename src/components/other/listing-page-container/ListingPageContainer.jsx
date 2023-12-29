import React from "react";
import Pagination from "@/components/ui/Pagination";
import "./module.style.css";

export default function ListingPageContainer({
  sidebar,
  cards,
  moduleName,
  total,
}) {
  return (
    <div className="flex flex-col lg:flex-row mt-28 px-8 gap-6 max_container">
      {/* SideBar */}
      {sidebar}

      {/* Company Cards */}
      <div className="flex-auto">
        <h3 className="font-bold text-gray-600 text-xl mb-6">
          Showing <span className="text-primary">{total}</span> {moduleName}
        </h3>
        <div className="grid gap-5 listing_page_card_container">{cards}</div>
        <div className="mt-20 items-end text-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
