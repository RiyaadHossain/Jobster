import { AiOutlineLineChart } from "react-icons/ai";
import { IoHeartOutline, IoShareSocialOutline } from "react-icons/io5";
import PreviousBtn from "@/components/ui/PreviousBtn";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import toast from "react-hot-toast";

export default function JobInfo({ jobInfo }) {
  return (
    <>
      <div className="space-y-5 mt-24">
        <div className="flex justify-between items-center mt-5">
          <div>
            <h1 className="text-3xl bold font-bold">{jobInfo.title}</h1>
            <h5 className="text-grayColor font-light text-base">
              by
              <span className="text-primary font-medium mx-1">
                {jobInfo.company.name}
              </span>
              in{" "}
              <span className="text-primary font-light">
                {jobInfo.location}
              </span>
            </h5>
          </div>

          <div>
            <div className="flex items-center gap-5">
              <div className="border border-black rounded-full group p-3 hover:bg-black transition-colors">
                <IoHeartOutline className="text-2xl group-hover:text-white" />
              </div>
              <div className="border border-black rounded-full group p-3 hover:bg-black transition-colors">
                <IoShareSocialOutline className="text-2xl group-hover:text-white" />
              </div>
              <ButtonPrimary
                display="Apply"
                onClickFunc={() =>
                  toast.success("Applied successfully", {
                    id: "apply",
                  })
                }
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-2 group transition-all">
            <div className="bg-primaryLight group-hover:bg-primary transition-all p-[3px] rounded-md">
              <AiOutlineLineChart className="text-[20px] group-hover:text-white transition-all" />
            </div>
            <span className="text-[16px] font-light leading-[21px] group-hover:text-primary transition-all">
              Finance
            </span>
          </div>
          <span className="font-light text-grayColor">
            {jobInfo.publishedAt}
          </span>
        </div>

        {/* -------------- Job Description -------------- */}
        <div className="pt-10">
          <h1 className="job_info_section_header">Overview</h1>
          <p className="text_accent">{jobInfo.description}</p>
        </div>
        <div>
          <h1 className="job_info_section_header">Skills</h1>
          <ul className="text_accent list-disc pl-10">
            {jobInfo.skills.map((item, i) => (
              <li key={i} className="mt-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="job_info_section_header">Requirements</h1>
          <ul className="text_accent list-disc pl-10">
            {jobInfo.requirements.map((item, i) => (
              <li key={i} className="mt-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="job_info_section_header">Responsibilities</h1>
          <ul className="text_accent list-disc pl-10">
            {jobInfo.responsibilities.map((item, i) => (
              <li key={i} className="mt-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <PreviousBtn />
      </div>
    </>
  );
}
