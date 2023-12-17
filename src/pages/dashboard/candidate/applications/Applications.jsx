import { FaEye, FaGlobeAsia } from "react-icons/fa";
import DashboardHeader from "../../../../components/ui/DashboardHeader";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import JobsterTable from "../../../../components/dashboard/JobsterTable";

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
      className="[&>*]:p-3 hover:bg-fifth transition-colors border-b"
    >
      <td>
        <input type="checkbox" name="" id="" />
      </td>
      <td>
        <h2 className="text-base font-semibold leading-6 text-primary">
          Financial Analyst
        </h2>
        <div className="flex items-center gap-1 text-[13px] font-medium leading-5 text-grayColor">
          <FaGlobeAsia /> San Diego, CA
        </div>
      </td>
      <td className="text-sm font-light leading-5 text-primary">Gramware</td>
      <td className="text-sm font-medium leading-5">Finance</td>
      <td className="text-sm font-light leading-5">Full Time</td>
      <td className="text-[13px] font-light leading-5">
        2023/11/26 at 1:57 am
      </td>
      <td>
        <div className="flex gap-2">
          <Link
            to="/jobs/63e11077c942dd2644639864"
            className="bg-third p-[6px] inline-block rounded-lg hover:bg-primary hover:text-white transition-colors cursor-pointer"
          >
            <FaEye />
          </Link>
          <Link
            to="/jobs/63e11077c942dd2644639864"
            className="bg-third p-[6px] inline-block rounded-lg hover:bg-primary hover:text-white transition-colors cursor-pointer"
          >
            <IoTrashOutline />
          </Link>
        </div>
      </td>
    </tr>
  ));

  return (
    <div>
      <DashboardHeader
        title="Applications"
        subtitle="Detailed list of your job applications."
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
