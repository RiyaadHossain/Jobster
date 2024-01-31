import React from "react";
import Pagination from "@/components/ui/Pagination";
import "./module.style.css";
import { BiSad } from "react-icons/bi";
import Loader from "../../ui/Loader";

export default function ListingPageContainer({
  sidebar,
  cards,
  moduleName,
  total,
  page,
  setPage,
  totalPages,
  isLoading,
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
        {isLoading && (
          <div className="text-center mt-20">
            <Loader />
          </div>
        )}
        {!isLoading && !cards?.length && (
          <p className="flex_cen gap-3 text-3xl font-semibold mt-20">
            No {moduleName} Found!
            <BiSad />
          </p>
        )}
        <div className="mt-20 items-end text-center">
          {totalPages > 1 ? (
            <Pagination totalPages={totalPages} page={page} setPage={setPage} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
