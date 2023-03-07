import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string("Enter your name").required("Name is required"),
  profession: yup.string().required("Enter your profession"),
  region: yup.string().required("Enter your location"),
  email: yup.string().email("Invalid email").required("Enter your your email"),
  phone: yup.number().required("Enter your phone"),
  summary: yup
    .string()
    .min(100, "Too Short!")
    .max(500, "Too long!")
    .required("your summary"),
  workJobDescription: yup.string().min(50, "Too Short!").max(250, "Too long!"),
  professionHardSkills: yup.string().required("your HardSkills"),
  professionSoftSkills: yup.string().required("your SoftSkills"),
  professionMainSkills: yup.string().required("your MainSkills"),
  educationDescription: yup
    .string()
    .min(50, "Too Short!")
    .max(250, "Too long!"),
  coursesDescription: yup.string().min(50, "Too Short!").max(250, "Too long!"),
});
