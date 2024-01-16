import React from "react";

export default function NameLogo({ name }) {
  return (
    <div className="w-10 h-10 rounded-full border border-primary flex_cen bg-primary font-bold text-white text-xl">
      {name?.substr(0, 1)?.toUpperCase()}
    </div>
  );
}
