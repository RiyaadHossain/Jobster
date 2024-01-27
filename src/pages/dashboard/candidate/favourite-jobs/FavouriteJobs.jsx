import DashboardHeader from "@/components/dashboard/DashboardHeader";
import JobsterTable from "@/components/dashboard/JobsterTable";
import { FaEye, FaGlobeAsia } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import TableSearchBar from "@/components/dashboard/TableSearchBar";
import { useState } from "react";
import { useMyListQuery, useRemoveMutation } from "@/redux/api/whishlist";
import { userFormatText } from "@/utils/userFormatText";
import { formatDate } from "@/utils/formatDate";
import { catchAsync } from "@/helpers/catchAsync";
import toast from "react-hot-toast";
import { useDeboune } from "@/hooks/useDebounce";

export default function FavouriteJobs() {
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

  const { data } = useMyListQuery({ ...query });
  const [remove] = useRemoveMutation();

  const favouriteItems = data?.data;

  const handleOnRemove = catchAsync(async (id) => {
    const res = await remove(id).unwrap();
    toast.success(res?.message);
  });

  const dataSource = favouriteItems?.map((item, i) => (
    <tr
      key={i}
      className="[&>*]:p-3 hover:bg-secondaryLight transition-colors border-b"
    >
      <td>
        <input type="checkbox" name="" id="" />
      </td>
      <td>
        <Link to={`/jobs/${item?.job?._id}`} className="main_row_title">
          {item?.job?.title}
        </Link>
        <div className="main_row_subtitle">
          <FaGlobeAsia /> {userFormatText(item?.job?.location) || "No Location"}
        </div>
      </td>
      <td className="font_var_thin_pri">
        <Link to={`/companies/${item?.job?.company?._id}`}>
          {item?.job?.company?.name}
        </Link>
      </td>
      <td className="font_var_medium">{userFormatText(item?.job?.industry)}</td>
      <td className="font_var_thin">
        {userFormatText(item?.job?.employmentType)}
      </td>
      <td className="dashboard_table_date">
        {formatDate(item?.createdAt, true)}
      </td>
      <td>
        <div className="flex gap-2">
          <Link to={`/jobs/${item?.job?._id}`} className="btn_icon">
            <FaEye />
          </Link>
          <button
            onClick={() => handleOnRemove(item?._id)}
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
        title="Favourite Jobs"
        subtitle="Detailed list of your favourite jobs."
      />

      <TableSearchBar
        quantity={favouriteItems?.length}
        display="job"
        setSearchTerm={setSearchTerm}
      />

      <div className="mt-8">
        <JobsterTable columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
}
