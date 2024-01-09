import * as yup from "yup";

export const resetPasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required("New Password is required")
    .min(6, "At least 6 characters")
    .max(32, "Must be less than 32 characters"),
  confirmPassword: yup
    .string()
    .required("New Password is required")
    .min(6, "At least 6 characters")
    .max(32, "Must be less than 32 characters"),
});
