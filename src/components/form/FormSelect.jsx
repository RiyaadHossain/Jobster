import { useFormContext } from "react-hook-form";

export default function FormSelect({
  id,
  name,
  options,
  label,
  placeholder,
  divClass,
  inputClass,
  mandatory,
  defaultValue,
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
      <select
        {...register(name)}
        name={name}
        id={id}
        defaultValue={defaultValue}
        className={`w-full ${inputClass}`}
        placeholder={placeholder}
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.display}
          </option>
        ))}
      </select>
    </div>
  );
}
