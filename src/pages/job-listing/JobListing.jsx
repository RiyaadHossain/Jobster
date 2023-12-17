import SidebarSearch from "../../components/other/sidebar-search/SidebarSearch";
import PageHeader from "../../components/ui/PageHeader";
import Pagination from "../../components/ui/Pagination";
import JobCard from "./components/JobCard";
import SidebarFilter from "./components/SidebarFilter";

const JobListing = () => {
  const onSearchSubmit = (data) => console.log(data);

  return (
    <div className="my-20">
      <PageHeader
        className="bg-third"
        title="Find Jobs"
        subtitle="Search your career opportunity through 12,800 jobs"
      />

      <div className="flex flex-col lg:flex-row mt-28 px-8 gap-6 max_container">
        {/* SideBar________________ */}
        <div className="">
          <SidebarSearch
            onhandleSubmit={onSearchSubmit}
            moduleName="Job"
            bg="bg-third"
          />

          <SidebarFilter />
        </div>

        {/* Job Cards________________ */}
        <div className="flex-auto">
          <h3 className="font-bold text-gray-600 text-xl mb-6">
            Showing <span className="text-primary">9</span> Jobs
          </h3>
          <div className="grid gap-5 listing_page_card_container">
            {[1, 2, 3, 4, 5].map((el) => (
              <JobCard key={el} />
            ))}
          </div>
          <div className="mt-20 items-end text-center">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
