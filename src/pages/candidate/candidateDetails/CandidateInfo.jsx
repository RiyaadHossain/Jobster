import Badge from "../../../components/reusable/Badge";
import { FaDotCircle } from "react-icons/fa";
import "../style/style.css";

export default function CandidateInfo() {
  const skills = ["Leadership", "Planning", "Public Speaking", "Teamwork"];

  const array = [1, 2, 3];

  return (
    <>
      <div className="mb-6 lg:mb-12">
        <h1 className="text-[28px] font-bold mb-5 tracking-tight">
          About John
        </h1>
        <p className="text-sm font-light leading-6 opacity-[0.8]">
          Confident and teamwork-oriented Financial Analyst, specializing in
          informative and persuasive professional presentations. Bachelor’s in
          Finance and two related certifications from the Corporate Finance
          Institute. Extensive experience with a variety of computer
          applications.
        </p>
      </div>

      <div className="mb-6 lg:mb-12">
        <h1 className="text-[28px] font-bold mb-5 tracking-tight">Skills</h1>
        <div className="flex gap-4">
          {skills.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </div>

      <div className="mb-6 lg:mb-12">
        <h1 className="text-[28px] font-bold mb-5 tracking-tight">
          Work Experience
        </h1>
        {array.map((el, i) => (
          <div key={el} className="flex gap-3 relative">
            <div
              className={`exp_disk mt-1 ${
                i + 1 === array.length ? "after:border-r-0" : "after:border-r"
              }`}
            >
              <FaDotCircle className="text-xs text-primary " />
            </div>
            <div className="pl-5 pb-6">
              <Badge className={"py-[1.5px]"}>04/2022 - Present</Badge>
              <h5 className="text-base font-semibold leading-6 mt-2 mb-1">
                Senior Financial Analyst
              </h5>
              <div className="text-sm font-medium leading-5 text-accent mb-2">
                Amazon.com
              </div>
              <p className="text-sm font-light leading-5 opacity-[0.8]">
                Collected, analyzed, and managed quantitative data and created
                meaningful reports to lead business improvement and 30% cost
                reductions.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-6 lg:mb-12">
        <h1 className="text-[28px] font-bold mb-5 tracking-tight">
          Education & Training
        </h1>
        <div className="flex gap-3">
          <div className="mt-1">
            <FaDotCircle className="text-xs text-primary" />
          </div>
          <div>
            <Badge className={"py-[1.5px]"}>2004 - 2008</Badge>
            <h5 className="text-base font-semibold leading-6 mt-2 mb-1">
              Master's in Finance
            </h5>
            <p className="text-sm font-medium leading-5 text-accent">
              University of Arizona
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
