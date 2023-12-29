import * as yup from "yup";

export const forgetPassSchema = yup.object().shape({
  email: yup.string().email("Must be an email").required("Email is required"),
});
