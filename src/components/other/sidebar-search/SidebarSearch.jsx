import React from "react";
import { useForm } from "react-hook-form";
import { industries, location } from "../../../constants/jobInfo";

export default function SidebarSearch({ bg, onhandleSubmit, moduleName }) {
  const { register, handleSubmit } = useForm();
  const inputName = moduleName === "Job" ? "title" : "name";
  const categoryOrIndustry = moduleName === "Job" ? "category" : "industry";

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
            moduleName === "Job" ? `${moduleName} Title` : `${moduleName} Name`
          } or Keyword`}
          {...register(inputName)}
        />
      </div>
      <div className="mb-6">
        <p className="font-semibold mb-3">Location</p>
        <select className="w-full border-0 text-base" {...register("location")}>
          <option value="" selected>
            Select Location
          </option>
          {location.map((item) => (
            <option value={item.value}>{item.display}</option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <p className="font-semibold mb-3">Category</p>
        <select
          className="w-full border-0 text-base"
          {...register(categoryOrIndustry)}
        >
          <option value="" selected>
            Select Category
          </option>
          {industries.map((item) => (
            <option value={item.value}>{item.display}</option>
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
