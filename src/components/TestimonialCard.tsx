import { Avatar } from "@radix-ui/react-avatar";
import React from "react";
import { AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {
  title: string;
  subtitle: string;
  comment: string;
  imgSrc?: string;
};

const TestimonialCard = (props: Props) => {
  return (
    <div className="w-full  snap-start  min-h-[250px] md:min-h-[250px]     shadow-md py-2">
      <div className="content w-full px-5">
        <Avatar>
          <AvatarImage
            src={props.imgSrc ? props.imgSrc : ""}
            className="w-20 h-20 rounded-full mb-2"
          />
          <AvatarFallback className="w-20 bg-black/80  text-lg font-medium text-white h-20 rounded-full mb-2">
            CN
          </AvatarFallback>
        </Avatar>
        <h3 className="text-primary text-sm text uppercase font-bold">
          {props.title}
        </h3>
        <h4 className="text-muted-foreground font-normal tracking-wider text-sm -mt-1 italic">
          {props.subtitle}
        </h4>
        <hr className="my-2" />
        <p className="mt-3 mb-5 text-muted-foreground text-sm">
          {props.comment}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
