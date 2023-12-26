import { useFormContext } from "react-hook-form";

export default function FormTextarea({
  id,
  rows,
  name,
  defaultValue,
  label,
  placeholder,
  divClass,
  inputClass,
  mandatory,
}) {
  const { register } = useFormContext();

  return (
    <div className={`flex flex-col items-start mb-4 ${divClass}`}>
      <label
        htmlFor={id}
        className="text-[13px] font-medium leading-5 ml-2 mb-2"
      >
        {label} {mandatory && <span className="text-red-700">*</span>}
      </label>
      <textarea
        {...register(name)}
        id={id}
        name={name}
        rows={rows}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`w-full ${inputClass}`}
      />
    </div>
  );
}
