import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import meeting from "../../../assets/meeting.jpg";

export default function ApplicantDetails() {
  return (
    <div className="pt-14 grid grid-cols-12 gap-5">
      <div className="col-span-9 mb-10">
        <div className="h-80 rounded-xl overflow-hidden">
          <img className="h-full w-full object-cover" src={meeting} alt="" />
        </div>
        <div className="space-y-5">
          <div className="flex justify-between items-center mt-5">
            <h1 className="text-xl font-semibold text-primary">
              {"Riyad Hossain"}
            </h1>
            <p className="font-semibold text-primary">
              Applied On:
              <span className="text-sm font-normal"> 12 Jan, 2022</span>
            </p>
            {/* {role === "candidate" && jobData?.data?.length === 0 && (
              <button onClick={applyJob} className="btn">
                Apply
              </button>
            )} */}
          </div>
          <div>
            <h1 className="text-primary text-lg font-medium mb-1">About</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              vitae veniam dolorum odit commodi repellendus tenetur at ducimus
              magni consectetur eos dignissimos earum culpa, deleniti nulla
              rerum numquam non, porro tempora dolores similique necessitatibus
            </p>
          </div>
          <div>
            <h1 className="text-primary text-lg font-medium mb-1">Education</h1>
            <ul>
              <li className="flex items-center">
                <BsArrowRightShort className="text-primary  text-xl" />
                HTML
              </li>
              <li className="flex items-center">
                <BsArrowRightShort className="text-primary  text-xl" />
                CSS
              </li>
              <li className="flex items-center">
                <BsArrowRightShort className="text-primary  text-xl" />
                JS
              </li>
              {/* {skills.map((skill, i) => (
                <li key={i} className="flex items-center">
                  <BsArrowRightShort className="text-primary  text-xl" /> <span>{skill}</span>
                </li>
              ))} */}
            </ul>
          </div>
          <div>
            <h1 className="text-primary text-lg font-medium mb-1">Skills</h1>
            <ul>
              <li className="flex items-center">
                <BsArrowRightShort className="text-primary  text-xl" />
                HTML
              </li>
              <li className="flex items-center">
                <BsArrowRightShort className="text-primary  text-xl" />
                CSS
              </li>
              <li className="flex items-center">
                <BsArrowRightShort className="text-primary  text-xl" />
                JS
              </li>
              {/* {skills.map((skill, i) => (
                <li key={i} className="flex items-center">
                  <BsArrowRightShort className="text-primary  text-xl" /> <span>{skill}</span>
                </li>
              ))} */}
            </ul>
          </div>
          <div>
            <h1 className="text-primary text-lg font-medium mb-1">Exprience</h1>
            <ul>
              {/* {responsibilities.map((skill, i) => (
                <li key={i} className="flex items-center">
                  <BsArrowRightShort className="text-primary  text-xl" /> <span>{skill}</span>
                </li>
              ))} */}
              <li className="flex items-center">
                <BsArrowRightShort className="text-primary  text-xl" />
                HTML
              </li>
              <li className="flex items-center">
                <BsArrowRightShort className="text-primary  text-xl" />
                CSS
              </li>
              <li className="flex items-center">
                <BsArrowRightShort className="text-primary  text-xl" />
                JS
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-5" />
      </div>
      <div className="col-span-3">
        <div className="rounded-xl bg-primary/10 p-5 text-primary space-y-5">
          <div>
            <p>Experience</p>
            <h1 className="font-semibold text-lg">{"1 Year"}</h1>
          </div>
          <div>
            <p>Candidate Type</p>
            <h1 className="font-semibold text-lg">{"Junior"}</h1>
          </div>
          <div>
            <p>Email</p>
            <h1 className="font-semibold text-sm">{"riyad@gmail.com"}</h1>
          </div>
          <div>
            <p>Location</p>
            <h1 className="font-semibold text-lg">{"Dhaka"}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
