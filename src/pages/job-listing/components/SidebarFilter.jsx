import React from "react";
import DotBadge from "../../../components/ui/DotBadge";
import { employmentType, expLevel } from "../../../constants/jobInfo";

export default function SidebarFilter() {
  return (
    <div className="bg-primaryLight mt-10 p-6 rounded-xl">
      <div>
        <h3 className="text-lg font-semibold mb-5">Type of Employment</h3>
        <div className="flex flex-col gap-4">
          {employmentType.map((item) => (
            <label
              key={item.type}
              htmlFor=""
              className="flex justify-between items-center"
            >
              <span className="flex items-center gap-2 font-light">
                <input type="checkbox" id="" />
                {item.type}
              </span>
              <DotBadge>{item.jobs}</DotBadge>
            </label>
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-5 mt-10">Experience Level</h3>
        <div className="flex flex-col gap-4">
          {expLevel.map((item) => (
            <label
              key={item.type}
              htmlFor=""
              className="flex justify-between items-center"
            >
              <span className="flex items-center gap-2 font-light">
                <input type="checkbox" id="" />
                {item.type}
              </span>
              <DotBadge>{item.jobs}</DotBadge>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
