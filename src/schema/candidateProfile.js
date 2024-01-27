import * as yup from "yup";

export const candidateProfileSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  // phoneNumber: yup.string().required("Phone is required"),
  // title: yup.string().required("Tittle is required"),
  // location: yup.string().required("Location is required"),
  // industry: yup.string().required("Industry is required"),
  // about: yup.string().required("Bio is required"),
});
