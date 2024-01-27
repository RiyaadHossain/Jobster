import { ENUM_NOTIFICATION_TYPE } from "../enums/notificationType";
import { Link } from "react-router-dom";
import { FaBriefcase, FaEye, FaInbox } from "react-icons/fa";
import {
  BsFillClipboard2CheckFill,
  BsFillClipboard2XFill,
} from "react-icons/bs";
import { pluralRole } from "@/utils/pluralRole";

/* Tailwind Calsses */
const icon_class = "mr-3 opacity-[0.8]";
const highlighted_text = "text-primary text-base";

export default function GetRecentNotficationContent({ notification }) {
  let content = null;

  if (notification?.type === ENUM_NOTIFICATION_TYPE.MESSAGE) {
    content = (
      <>
        <FaInbox className={icon_class} size={18} />
        <Link
          to={`/${pluralRole(notification?.from?.role)}/${
            notification?.from?._id
          }`}
          className={`mr-1 ${highlighted_text}`}
        >
          {notification?.from?.name}
        </Link>
        <span className="text-base">sent you a message</span>
      </>
    );
  }

  if (notification?.type === ENUM_NOTIFICATION_TYPE.PROFILE_VIEW) {
    content = (
      <>
        <FaEye className={icon_class} size={18} />
        <Link
          to={`/${pluralRole(notification?.from?.role)}/${
            notification?.from?._id
          }`}
          className={`mr-1 ${highlighted_text}`}
        >
          {notification?.from?.name}
        </Link>
        <span className="text-base">viewed your profile</span>
      </>
    );
  }

  if (notification?.type === ENUM_NOTIFICATION_TYPE.APPLY) {
    content = (
      <>
        <FaBriefcase className={icon_class} size={18} />
        <Link
          to={`/${pluralRole(notification?.from?.role)}/${
            notification?.from?._id
          }`}
          className={`mr-1 ${highlighted_text}`}
        >
          {notification?.from?.name}
        </Link>
        <span className="text-base">applied for</span>
        <Link
          to={`/jobs/${notification?.job?._id}`}
          className={`${highlighted_text}`}
        >
          {notification?.job?.title}
        </Link>
      </>
    );
  }

  if (
    notification?.type === ENUM_NOTIFICATION_TYPE.APPLICATION_ACCEPTED ||
    notification?.type === ENUM_NOTIFICATION_TYPE.APPLICATIN_REJECTED
  ) {
    content = (
      <>
        {notification?.type === ENUM_NOTIFICATION_TYPE.APPLICATION_ACCEPTED ? (
          <BsFillClipboard2CheckFill className={icon_class} />
        ) : (
          <BsFillClipboard2XFill className={icon_class} />
        )}
        <Link
          to={`/${pluralRole(notification?.from?.role)}/${
            notification?.from?._id
          }`}
          className={`mr-1 ${highlighted_text}`}
        >
          {notification?.from?.name}
        </Link>
        <span className="text-base">
          {notification?.type === ENUM_NOTIFICATION_TYPE.APPLICATION_ACCEPTED
            ? "accepted"
            : "rejected"}{" "}
          your application for
        </span>
        <Link
          to={`/jobs/${notification?.job?._id}`}
          className={`ml-1 ${highlighted_text}`}
        >
          {notification?.job?.title}
        </Link>
      </>
    );
  }

  return content;
}
