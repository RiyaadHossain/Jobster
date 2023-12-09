import React from "react";

export default function FormCheckbox({ label, id, name, divClass }) {
  return (
    <div className={`flex items-center gap-2 ${divClass}`}>
      <input type="checkbox" name={name} id={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
