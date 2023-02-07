import React from "react";
import { useNavigate } from "react-router-dom";

export default function ApplicantCard({ candidate }) {
  const navigate = useNavigate();

  const { firstName, lastName, university, profession, email } = candidate;

  return (
    <div className="border rounded-md px-4 py-8 shadow-lg text-primary">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="font-semibold text-2xl">{`${firstName} ${lastName}`}</h2>
          <small className="text-primary/70 ">
            from{" "}
            <span className="font-semibold hover:text-primary cursor-pointer hover:underline transition-all">
              {university}
            </span>
          </small>
        </div>
        <p>{profession}</p>
      </div>
      <div className="flex justify-between items-end">
        <p className="font-semibold">
          Applied On:<span className="text-sm font-normal"> 12 Jan, 2022</span>
        </p>
        <button
          onClick={() => navigate(`/applicant-details/${email}`)}
          className="btn"
        >
          View Profile
        </button>
      </div>
    </div>
  );
}
