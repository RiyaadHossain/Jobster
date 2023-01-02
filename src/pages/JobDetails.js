import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/reusable/Loading";
import { useGetJobByIdQuery } from "../features/job/jobSlice";
// import { useNavigate } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams()
  const { isError, isFetching, data, error, isSuccess } = useGetJobByIdQuery(id)

  useEffect(() => {
    if (isSuccess) {

    }
    if (isError) {

    }
  }, [isFetching, isSuccess, isError, error, data])

  if (isFetching) return <Loading />
  
  return (
    <div className='pt-14'>
      <h1>{data?.data?.position}</h1>
      <button className='border'>Apply</button>
    </div>
  );
};

export default JobDetails;
