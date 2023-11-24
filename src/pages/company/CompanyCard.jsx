import { useNavigate } from "react-router-dom";
import companyLogo from "../../assets/company-logo-7-160x160.png";

export default function CompanyCard({ border }) {
  const navigate = useNavigate();

  return (
    <div
      className={`p-7 h-fit bg-white rounded-3xl shadow-lg ${
        border && "border"
      }`}
    >
      <div
        onClick={() => navigate(`/companies/${1}`)}
        className="w-20 h-20 cursor-pointer"
      >
        <img className="w-20 h-20 rounded-2xl" src={companyLogo} alt="" />
      </div>
      <h3
        onClick={() => navigate(`/companies/${1}`)}
        className="text-lg font-semibold leading-7 mt-3 cursor-pointer hover:text-primary transition-colors"
      >
        CoderBotics
      </h3>
      <p className="text-sm font-light leading-6 mt-5 text-slate-500">
        CoderBotics, Inc. is an American multinational corporation that is
        engaged in the design, development, manufacturing, and worldwide
        marketing and sales of footwear, apparel, equipment, accessories, and
        services. The company is...
      </p>
      <p className="text-base font-medium leading-7 mt-6 hover:text-primary transition-colors">
        1 jobs
      </p>
    </div>
  );
}
