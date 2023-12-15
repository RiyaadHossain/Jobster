
import DashboardHeader from "../../../../components/ui/DashboardHeader";
import { IoIosSearch } from "react-icons/io";
import JobsterTable from "../../../../components/dashboard/JobsterTable";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaEye, FaGlobeAsia } from "react-icons/fa";
import avatar from "../../../../assets/person.png";
import { MdBlock } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";

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
      className="[&>*]:p-3 hover:bg-fifth transition-colors border-b"
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
            <h2 className="text-base font-semibold leading-6 text-primary">
              Financial Analyst
            </h2>
            <div className="flex items-center gap-1 text-[13px] font-medium leading-5 text-accent">
              <FaGlobeAsia /> San Diego, CA
            </div>
          </div>
        </div>
      </td>
      <td className="text-sm font-light leading-5 text-primary">Gramware</td>
      <td className=" font-medium leading-5">
        <span className="bg-green-700 text-xs inline-block px-2 py-[1px] mb-1 text-white rounded-full font-medium">
          Approved
        </span>
      </td>
      <td className="text-[13px] font-light leading-5">
        2023/11/26 at 1:57 am
      </td>
      <td>
        <div className="flex justify-end gap-2">
          <Link
            to="/jobs/63e11077c942dd2644639864"
            className="bg-third p-[6px] inline-block rounded-lg hover:bg-primary hover:text-white transition-colors cursor-pointer"
          >
            <FaEye />
          </Link>
          <button className="bg-third p-[6px] inline-block rounded-lg hover:bg-primary hover:text-white transition-colors cursor-pointer">
            <IoMdCheckmark />
          </button>
          <button className="bg-third p-[6px] inline-block rounded-lg hover:bg-primary hover:text-white transition-colors cursor-pointer">
            <MdBlock />
          </button>
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
        title="Candidates"
        subtitle="Detailed list of candidates that applied for your job offers."
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
