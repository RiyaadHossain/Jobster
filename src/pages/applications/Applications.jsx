import React from "react";
import ApplicantCard from "../../components/reusable/ApplicantCard";

export default function Applications() {

  return (
    <div className=" pt-24">
      <div className="bg-primary/10 p-5 rounded-2xl flex items-center justify-between">
        <p className="font-semibold text-xl">React Job</p>
        <h1 className="font-semibold text-xl">
          Applications:{" "}
          <span className="bg-slate-600 px-2 text-white text-base rounded-full">
            3
          </span>
        </h1>
      </div>
      <div className="mt-8 grid grid-cols-2">
        <ApplicantCard />
      </div>
    </div>
  );
}
