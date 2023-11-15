import React from "react";
import {
  BsArrowRightShort,
  BsGithub,
  BsGlobe2,
  BsLinkedin,
} from "react-icons/bs";
import { useParams } from "react-router-dom";
import person from "../../../assets/person.png";
import Loading from "../../../components/reusable/Loading";
import PreviousBtn from "../../../components/reusable/PreviousBtn";
import { useGetUserQuery } from "../../../features/user/userAPI";

export default function MyProfile() {
  const { email } = useParams();
  const { data, isFetching } = useGetUserQuery(email);
  if (isFetching) return <Loading />;

  const {
    firstName,
    lastName,
    about,
    country,
    university,
    experience,
    skills,
    education,
    candidateType,
    resumeLink,
    experienceYear,
    city,
    linkedin,
    github,
    portfolio,
    img
  } = data?.data || {};

  return (
    <div className="mt-12">
      <div className="bg-primary/10 p-5 rounded-2xl">
        <h1 className="font-semibold text-xl">My Profile</h1>
      </div>
      <div className="pt-14 grid grid-cols-12 gap-5">
        <div className="col-span-9 mb-10">
          <div className="space-y-5">
            <div className="flex justify-between items-center mt-5">
              <h1 className="text-xl font-semibold text-primary">
                {`${firstName} ${lastName}`}{" "}
                <small className="text-primary/70 font-medium text-sm">
                  from{" "}
                  <span className=" hover:text-primary cursor-pointer hover:underline transition-all ">
                    {university}
                  </span>
                </small>
              </h1>
            </div>
            <div>
              <h1 className="text-primary text-lg font-medium mb-1">About</h1>
              <p>{about}</p>
            </div>
            <div>
              <h1 className="text-primary text-lg font-medium mb-1">
                Education
              </h1>
              <ul>
                {education.map((skill, i) => (
                  <li key={i} className="flex items-center">
                    <BsArrowRightShort className="text-primary  text-xl" />{" "}
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="text-primary text-lg font-medium mb-1">Skills</h1>
              <ul>
                {skills.map((skill, i) => (
                  <li key={i} className="flex items-center">
                    <BsArrowRightShort className="text-primary  text-xl" />{" "}
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="text-primary text-lg font-medium mb-1">
                Exprience
              </h1>
              <ul>
                {experience.map((skill, i) => (
                  <li key={i} className="flex items-center">
                    <BsArrowRightShort className="text-primary  text-xl" />{" "}
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-primary/10 p-5 text-primary space-y-5">
              <div>
                <p>Experience</p>
                <h1 className="font-semibold text-lg">{`${experienceYear} Year`}</h1>
              </div>
              <div>
                <p>Candidate Type</p>
                <h1 className="font-semibold text-lg">{candidateType}</h1>
              </div>
              <div>
                <p>Email</p>
                <h1 className="font-semibold text-sm">{email}</h1>
              </div>
              <div>
                <p>Location</p>
                <h1 className="font-semibold text-lg">{`${city}, ${country}`}</h1>
              </div>
              <div className="flex gap-3 justify-start">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={portfolio}
                  className="border p-2 rounded-full border-slate-500 hover:bg-slate-400 hover:scale-110"
                >
                  <BsGlobe2 className="text-xl" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={linkedin}
                  className="border p-2 rounded-full border-slate-500 hover:bg-slate-400 hover:scale-110"
                >
                  <BsLinkedin className="text-xl" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={github}
                  className="border p-2 rounded-full border-slate-500 hover:bg-slate-400 hover:scale-110"
                >
                  <BsGithub className="text-xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-right mt-10">
            <a
              target="_blank"
              rel="noreferrer"
              href={resumeLink}
              className="btn w-48 mx-auto "
            >
              View Resume
            </a>
          </div>
          <hr className="my-5" />
          <PreviousBtn />
        </div>
        <div className="col-span-3">
          <div className="h-80 rounded-xl overflow-hidden">
            <img className="h-full w-full object-cover" src={img || person} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
