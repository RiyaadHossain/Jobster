import { useFormContext } from "react-hook-form";

export default function FormInput({
  id,
  type,
  name,
  label,
  inputRef,
  placeholder,
  divClass,
  inputClass,
  mandatory,
  defaultValue,
  handleOnChange,
}) {
  const { register } = useFormContext();

  return (
    <div className={`flex flex-col items-start mb-4 ${divClass}`}>
      {label && (
        <label
          htmlFor={id}
          className="text-[13px] font-medium leading-5 ml-2 mb-2"
        >
          {label} {mandatory && <span className="text-red-700">*</span>}
        </label>
      )}
      {!handleOnChange ? (
        <input
          {...register(name)}
          name={name}
          id={id}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={`w-full ${inputClass}`}
        />
      ) : (
        <input
          ref={inputRef}
          name={name}
          id={id}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={`w-full ${inputClass}`}
          onChange={(e) => handleOnChange(e.target.value, name)}
        />
      )}
    </div>
  );
}
