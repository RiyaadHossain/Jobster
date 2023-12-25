import { ENUM_NOTIFICATION_TYPE } from "../../../../../enums/notificationType";
import { Link } from "react-router-dom";
import { FaBriefcase, FaEye, FaInbox } from "react-icons/fa";
import {
  BsFillClipboard2CheckFill,
  BsFillClipboard2XFill,
} from "react-icons/bs";
import { pluralRole } from "../../../../../utils/pluralRole";

export default function GetNotificationContent({ notification }) {
  let content = <span className="normal_text">Invalid notification type</span>;

  if (notification.type === ENUM_NOTIFICATION_TYPE.MESSAGE) {
    content = (
      <div className="text_container">
        <FaInbox className="icon_class" />
        <div>
          <Link
            to={`/${pluralRole(notification.from.role)}/${
              notification.from.id
            }`}
            className="highlighted_text"
          >
            {notification.from.name}
          </Link>
          <span className="normal_text">sent you a message</span>
        </div>
      </div>
    );
  }

  if (notification.type === ENUM_NOTIFICATION_TYPE.PROFILE_VIEW) {
    content = (
      <div className="text_container">
        <FaEye className="icon_class" />
        <div>
          <Link
            to={`/${pluralRole(notification.from.role)}/${
              notification.from.id
            }`}
            className="highlighted_text"
          >
            {notification.from.name}
          </Link>
          <span className="normal_text">viewed your profile</span>
        </div>
      </div>
    );
  }

  if (notification.type === ENUM_NOTIFICATION_TYPE.APPLY) {
    content = (
      <div className="text_container">
        <FaBriefcase className="icon_class" />
        <div>
          <Link
            className="highlighted_text"
            to={`/${pluralRole(notification.from.role)}/${
              notification.from.id
            }`}
          >
            {notification.from.name}
          </Link>
          <span className="normal_text">applied for</span>
          <Link
            className="highlighted_text ml-1"
            to={`/jobs/${notification.job.id}`}
          >
            {notification.job.title}
          </Link>
        </div>
      </div>
    );
  }

  if (
    notification.type === ENUM_NOTIFICATION_TYPE.APPLICATION_ACCEPTED ||
    notification.type === ENUM_NOTIFICATION_TYPE.APPLICATIN_REJECTED
  ) {
    content = (
      <div className="text_container">
        {notification.type === ENUM_NOTIFICATION_TYPE.APPLICATION_ACCEPTED ? (
          <BsFillClipboard2CheckFill className="icon_class" />
        ) : (
          <BsFillClipboard2XFill className="icon_class" />
        )}
        <div>
          <Link
            className="highlighted_text"
            to={`/${pluralRole(notification.from.role)}/${
              notification.from.id
            }`}
          >
            {notification.from.name}
          </Link>
          <span className="normal_text">
            {notification.type === ENUM_NOTIFICATION_TYPE.APPLICATION_ACCEPTED
              ? "accepted"
              : "rejected"}{" "}
            your application for
          </span>
          <Link
            className="highlighted_text ml-1"
            to={`/jobs/${notification.job.id}`}
          >
            {notification.job.title}
          </Link>
        </div>
      </div>
    );
  }

  return content;
}
