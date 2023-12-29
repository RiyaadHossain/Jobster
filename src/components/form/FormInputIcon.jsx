import { useFormContext } from "react-hook-form";
import {
  getFormValidationError,
  getYupValidationError,
} from "@/helpers/getFormValidationError";
import "./style/module.style.css";

export default function FormInputIcon({
  id,
  icon,
  name,
  type,
  placeholder,
  defaultValue,
  validation,
  minLen,
  maxLen,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = !validation
    ? getYupValidationError(errors, name)
    : getFormValidationError({ errors, name, placeholder, minLen, maxLen });

  return (
    <div className="mb-4">
      <div className="relative flex items-center mb-[1px]">
        {icon}
        <input
          {...register(name, validation)}
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue ? defaultValue : ""}
          className={`w-full focus:outline-0 focus:ring-0 ${
            error && "border-red-500"
          }`}
        />
      </div>
      {error && <span className="field_error">{error}</span>}
    </div>
  );
}

/* 
<Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
          {...field}
            name={name}
            id={id}
            type={type}
            placeholder={placeholder}
            value={value ? value : field.value}
            className={`w-full`}
          />
        )}
      /> 
      */
