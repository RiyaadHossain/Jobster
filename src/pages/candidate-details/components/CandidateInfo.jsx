import "./style/module.style.css";
import Badge from "@/components/ui/Badge";
import ExperienceAndEducationList from "./ExperienceAndEducationList";

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

      <ExperienceAndEducationList
        data={candidateInfo.workExperiences}
        title="Experience"
        type="work"
      />

      <ExperienceAndEducationList
        data={candidateInfo.educationTraining}
        title="Education & Training"
        type="education"
      />

     
    </>
  );
}
