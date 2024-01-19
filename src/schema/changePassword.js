import * as yup from "yup";

export const changePasswordSchema = yup.object().shape({
  oldPassword: yup.string().required("Old Password is required"),
  newPassword: yup
    .string()
    .required("New Password is required")
    .min(6, "At least 6 characters")
    .max(32, "Must be less than 32 characters"),
  newPasswordRepeat: yup.string().required("This field is required"),
});
