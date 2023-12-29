import { FaGlobeAmericas } from "react-icons/fa";
import LinkWithArrow from "@/components/ui/LinkWithArrow";

export default function CandidateCard({ candidateInfo }) {
  return (
    <div className="p-7 h-fit bg-white rounded-3xl shadow-lg border">
      <div className="flex flex-col gap-6 items-center justify-center">
        <div>
          <img
            src={candidateInfo.avatar}
            alt=""
            className="w-[100px] h-[100px] rounded-full"
          />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold leading-7">
            {candidateInfo.name}
          </h3>
          <p className="text-[15px] font-light leading-5">
            {candidateInfo.industry}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaGlobeAmericas />
          <span className="text-sm font-semibold leading-5">
            {candidateInfo.location}
          </span>
        </div>
        <LinkWithArrow
          display="View Profile"
          link={`/candidates/${candidateInfo.name}`}
        />
      </div>
    </div>
  );
}
