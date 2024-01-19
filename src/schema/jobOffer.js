import * as yup from "yup";

export const jobOfferSchema = yup.object().shape({
  title: yup.string().required("Job Title is required"),
  location: yup.string().required("Location is required"),
  category: yup.string().required("Industry is required"),
  description: yup.string().required("Job Description is required"),
  salaryRange: yup.string().required("Salary is required"),
  workLevel: yup.string().required("Experience Level is required"),
  experience: yup.string().required("Experience is required"),
  employmentType: yup.string().required("Employment Type is required"),
});
