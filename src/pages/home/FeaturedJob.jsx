import React from "react";
import SectionHeader from "../../components/reusable/SectionHeader";
import JobCard from "../job/JobCard";
import SectionBottomBtn from "../../components/reusable/SectionBottomBtn";

export default function FeaturedJob() {
  const array = [1, 2, 3, 4, 5];

  return (
    <section className="max_container">
      <SectionHeader
        title="Featured Job Offers"
        subtitle="Search your career opportunity through 12,800 jobs"
      />
      <div className="grid job_card_container gap-6">
        {array.map((el) => (
          <JobCard key={el} />
        ))}
      </div>
      <SectionBottomBtn display="All Job Offers" link="/job-listing" />
    </section>
  );
}
