import * as Yup from "yup";
import formData from "./formData";

const validationSchema = {
  login: Yup.object().shape({
    [formData.fields.email.name]: Yup.string()
      .email()
      .trim()
      .required("Required"),
    [formData.fields.password.name]: Yup.string().required("Required"),
  }),
};

export default validationSchema;
