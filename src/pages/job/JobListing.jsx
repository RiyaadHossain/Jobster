import PageHeader from "../../components/reusable/PageHeader";
import JobCard from "./JobCard";

const JobListing = () => {
  return (
    <div className="mt-20">
      <PageHeader
        title="Find Jobs"
        subtitle=" Search your career opportunity through 12,800 jobs"
      />

      <div className="flex flex-wrap md:flex-nowrap mt-28 px-8 gap-8 max_container">
        {/* SideBar */}
        <div className="">
          <div className="bg-third p-4 rounded-xl">
            <div className="flex flex-col gap-2">
              <span>Search by Keywords</span>
              <input type="text" placeholder="Job Title or Keyword" />
            </div>
          </div>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ustify-center gap-6">
          {[1, 2, 3, 4, 5].map((el) => (
            <JobCard key={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListing;
// flex items-center justify-center
