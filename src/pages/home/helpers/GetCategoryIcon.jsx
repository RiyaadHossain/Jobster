import {
  FaBullhorn,
  FaCalendarCheck,
  FaChartPie,
  FaComments,
} from "react-icons/fa";
import { FaTerminal } from 'react-icons/fa6'
import { AiOutlineLineChart } from "react-icons/ai";
import { FaAddressCard } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { TbStethoscope } from "react-icons/tb";

const className = "text-[42px] group-hover:text-white transition-all duration-500";

export default function GetCategoryIcon({ type }) {
  let icon = <MdCategory className={className} />;

  if (type === "business") icon = <FaChartPie className={className} />;
  if (type === "customer_service") icon = <FaComments className={className} />;
  if (type === "finance") icon = <AiOutlineLineChart className={className} />;
  if (type === "healthcare") icon = <TbStethoscope className={className} />;
  if (type === "hr") icon = <FaAddressCard className={className} />;
  if (type === "marketing") icon = <FaBullhorn className={className} />;
  if (type === "project_management")
    icon = <FaCalendarCheck className={className} />;
  if (type === "it") icon = <FaTerminal className={className} />;

  return icon;
}
