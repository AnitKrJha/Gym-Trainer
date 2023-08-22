import React from "react";
import ImageWithOverlay from "../ImageWithOverlay";
import {
  CrumpledPaperIcon,
  MobileIcon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";

type Props = {};

const ContactHeader = (props: Props) => {
  return (
    <header className="mt-16">
      <ImageWithOverlay
        src={"https://unsplash.it/1800/500"}
        alt="contact-form"
        width={900}
        height={300}
        heightClass="h-40 md:h-56"
        containerClassName=" bg-black/70"
      >
        <div className="grid h-40 md:h-56 place-items-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white  flex items-center gap-2">
              Get In <span className="text-primary">Touch</span>
              <MobileIcon height={20} width={20} />
            </h1>
          </div>
        </div>
      </ImageWithOverlay>
    </header>
  );
};

export default ContactHeader;
