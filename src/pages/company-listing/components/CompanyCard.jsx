import { Link } from "react-router-dom";
import CompanyNameLogo from "./CompanyNameLogo";

export default function CompanyCard({ company }) {
  const companyAbout = company?.about?.slice(0, 150);

  return (
    <div className={`p-7 h-fit bg-white rounded-3xl shadow-lg border`}>
      <Link
        to={`/companies/${company?._id}`}
        className="w-20 h-20 cursor-pointer"
      >
        {company?.logo ? (
          <img
            className="w-20 h-20 object-cover rounded-2xl"
            src={company?.logo}
            alt=""
          />
        ) : (
          <CompanyNameLogo name={company?.name} />
        )}
      </Link>
      <Link
        to={`/companies/${company?._id}`}
        className="text-lg font-semibold leading-7 block mt-3 cursor-pointer hover:text-primary transition-colors"
      >
        {company?.name}
      </Link>
      <p className="text-sm font-light leading-6 mt-5 text-slate-500 max-w-md">
        {companyAbout ? companyAbout + "......" : "No Description added"}
      </p>
      <p className="text-base font-medium leading-7 mt-6 hover:text-primary transition-colors">
        {company?.jobs || 0} jobs
      </p>
    </div>
  );
}
