import React from "react";
import SectionHeader from "../../components/reusable/SectionHeader";
import JobCard from "../job/JobCard";
import { IoIosArrowForward } from "react-icons/io";

export default function FeaturedJob() {
  const array = [1, 2, 3, 4, 5];

  return (
    <section>
      <SectionHeader
        title="Featured Job Offers"
        subtitle="Search your career opportunity through 12,800 jobs"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
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
