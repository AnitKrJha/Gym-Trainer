import React from "react";
import ImageWithOverlay from "./ImageWithOverlay";
import AchievementsCarousel from "./AchievementsCarousel";

type Props = {};

const Achievements = (props: Props) => {
  return (
    <section className="mb-4">
      <ImageWithOverlay
        heightClass="h-40 md:h-56 lg:h-64"
        containerClassName=""
        src="/bg-hero.jpg"
        width={800}
        height={800}
        alt="hello"
      >
        <h2 className=" text-xl md:text-3xl font-bold flex h-40 md:h-56 lg:h-64 justify-center items-center text-background">
          Bhupender's <span className="text-primary px-2"> Achievements </span>
        </h2>
      </ImageWithOverlay>
      <div className="px-2">
        <div className="bg-background p-0.5 -mt-10 shadow-lg max-w-5xl m-auto ">
          <AchievementsCarousel />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
