import React from "react";

export default function FormInputIcon({
  id,
  icon,
  name,
  type,
  placeholder,
  inputClass,
}) {
  return (
    <div className="relative flex items-center mb-4">
      {icon}
      <input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full ${inputClass}`}
      />
    </div>
  );
}
