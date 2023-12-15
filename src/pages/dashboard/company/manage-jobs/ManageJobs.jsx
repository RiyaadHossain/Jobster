import React from "react";
import DashboardHeader from "../../../../components/ui/DashboardHeader";
import { IoIosSearch } from "react-icons/io";
import JobsterTable from "../../../../components/dashboard/JobsterTable";
import { FaEye, FaGlobeAsia } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import { RiEdit2Fill } from "react-icons/ri";

export default function ManageJobs() {
  const columns = [
    { className: "w-[1%]", title: "" },
    { className: "w-[25%]", title: "Title" },
    { className: "w-[15%]", title: "Category" },
    { className: "w-[20%]", title: "Type" },
    { className: "w-[12%]", title: "Applications" },
    { className: "", title: "Date" },
    { className: "", title: "" },
  ];

  const dataSource = [1, 2, 3].map((el) => (
    <tr
      key={el}
      className="[&>*]:p-3 hover:bg-fifth transition-colors border-b"
    >
      <td>
        <input type="checkbox" name="" id="" />
      </td>
      <td>
        <h2 className="text-base font-semibold leading-6 text-primary">
          Financial Analyst
        </h2>
        <div className="flex items-center gap-1 text-[13px] font-medium leading-5 text-accent">
          <FaGlobeAsia /> San Diego, CA
        </div>
      </td>
      <td className="text-sm font-light leading-5 ">Construction</td>
      <td className="text-sm font-medium leading-5">Internship</td>
      <td className="text-sm font-light leading-5 text-primary">
        2 candidates
      </td>
      <td className="text-[13px] font-light leading-5">
        <span className="bg-green-700 text-xs inline-block px-2 py-[1px] mb-1 text-white rounded-full font-medium">
          Published
        </span>
        <div>2023/11/26 at 1:57 am</div>
      </td>
      <td>
        <div className="flex gap-2">
          <Link
            to={`edit-job/1`}
            className="bg-third p-[6px] inline-block rounded-lg hover:bg-primary hover:text-white transition-colors cursor-pointer"
          >
            <RiEdit2Fill />
          </Link>
          <Link
            to="/jobs/63e11077c942dd2644639864"
            className="bg-third p-[6px] inline-block rounded-lg hover:bg-primary hover:text-white transition-colors cursor-pointer"
          >
            <FaEye />
          </Link>
          <button className="bg-third p-[6px] inline-block rounded-lg hover:bg-primary hover:text-white transition-colors cursor-pointer">
            <IoTrashOutline />
          </button>
        </div>
      </td>
    </tr>
  ));

  return (
    <div>
      <DashboardHeader
        title="Manage Jobs"
        subtitle="Detailed list with all your job offers."
      />

      <div className="flex justify-end items-center gap-5">
        <p className="font-semibold">1 Jobs</p>
        <div>
          <div className="flex items-center gap-3 border px-4 py-[6px] rounded-3xl">
            <IoIosSearch className="text-lg" />
            <input
              className="border-none shadow-none p-0 focus:border-none focus:ring-0 text-base"
              type="text"
              placeholder="Search applications..."
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <JobsterTable columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
}
