import * as yup from "yup";

export const companyProfileSchema = yup.object().shape({
  companyName: yup.string().required("Company Name is required"),
  email: yup.string().required("Email is required").email("Must be an email"),
  website: yup.string().required("Website is required"),
  phone: yup.string().required("Phone is required"),
  location: yup.string().required("Location is required"),
  industry: yup.string().required("Industry is required"),
  companySize: yup.string().required("Company Size is required"),
  foundIn: yup.string().required("Found In is required"),
  description: yup.string().required("About is required"),
});
