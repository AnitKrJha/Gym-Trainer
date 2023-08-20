import React from "react";
import ImageWithOverlay from "./ImageWithOverlay";
import TestimonialCard from "./TestimonialCard";
import TestimonialCarousel from "./TestimonialCarousel";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <section>
      <ImageWithOverlay
        heightClass="h-56 md:h-64 lg:h-72"
        containerClassName=""
        src="/Fitness_slide_1.jpg"
        width={800}
        height={800}
        alt="hello"
      >
        <h2 className="text-2xl md:text-3xl font-bold flex h-56 md:h-64 lg:h-72 justify-center items-center text-background">
          What my <span className="text-primary px-2"> Clients</span> Say
        </h2>
      </ImageWithOverlay>
      <TestimonialCarousel />
    </section>
  );
};

export default Testimonials;
