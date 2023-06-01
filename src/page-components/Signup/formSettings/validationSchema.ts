import * as Yup from "yup";
import formData from "./formData";

const validationSchema = {
  signUp: Yup.object().shape({
    [formData.fields.firstname.name]: Yup.string()
      .required("Required")
      .max(20, "First name is too long, not more than 20 characters"),

    [formData.fields.lastname.name]: Yup.string()
      .required("Required")
      .max(20, "Last name is too long, not more than 20 characters"),

    [formData.fields.email.name]: Yup.string()
      .email("Invalid Email")
      .required("Required"),

    [formData.fields.phone.name]: Yup.number()
      .integer()
      .typeError("Please enter a valid phone number")
      .required("Required"),

    [formData.fields.password.name]: Yup.string()
      .required("Required")
      .matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "Your password must include 1 Capital letter, 1 small letter, 1 special character (!#$_+-\"':;>) and 1 number (0987654321). e.g. Password!!22"
      )
      .min(5, "Password is too short - should be 5 characters minimum"),

    
  }),
};

export default validationSchema;
