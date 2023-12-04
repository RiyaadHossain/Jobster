import DotBadge from "../../components/reusable/DotBadge";
import PageHeader from "../../components/reusable/PageHeader";
import Pagination from "../../components/reusable/Pagination";
import { employmentType, expLevel } from "../../constants/jobInfo";
import JobCard from "./JobCard";

const JobListing = () => {
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
          <div className="bg-third p-6 rounded-xl lg:max-w-md">
            <div className="mb-6">
              <p className="font-semibold mb-3">Search by Keywords</p>
              <input
                className="w-full"
                type="text"
                placeholder="Job Title or Keyword"
              />
            </div>
            <div className="mb-6">
              <p className="font-semibold mb-3">Location</p>
              <select className="w-full">
                <option value="">Dhaka</option>
                <option value="">Khulna</option>
                <option value="">Rajshahi</option>
              </select>
            </div>
            <div className="mb-6">
              <p className="font-semibold mb-3">Category</p>
              <select className="w-full">
                <option value="">Software Engineering</option>
                <option value="">Finance</option>
                <option value="">Marketing</option>
              </select>
            </div>
            <div className="">
              <div className="btn_secondary text-center">Find Jobs</div>
            </div>
          </div>

          <div className="bg-third mt-10 p-6 rounded-xl">
            <div>
              <h3 className="text-lg font-semibold mb-5">Type of Employment</h3>
              <div className="flex flex-col gap-4">
                {employmentType.map((item) => (
                  <label
                    key={item.type}
                    htmlFor=""
                    className="flex justify-between items-center"
                  >
                    <span className="flex items-center gap-2 font-light">
                      <input type="checkbox" id="" />
                      {item.type}
                    </span>
                    <DotBadge>{item.jobs}</DotBadge>
                  </label>
                ))}
              </div>

              <h3 className="text-lg font-semibold mb-5 mt-10">
                Experience Level
              </h3>
              <div className="flex flex-col gap-4">
                {expLevel.map((item) => (
                  <label
                    key={item.type}
                    htmlFor=""
                    className="flex justify-between items-center"
                  >
                    <span className="flex items-center gap-2 font-light">
                      <input type="checkbox" id="" />
                      {item.type}
                    </span>
                    <DotBadge>{item.jobs}</DotBadge>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Job Cards________________ */}
        <div className="flex-auto">
          <h3 className="font-bold text-gray-600 text-xl mb-6">
            Showing <span className="text-primary">9</span> Jobs
          </h3>
          <div className="grid gap-5 job_listing_card_container">
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
// flex items-center justify-center
