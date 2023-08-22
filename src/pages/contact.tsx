import ComingSoon from "@/components/ComingSoon";
import ContactForm from "@/components/Contact/ContactForm";
import ContactHeader from "@/components/Contact/ContactHeader";
import FormItem from "@/components/Contact/FormItem";
import Marquees from "@/components/Marquee";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      <ContactHeader />
      <ContactForm />
    </>
  );
};

export default Contact;
