import { FaEye, FaGlobeAmericas } from "react-icons/fa";
import { Link } from "react-router-dom";
import { recentApplications } from "../../../../../data/recentApplications";

export default function RecentApplicationsTable() {
  return (
    <table className="w-full">
      <tbody>
        {recentApplications.map((application, i) => (
          <tr
            key={i}
            className="border-b hover:bg-secondaryLight transition-colors [&>*]:p-2"
          >
            <td className="w-[28%]">
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={application.company.logo}
                    alt=""
                    className="w-10 h-10 rounded-lg"
                  />
                </div>
                <div>
                  <Link to={`/jobs/${application.id}`}>
                    <h3 className="text-base font-semibold leading-6 hover:opacity-[0.5] transition-colors">
                      {application.title}
                    </h3>
                  </Link>
                  <Link to={`/companies/${application.company.id}`}>
                    <p className="text-sm font-light leading-5 hover:opacity-[0.5] transition-colors">
                      {application.company.name}
                    </p>
                  </Link>
                </div>
              </div>
            </td>

            <td className="w-[25%] text-sm font-light leading-5 opacity-[0.8]">
              {application.category}
            </td>

            <td className="w-[25%] gap-2">
              <div className="flex items-center gap-2 text-[13px] font-medium leading-5 text-grayColor">
                <FaGlobeAmericas />
                <span>{application.location}</span>
              </div>
            </td>

            <td className="w-[10%] text-sm font-medium leading-5">
              {application.employmentType}
            </td>

            <td className="w-[12%]">
              <div className="flex justify-end">
                <Link to={`/jobs/${application.id}`} className="btn_icon">
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
