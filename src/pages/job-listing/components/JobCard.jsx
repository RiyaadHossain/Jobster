import { BiGlobe } from "react-icons/bi";
import { Link } from "react-router-dom";
import { formatDate } from "@/utils/formatDate";
import { userFormatText } from "@/utils/userFormatText";
import NameLogo from "@/components/ui/NameLogo";
import { ENUM_JOB_STATUS } from "@/enums/jobOffer";
import GetCategoryIcon from "@/helpers/GetIndustryIcon";

export default function JobCard({ company, jobInfo }) {
  const companyName = jobInfo?.company?.name || company?.name;
  const companyLogo = jobInfo?.company?.logo || company?.logo;
  const companyId = jobInfo?.company?._id || company?._id;

  return (
    <div className="border hover:shadow-lg transition-all rounded-[30px] p-8 text-black h-fit">
      <div className="flex justify-between">
        <div className="flex items-center gap-2 group transition-all">
          <div className="bg-primary/20 group-hover:bg-primary transition-all p-[3px] rounded-md">
            <GetCategoryIcon
              type={jobInfo?.industry}
              className="text-[20px] group-hover:text-white transition-all"
            />
          </div>
          <span className="text-[16px] font-light leading-[21px] group-hover:text-primary transition-all">
            {userFormatText(jobInfo?.industry)}
          </span>
        </div>
        <div>
          <span
            className={`bg-${
              jobInfo?.status === ENUM_JOB_STATUS.PUBLISHED ? "green" : "red"
            }-700 px-2 rounded-full text-xs text-white`}
          >
            {userFormatText(jobInfo?.status)}
          </span>
        </div>
      </div>

      <p className="text-[20px] font-semibold leading-7 mt-8 mb-2 hover:text-primary transition-colors">
        <Link to={`/jobs/${jobInfo?._id}`}> {jobInfo?.title}</Link>
      </p>

      <div className="flex gap-8">
        <div className="flex items-center gap-1 hover:text-primary transition-colors">
          <BiGlobe />
          <p className="text-[14px] font-medium leading-5">
            {userFormatText(jobInfo?.location) || "Location"}
          </p>
        </div>
        <span className="text-[15px]  font-light leading-5">
          {userFormatText(jobInfo?.employmentType)}
        </span>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div>
          <span className="text-[13px] font-light leading-5 text-grayColor">
            {formatDate(jobInfo?.createdAt)}
          </span>
          <p className="text-[14px] font-medium leading-[21px] mt-1 hover:text-primary transition-colors">
            <Link to={`/companies/${companyId}`}>{companyName}</Link>
          </p>
        </div>
        <Link to={`/companies/${companyId}`} className="cursor-pointer">
          {companyLogo ? (
            <img
              className="w-20 h-20 rounded-2xl object-cover"
              src={companyLogo}
              alt=""
            />
          ) : (
            <NameLogo name={companyName} width={20} rounded="2xl" text="4xl" />
          )}
        </Link>
      </div>
    </div>
  );
}
