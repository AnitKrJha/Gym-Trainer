import React from "react";
import FormItem from "./FormItem";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <section className="max-w-5xl mx-auto p-4 bg-white ">
      <div className="text-center my-4">
        <h1 className="text-lg sm:text-xl font-bold text-gray-800">
          Fill in the Form Below
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          For any queries or assistance, please provide the details in the form
          below.
        </p>
      </div>
      <hr />
      <form className="flex flex-col">
        <FormItem
          label="Name"
          id="name"
          name="name"
          className="w-full"
          placeholder="Enter your name"
        />
        <FormItem
          label="Email"
          id="email"
          name="email"
          className="w-full"
          placeholder="Enter your email"
        />
        <FormItem
          label="Subject"
          id="subject"
          name="subject"
          className="w-full"
          placeholder="Enter the subject"
        />
        <FormItem
          label="Message"
          id="message"
          name="message"
          type="textarea"
          className="w-full"
          placeholder="Enter your message"
        />

        <Button type="submit" className="w-fit gap-2  ml-2">
          Submit <ChevronRightIcon />
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
