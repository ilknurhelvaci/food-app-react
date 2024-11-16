import React from "react";
import Title from "./Title";
import Input from "../form/Input";
import { useFormik } from "formik";
import { reservationSchema } from "@/schema/reservation";
const Reservation = () => {
  const onSubmit = async (values, actions) => {
    // formda reset işleminden önce için 4 sn bekletme

    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };
  const { values, handleSubmit, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        email: "",
        persons: "",
        date: "",
      },
      onSubmit,
      validationSchema: reservationSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "How Many Persons?",
      value: values.persons,
      errorMessage: errors.persons,
      touched: touched.persons,
    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      placeholder: "Date",
      value: values.date,
      errorMessage: errors.date,
      touched: touched.date,
    },
  ];
  return (
    <div className="container mx-auto py-12">
      <Title addClass="text-[40px] mb-10">Book A Table</Title>
      <div className="flex justify-between flex-wrap gap-10">
        <form className="lg:flex-1 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-3">
            {inputs.map((input, index) => (
              <Input
                key={index}
                {...input}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ))}
          </div>
          <button className="btn-primary mt-4" type="submit">
            BOOK NOW
          </button>
        </form>
        <div className="lg:flex-1  w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12045.070502076922!2d28.8402562604011!3d40.99751518663962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa4af25e14c1d%3A0x75e589dbfab0084f!2zQmFow6dlbGlldmxlciwgxZ5pcmluZXZsZXIsIDM0MTAwIEJhaMOnZWxpZXZsZXIvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1731757360026!5m2!1str!2str"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Reservation;
