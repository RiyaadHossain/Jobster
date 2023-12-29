import { Link } from "react-router-dom";

export default function CompanyCard({ company }) {
  // company.description.length = 150;

  return (
    <div className={`p-7 h-fit bg-white rounded-3xl shadow-lg border`}>
      <Link
        to={`/companies/${company.name}`}
        className="w-20 h-20 cursor-pointer"
      >
        <img className="w-20 h-20 rounded-2xl" src={company.logo} alt="" />
      </Link>
      <Link
        to={`/companies/${company.name}`}
        className="text-lg font-semibold leading-7 block mt-3 cursor-pointer hover:text-primary transition-colors"
      >
        {company.name}
      </Link>
      <p className="text-sm font-light leading-6 mt-5 text-slate-500 max-w-md">
        {company.description.slice(0, 150)} ......
      </p>
      <p className="text-base font-medium leading-7 mt-6 hover:text-primary transition-colors">
        1 jobs
      </p>
    </div>
  );
}
