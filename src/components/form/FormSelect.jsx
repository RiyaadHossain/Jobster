import { useFormContext } from "react-hook-form";
import {
  getFormValidationError,
  getYupValidationError,
} from "@/helpers/getFormValidationError";

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
  validation,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = !validation
    ? getYupValidationError(errors, name)
    : getFormValidationError({
        errors,
        name,
        placeholder /* , maxLen, minLen  */,
      });

  return (
    <div className={`mb-4 ${divClass}`}>
      <div className={`flex flex-col items-start mb-[1px]`}>
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
          className={`w-full ${inputClass} ${error && "border-red-500"}`}
          placeholder={placeholder}
        >
          {/* <option value={0}>{placeholder}</option> */}
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.display}
            </option>
          ))}
        </select>
      </div>
      {error && <span className="field_error">{error}</span>}
    </div>
  );
}
