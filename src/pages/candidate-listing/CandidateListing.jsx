import ListingPageContainer from "@/components/other/listing-page-container/ListingPageContainer";
import SidebarSearch from "@/components/other/sidebar-search/SidebarSearch";
import PageHeader from "@/components/ui/PageHeader";
import CandidateCard from "./components/CandidateCard";
import { useGetAllCandidatesQuery } from "../../redux/api/candidate";
import { useState } from "react";
import { ENUM_MODULE } from "../../enums/module";

export default function CandidateListing() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");

  const query = {};
  if (name) query["name"] = name;
  if (location) query["location"] = location;
  if (industry) query["industry"] = industry;

  const { data } = useGetAllCandidatesQuery({ ...query });
  const candidatesData = data?.data;
  const totalCandidates = data?.meta?.total;

  const onSearchSubmit = (data) => {
    const { name, location, industry } = data;

    if (name) setName(name);
    if (location) setLocation(location);
    if (industry) setIndustry(industry);
  };

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
              moduleName={ENUM_MODULE.CANDIDATE}
              bg="bg-secondaryLight"
            />
          </div>
        }
        cards={candidatesData?.map((candidate, i) => (
          <CandidateCard candidateInfo={candidate} key={i} />
        ))}
        moduleName={ENUM_MODULE.CANDIDATE}
        total={totalCandidates}
      />
    </div>
  );
}
