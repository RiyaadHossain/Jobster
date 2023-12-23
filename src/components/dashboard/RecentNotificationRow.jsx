import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function RecentNotificationRow({ type }) {
  /* Types - Profile view, Message Received, Applied for Job, Application Accepted/Rejected */

  return (
    <div className="flex items-center justify-between font-light mb-2">
      <div className="flex items-center text-base">
        <BiUserCircle className="mr-3" size={18} />
        <Link to={`/companies/1`} className="mr-2 text-primary">
          Someone
        </Link>
        <span className="ml-1 opacity-[0.8]">viewed your profile</span>
      </div>
      <div className="text-sm">1d</div>
    </div>
  );
}
