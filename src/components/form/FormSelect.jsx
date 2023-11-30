export default function FormSelect({
  id,
  name,
  value,
  options,
  label,
  placeholder,
  divClass,
  inputClass,
}) {
  return (
    <div className={`flex flex-col items-start mb-4 ${divClass}`}>
      <label htmlFor={id} className="text-[13px] font-medium leading-5 ml-2 mb-2">
        {label}
      </label>
      <select
        name={name}
        id={id}
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
