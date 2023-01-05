import React from "react";
import { Link, useParams } from "react-router-dom";
import JobCard from "../../../components/reusable/JobCard";
import Loading from "../../../components/reusable/Loading";
import { useGetAppliedJobQuery } from "../../../features/job/jobSlice";

export default function AppliedJob() {
  const { email } = useParams();
  const { data, isFetching } = useGetAppliedJobQuery(email);
  if (isFetching) return <Loading />;
  console.log(email);
  console.log(data);

  return (
    <div>
      <h1 className="text-xl py-5">Applied jobs</h1>
      {data?.data?.length ? (
        <div className="grid grid-cols-2 gap-5 pb-5">
          {data?.data?.map((job) => (
            <JobCard jobData={job} />
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
