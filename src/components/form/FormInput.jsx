export default function FormInput({
  id,
  type,
  name,
  value,
  label,
  placeholder,
  divClass,
  inputClass,
  mandatory,
}) {
  return (
    <div className={`flex flex-col items-start mb-4 ${divClass}`}>
      <label
        htmlFor={id}
        className="text-[13px] font-medium leading-5 ml-2 mb-2"
      >
        {label} {mandatory && <span className="text-red-700">*</span>}
      </label>
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
