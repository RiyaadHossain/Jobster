import * as yup from "yup";

export const jobOfferSchema = yup.object().shape({
  jobTitle: yup.string().required("Job Title is required"),
  location: yup.string().required("Location is required"),
  industry: yup.string().required("Industry is required"),
  description: yup.string().required("Job Description is required"),
  salary: yup.string().required("Salary is required"),
  experienceLevel: yup.string().required("Experience Level is required"),
  requiredExperience: yup.string().required("Experience is required"),
  employmentType: yup.string().required("Employment Type is required"),
});
