import React from "react";
import { useParams } from "react-router-dom";
import JobCard from "../../../components/reusable/JobCard";
import Loading from "../../../components/reusable/Loading";
import { useGetJobByEmployeeQuery } from "../../../features/job/jobAPI";

export default function MyJobs() {
  const { email } = useParams();

  const { data, isFetching } = useGetJobByEmployeeQuery(email);
  if (isFetching) return <Loading />;

  return (
    <div className="pt-14 p-10">
      <div className="bg-primary/10 p-5 rounded-2xl">
        <h1 className="font-semibold text-xl">My Jobs</h1>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        {data?.data?.map((jobData) => (
          <JobCard key={jobData._id} jobData={jobData} />
        ))}
      </div>
    </div>
  );
}
