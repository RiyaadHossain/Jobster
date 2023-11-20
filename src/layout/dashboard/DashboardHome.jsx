import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/loader/Loading";
import { useGetUsersQuery } from "../../features/user/userAPI";
import {
  useGetJobByEmployeeQuery,
  useGetJobsQuery,
  useGetAppliedJobQuery,
} from "../../features/job/jobAPI";

export default function DashboardHome() {
  const { email, role } = useParams();
  const { data, isFetching } = useGetUsersQuery();
  const { data: jobs, isFetching: jobFetching } = useGetJobsQuery();
  const { data: myJobs, isFetching: myJobFetching } =
    useGetJobByEmployeeQuery(email);
  const { data: appliedJobs, isFetching: appliedJobsFetching } =
    useGetAppliedJobQuery(email);

  if (isFetching || jobFetching || myJobFetching || appliedJobsFetching)
    return <Loading />;

  const candidates = data.data.filter((user) => user.role === "candidate");
  const employees = data.data.filter((user) => user.role === "employee");

  return (
    <div className="px-10">
      <h2 className="text-center text-3xl font-semibold mt-10">
        Welcome to {"Employee"} Dashboard
      </h2>
      <div className="mt-12 grid grid-cols-4 gap-5">
        <div className="bg-orange-300 stat-card">
          <h3 className="stat-title">{jobs?.data?.length}</h3>
          <p>Total Jobs</p>
        </div>
        {role === "employee" ? (
          <div className="bg-sky-300 stat-card">
            <h3 className="stat-title">{myJobs?.data?.length}</h3>
            <p>My Jobs</p>
          </div>
        ) : (
          <div className="bg-sky-300 stat-card">
            <h3 className="stat-title">{appliedJobs.data.length}</h3>
            <p>My Application</p>
          </div>
        )}
        <div className="bg-red-300 stat-card">
          <h3 className="stat-title">{employees.length}</h3>
          <p>Total Employee</p>
        </div>
        <div className="bg-red-300 stat-card">
          <h3 className="stat-title">{candidates.length}</h3>
          <p>Total Candidates</p>
        </div>
      </div>
    </div>
  );
}
