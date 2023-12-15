import { AiOutlineLineChart } from "react-icons/ai";
import { IoHeartOutline, IoShareSocialOutline } from "react-icons/io5";
import { RxDotFilled } from "react-icons/rx";
import PreviousBtn from "../../../components/ui/PreviousBtn";

export default function JobInfo({ jobInfo }) {
  const {
    overview,
    position,
    companyName,
    location,
    skills,
    responsibilities,
    requirements,
  } = jobInfo;

  return (
    <>
      <div className="space-y-5 mt-24">
        <div className="flex justify-between items-center mt-5">
          <div>
            <h1 className="text-3xl bold font-bold">{position}</h1>
            <h5 className="text-accent font-light text-base">
              by <span className="text-primary font-medium">{companyName}</span>{" "}
              in <span className="text-primary font-light">{location}</span>
            </h5>
          </div>

          <div>
            <div className="flex items-center gap-5">
              <span className="border border-black rounded-full group p-3 hover:bg-black transition-colors">
                <IoHeartOutline className="text-2xl group-hover:text-white" />
              </span>
              <span className="border border-black rounded-full group p-3 hover:bg-black transition-colors">
                <IoShareSocialOutline className="text-2xl group-hover:text-white" />
              </span>
              <button className="btn">Apply</button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-2 group transition-all">
            <div className="bg-primary/20 group-hover:bg-primary transition-all p-[3px] rounded-md">
              <AiOutlineLineChart className="text-[20px] group-hover:text-white  transition-all" />
            </div>
            <span className="text-[16px] font-light leading-[21px] group-hover:text-primary transition-all">
              Finance
            </span>
          </div>
          <span className="font-light text-accent">June 8, 2022</span>
        </div>

        {/* -------------- Job Description -------------- */}
        <div className="pt-10">
          <h1 className="job_info_section_header">Overview</h1>
          <p className="job_info_section_content">{overview}</p>
        </div>
        <div>
          <h1 className="job_info_section_header">Skills</h1>
          <ul className="job_info_section_content ml-6">
            {skills.map((item, i) => (
              <li key={i} className="flex items-center gap-1">
                <RxDotFilled className="text-base" /> <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="job_info_section_header">Requirements</h1>
          <ul className="job_info_section_content ml-6">
            {requirements.map((item, i) => (
              <li key={i} className="flex items-center gap-1">
                <RxDotFilled className="text-base" /> <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="job_info_section_header">Responsibilities</h1>
          <ul className="job_info_section_content ml-6">
            {responsibilities.map((item, i) => (
              <li key={i} className="flex items-center gap-1">
                <RxDotFilled className="text-base" /> <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-5" />
        <PreviousBtn />
      </div>
    </>
  );
}
