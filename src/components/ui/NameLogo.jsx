import React from "react";

export default function NameLogo({
  name,
  width = 10,
  text = "xl",
  rounded = "full",
}) {
  const heightWidth = `w-${width} h-${width}`;

  return (
    <div
      className={`${heightWidth} rounded-${rounded} border border-primary flex_cen bg-primary font-bold text-white text-${text}`}
    >
      {name?.substr(0, 1)?.toUpperCase()}
    </div>
  );
}
