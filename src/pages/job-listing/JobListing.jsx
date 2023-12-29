import ListingPageContainer from "@/components/other/listing-page-container/ListingPageContainer";
import SidebarSearch from "@/components/other/sidebar-search/SidebarSearch";
import PageHeader from "@/components/ui/PageHeader";
import { jobsData } from "@/data/jobs";
import JobCard from "./components/JobCard";
import SidebarFilter from "./components/SidebarFilter";

const JobListing = () => {
  const onSearchSubmit = (data) => console.log(data);

  return (
    <div className="my-20">
      <PageHeader
        className="bg-primaryLight"
        title="Find Jobs"
        subtitle="Search your career opportunity through 12,800 jobs"
      />

      <ListingPageContainer
        sidebar={
          <div>
            <SidebarSearch
              onhandleSubmit={onSearchSubmit}
              moduleName="Job"
              bg="bg-primaryLight"
            />
            <SidebarFilter />
          </div>
        }
        cards={jobsData.map((job, i) => (
          <JobCard key={i} jobInfo={job} />
        ))}
        moduleName="Job"
        total={12}
      />
    </div>
  );
};

export default JobListing;
