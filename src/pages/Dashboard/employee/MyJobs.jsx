import React from "react";
import { Link, useParams } from "react-router-dom";
import JobCard from "../../Job/JobCard";
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

      {data?.data?.length ? (
        <div className="grid grid-cols-2 gap-5 mt-5">
          {data?.data?.map((jobData) => (
            <JobCard key={jobData._id} jobData={jobData} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col h-[70vh] gap-4">
          <h3 className="text-base font-medium">You didn't post any Job</h3>
          <Link to="/dashboard/add-job">
            <button className="btn">Add Now</button>
          </Link>
        </div>
      )}
    </div>
  );
}
