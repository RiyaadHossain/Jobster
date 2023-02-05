import React from "react";
import ApplicantCard from "../../components/reusable/ApplicantCard";

export default function Applications() {
  console.log("hello");
  return (
    <div className=" pt-24">
      <div className="bg-primary/10 p-5 rounded-2xl flex items-center justify-between">
        <h1 className="font-semibold text-xl">
          Applications:{" "}
          <span className="bg-slate-600 px-2 text-white text-md rounded-full">
            3
          </span>
        </h1>
        <p className="font-semibold text-lg">React Job</p>
      </div>
      <div className="mt-8">
        <ApplicantCard />
      </div>
    </div>
  );
}
