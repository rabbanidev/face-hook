import * as yup from "yup";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("E-mail is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Your password must be at least 8 characters"),
});

export default loginSchema;
