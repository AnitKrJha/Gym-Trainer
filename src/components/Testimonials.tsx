import React from "react";
import ImageWithOverlay from "./ImageWithOverlay";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <section>
      <ImageWithOverlay
        heightClass="h-64 md:h-72 lg:h-96"
        containerClassName=""
        src="/Fitness_slide_1.jpg"
        width={800}
        height={800}
        alt="hello"
      >
        <div className="flex h-64 md:h-72 lg:h-96 justify-center items-center text-background">
          What Clients Say
        </div>
      </ImageWithOverlay>
    </section>
  );
};

export default Testimonials;
