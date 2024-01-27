import ListingPageContainer from "@/components/other/listing-page-container/ListingPageContainer";
import SidebarSearch from "@/components/other/sidebar-search/SidebarSearch";
import PageHeader from "@/components/ui/PageHeader";
import JobCard from "./components/JobCard";
import SidebarFilter from "./components/SidebarFilter";
import { useGetAllJobsQuery } from "../../redux/api/jobApi";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ENUM_MODULE } from "../../enums/module";

const JobListing = () => {
  const { search } = useLocation();
  const searchIndustry = search.split("=")[1];

  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState(searchIndustry || "");
  const [workLevel, setWorkLevel] = useState("");
  const [employmentType, setEmployemploymentType] = useState("");

  const query = {};
  if (page) query["page"] = page;
  if (title) query["title"] = title;
  if (location) query["location"] = location;
  if (industry) query["industry"] = industry;
  if (workLevel) query["workLevel"] = workLevel;
  if (employmentType) query["employmentType"] = employmentType;

  const { data } = useGetAllJobsQuery({ ...query, limit: 6 });
  const jobsData = data?.data?.data;
  const totalJobs = data?.data?.meta?.total;
  const totalPages = data?.data?.meta?.totalPages;

  const onSearchSubmit = (data) => {
    const { title, location, industry } = data;

    if (title) setTitle(title);
    if (location) setLocation(location);
    if (industry) setIndustry(industry);
  };

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
              moduleName={ENUM_MODULE.JOB}
              bg="bg-primaryLight"
            />
            <SidebarFilter
              props={{
                workLevel,
                setWorkLevel,
                employmentType,
                setEmployemploymentType,
              }}
            />
          </div>
        }
        cards={jobsData?.map((job, i) => (
          <JobCard key={i} jobInfo={job} />
        ))}
        moduleName={ENUM_MODULE.JOB}
        total={totalJobs}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default JobListing;
