import * as Yup from "yup";
export const sendMailSchema = Yup.object().shape({
  user_email: Yup.string()
    .email()
    .typeError()
    .required("Please share your email to catch up later..."),
  user_name: Yup.string()
    .required("Please share your name...")
    .max(20, "Too Long! Try shorter name..."),
  user_message: Yup.string()
    .required("Please share your thoughts...")
    .max(500, "Too Long! Try shorter message..."),
});
