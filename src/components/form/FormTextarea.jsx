import { useFormContext } from "react-hook-form";
import {
  getFormValidationError,
  getYupValidationError,
} from "../../helpers/getFormValidationError";

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
  inputRef,
  handleOnChange,
  validation,
  customError,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  let error = !validation
    ? getYupValidationError(errors, name)
    : getFormValidationError({
        errors,
        name,
        placeholder /*  maxLen, minLen  */,
      });

  if (customError) error = customError[name];

  return (
    <div className={`mb-4 ${divClass}`}>
      <div className={`flex flex-col items-start mb-[1px]`}>
        <label
          htmlFor={id}
          className="text-[13px] font-medium leading-5 ml-2 mb-2"
        >
          {label} {mandatory && <span className="text-red-700">*</span>}
        </label>
        {!handleOnChange ? (
          <textarea
            {...register(name)}
            id={id}
            name={name}
            rows={rows}
            defaultValue={defaultValue}
            placeholder={placeholder}
            className={`w-full ${inputClass} ${error && "border-red-500"}`}
          />
        ) : (
          <textarea
            id={id}
            name={name}
            rows={rows}
            ref={inputRef}
            defaultValue={defaultValue}
            placeholder={placeholder}
            className={`w-full ${inputClass} ${error && "border-red-500"}`}
            onChange={(e) => handleOnChange(e.target.value, name)}
          />
        )}
        {error && <span className="field_error">{error}</span>}
      </div>
    </div>
  );
}
