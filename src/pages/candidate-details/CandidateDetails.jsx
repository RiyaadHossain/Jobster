import PageBanner from "@/components/ui/PageBanner";
import CandidateInfo from "./components/CandidateInfo";
import CandidateSidebar from "./components/CandidateSidebar";
import { useParams } from "react-router-dom";
import { useGetCandidateQuery } from "../../redux/api/candidate";

export default function CandidateDetails() {
  const { id } = useParams();

  const { data } = useGetCandidateQuery(id);
  const candidateInfo = data?.data;
  console.log(candidateInfo);

  return (
    <div className="my-20 max_container">
      <div className=" grid grid-cols-12 gap-5">
        {/* Main Content_________________ */}
        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          {/* +++ Bannder +++ */}
          <PageBanner
            rounded="rounded-full"
            title={candidateInfo?.name}
            banner={candidateInfo?.banner}
            brandImg={candidateInfo?.avatar}
            subtitle={candidateInfo?.title}
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
