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
        src="/bg-hero.jpg"
        width={800}
        height={800}
        alt="hello"
      >
        <h2 className="text-xl md:text-3xl font-bold flex h-56 md:h-64 lg:h-72 justify-center items-center text-background">
          Coach <span className="text-primary px-2">Bhupender's</span>Legacy
        </h2>
      </ImageWithOverlay>
      <TestimonialCarousel />
    </section>
  );
};

export default Testimonials;
