import { useState } from "react";
import DashboardHeader from "../../../../components/dashboard/DashboardHeader";
import JobsterTable from "../../../../components/dashboard/JobsterTable";
import { FaEye, FaGlobeAsia } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import { RiEdit2Fill } from "react-icons/ri";
import DashboardBadge from "../../../../components/dashboard/DashboardBadge";
import TableSearchBar from "../../../../components/dashboard/TableSearchBar";

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
      className="[&>*]:p-3 hover:bg-secondaryLight transition-colors border-b"
    >
      <td>
        <input type="checkbox" name="" id="" />
      </td>
      <td>
        <h2 className="main_row_title">Financial Analyst</h2>
        <div className="main_row_subtitle">
          <FaGlobeAsia /> San Diego, CA
        </div>
      </td>
      <td className="font_var_medium">Construction</td>
      <td className="font_var_thin">Internship</td>
      <td className="font_var_thin_pri">2 candidates</td>
      <td>
        <DashboardBadge display="Published" bg="bg-green-700" />
        <div className="dashboard_table_date">2023/11/26 at 1:57 am</div>
      </td>
      <td>
        <div className="flex gap-2">
          <Link to={`edit-job/1`} className="inside_table_icon">
            <RiEdit2Fill />
          </Link>
          <Link
            to="/jobs/63e11077c942dd2644639864"
            className="inside_table_icon"
          >
            <FaEye />
          </Link>
          <button className="inside_table_icon">
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
        quantity={23}
        display="job"
        setSearchText={setSearchText}
      />

      <div className="mt-8">
        <JobsterTable columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
}
