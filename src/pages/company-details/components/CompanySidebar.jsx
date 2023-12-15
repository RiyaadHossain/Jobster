import { useState } from "react";
import SocialIcons from "../../../components/other/SocialIcons";

export default function CompanySidebar() {
  const [showNum, setShowNum] = useState(false);

  return (
    <>
      <div className="bg-fifth p-8 rounded-xl">
        <div className="mb-5">
          <div className="text-[13px] font-light leading-5 opacity-[0.7]">
            Industry
          </div>
          <div className="text-base font-medium leading-6">
            Marketing & Communication
          </div>
        </div>
        <div className="mb-5">
          <div className="text-[13px] font-light leading-5 opacity-[0.7]">
            Company size
          </div>
          <div className="text-base font-medium leading-6 ">120 employees</div>
        </div>
        <div className="mb-5">
          <div className="text-[13px] font-light leading-5 opacity-[0.7]">
            Founded in
          </div>
          <div className="text-base font-medium leading-6 ">2005</div>
        </div>
        <div className="mb-5">
          <div className="text-[13px] font-light leading-5 opacity-[0.7]">
            Phone
          </div>
          <div
            className={`text-base font-medium leading-6 ${
              showNum && "text-primary"
            }`}
          >
            +(880) 170379{showNum ? "0978" : "****"}{" "}
            {!showNum && (
              <button onClick={() => setShowNum(true)} className="btn_sm ml-2">
                Show
              </button>
            )}
          </div>
        </div>
        <div className="mb-5">
          <div className="text-[13px] font-light leading-5 opacity-[0.7]">
            Email
          </div>
          <div className="text-base font-medium leading-6 text-primary">
            artistre.studio@pixelprime.co
          </div>
        </div>
        <div className="">
          <div className="text-[13px] font-light leading-5 opacity-[0.7]">
            Location
          </div>
          <div className="text-base font-medium leading-6 ">San Francisco</div>
        </div>

        <div className="mt-4">
          <SocialIcons className="gap-6" />
        </div>
      </div>
    </>
  );
}
