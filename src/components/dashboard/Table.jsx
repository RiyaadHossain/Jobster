import { FaEye, FaGlobeAmericas } from "react-icons/fa";
import companyLogo from "../../assets/company-logo-5.png";

export default function Table() {
  return (
    <table className="w-full">
      <tbody>
        <tr className="border-b">
          <td className="w-[3%] pb-2 ">
            <img src={companyLogo} alt="" className="rounded-lg" />
          </td>
          <td className="w-[25%] p-2">
            <h3 className="text-base font-semibold leading-6">
              Financial Analyst
            </h3>
            <p className="text-sm font-light leading-5">Grameware</p>
          </td>
          <td className="w-[25%] p-2 text-sm font-light leading-5 opacity-[0.8]">
            Finance
          </td>
          <td className="w-[25%] p-2 gap-2">
            <div className="flex items-center gap-2 text-[13px] font-medium leading-5 text-accent">
              <FaGlobeAmericas />
              <span>San Dieago, SA</span>
            </div>
          </td>
          <td className="w-[10%] p-2 text-sm font-medium leading-5">
            Full Time
          </td>
          <td className="w-[12%] p-2 ">
            <div className="bg-third p-[6px] inline-block rounded-lg hover:bg-primary hover:text-white transition-colors cursor-pointer">
              <FaEye className="" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
