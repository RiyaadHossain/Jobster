import companyHero1 from "@/assets/company-hero-1.jpg";
import companyHero2 from "@/assets/company-hero-2.jpg";
import companyHero3 from "@/assets/company-hero-3.jpg";
import companyHero4 from "@/assets/company-hero-4.jpg";
import companyHero5 from "@/assets/company-hero-5.jpg";
import companyHero6 from "@/assets/company-hero-6.jpg";
import { jobsData } from "@/data/jobs";
import "./style/module.style.css";
import JobCard from "../../job-listing/components/JobCard";

export default function CompanyInfo({ companyInfo }) {
  return (
    <div className="mt-8">
      {/* +++ About +++ */}
      <div>
        <h1 className="text-4xl font-bold leading-10 tracking-tight mb-5">
          About {companyInfo.name}
        </h1>
        <p className="text_accent">{companyInfo.description}</p>
      </div>

      {/* +++ Gallery +++ */}
      <div className="my-4">
        <div className="grid grid-cols-12 gap-2">
          <figure className="img_container">
            <img className="img_class h-[300px] " src={companyHero6} alt="" />
          </figure>
          <figure className="img_container">
            <img className="img_class h-[300px] " src={companyHero5} alt="" />
          </figure>
          <figure className="img_container">
            <img
              className="img_class h-[580px] lg:h-[300px] "
              src={companyHero4}
              alt=""
            />
          </figure>
          <figure className="img_container">
            <img className="img_class h-[580px] " src={companyHero3} alt="" />
          </figure>
          <figure className="img_container">
            <img
              className="img_class h-[300px]  lg:h-[580px] "
              src={companyHero2}
              alt=""
            />
          </figure>
          <figure className="img_container">
            <img
              className="img_class h-[300px] lg:h-[580px] "
              src={companyHero1}
              alt=""
            />
          </figure>
        </div>
      </div>

      <p className="text_accent">
        Artistre Studio, Inc. is an American multinational corporation that is
        engaged in the design, development, manufacturing, and worldwide
        marketing and sales of footwear, apparel, equipment, accessories, and
        services.
      </p>

      {/* +++ Video & Info +++ */}
      <div className="mt-7 flex gap-6 flex-col md:flex-row">
        <div className="flex-1">
          <div className="iframe_container">
            <iframe
              className="rounded-2xl responsive_iframe"
              src="https://www.youtube.com/embed/d1EaFyBqH5o?si=V3g3HZQHEm4U4bJh"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="flex-1">
          <p className="text_accent">
            In 2020 the brand alone was valued in excess of $32 billion, making
            it the most valuable brand among sports businesses. Previously, in
            2017, the Artistre Studio brand was valued at $29.6 billion.
            Artistre Studio ranked 89th in the 2018 Fortune 500 list of the
            largest United States corporations by total revenue. There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or
            randomised words which don’t look even slightly believable.
          </p>
        </div>
      </div>

      {/* +++ Available Jobs +++ */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold leading-8 tracking-tight">
          Available Jobs
        </h2>
        <p className="text-base font-light leading-6 mt-2 opacity-[0.7]">
          Jobs posted by Artistre Studio
        </p>
        <div className="grid grid-cols-12 gap-5 mt-8">
          {jobsData.splice(1, 3).map((job, i) => (
            <div key={i} className="col-span-12 md:col-span-6 xl:col-span-4">
              <JobCard jobInfo={job} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
