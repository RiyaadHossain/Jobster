import DashboardHeader from "../../../../components/dashboard/DashboardHeader";
import JobsterTable from "../../../../components/dashboard/JobsterTable";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaEye, FaGlobeAsia } from "react-icons/fa";
import avatar from "../../../../assets/person.png";
import { MdBlock } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import DashboardBadge from "../../../../components/dashboard/DashboardBadge";
import TableSearchBar from "../../../../components/dashboard/TableSearchBar";
import { useState } from "react";

export default function Candidates() {
  const columns = [
    { className: "w-[1%]", title: "" },
    { className: "w-[25%]", title: "Name" },
    { className: "w-[15%]", title: "Applied for" },
    { className: "w-[20%]", title: "Status" },
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
        <div className="flex items-center gap-2">
          <div>
            <img
              className="w-10 h-10 rounded-full border border-primary"
              src={avatar}
              alt=""
            />
          </div>
          <div>
            <h2 className="main_row_title">Financial Analyst</h2>
            <div className="main_row_subtitle">
              <FaGlobeAsia /> San Diego, CA
            </div>
          </div>
        </div>
      </td>
      <td className="font_var_thin_pri">Gramware</td>
      <td>
        <DashboardBadge display="Approved" bg="bg-green-700" />
      </td>
      <td className="dashboard_table_date">2023/11/26 at 1:57 am</td>
      <td>
        <div className="flex justify-end gap-2">
          <Link
            to="/jobs/63e11077c942dd2644639864"
            className="inside_table_icon"
          >
            <FaEye />
          </Link>
          <button className="inside_table_icon">
            <IoMdCheckmark />
          </button>
          <button className="inside_table_icon">
            <MdBlock />
          </button>
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
        title="Candidates"
        subtitle="Detailed list of candidates that applied for your job offers."
      />

      <TableSearchBar
        quantity={3}
        display="candidate"
        setSearchText={setSearchText}
      />

      <div className="mt-8">
        <JobsterTable columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
}
