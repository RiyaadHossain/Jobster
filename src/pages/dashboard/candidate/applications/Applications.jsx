import { FaEye, FaGlobeAsia } from "react-icons/fa";
import DashboardHeader from "../../../../components/dashboard/DashboardHeader";
import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import JobsterTable from "../../../../components/dashboard/JobsterTable";
import TableSearchBar from "../../../../components/dashboard/TableSearchBar";
import { useState } from "react";

export default function Applications() {
  const columns = [
    { className: "w-[1%]", title: "" },
    { className: "w-[25%]", title: "Job" },
    { className: "w-[15%]", title: "Company" },
    { className: "w-[20%]", title: "Category" },
    { className: "w-[12%]", title: "Type" },
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
      <td className="font_var_thin_pri">Gramware</td>
      <td className="font_var_medium">Finance</td>
      <td className="font_var_thin">Full Time</td>
      <td className="dashboard_table_date">2023/11/26 at 1:57 am</td>
      <td>
        <div className="flex gap-2">
          <Link
            to="/jobs/63e11077c942dd2644639864"
            className="inside_table_icon"
          >
            <FaEye />
          </Link>
          <Link
            to="/jobs/63e11077c942dd2644639864"
            className="inside_table_icon"
          >
            <IoTrashOutline />
          </Link>
        </div>
      </td>
    </tr>
  ));

  const [searchText, setSearchText] = useState("");
  console.log(searchText);

  return (
    <div>
      <DashboardHeader
        title="Applications"
        subtitle="Detailed list of your job applications."
      />

      <TableSearchBar
        quantity={1}
        display="application"
        setSearchText={setSearchText}
      />

      <div className="mt-8">
        <JobsterTable columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
}
