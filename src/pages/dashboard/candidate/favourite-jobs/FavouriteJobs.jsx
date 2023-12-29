import DashboardHeader from "@/components/dashboard/DashboardHeader";
import JobsterTable from "@/components/dashboard/JobsterTable";
import { FaEye, FaGlobeAsia } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import TableSearchBar from "@/components/dashboard/TableSearchBar";
import { useState } from "react";
import { applicationsData } from "@/data/applications";

export default function FavouriteJobs() {
  const columns = [
    { className: "w-[1%]", title: "" },
    { className: "w-[25%]", title: "Job" },
    { className: "w-[15%]", title: "Company" },
    { className: "w-[20%]", title: "Category" },
    { className: "w-[12%]", title: "Type" },
    { className: "", title: "Date" },
    { className: "", title: "" },
  ];

  const dataSource = applicationsData.map((application, i) => (
    <tr
      key={i}
      className="[&>*]:p-3 hover:bg-secondaryLight transition-colors border-b"
    >
      <td>
        <input type="checkbox" name="" id="" />
      </td>
      <td>
        <Link to={`/jobs/${application.id}`} className="main_row_title">
          {application.job.title}
        </Link>
        <div className="main_row_subtitle">
          <FaGlobeAsia /> {application.job.location}
        </div>
      </td>
      <td className="font_var_thin_pri">
        <Link to={`/companies/${application.company.id}`}>
          {application.company.name}
        </Link>
      </td>
      <td className="font_var_medium">{application.job.category}</td>
      <td className="font_var_thin">{application.job.employmentType}</td>
      <td className="dashboard_table_date">{application.appliedAt}</td>
      <td>
        <div className="flex gap-2">
          <Link to={`/jobs/${application.id}`} className="btn_icon">
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
  console.log(searchText);

  return (
    <div>
      <DashboardHeader
        title="Favourite Jobs"
        subtitle="Detailed list of your favourite jobs."
      />

      <TableSearchBar
        quantity={applicationsData.length}
        display="job"
        setSearchText={setSearchText}
      />

      <div className="mt-8">
        <JobsterTable columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
}
