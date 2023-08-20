import React from "react";

type Props = {
  title: string;
  subtitle: string;
  comment: string;
};

const TestimonialCard = (props: Props) => {
  return (
    <div className="max-w-[400px] lg:min-w-[341px]  snap-start  min-h-[220px] md:min-h-[250px]     shadow-md py-2">
      <div className="content w-full px-5">
        <h3 className="text-primary text-sm text uppercase font-bold">
          {props.title}
        </h3>
        <h4 className="text-muted-foreground font-normal tracking-wider text-sm -mt-1 italic">
          {props.subtitle}
        </h4>
        <p className="mt-6 text-muted-foreground text-sm">{props.comment}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
