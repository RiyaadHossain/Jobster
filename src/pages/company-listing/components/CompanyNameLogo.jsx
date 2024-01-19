import React from "react";

export default function CompanyNameLogo({ name }) {
  return (
    <div
      className={`w-20 h-20 rounded-2xl border border-primary flex_cen bg-primary font-bold text-white text-4xl`}
    >
      {name?.substr(0, 1)?.toUpperCase()}
    </div>
  );
}
