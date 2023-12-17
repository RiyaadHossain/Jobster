import React from "react";
import SectionHeader from "../../../components/ui/SectionHeader";
import JobCard from "../../job-listing/components/JobCard";
import ButtonWithArrow from "../../../components/ui/ButtonWithArrow";

export default function FeaturedJob() {
  const array = [1, 2, 3, 4, 5];

  return (
    <section className="max_container">
      <SectionHeader
        title="Featured Job Offers"
        subtitle="Search your career opportunity through 12,800 jobs"
      />
      <div className="grid grid-cols-12 gap-6">
        {array.map((el) => (
          <div
            key={el}
            className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
          >
            <JobCard />
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
