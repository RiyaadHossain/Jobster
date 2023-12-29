import React from "react";
import { useFormContext } from "react-hook-form";

export default function FormCheckbox({
  label,
  id,
  name,
  defaultValue,
  divClass,
}) {
  const { register } = useFormContext();

  return (
    <div className={`flex items-center gap-2 ${divClass}`}>
      <input
        {...register(name)}
        id={id}
        name={name}
        type="checkbox"
        defaultChecked={defaultValue}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
