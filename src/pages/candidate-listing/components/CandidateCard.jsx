import { FaGlobeAmericas } from "react-icons/fa";
import LinkWithArrow from "@/components/ui/LinkWithArrow";
import NameLogo from "@/components/ui/NameLogo";
import { userFormatText } from "@/utils/userFormatText";

export default function CandidateCard({ candidateInfo }) {
  return (
    <div className="p-7 h-fit bg-white rounded-3xl shadow-lg border">
      <div className="flex flex-col gap-6 items-center justify-center">
        <div>
          {candidateInfo.avatar ? (
            <img
              src={candidateInfo.avatar}
              alt=""
              className="w-24 h-24 rounded-full"
            />
          ) : (
            <NameLogo width={24} name={candidateInfo.name} text="4xl" />
          )}
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold leading-7">
            {candidateInfo.name}
          </h3>
          <p className="text-[15px] font-light leading-5">
            {candidateInfo.title || "Not Added"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaGlobeAmericas />
          <span className="text-sm font-semibold leading-5">
            {userFormatText(candidateInfo.location) || "No Location"}
          </span>
        </div>
        <LinkWithArrow
          display="View Profile"
          link={`/candidates/${candidateInfo._id}`}
        />
      </div>
    </div>
  );
}
