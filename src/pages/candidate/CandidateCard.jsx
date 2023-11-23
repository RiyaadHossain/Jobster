import { Link } from "react-router-dom";
import candidateAvatar from "../../assets/person.png";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function CandidateCard() {
  return (
    <div className="p-7 h-fit bg-white rounded-3xl shadow-lg border">
      <div className="flex flex-col gap-6 items-center justify-center">
        <div>
          <img
            src={candidateAvatar}
            alt=""
            className="w-[100px] h-[100px] rounded-full"
          />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold leading-7">John Doe</h3>
          <p className="text-[15px] font-light leading-5">Financial Analyst</p>
        </div>
        <div className="flex items-center gap-2">
          <FaGlobeAmericas />
          <span className="text-sm font-semibold leading-5">San Diego, CA</span>
        </div>
        <Link
          to={`/candidates/${1}`}
          className="flex items-center gap-3 text-primary hover:gap-6 transition-all hover:text-primary/90"
        >
          <span className="text-base font-medium leading-6">View Profile</span>{" "}
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
}
