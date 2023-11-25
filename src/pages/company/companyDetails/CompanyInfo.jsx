import JobCard from "../../job/JobCard";
import companyHero1 from "../../../assets/company-hero-1.jpg";
import companyHero2 from "../../../assets/company-hero-2.jpg";
import companyHero3 from "../../../assets/company-hero-3.jpg";
import companyHero4 from "../../../assets/company-hero-4.jpg";
import companyHero5 from "../../../assets/company-hero-5.jpg";
import companyHero6 from "../../../assets/company-hero-6.jpg";
import "../style/style.css";

export default function CompanyInfo() {
  return (
    <div className="mt-8">
      {/* +++ About +++ */}
      <div>
        <h1 className="text-3xl font-bold leading-8 tracking-tight mb-6">
          About Artistre Studio
        </h1>
        <p className="text-sm font-light leading-6">
          <span>Artistre Studio</span>, Inc. is an American multinational
          corporation that is engaged in the design, development, manufacturing,
          and worldwide marketing and sales of footwear, apparel, equipment,
          accessories, and services. The company is headquartered in the San
          Francisco metropolitan area. It is the world’s largest supplier of
          athletic shoes and apparel and a major manufacturer of sports
          equipment, with revenue in excess of US$37.4 billion in its fiscal
          year 2020 (ending May 31, 2020). As of 2020, it employed 76,700 people
          worldwide. In 2020 the brand alone was valued in excess of $32
          billion, making it the most valuable brand among sports businesses.
          Previously, in 2017, the Artistre Studio brand was valued at $29.6
          billion. Artistre Studio ranked 89th in the 2018 Fortune 500 list of
          the largest United States corporations by total revenue.
        </p>
      </div>

      {/* +++ Gallery +++ */}
      <div className="my-4">
        <figure className="grid grid-cols-12 gap-2">
          <figure className="col-span-12 md:col-span-6 lg:col-span-4">
            <img
              className="rounded-2xl h-[300px] w-full object-cover"
              src={companyHero6}
              alt=""
            />
          </figure>
          <figure className="col-span-12 md:col-span-6 lg:col-span-4">
            <img
              className="rounded-2xl h-[300px] w-full object-cover"
              src={companyHero5}
              alt=""
            />
          </figure>
          <figure className="col-span-12 md:col-span-6 lg:col-span-4">
            <img
              className="rounded-2xl h-[580px] lg:h-[300px] w-full object-cover"
              src={companyHero4}
              alt=""
            />
          </figure>
          <figure className="col-span-12 md:col-span-6 lg:col-span-4">
            <img
              className="rounded-2xl h-[580px] w-full object-cover"
              src={companyHero3}
              alt=""
            />
          </figure>
          <figure className="col-span-12 md:col-span-6 lg:col-span-4">
            <img
              className="rounded-2xl h-[300px]  lg:h-[580px] w-full object-cover"
              src={companyHero2}
              alt=""
            />
          </figure>
          <figure className="col-span-12 md:col-span-6 lg:col-span-4">
            <img
              className="rounded-2xl h-[300px] lg:h-[580px] w-full object-cover"
              src={companyHero1}
              alt=""
            />
          </figure>
        </figure>
      </div>

      <p className="text-sm font-light leading-[23px]">
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
          <p className="text-sm font-light leading-[23px]">
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
          {[1, 2].map((el) => (
            <div key={el} className="col-span-12 md:col-span-6 xl:col-span-4">
              <JobCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
