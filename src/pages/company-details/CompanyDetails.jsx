import PageBanner from "../../components/ui/PageBanner";
import { companiesData } from "../../data/companies";
import CompanyInfo from "./components/CompanyInfo";
import CompanySidebar from "./components/CompanySidebar";

export default function CompanyDetails() {
  const companyInfo = companiesData[0];

  return (
    <div className="max_container my-20">
      <div className="grid grid-cols-12 gap-5">
        {/* --------------- Main Content --------------- */}
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 mb-8 lg:mb-0">
          {/* +++ Comapany Banner +++ */}
          <PageBanner
            rounded="rounded-xl"
            title={companyInfo.name}
            banner={companyInfo.banner}
            brandImg={companyInfo.logo}
            subtitle={companyInfo.location}
          />

          {/* +++ Comapany Info +++ */}
          <CompanyInfo companyInfo={companyInfo} />
        </div>

        {/* --------------- Sidebar Content --------------- */}
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <CompanySidebar companyInfo={companyInfo} />
        </div>
      </div>
    </div>
  );
}
