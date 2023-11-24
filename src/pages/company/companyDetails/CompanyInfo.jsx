import JobCard from "../../job/JobCard";

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
      <div className="my-4"></div>

      <p className="text-sm font-light leading-[23px]">
        Artistre Studio, Inc. is an American multinational corporation that is
        engaged in the design, development, manufacturing, and worldwide
        marketing and sales of footwear, apparel, equipment, accessories, and
        services.
      </p>

      {/* +++ Video & Info +++ */}
      <div className="mt-7">
        <div></div>
        <div>
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
      <div className="mt-28">
        <h2 className="text-3xl font-bold leading-8 tracking-tight">
          Avaialbe Jobs
        </h2>
        <p className="text-base font-light leading-6 mt-2 opacity-[0.7]">
          Jobs posted by Artistre Studio
        </p>
        <div className="grid grid-cols-12 gap-5 mt-8">
          {[1, 2].map((el) => (
            <div
              key={el}
              className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
            >
              <JobCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
