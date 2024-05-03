"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { sendMailSchema } from "./send-mail-shema";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const text = "Say Hello";

  const sendEmail = (templateParams: any, resetForm: any) => {
    setError(false);
    setSuccess(false);
    setIsLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      )
      .then(() => {
        setSuccess(true);
        setIsLoading(false);
        resetForm();
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {isLoading && (
        <div className="absolute bg-white bg-opacity-40 z-10 h-full w-full flex items-center justify-center">
          <div className="flex items-center">
            <span className="text-3xl mr-4">Loading</span>
            <svg
              className="animate-spin h-8 w-8 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
      )}
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
            onSubmit={(values, { resetForm }) => {
              sendEmail(values, resetForm);
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

                <div className="pt-8">
                  <button
                    type="submit"
                    className="w-full bg-purple-200 rounded font-semibold text-gray-600 p-4"
                  >
                    Send
                  </button>
                </div>
                <div className="pt-8">
                  {success && (
                    <span className="text-green-600 font-semibold">
                      Your message has been sent successfully!
                    </span>
                  )}
                  {error && (
                    <span className="text-red-600 font-semibold">
                      Something went wrong! Please try again later.
                    </span>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {/* Loader */}
      {/* <div className="w-full h-full fixed top-0 left-0 bg-white opacity-1 z-80">
        <div className="flex justify-center items-center mt-[50vh]">
          <div className="fas fa-circle-notch fa-spin fa-5x text-violet-600 z-90"></div>
        </div>
      </div> */}
    </motion.div>
  );
};

export default ContactPage;
