import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup.string().email("Must be an email").required("Email is required"),
  password: yup
    .string()
    .min(6, "At least 6 characters")
    .max(32, "Must be less than 32 characters")
    .required("Password is required"),
});
