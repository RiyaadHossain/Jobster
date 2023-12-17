import banner from "../../assets/candidate-banner.jpeg";
import candidateAvater from "../../assets/person.png";
import PageBanner from "../../components/ui/PageBanner";
import CandidateInfo from "./components/CandidateInfo";
import CandidateSidebar from "./components/CandidateSidebar";

export default function CandidateDetails() {
  return (
    <div className="my-20 max_container">
      <div className=" grid grid-cols-12 gap-5">
        {/* Main Content_________________ */}
        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          {/* +++ Bannder +++ */}

          <PageBanner
            banner={banner}
            brandImg={candidateAvater}
            rounded="rounded-full"
            title="John Fischer"
            subtitle=" Financial Analyst"
          />

          {/* +++ Candidate Info +++ */}
          <div>
            <CandidateInfo />
          </div>
        </div>

        {/* Sidebar Content_________________ */}
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <CandidateSidebar />
        </div>
      </div>
    </div>
  );
}
