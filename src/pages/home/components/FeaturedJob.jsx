import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import JobCard from "../../job-listing/components/JobCard";
import ButtonWithArrow from "@/components/ui/ButtonWithArrow";
import { useGetAllJobsQuery } from "@/redux/api/jobApi";

export default function FeaturedJob() {
  const { data } = useGetAllJobsQuery();
  const jobsData = data?.data?.data;

  return (
    <section className="max_container">
      <SectionHeader
        title="Featured Job Offers"
        subtitle="Search your career opportunity through 12,800 jobs"
      />
      <div className="grid grid-cols-12 gap-6">
        {jobsData?.slice(0, 6)?.map((job, i) => (
          <div
            key={i}
            className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
          >
            <JobCard jobInfo={job} />
          </div>
        ))}
      </div>
      <ButtonWithArrow
        display="All Job Offers"
        link="/job-listing"
        mt="mt-12"
      />
    </section>
  );
}
