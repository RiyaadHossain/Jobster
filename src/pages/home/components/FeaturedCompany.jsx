import React from "react";
import SectionHeader from "../../../components/ui/SectionHeader";
import SectionBottomBtn from "../../../components/ui/SectionBottomBtn";
import CompanyCard from "../../company-listing/components/CompanyCard";

export default function FeaturedCompany() {
  return (
    <section className="bg-third">
      <SectionHeader
        title="Featured Companies"
        subtitle="Work for the best companies in the world"
      />

      <div className="max_container">
        <div className="grid gap-5 grid-cols-12">
          {[1, 2, 3, 4].map((el) => (
            <div key={el} className="col-span-12 md:col-span-6 lg:col-span-4">
              <CompanyCard />
            </div>
          ))}
        </div>
      </div>
      <SectionBottomBtn display="All Companies" link="/company-listing" />
    </section>
  );
}
