import React from "react";

const Badge = ({ children, className }) => {
  return (
    <div
      className={`bg-primary/10 font-light w-fit px-[17px] py-[7px] rounded-full text-primary text-[13px] ${className}`}
    >
      <p>{children}</p>
    </div>
  );
};

export default Badge;
