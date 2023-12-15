import PageHeader from "../../components/ui/PageHeader";
import Pagination from "../../components/ui/Pagination";
import CompanyCard from "./components/CompanyCard";


export default function CompanyListing() {
  return (
    <div className="my-20">
      <PageHeader
        className="bg-fifth"
        title="Companies"
        subtitle="Work for the best companies in the world"
      />

      <div className="flex flex-col lg:flex-row mt-28 px-8 gap-6 max_container">
        {/* SideBar */}
        <div className="sidebar_container">
          <div className="bg-third p-6 rounded-xl lg:max-w-md">
            <div className="mb-6">
              <p className="font-semibold mb-3">Search by Keywords</p>
              <input
                className="w-full"
                type="text"
                placeholder="Company Name or Keyword"
              />
            </div>
            <div className="mb-6">
              <p className="font-semibold mb-3">Location</p>
              <select className="w-full">
                <option value="">Dhaka</option>
                <option value="">Khulna</option>
                <option value="">Rajshahi</option>
              </select>
            </div>
            <div className="mb-6">
              <p className="font-semibold mb-3">Category</p>
              <select className="w-full">
                <option value="">Software Engineering</option>
                <option value="">Finance</option>
                <option value="">Marketing</option>
              </select>
            </div>
            <div className="">
              <div className="btn_secondary text-center">Find Companies</div>
            </div>
          </div>
        </div>

        {/* Company Cards */}
        <div className="flex-auto">
          <h3 className="font-bold text-gray-600 text-xl mb-6">
            Showing <span className="text-primary">9</span> Companies
          </h3>
          <div className="grid gap-5 job_listing_card_container">
            {[1, 2, 3, 4, 5].map((el) => (
              <CompanyCard key={el} border={true} />
            ))}
          </div>
          <div className="mt-20 items-end text-center">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}
