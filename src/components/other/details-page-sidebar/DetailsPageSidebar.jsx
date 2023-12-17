import React from "react";

export default function DetailsPageSidebar({ bg, children }) {
  return <div className={`p-8 rounded-3xl ${bg} space-y-5`}>{children}</div>;
}
