import ListingPageContainer from "../../components/other/listing-page-container/ListingPageContainer";
import SidebarSearch from "../../components/other/sidebar-search/SidebarSearch";
import PageHeader from "../../components/ui/PageHeader";
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
        cards={[1, 2, 3, 4, 5].map((el) => (
          <JobCard key={el} />
        ))}
        moduleName="Job"
        total={12}
      />
    </div>
  );
};

export default JobListing;
