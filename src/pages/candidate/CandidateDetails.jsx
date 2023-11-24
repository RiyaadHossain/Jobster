import banner from "../../assets/candidate-banner.jpeg";
import candidateAvater from "../../assets/person.png";
import CandidateInfo from "./candidateDetails/CandidateInfo";
import CandidateSidebar from "./candidateDetails/CandidateSidebar";

export default function CandidateDetails() {
  return (
    <div className="my-20 max_container">
      <div className=" grid grid-cols-12 gap-5">
        {/* Main Content_________________ */}
        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          {/* +++ Bannder +++ */}
          <div className="relative mb-12">
            <div
              style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
              className="absolute w-full rounded-xl h-full"
            ></div>
            <div className="h-96 rounded-xl overflow-hidden">
              <img className="h-full w-full object-cover" src={banner} alt="" />
            </div>
            <div className="flex items-center gap-5 absolute left-8 bottom-8 right-8 ">
              <div className="h-[100px] w-[100px] ">
                <img src={candidateAvater} alt="" className="rounded-full" />
              </div>
              <div className="text-white">
                <h3 className="text-4xl font-bold leading-10 tracking-tight">
                  John Fischer
                </h3>
                <p className="text-base font-light leading-6">
                  Financial Analyst
                </p>
              </div>
            </div>
          </div>

          {/* +++ Candidate Info +++ */}
          <div>
            <CandidateInfo />
          </div>
        </div>

        {/* Sidebar Content_________________ */}
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <CandidateSidebar />
        </div>
      </div>
    </div>
  );
}
