import DashboardHomeCard from "../../components/dashboard/DashboardHomeCard";
import DashboardHeader from "../../components/reusable/DashboardHeader";
import { IoDocumentText } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdMailOutline } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import JobsterAreaChart from "../../components/dashboard/JobsterAreaChart";
import { applicationData, profileVisitorData } from "../../constants/statData";
import Table from "../../components/dashboard/Table";

export default function DashboardHome() {
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
            title="Candidate's Profile Visitors"
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
      <div className="grid grid-cols-12 gap-5 mt-12">
        <div className="col-span-6">
          <h2 className="home_section_title">Recent Notifications</h2>
          <p className="opacity-[0.8]">No recent notifications</p>
        </div>
        <div className="col-span-6">
          <h2 className="home_section_title">Recent Messages</h2>
          <p className="opacity-[0.8]">No recent Messages</p>
        </div>
      </div>

      {/* Recent Job Applicaitons */}
      <div className="mt-12">
        <h2 className="home_section_title">Recent Job Applications</h2>
        <div>
          <Table />
        </div>
      </div>
    </div>
  );
}
