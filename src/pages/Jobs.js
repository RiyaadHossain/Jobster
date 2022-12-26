import React from "react";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const navigate = useNavigate();

  return (
    <div className='pt-14'>
      <h1>This is job page</h1>
      <div>
        <h1>THIS IS A JOB</h1>
        <button className='border' onClick={() => navigate("/job-details")}>
          Details
        </button>
      </div>
    </div>
  );
};

export default Jobs;
