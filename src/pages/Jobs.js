import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/reusable/Loading";
import { useGetJobsQuery } from "../features/job/jobSlice";

const Jobs = () => {
  const navigate = useNavigate();
  const { isError, isFetching, isSuccess, error, data } = useGetJobsQuery()

  useEffect(() => {
    if (isFetching) {
      <Loading />
    }
    if (isSuccess) {

    }
    if (isError) {

    }
  }, [isFetching, isSuccess, isError, error, data])

  return (
    <div className='pt-14'>
      <h1>This is job page</h1>
      <div>
        {data?.data?.map(job => (
          <div key={job._id}>
            <h1>{job.position}</h1>
            <button className='border' onClick={() => navigate(`/job-details/${job._id}`)}>
              Details
            </button>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Jobs;
