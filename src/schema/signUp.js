import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  email: yup.string().email("Must be an email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "At least 6 characters")
    .max(32, "Must be less than 32 characters"),
});
