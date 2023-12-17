import React from "react";
import { useParams } from "react-router-dom";
import meeting from "../../assets/meeting.jpg";
import companyLogo from "../../assets/company-logo-5.png";
import JobSidebar from "./components/JobSidebar";
import JobInfo from "./components/JobInfo";
import PageBanner from "../../components/ui/PageBanner";
import "./module.style.css";

const JobDetails = () => {
  const { id } = useParams();

  const companyInfo = {
    experience: "Fresher",
    workLevel: "Junior",
    employmentType: "Remote",
    salaryRange: "100k / year",
    location: "Dhaka",
    companyLogo,
    companyName: "Programming Hero",
  };

  const jobInfo = {
    overview:
      "As a Human Resources Coordinator, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.",
    position: "Frontend Developer",
    companyName: "Programming Hero",
    location: "Dhaka, Bangladesh",
    skills: [
      "Programming experience developing web applications with the Microsoft .NET stack and a basic knowledge of SQL",
      "Development experience with Angular, Node.JS, or ColdFusion",
      "Hypervisors, SAN’s, load balancers, firewalls, and Web Application Firewall (WAF)",
      "Mobile App Development (iOS and Android)",
      "Speaker Management System (Planstone)",
    ],
    responsibilities: [
      "Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.",
      "Work with BAs, product managers and tech teams to lead the Product Design",
      "Maintain quality of the design process and ensure that when designs are translated into code",
      "Accurately estimate design tickets during planning sessions.",
      "Ensure design choices are data led by identifying assumptions to test each sprint, and work with the analysts in your team to plan moderated usability test sessions.",
    ],
    requirements: [
      "4+ years of system administration experience with the Microsoft Server platform (2012/2016, Microsoft IIS, Active Directory)",
      "Working knowledge of Encryption techniques and protocols, Multi-factor authentication, Data protection, Penetration testing, Security threats",
      "Bachelor’s Degree, or 4+ years of hands-on IT experience",
    ],
  };

  const userData = {
    comapnySize: "11 - 50",
    companyEmail: "program@gmail.com",
    companyLocation: "Dhaka, Bangladesh",
    companySite: "www.program.com",
  };

  return (
    <div className="max_container my-20">
      <div className="grid grid-cols-12 gap-5 ">
        {/* --------------- Main Content --------------- */}
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 mb-8 lg:mb-0">
          {/* -------------- Comapany Images -------------- */}

          <PageBanner
            banner={meeting}
            brandImg={companyLogo}
            rounded="rounded-xl"
            insideIcon={false}
          />

          {/* -------------- Job Title & Info -------------- */}
          <div className="space-y-5 mt-24">
            <JobInfo jobInfo={jobInfo} jobId={id} />
          </div>
        </div>

        {/* --------------- Sidebar Content --------------- */}
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <JobSidebar companyInfo={companyInfo} userData={userData} />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
