import * as Yup from "yup";
export const sendMailSchema = Yup.object().shape({
  user_email: Yup.string().email().required("Required"),
  user_name: Yup.string().required("Required").max(20, "Too Long!"),
  user_message: Yup.string().required("Required").max(500, "Too Long!"),
});
