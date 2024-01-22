import DashboardHeader from "@/components/dashboard/DashboardHeader";
import JobsterTable from "@/components/dashboard/JobsterTable";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaEye, FaGlobeAsia } from "react-icons/fa";
import { MdBlock } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import DashboardBadge from "@/components/dashboard/DashboardBadge";
import TableSearchBar from "@/components/dashboard/TableSearchBar";
import { useState } from "react";
import { useAppliedCandidatesQuery } from "../../../../redux/api/company";
import { formatDate } from "../../../../utils/formatDate";
import NameLogo from "../../../../components/ui/NameLogo";
import toast from "react-hot-toast";
import { useUpdateStatusMutation } from "../../../../redux/api/application";
import { catchAsync } from "../../../../helpers/catchAsync";
import { ENUM_APPLICATION_STATUS } from "../../../../enums/applicationStatus";
import { useDeboune } from "../../../../hooks/useDebounce";

export default function Candidates() {
  const columns = [
    { className: "w-[1%]", title: "" },
    { className: "w-[25%]", title: "Name" },
    { className: "w-[15%]", title: "Applied for" },
    { className: "w-[20%]", title: "Status" },
    { className: "", title: "Date" },
    { className: "", title: "" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const debounceTerm = useDeboune(searchTerm, 2000);

  const query = {};
  if (debounceTerm) query["searchTerm"] = debounceTerm;

  const { data } = useAppliedCandidatesQuery({ ...query });
  const [updateStatus] = useUpdateStatusMutation();
  const appliedCandidates = data?.data;

  const handleDelete = () => {
    toast.error("You can't delete an application", { id: "del" });
  };

  const handleUpdate = catchAsync(async (id, payload) => {
    const status = { status: payload };

    const res = await updateStatus({ id, status }).unwrap();
    toast.success(res?.message);
  });

  const dataSource = appliedCandidates?.map((application, i) => (
    <tr
      key={i}
      className="[&>*]:p-3 hover:bg-secondaryLight transition-colors border-b"
    >
      <td>
        <input type="checkbox" name="" id="" />
      </td>
      <td>
        <div className="flex items-center gap-2">
          <div>
            {application?.candidate?.avatar ? (
              <img
                className="w-10 h-10 rounded-full border border-primary"
                src={application?.candidate?.avatar}
                alt=""
              />
            ) : (
              <NameLogo name={application?.candidate?.name} />
            )}
          </div>
          <div>
            <Link
              to={`/candidates/${application?.candidate?._id}`}
              className="main_row_title"
            >
              {application?.candidate?.name}
            </Link>
            <div className="main_row_subtitle">
              <FaGlobeAsia />{" "}
              {application?.candidate?.location || "No Location"}
            </div>
          </div>
        </div>
      </td>
      <td className="font_var_thin_pri">
        <Link to={`/jobs/${application?.job?._id}`}>
          {application?.job?.title}
        </Link>
      </td>
      <td>
        <DashboardBadge display={application?.status} />
      </td>
      <td className="dashboard_table_date">
        {formatDate(application?.createdAt, true)}
      </td>
      <td>
        <div className="flex justify-end gap-2">
          <Link
            to={`/candidates/${application?.candidate?._id}`}
            className="btn_icon"
          >
            <FaEye />
          </Link>
          <button
            onClick={() =>
              handleUpdate(application?._id, ENUM_APPLICATION_STATUS.ACCEPTED)
            }
            className="btn_icon"
          >
            <IoMdCheckmark />
          </button>
          <button
            onClick={() =>
              handleUpdate(application?._id, ENUM_APPLICATION_STATUS.REJECTED)
            }
            className="btn_icon"
          >
            <MdBlock />
          </button>
          <button onClick={handleDelete} className="btn_icon">
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

      <TableSearchBar
        quantity={appliedCandidates?.length}
        display="candidate"
        setSearchTerm={setSearchTerm}
      />

      <div className="mt-8">
        <JobsterTable columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
}
