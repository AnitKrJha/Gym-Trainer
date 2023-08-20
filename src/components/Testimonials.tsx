import React from "react";
import ImageWithOverlay from "./ImageWithOverlay";
import TestimonialCard from "./TestimonialCard";

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
        <div className="flex h-56 md:h-64 lg:h-72 justify-center items-center text-background">
          What Clients Say
        </div>
      </ImageWithOverlay>
      <div className="testimonials flex-col md:flex-row  max-w-3xl flex  w-fit mb-4  -mt-12 md:z-[1] bg-background shadow mx-auto">
        <TestimonialCard
          title="hello"
          subtitle="bto"
          comment=" fsf orjewif adfjkhio fl joherio oaifjoiewnsf soiern  fkjsehfwefioewbf sdfiosfef"
        />
        <TestimonialCard
          title="hello"
          subtitle="bto"
          comment=" fsf sf s fs fsd f sf f  fsdfsfasf asf sdfwer af akf lksndf  flsiaerionfjb fkjadshiorjewif adfjkhio fl joherio oaifjoiewnsf soiern  fkjsehfwefioewbf sdfiosfef"
        />
        <TestimonialCard
          title="hello"
          subtitle="bto"
          comment=" fsf sf s fs fsd f sf f  fsdfsfasf asf sdfwer af akf lksndf  flsiaerionfjb fkjadshiorjewif adfjkhio fl joherio oaifjoiewnsf soiern  fkjsehfwefioewbf sdfiosfef"
        />
      </div>
    </section>
  );
};

export default Testimonials;
