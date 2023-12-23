import ListingPageContainer from "../../components/other/listing-page-container/ListingPageContainer";
import SidebarSearch from "../../components/other/sidebar-search/SidebarSearch";
import PageHeader from "../../components/ui/PageHeader";
import CompanyCard from "./components/CompanyCard";

export default function CompanyListing() {
  const onSearchSubmit = (data) => console.log(data);
  return (
    <div className="my-20">
      <PageHeader
        className="bg-secondaryLight"
        title="Companies"
        subtitle="Work for the best companies in the world"
      />

      <ListingPageContainer
        sidebar={
          <div>
            <SidebarSearch
              onhandleSubmit={onSearchSubmit}
              moduleName="Company"
              bg="bg-secondaryLight"
            />
          </div>
        }
        cards={[1, 2, 3, 4, 5].map((el) => (
          <CompanyCard key={el} border={true} />
        ))}
        moduleName="Company"
        total={7}
      />
    </div>
  );
}
