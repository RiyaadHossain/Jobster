import banner from "../../assets/company-hero-1.jpg";
import companyLogo from "../../assets/company-logo-7-160x160.png";
import CompanyInfo from "./components/CompanyInfo";
import CompanySidebar from "./components/CompanySidebar";


export default function CompanyDetails() {
  return (
    <div className="max_container my-20">
      <div className="grid grid-cols-12 gap-5">
        {/* --------------- Main Content --------------- */}
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 mb-8 lg:mb-0">
          {/* +++ Comapany Images +++ */}
          <div className="relative">
            <div
              style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
              className="absolute w-full rounded-xl h-full "
            ></div>
            <div className="h-96 rounded-xl overflow-hidden">
              <img className="h-full w-full object-cover" src={banner} alt="" />
            </div>
            <div className="flex items-center gap-5 absolute left-8 bottom-8 right-8 ">
              <div className="h-[100px] w-[100px] ">
                <img src={companyLogo} alt="" className="rounded-xl" />
              </div>
              <div className="text-white">
                <h3 className="text-4xl font-bold leading-10 tracking-tight">
                  Artistre Studio
                </h3>
                <p className="text-base font-light leading-6">
                  San Francisco, SA
                </p>
              </div>
            </div>
          </div>

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
