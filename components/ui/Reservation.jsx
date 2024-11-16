import React from "react";
import Title from "./Title";
import Input from "../form/Input";
const Reservation = () => {
  const inputs = [
    {
      id: 1,
      name: "fullaName",
      type: "text",
      placeholder: "Your Full Name",
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "How Many Persons?",
    },
    {
      id: 5,
      name: "persons",
      type: "datetime-local",
      placeholder: "How Many Persons?",
    },
  ];
  return (
    <div className="container mx-auto py-12">
      <Title addClass="text-[40px] mb-10">Book A Table</Title>
      <div className="flex justify-between flex-wrap gap-10">
        <div className="lg:flex-1 w-full">
          <div className="flex flex-col gap-y-3">
            {inputs.map((input, index) => (
              <Input key={index} {...input} />
            ))}
          </div>
          <button className="btn-primary mt-4">BOOK NOW</button>
        </div>
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
