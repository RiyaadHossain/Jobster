import { FaEye, FaGlobeAmericas } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useMyApplicationsQuery } from "../../../../../redux/api/application";
import { userFormatText } from "../../../../../utils/userFormatText";
import NameLogo from "../../../../../components/ui/NameLogo";

export default function RecentApplicationsTable() {
  const { data } = useMyApplicationsQuery();

  const recentApplications = data?.data;

  return (
    <table className="w-full">
      <tbody>
        {recentApplications?.slice(0,4)?.map((application, i) => (
          <tr
            key={i}
            className="border-b hover:bg-secondaryLight transition-colors [&>*]:p-2"
          >
            <td className="w-[28%]">
              <div className="flex items-center gap-3">
                <div>
                  {application?.job?.company?.logo ? (
                    <img
                      src={application?.job?.company?.logo}
                      alt=""
                      className="w-10 h-10 object-cover rounded-lg"
                    />
                  ) : (
                    <NameLogo
                      name={application?.job?.company?.name}
                      rounded="lg"
                    />
                  )}
                </div>
                <div>
                  <Link to={`/jobs/${application?._id}`}>
                    <h3 className="text-base font-semibold leading-6 hover:opacity-[0.5] transition-colors">
                      {application?.title}
                    </h3>
                  </Link>
                  <Link to={`/companies/${application?.job?.company?._id}`}>
                    <p className="text-sm font-light leading-5 hover:opacity-[0.5] transition-colors">
                      {application?.job?.company?.name}
                    </p>
                  </Link>
                </div>
              </div>
            </td>

            <td className="w-[25%] text-sm font-light leading-5 opacity-[0.8]">
              {userFormatText(application?.job?.industry)}
            </td>

            <td className="w-[25%] gap-2">
              <div className="flex items-center gap-2 text-[13px] font-medium leading-5 text-grayColor">
                <FaGlobeAmericas />
                <span>{userFormatText(application?.job?.location) || "No Location"}</span>
              </div>
            </td>

            <td className="w-[10%] text-sm font-medium leading-5">
              {userFormatText(application?.job?.employmentType)}
            </td>

            <td className="w-[12%]">
              <div className="flex justify-end">
                <Link
                  to={`/jobs/${application?.job?._id}`}
                  className="btn_icon"
                >
                  <FaEye className="" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
