import ComingSoon from "@/components/ComingSoon";
import Marquees from "@/components/Marquee";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="w-full grid h-screen place-items-center">
      <div>
        Contact Page
        <Marquees content="coming soon contact us" />
      </div>
    </div>
  );
};

export default Contact;
