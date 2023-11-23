import React, { useState } from "react";

export default function CandidateSidebar() {
  const [showNum, setShowNum] = useState(false);

  return (
    <>
      <div className="bg-candidate p-8 rounded-xl">
        <div className="mb-5">
          <div className="text-[13px] font-light leading-5 opacity-[0.7]">
            Email
          </div>
          <div className="text-base font-medium leading-6 text-primary">
            riyadhossain.dev@gmail.com
          </div>
        </div>
        <div className="mb-5">
          <div className="text-[13px] font-light leading-5 opacity-[0.7]">
            Location
          </div>
          <div className="text-base font-medium leading-6 ">
            Dhaka, Bangladesh
          </div>
        </div>
        <div className="mb-5">
          <div className="text-[13px] font-light leading-5 opacity-[0.7]">
            Phone
          </div>
          <div
            className={`text-base font-medium leading-6 ${
              showNum && "text-primary"
            }`}
          >
            +(880) 170379{showNum ? "0978" : "****"}{" "}
            {!showNum && (
              <button onClick={() => setShowNum(true)} className="btn_sm ml-2">
                Show
              </button>
            )}
          </div>
        </div>
        <div className="">
          <button className="btn-secondary w-full">Download Resume</button>
        </div>
      </div>
    </>
  );
}
