import ListingPageContainer from "../../components/other/listing-page-container/ListingPageContainer";
import SidebarSearch from "../../components/other/sidebar-search/SidebarSearch";
import PageHeader from "../../components/ui/PageHeader";
import CandidateCard from "./components/CandidateCard";

export default function CandidateListing() {
  const onSearchSubmit = (data) => console.log(data);

  return (
    <div className="my-20">
      <PageHeader
        className="bg-fifth"
        title="Candidates"
        subtitle="Work with the most talented candidates in the world"
      />

      <ListingPageContainer
        sidebar={
          <SidebarSearch
            onhandleSubmit={onSearchSubmit}
            moduleName="Candidate"
            bg="bg-fifth"
          />
        }
        cards={[1, 2, 3, 4, 5].map((el) => (
          <CandidateCard key={el} border={true} />
        ))}
        moduleName="Candidate"
        total={6}
      />
    </div>
  );
}
