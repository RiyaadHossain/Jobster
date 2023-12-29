import PageBanner from "@/components/ui/PageBanner";
import { candidatesData } from "@/data/candidates";
import CandidateInfo from "./components/CandidateInfo";
import CandidateSidebar from "./components/CandidateSidebar";

export default function CandidateDetails() {
  const candidateInfo = candidatesData[0];

  return (
    <div className="my-20 max_container">
      <div className=" grid grid-cols-12 gap-5">
        {/* Main Content_________________ */}
        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          {/* +++ Bannder +++ */}
          <PageBanner
            rounded="rounded-full"
            title={candidateInfo.name}
            banner={candidateInfo.banner}
            brandImg={candidateInfo.avatar}
            subtitle={candidateInfo.industry}
          />

          {/* +++ Candidate Info +++ */}
          <div>
            <CandidateInfo candidateInfo={candidateInfo} />
          </div>
        </div>

        {/* Sidebar Content_________________ */}
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <CandidateSidebar candidateInfo={candidateInfo} />
        </div>
      </div>
    </div>
  );
}
