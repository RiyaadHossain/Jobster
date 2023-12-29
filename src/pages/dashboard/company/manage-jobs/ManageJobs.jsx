import { useState } from "react";
import DashboardHeader from "../../../../components/dashboard/DashboardHeader";
import JobsterTable from "../../../../components/dashboard/JobsterTable";
import { FaEye, FaGlobeAsia } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import { RiEdit2Fill } from "react-icons/ri";
import DashboardBadge from "../../../../components/dashboard/DashboardBadge";
import TableSearchBar from "../../../../components/dashboard/TableSearchBar";
import { dashboardJobsData } from "../../../../data/dashJobs";

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

  const dataSource = dashboardJobsData.map((job, i) => (
    <tr
      key={i}
      className="[&>*]:p-3 hover:bg-secondaryLight transition-colors border-b"
    >
      <td>
        <input type="checkbox" name="" id="" />
      </td>
      <td>
        <Link to={`/jobs/${job.id}`} className="main_row_title">
          {job.title}
        </Link>
        <div className="main_row_subtitle">
          <FaGlobeAsia /> {job.location}
        </div>
      </td>
      <td className="font_var_medium">{job.category}</td>
      <td className="font_var_thin">{job.employmentType}</td>
      <td className="font_var_thin_pri">
        {job.applications.length} candidates
      </td>
      <td>
        <DashboardBadge display={job.status} bg="bg-green-700" />
        <div className="dashboard_table_date">{job.publishedAt}</div>
      </td>
      <td>
        <div className="flex gap-2">
          <Link to={`edit-job/${job.id}`} className="btn_icon">
            <RiEdit2Fill />
          </Link>
          <Link to={`/jobs/${job.id}`} className="btn_icon">
            <FaEye />
          </Link>
          <button className="btn_icon">
            <IoTrashOutline />
          </button>
        </div>
      </td>
    </tr>
  ));

  const [searchText, setSearchText] = useState("");
  console.log({ searchText });

  return (
    <div>
      <DashboardHeader
        title="Manage Jobs"
        subtitle="Detailed list with all your job offers."
      />

      <TableSearchBar
        quantity={dashboardJobsData.length}
        display="job"
        setSearchText={setSearchText}
      />

      <div className="mt-8">
        <JobsterTable columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
}
