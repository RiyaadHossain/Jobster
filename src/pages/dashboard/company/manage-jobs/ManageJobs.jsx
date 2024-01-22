import { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import JobsterTable from "@/components/dashboard/JobsterTable";
import { FaEye, FaGlobeAsia } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import { RiEdit2Fill } from "react-icons/ri";
import DashboardBadge from "@/components/dashboard/DashboardBadge";
import TableSearchBar from "@/components/dashboard/TableSearchBar";
import { useMyJobsQuery } from "../../../../redux/api/company";
import { formatDate } from "../../../../utils/formatDate";
import { userFormatText } from "../../../../utils/userFormatText";
import { useDeleteJobMutation } from "../../../../redux/api/jobApi";
import { catchAsync } from "../../../../helpers/catchAsync";
import toast from "react-hot-toast";
import { useDeboune } from "../../../../hooks/useDebounce";

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

  const [searchTerm, setSearchTerm] = useState("");
  const debounceTerm = useDeboune(searchTerm, 2000);

  const query = {};
  if (debounceTerm) query["searchTerm"] = debounceTerm;

  const { data } = useMyJobsQuery({ ...query });
  const [deleteJob] = useDeleteJobMutation();

  const dashboardJobsData = data?.data;

  const onDeleteJob = catchAsync(async (id) => {
    const res = await deleteJob(id).unwrap();
    toast.success(res?.message);
  });

  const dataSource = dashboardJobsData?.map((data, i) => (
    <tr
      key={i}
      className="[&>*]:p-3 hover:bg-secondaryLight transition-colors border-b"
    >
      <td>
        <input type="checkbox" name="" id="" />
      </td>
      <td>
        <Link to={`/jobs/${data?.job?._id}`} className="main_row_title">
          {data?.job?.title}
        </Link>
        <div className="main_row_subtitle">
          <FaGlobeAsia /> {data?.job?.location || "No Location"}
        </div>
      </td>
      <td className="font_var_medium">{userFormatText(data?.job?.category)}</td>
      <td className="font_var_thin">
        {userFormatText(data?.job?.employmentType)}
      </td>
      <td className="font_var_thin_pri">
        {data?.applications?.length} candidates
      </td>
      <td>
        <DashboardBadge
          display={data?.job?.status || "Published"}
          bg="bg-green-700"
        />
        <div className="dashboard_table_date">
          {formatDate(data?.job?.createdAt, true)}
        </div>
      </td>
      <td>
        <div className="flex gap-2">
          <Link to={`edit-job/${data?.job?._id}`} className="btn_icon">
            <RiEdit2Fill />
          </Link>
          <Link to={`/jobs/${data?.job?._id}`} className="btn_icon">
            <FaEye />
          </Link>
          <button
            onClick={() => onDeleteJob(data?.job?._id)}
            className="btn_icon"
          >
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

      <TableSearchBar
        quantity={dashboardJobsData?.length}
        display="job"
        setSearchTerm={setSearchTerm}
      />

      <div className="mt-8">
        <JobsterTable columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
}
