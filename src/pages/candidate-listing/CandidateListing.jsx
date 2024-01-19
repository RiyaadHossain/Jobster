import ListingPageContainer from "@/components/other/listing-page-container/ListingPageContainer";
import SidebarSearch from "@/components/other/sidebar-search/SidebarSearch";
import PageHeader from "@/components/ui/PageHeader";
import CandidateCard from "./components/CandidateCard";
import { useGetAllCandidatesQuery } from "../../redux/api/candidate";

export default function CandidateListing() {
  const onSearchSubmit = (data) => console.log(data);
  const { data } = useGetAllCandidatesQuery();
  const candidatesData = data?.data;

  return (
    <div className="my-20">
      <PageHeader
        className="bg-secondaryLight"
        title="Candidates"
        subtitle="Work with the most talented candidates in the world"
      />

      <ListingPageContainer
        sidebar={
          <div>
            <SidebarSearch
              onhandleSubmit={onSearchSubmit}
              moduleName="Candidate"
              bg="bg-secondaryLight"
            />
          </div>
        }
        cards={candidatesData?.map((candidate, i) => (
          <CandidateCard candidateInfo={candidate} key={i} />
        ))}
        moduleName="Candidate"
        total={candidatesData?.length}
      />
    </div>
  );
}
