import { FaEye, FaGlobeAsia } from "react-icons/fa";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import JobsterTable from "@/components/dashboard/JobsterTable";
import TableSearchBar from "@/components/dashboard/TableSearchBar";
import { useState } from "react";
import {
  useMyApplicationsQuery,
  useRemoveApplicationMutation,
} from "../../../../redux/api/application";
import { formatDate } from "../../../../utils/formatDate";
import { userFormatText } from "../../../../utils/userFormatText";
import DashboardBadge from "../../../../components/dashboard/DashboardBadge";
import { catchAsync } from "../../../../helpers/catchAsync";
import toast from "react-hot-toast";
import { ENUM_APPLICATION_STATUS } from "../../../../enums/applicationStatus";
import { useDeboune } from "../../../../hooks/useDebounce";

export default function Applications() {
  const columns = [
    { className: "w-[1%]", title: "" },
    { className: "w-[25%]", title: "Job" },
    { className: "w-[15%]", title: "Company" },
    { className: "w-[20%]", title: "Industry" },
    { className: "w-[12%]", title: "Type" },
    { className: "", title: "Date" },
    { className: "", title: "" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const debounceTerm = useDeboune(searchTerm, 2000);

  const query = {};
  if (debounceTerm) query["searchTerm"] = debounceTerm;

  const { data } = useMyApplicationsQuery({ ...query });
  const [removeApplication] = useRemoveApplicationMutation();

  const applicationsData = data?.data;

  const onRemoveApplication = catchAsync(async (application) => {
    if (application?.status !== ENUM_APPLICATION_STATUS.PENDING)
      return toast.error(`Application already ${application?.status}`, {
        id: "appRemove",
      });

    const id = application?._id;
    const res = await removeApplication(id).unwrap();
    toast.success(res?.message);
  });

  const dataSource = applicationsData?.map((application, i) => (
    <tr
      key={i}
      className="[&>*]:p-3 hover:bg-secondaryLight transition-colors border-b"
    >
      <td>
        <input type="checkbox" name="" id="" />
      </td>
      <td>
        <Link to={`/jobs/${application?._id}`} className="main_row_title">
          {application?.job?.title}
        </Link>
        <div className="main_row_subtitle">
          <FaGlobeAsia />{" "}
          {userFormatText(application?.job?.location) || "No Location"}
        </div>
      </td>
      <td className="font_var_thin_pri">
        <Link to={`/companies/${application?.job?.company?._id}`}>
          {application?.job?.company?.name}
        </Link>
      </td>
      <td className="font_var_medium">
        {userFormatText(application?.job?.industry)}
      </td>
      <td className="font_var_thin">
        {userFormatText(application?.job?.employmentType)}
      </td>
      <td className="dashboard_table_date">
        <div className="flex flex-col items-start">
          <DashboardBadge display={application?.status} />
          {formatDate(application?.createdAt, true)}
        </div>
      </td>
      <td>
        <div className="flex gap-2">
          <Link to={`/jobs/${application?.job?._id}`} className="btn_icon">
            <FaEye />
          </Link>
          <button
            onClick={() => onRemoveApplication(application)}
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
        title="Applications"
        subtitle="Detailed list of your job applications."
      />

      <TableSearchBar
        quantity={applicationsData?.length}
        display="application"
        setSearchTerm={setSearchTerm}
      />

      <div className="mt-8">
        <JobsterTable columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
}
