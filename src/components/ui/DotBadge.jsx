import React from "react";

export default function DotBadge({ children, className }) {
  return (
    <div
      className={`bg-primary w-6 h-6 flex justify-center items-center font-semibold rounded-full text-white text-sm ${className}`}
    >
      <p>{children}</p>
    </div>
  );
}
