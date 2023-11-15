import React from "react";
import SectionHeader from "../../components/reusable/SectionHeader";
import JobCard from "../Job/JobCard";

export default function FeaturedJob() {
  const array = [1, 2, 3, 4, 5];

  return (
    <section>
      <SectionHeader
        title="Featured Job Offers"
        subtitle="Search your career opportunity through 12,800 jobs"
      />
      <div className="flex flex-wrap justify-center gap-6 mt-5">
        {array.map((el) => (
          <JobCard key={el} />
        ))}
      </div>
    </section>
  );
}
