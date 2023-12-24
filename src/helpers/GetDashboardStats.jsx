import { IoDocumentText } from "react-icons/io5";
import { statsType } from "../enums/statsType";
import { CgProfile } from "react-icons/cg";
import { MdMailOutline } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import DashboardHomeCard from "../components/dashboard/DashboardHomeCard";

export default function GetDashboardStats({ statsData }) {
  const cardItems = statsData.map((stat) => {
    let icon = "";
    let bg = "";

    if (stat.type === statsType.job_applications) {
      icon = <IoDocumentText className="text-[#0D6EFD]" />;
      bg = "bg-[#E6F0FF]";
    }

    if (stat.type === statsType.profile_visitors) {
      icon = <CgProfile className="text-[#198754]" />;
      bg = "bg-[#E8F3EE]";
    }

    if (stat.type === statsType.unread_messages) {
      icon = <MdMailOutline className="text-[#FFC43F]" />;
      bg = "bg-[#FFF9E6]";
    }

    if (stat.type === statsType.notifications) {
      icon = <IoMdNotificationsOutline className="text-[#DC3545]" />;
      bg = "bg-[#FBEAEC]";
    }

    return { ...stat, icon, bg };
  });

  return (
    <>
      {cardItems.map((item) => (
        <DashboardHomeCard
          title={item.title}
          quantity={item.quantity}
          icon={item.icon}
          bg={item.bg}
          color={item.color}
        />
      ))}
    </>
  );
}
