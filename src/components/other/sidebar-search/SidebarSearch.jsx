import React from "react";
import { useForm } from "react-hook-form";

export default function SidebarSearch({ bg, onhandleSubmit, moduleName }) {
  const { register, handleSubmit } = useForm();

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
          {...register("inputName")}
        />
      </div>
      <div className="mb-6">
        <p className="font-semibold mb-3">Location</p>
        <select
          className="w-full border-0 text-base"
          {...register("location")}
        >
          <option value="d">Dhaka</option>
          <option value="k">Khulna</option>
          <option value="r">Rajshahi</option>
        </select>
      </div>
      <div className="mb-6">
        <p className="font-semibold mb-3">Category</p>
        <select
          className="w-full border-0 text-base"
          {...register("category")}
        >
          <option value="s">Software Engineering</option>
          <option value="f">Finance</option>
          <option value="m">Marketing</option>
        </select>
      </div>
      <div className="">
        <button
          // onClick={(e) => e.preventDefault()}
          type="submit"
          className="btn_secondary text-center w-full"
        >
          Find {moduleName}
        </button>
      </div>
    </form>
  );
}
