import React from "react";
import { useNavigate } from "react-router-dom";

export default function ApplicantCard() {
  const navigate = useNavigate();

  return (
    <div className="border rounded-md px-4 py-8 shadow-lg text-primary">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="font-semibold text-2xl">Riyad Hossain</h2>
          <small className="text-primary/70 ">
            from{" "}
            <span className="font-semibold hover:text-primary cursor-pointer hover:underline transition-all">
              Oxform University
            </span>
          </small>
        </div>
        <p> Software Engineer</p>
      </div>
      <div className="flex justify-between items-end">
        <p className="font-semibold">
          Applied On:<span className="text-sm font-normal"> 12 Jan, 2022</span>
        </p>
        <button onClick={() => navigate(`/applicant-details/id`)} className="btn">
          View Profile
        </button>
      </div>
    </div>
  );
}
