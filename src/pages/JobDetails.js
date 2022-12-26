import React from "react";

import { useNavigate } from "react-router-dom";

const JobDetails = () => {
  const navigate = useNavigate();

  return (
    <div className='pt-14'>
      <h1>this is job details</h1>
      <button className='border'>Apply</button>
    </div>
  );
};

export default JobDetails;
