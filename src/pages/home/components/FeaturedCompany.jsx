import SectionHeader from "../../../components/ui/SectionHeader";
import CompanyCard from "../../company-listing/components/CompanyCard";
import ButtonWithArrow from "../../../components/ui/ButtonWithArrow";
import { companiesData } from "../../../data/companies";

export default function FeaturedCompany() {
  return (
    <section className="bg-primaryLight">
      <SectionHeader
        title="Featured Companies"
        subtitle="Work for the best companies in the world"
      />

      <div className="max_container">
        <div className="grid gap-5 grid-cols-12">
          {companiesData.map((company, i) => (
            <div key={i} className="col-span-12 md:col-span-6 lg:col-span-4">
              <CompanyCard company={company} />
            </div>
          ))}
        </div>
      </div>
      <ButtonWithArrow
        display="All Companies"
        link="/company-listing"
        mt="mt-12"
      />
    </section>
  );
}
