import { useFormContext } from "react-hook-form";

export default function FormInputIcon({
  id,
  icon,
  name,
  type,
  placeholder,
  defaultValue,
}) {
  const {
    register,
    // control,
    // formState: { errors },
  } = useFormContext();

  // console.log({ FromInputIcon: errors });

  return (
    <div className="relative flex items-center mb-4">
      {icon}
      <input
        {...register(name)}
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue ? defaultValue : ""}
        className={`w-full`}
      />
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
