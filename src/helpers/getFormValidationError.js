export const getYupValidationError = (errors, name) => {
  return errors[name]?.message;
};

export const getFormValidationError = ({
  errors,
  name,
  placeholder,
  minLen,
  maxLen,
}) => {
  const type = errors[name]?.type;

  let errorMessage = errors[name] ? "Field Error" : "";

  if (type === "required") errorMessage = `${placeholder} is required`;
  if (type === "pattern") errorMessage = `Must be a valid ${placeholder}`;
  if (type === "minLength")
    errorMessage = `At least ${minLen} characters is required`;
  if (type === "maxLength")
    errorMessage = `Must be less than ${maxLen} characters`;

  return errorMessage;
};
