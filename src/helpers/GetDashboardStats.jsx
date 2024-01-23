import { IoDocumentText } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdMailOutline } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import DashboardHomeCard from "@/components/dashboard/DashboardHomeCard";
import { ENUM_STATS_TYPE } from "../enums/statsType";
import { useOverviewQuery } from "../redux/api/dashboard";

export default function GetDashboardStats() {
  const { data } = useOverviewQuery();
  const statsData = data?.data;

  const cardItems = statsData?.map((stat) => {
    let icon = "";
    let bg = "";

    if (stat?.type === ENUM_STATS_TYPE.JOB_APPLICATIONS) {
      icon = <IoDocumentText className="text-[#0D6EFD]" />;
      bg = "bg-[#E6F0FF]";
    }

    if (stat?.type === ENUM_STATS_TYPE.PROFILE_VISITORS) {
      icon = <CgProfile className="text-[#198754]" />;
      bg = "bg-[#E8F3EE]";
    }

    if (stat?.type === ENUM_STATS_TYPE.UNREAD_MESAGES) {
      icon = <MdMailOutline className="text-[#FFC43F]" />;
      bg = "bg-[#FFF9E6]";
    }

    if (stat?.type === ENUM_STATS_TYPE.NOTIFICATIONS) {
      icon = <IoMdNotificationsOutline className="text-[#DC3545]" />;
      bg = "bg-[#FBEAEC]";
    }

    return { ...stat, icon, bg };
  });

  return (
    <div className="mt-12 grid grid-cols-4 gap-6">
      {cardItems?.map((item, i) => (
        <DashboardHomeCard
          key={i}
          type={item.type}
          quantity={item.quantity}
          icon={item.icon}
          bg={item.bg}
          color={item.color}
        />
      ))}
    </div>
  );
}
