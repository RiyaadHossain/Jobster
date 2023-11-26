import DashboardHomeCard from "../../components/dashboard/DashboardHomeCard";
import DashboardHeader from "../../components/reusable/DashboardHeader";
import { IoDocumentText } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdMailOutline } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

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
    </div>
  );
}
