import React from "react";
import SectionHeader from "../../components/reusable/SectionHeader";
import JobCard from "../Job/JobCard";
import { IoIosArrowForward } from "react-icons/io";

export default function FeaturedJob() {
  const array = [1, 2, 3, 4, 5];

  return (
    <section>
      <SectionHeader
        title="Featured Job Offers"
        subtitle="Search your career opportunity through 12,800 jobs"
      />
      <div className="flex flex-wrap justify-center gap-6">
        {array.map((el) => (
          <JobCard key={el} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-12">
        <button className="btn-secondary flex gap-1 items-center">
          <span> All Job Offers</span> <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
}
