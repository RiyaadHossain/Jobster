import * as yup from "yup";

export const companyProfileSchema = yup.object().shape({
  name: yup.string().required("Company Name is required"),
  // website: yup.string().required("Website is required"),
  // phoneNumber: yup.string().required("Phone is required"),
  // location: yup.string().required("Location is required"),
  // industry: yup.string().required("Industry is required"),
  // companySize: yup.string().required("Company Size is required"),
  // founded: yup.string().required("Found In is required"),
  // about: yup.string().required("About is required"),
});
