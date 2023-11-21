import React from "react";
import SectionHeader from "../../components/reusable/SectionHeader";
import CompanyCard from "../company/CompanyCard";
import SectionBottomBtn from "../../components/reusable/SectionBottomBtn";

export default function FeaturedCompany() {
  return (
    <section className="bg-third">
      <SectionHeader
        title="Featured Companies"
        subtitle="Work for the best companies in the world"
      />

      <div className="max_container">
        <div className="grid gap-5 job_card_container">
          {[1, 2, 3, 4].map((el) => (
            <CompanyCard key={el} />
          ))}
        </div>
      </div>
      <SectionBottomBtn display="All Companies" link="/company-listing" />
    </section>
  );
}
