import React from "react";
import { ENUM_NOTIFICATION_TYPE } from "../enums/notificationType";
import { Link } from "react-router-dom";
import { pluralRole } from "@/utils/pluralRole";

/* Tailwind Calsses */
const highlighted_text = "text-black font-medium hover:text-grayColor";

export default function GetTooltipNotificaitonContent({ notification }) {
  let content = null;

  if (notification?.type === ENUM_NOTIFICATION_TYPE.MESSAGE) {
    content = (
      <div>
        <Link
          to={`/${pluralRole(notification?.from?.role)}/${
            notification?.from?._id
          }`}
          className={`mr-1 ${highlighted_text}`}
        >
          {notification?.from?.name}
        </Link>
        <span className="">sent you a message</span>
      </div>
    );
  }

  if (notification?.type === ENUM_NOTIFICATION_TYPE.PROFILE_VIEW) {
    content = (
      <div>
        <Link
          to={`/${pluralRole(notification?.from?.role)}/${
            notification?.from?._id
          }`}
          className={`mr-1 ${highlighted_text}`}
        >
          {notification?.from?.name}
        </Link>
        <span className="">viewed your profile</span>
      </div>
    );
  }

  if (notification?.type === ENUM_NOTIFICATION_TYPE.APPLY) {
    content = (
      <div>
        <Link
          to={`/${pluralRole(notification?.from?.role)}/${
            notification?.from?._id
          }`}
          className={`mr-1 ${highlighted_text}`}
        >
          {notification?.from?.name}
        </Link>
        <span className="">applied for</span>
        <Link
          to={`/jobs/${notification?.job?._id}`}
          className={`ml-1 ${highlighted_text}`}
        >
          {notification?.job?.title}
        </Link>
      </div>
    );
  }

  if (
    notification?.type === ENUM_NOTIFICATION_TYPE.APPLICATION_ACCEPTED ||
    notification?.type === ENUM_NOTIFICATION_TYPE.APPLICATIN_REJECTED
  ) {
    content = (
      <div>
        <Link
          to={`/${pluralRole(notification?.from?.role)}/${
            notification?.from?._id
          }`}
          className={`mr-1 ${highlighted_text}`}
        >
          {notification?.from?.name}
        </Link>
        <span className="">
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
      </div>
    );
  }

  return content;
}
