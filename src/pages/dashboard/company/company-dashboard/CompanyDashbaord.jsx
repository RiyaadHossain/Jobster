import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import DashboardHeader from "../../../../components/ui/DashboardHeader";
import DashboardHomeCard from "../../../../components/dashboard/DashboardHomeCard";
import JobsterAreaChart from "../../../../components/dashboard/JobsterAreaChart";
import { BiBriefcase, BiUserCircle } from "react-icons/bi";
import RecentCandidateTable from "./components/RecentCandidateTable";
import {
  applicationData,
  profileVisitorData,
} from "../../../../constants/statData";
import {
  MdForwardToInbox,
  MdKeyboardArrowRight,
  MdMailOutline,
} from "react-icons/md";

export default function CompanyDashbaord() {
  const cardItems = [
    {
      title: "Job Applications",
      quantity: 1,
      icon: <IoDocumentText className="text-[#0D6EFD]" />,
      bg: "bg-[#E6F0FF]",
    },
    {
      title: "Profile Visitors",
      quantity: 11,
      icon: <CgProfile className="text-[#198754]" />,
      bg: "bg-[#E8F3EE]",
    },
    {
      title: "Unread Messages",
      quantity: 5,
      icon: <MdMailOutline className="text-[#FFC43F]" />,
      bg: "bg-[#FFF9E6]",
    },
    {
      title: "Notifications",
      quantity: 0,
      icon: <IoMdNotificationsOutline className="text-[#DC3545]" />,
      bg: "bg-[#FBEAEC]",
    },
  ];

  return (
    <div className="">
      <DashboardHeader title="Dashboard" subtitle="Welcome, Riyad Hossain!" />

      {/* Stats Cards */}
      <div className="mt-12 grid grid-cols-4 gap-6">
        {cardItems.map((item) => (
          <DashboardHomeCard
            title={item.title}
            quantity={item.quantity}
            icon={item.icon}
            bg={item.bg}
            color={item.color}
          />
        ))}
      </div>

      {/* Info Charts */}
      <div className="mt-12 grid grid-cols-12 gap-12">
        <div className="col-span-6">
          <JobsterAreaChart
            quantity={321}
            data={profileVisitorData}
            syncId="profile-visitor"
            color="#0070C9"
            title="Company's Job Visitors"
          />
        </div>
        <div className="col-span-6">
          <JobsterAreaChart
            quantity={125}
            syncId="applications"
            data={applicationData}
            color="#FFA823"
            title="Applications"
          />
        </div>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-12 gap-7 mt-12">
        <div className="col-span-6">
          <h2 className="home_section_title">Recent Notifications</h2>
          <div>
            <div className="flex items-center justify-between font-light mb-2">
              <div className="flex items-center text-base">
                <MdForwardToInbox className="mr-3 opacity-[0.8]" size={18} />
                <Link to={`/candidates/1`} className="mr-2 text-primary">
                  Hasib
                </Link>
                sent you a message
              </div>
              <div>3h</div>
            </div>
            <div className="flex items-center justify-between font-light mb-2">
              <div className="flex items-center text-base">
                <BiBriefcase className="mr-3 opacity-[0.8]" size={18} />
                <Link to={`/candidates/1`} className="mr-2 text-primary">
                  Riyad Hossain
                </Link>
                applied for
                <Link to={`/jobs/1`} className="ml-2 text-primary">
                  Frontend
                </Link>
              </div>
              <div className="text-sm ">45d</div>
            </div>
            <div className="flex items-center justify-between font-light mb-2">
              <div className="flex items-center text-base">
                <BiUserCircle className="mr-3 opacity-[0.8]" size={18} />
                <Link to={`/companies/1`} className="mr-2 text-primary">
                  Someone
                </Link>
                viewed your profile
              </div>
              <div className="text-sm ">1d</div>
            </div>
          </div>
          <Link
            to="notifications"
            className="text-primary font-medium flex gap-3 hover:gap-5 transition-all items-center mt-5"
          >
            Read all <MdKeyboardArrowRight />
          </Link>
        </div>
        <div className="col-span-6">
          <h2 className="home_section_title">Recent Messages</h2>
          <p className="opacity-[0.8]">No recent Messages</p>
        </div>
      </div>

      {/* Recent Job Applicaitons */}
      <div className="mt-12">
        <h2 className="home_section_title">Recent Candidates</h2>
        <div>
          <RecentCandidateTable />
          <Link
            to="candidates"
            className="text-primary font-medium flex gap-3 hover:gap-5 transition-all items-center mt-5"
          >
            View all <MdKeyboardArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
