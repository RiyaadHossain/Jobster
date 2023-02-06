import React from "react";
import { Link, useParams } from "react-router-dom";
import JobCard from "../../../components/reusable/JobCard";
import Loading from "../../../components/reusable/Loading";
import { useGetAppliedJobQuery } from "../../../features/job/jobAPI";

export default function AppliedJob() {
  const { email } = useParams();
  const { data, isFetching } = useGetAppliedJobQuery(email);
  if (isFetching) return <Loading />;

  return (
    <div className="pt-12 px-6">
      <div className="bg-primary/10 p-5 rounded-2xl mb-5">
        <h1 className="font-semibold text-xl">Applied Jobs</h1>
      </div>
      {data?.data?.length ? (
        <div className="grid grid-cols-2 gap-5 pb-5">
          {data?.data?.map((job) => (
            <JobCard key={job._id} jobData={job} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col h-[70vh] gap-4">
          <h3 className="text-base font-medium">
            You didn't apply for any position
          </h3>
          <Link to="/jobs">
            <button className="btn">Apply Now</button>
          </Link>
        </div>
      )}
    </div>
  );
}
