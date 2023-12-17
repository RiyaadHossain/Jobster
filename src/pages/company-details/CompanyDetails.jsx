import banner from "../../assets/company-hero-1.jpg";
import companyLogo from "../../assets/company-logo-7-160x160.png";
import PageBanner from "../../components/ui/PageBanner";
import CompanyInfo from "./components/CompanyInfo";
import CompanySidebar from "./components/CompanySidebar";

export default function CompanyDetails() {
  return (
    <div className="max_container my-20">
      <div className="grid grid-cols-12 gap-5">
        {/* --------------- Main Content --------------- */}
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 mb-8 lg:mb-0">
          {/* +++ Comapany Banner +++ */}
          <PageBanner
            banner={banner}
            brandImg={companyLogo}
            rounded="rounded-xl"
            title="Artistre Studio"
            subtitle="San Francisco, SA"
          />

          {/* +++ Comapany Info +++ */}
          <CompanyInfo />
        </div>

        {/* --------------- Sidebar Content --------------- */}
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <CompanySidebar />
        </div>
      </div>
    </div>
  );
}
