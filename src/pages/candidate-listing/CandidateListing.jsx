import SidebarSearch from "../../components/other/sidebar-search/SidebarSearch";
import PageHeader from "../../components/ui/PageHeader";
import Pagination from "../../components/ui/Pagination";
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

      <div className="flex flex-col lg:flex-row mt-28 px-8 gap-6 max_container">
        {/* SideBar */}
        <div className="">
          <SidebarSearch
            onhandleSubmit={onSearchSubmit}
            moduleName="Candidate"
            bg="bg-fifth"
          />
        </div>

        {/* Company Cards */}
        <div className="flex-auto">
          <h3 className="font-bold text-gray-600 text-xl mb-6">
            Showing <span className="text-primary">9</span> Candidates
          </h3>
          <div className="grid gap-5 listing_page_card_container">
            {[1, 2, 3, 4, 5].map((el) => (
              <CandidateCard key={el} border={true} />
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
