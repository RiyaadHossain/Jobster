import React from "react";
import { useForm } from "react-hook-form";
import { industries, location } from "@/constants/jobInfo";
import { useLocation } from "react-router-dom";
import { ENUM_MODULE } from "@/enums/module";

export default function SidebarSearch({ bg, onhandleSubmit, moduleName }) {
  const { register, handleSubmit } = useForm();
  const inputName = moduleName === ENUM_MODULE.JOB ? "title" : "name";

  const { search } = useLocation();
  const searchIndustry = search.split("=")[1];

  return (
    <form
      onSubmit={handleSubmit(onhandleSubmit)}
      className={`p-7 rounded-3xl lg:max-w-[400px] ${bg}`}
    >
      <div className="mb-6">
        <p className="font-semibold mb-3">Search by Keywords</p>
        <input
          className="w-full border-0 text-base"
          type="text"
          placeholder={`${
            moduleName === ENUM_MODULE.JOB
              ? `${moduleName} Title`
              : `${moduleName} Name`
          } or Keyword`}
          {...register(inputName)}
        />
      </div>
      <div className="mb-6">
        <p className="font-semibold mb-3">Location</p>
        <select className="w-full border-0 text-base" {...register("location")}>
          <option value="">Select Location</option>
          {location.map((item) => (
            <option value={item.value}>{item.display}</option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <p className="font-semibold mb-3">Industry</p>
        <select className="w-full border-0 text-base" {...register("industry")}>
          <option value="">Select Industry</option>
          {industries.map((item) => (
            <option selected={item.value === searchIndustry} value={item.value}>
              {item.display}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button type="submit" className="btn_secondary text-center w-full">
          Find {moduleName}
        </button>
      </div>
    </form>
  );
}
