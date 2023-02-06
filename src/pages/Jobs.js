import React, { useEffect } from "react";
import JobCard from "../components/reusable/JobCard";
import Loading from "../components/reusable/Loading";
import { useGetJobsQuery } from "../features/job/jobAPI";

const Jobs = () => {
  const { isError, isFetching, isSuccess, error, data } = useGetJobsQuery()

  useEffect(() => {
    if (isSuccess) {

    }
    if (isError) {

    }
  }, [isFetching, isSuccess, isError, error, data])

  if (isFetching) {
    <Loading />
  }

  return (
    <div className='pt-14'>
      <div className='bg-primary/10 p-5 rounded-2xl'>
        <h1 className='font-semibold text-xl'>Find Jobs</h1>
      </div>
      <div className='grid grid-cols-2 gap-5 mt-5'>
        {data?.data?.map(jobData => <JobCard key={jobData._id} jobData={jobData} />)}
      </div>
    </div>
  );
};

export default Jobs;
