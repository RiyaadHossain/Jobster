import React from "react";
import { useParams } from "react-router-dom";
import ApplicantCard from "../../components/reusable/ApplicantCard";
import Loading from "../../components/reusable/Loading";
import {
  useGetCandidatesByJobQuery,
  useGetJobByIdQuery,
} from "../../features/job/jobAPI";

export default function Applications() {
  const { id } = useParams();
  const { data, isFetching } = useGetJobByIdQuery(id);
  const { data: users, isFetching: usersFetching } =
    useGetCandidatesByJobQuery(id);
  console.log({id, data, users})
  
  if (isFetching || usersFetching) return <Loading />;

  const { applicants } = data?.data || {};
  console.log(users);

  return (
    <div className=" pt-24">
      <div className="bg-primary/10 p-5 rounded-2xl flex items-center justify-between">
        <p className="font-semibold text-xl">React Job</p>
        <h1 className="font-semibold text-xl">
          Applications:{" "}
          <span className="bg-slate-600 px-2 text-white text-base rounded-full">
            {applicants?.length}
          </span>
        </h1>
      </div>
      <div className="mt-8 grid grid-cols-2">
        {users?.data?.map((candidate, i) => (
          <ApplicantCard key={i} candidate={candidate} />
        ))}
      </div>
    </div>
  );
}
