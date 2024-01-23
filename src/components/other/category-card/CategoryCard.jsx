import React from "react";
import { Link } from "react-router-dom";
import GetCategoryIcon from "@/pages/home/helpers/GetCategoryIcon";
import { userFormatText } from "../../../utils/userFormatText";

export default function CategoryCard({ category }) {
  const icon = <GetCategoryIcon type={category?.industry} />;

  return (
    <Link
      to={`/job-listing?industry=${category?.industry}`}
      className="flex items-center w-full border rounded-3xl group hover:bg-primaryLight transition-all duration-500 cursor-pointer"
    >
      <div className="bg-primaryLight p-7 rounded-3xl group-hover:bg-primary transition-all">
        {icon}
      </div>
      <div className="ml-7">
        <h3 className="text-lg font-medium leading-7 mb-1">
          {userFormatText(category?.industry)}
        </h3>
        <p className="text-sm font-light leading-5">
          {category?.openings} open positions
        </p>
      </div>
    </Link>
  );
}
