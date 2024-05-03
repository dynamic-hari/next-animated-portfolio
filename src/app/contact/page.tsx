"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { sendMailSchema } from "./send-mail-shema";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const sendEmail = (templateParams: any) => {
    console.log("🚀 ~ sendEmail ~ templateParams:", templateParams);

    setError(false);
    setSuccess(false);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      )
      .then(
        () => {
          setSuccess(true);
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-32 lg:h-full lg:w-1/2 flex items-center justify-center text-2xl lg:text-6xl md:text-4xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={`${letter}:${index}`}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>

        <div className="h-1/3 lg:h-full w-full lg:w-1/2 lg:flex lg:items-center">
          <Formik
            initialValues={{
              user_name: "",
              user_email: "",
              user_message: "",
            }}
            validationSchema={sendMailSchema}
            onSubmit={(values) => {
              sendEmail(values);
            }}
          >
            {() => (
              <Form className="w-full bg-red-50 rounded-xl px-16 lg:px-24 md:px-16 py-12 lg:py-24 md:py-12">
                <div className="flex flex-col gap-2 mb-3">
                  <span>Dear Hari Haran,</span>
                  <Field
                    name="user_message"
                    className="bg-transparent border-b-2 border-b-black outline-none resize-none lg:min-h-32 md:min-h-4"
                    as="textarea"
                    cols="30"
                    rows="8"
                  />
                  <ErrorMessage
                    component="a"
                    className="text-sm text-red-600 font-semibold"
                    name="user_message"
                  />
                </div>
                <div className="flex flex-col gap-2 mb-3">
                  <span>Email</span>
                  <Field
                    name="user_email"
                    className="bg-transparent border-b-2 border-b-black outline-none"
                  />
                  <ErrorMessage
                    component="a"
                    className="text-sm text-red-600 font-semibold"
                    name="user_email"
                  />
                </div>
                <div className="flex flex-col gap-2 mb-3">
                  <span>Name</span>
                  <Field
                    name="user_name"
                    className="bg-transparent border-b-2 border-b-black outline-none"
                  />
                  <ErrorMessage
                    component="a"
                    className="text-sm text-red-600 font-semibold"
                    name="user_name"
                  />
                </div>
                <div className="pt-8">
                  <button
                    type="submit"
                    className="w-full bg-purple-200 rounded font-semibold text-gray-600 p-4"
                  >
                    Send
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
