import Badge from "@/components/ui/Badge";
import { FaDotCircle } from "react-icons/fa";
import "./style/module.style.css";

export default function CandidateInfo({ candidateInfo }) {
  return (
    <>
      <div className="mb-6 lg:mb-12">
        <h1 className="page_section_header">About {candidateInfo.name}</h1>
        <p className="text_accent">{candidateInfo.about}</p>
      </div>

      <div className="mb-6 lg:mb-12">
        <h1 className="page_section_header">Skills</h1>
        <div className="flex gap-4 flex-wrap">
          {candidateInfo.skills.map((item, i) => (
            <Badge key={i}>{item.title}</Badge>
          ))}
        </div>
      </div>

      <div className="mb-6 lg:mb-12">
        <h1 className="page_section_header">Work Experience</h1>
        {candidateInfo.workExperiences.map((experience, i) => (
          <div key={i} className="flex gap-3 relative">
            <div
              className={`exp_disk mt-1 ${
                i + 1 === candidateInfo.workExperiences.length
                  ? "after:border-r-0"
                  : "after:border-r"
              }`}
            >
              <FaDotCircle className="text-xs text-primary " />
            </div>
            <div className="pl-5 pb-6">
              <Badge className={"py-[1.5px]"}>{experience.timePeriod}</Badge>
              <h5 className="text-base font-semibold leading-6 mt-2 mb-1">
                {experience.position}
              </h5>
              <div className="text_graish mb-2">{experience.companyName}</div>
              <p className="text_accent">{experience.details}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-6 lg:mb-12">
        <h1 className="page_section_header">Education & Training</h1>
        {candidateInfo.educationTraining.map((education, i) => (
          <div key={i} className="flex gap-3 pb-6">
            <div className="mt-1">
              <FaDotCircle className="text-xs text-primary" />
            </div>
            <div>
              <Badge className={"py-[1.5px]"}>{education.timePeriod}</Badge>
              <h5 className="text-base font-semibold leading-6 mt-2 mb-1">
                {education.degreeName}
              </h5>
              <p className="text_graish">{education.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
