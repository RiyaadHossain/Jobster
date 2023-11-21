import React from "react";
import companyLogo from "../../assets/company-logo-5.png";
import { BiCode, BiGlobe } from "react-icons/bi";

export default function JobCard() {
  return (
    <div className="border hover:shadow-lg transition-all rounded-[30px] p-8 text-black h-fit">
      <div className="flex items-center gap-2 group transition-all">
        <div className="bg-primary/20 group-hover:bg-primary transition-all p-[1px] rounded-md">
          <BiCode className="text-[26px] group-hover:text-white  transition-all" />
        </div>
        <span className="text-[16px] font-light leading-[21px] group-hover:text-primary transition-all">
          Finance
        </span>
      </div>

      <p className="text-[20px] font-semibold leading-7 mt-8 mb-2 hover:text-primary transition-colors">
        Financial Analyst
      </p>

      <div className="flex gap-8">
        <div className="flex items-center gap-1 hover:text-primary transition-colors">
          <BiGlobe />
          <p className="text-[14px] font-medium leading-5">San Diego, CA</p>
        </div>
        <span className="text-[15px]  font-light leading-5">Full Time</span>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div>
          <span className="text-[13px] font-light leading-5 text-accent">
            June 8, 2022 by
          </span>
          <p className="text-[14px] font-medium leading-[21px] mt-1 hover:text-primary transition-colors">
            Gramware
          </p>
        </div>
        <div className="cursor-pointer">
          <img className="w-20 h-20 rounded-2xl" src={companyLogo} alt="" />
        </div>
      </div>
    </div>
  );
}
