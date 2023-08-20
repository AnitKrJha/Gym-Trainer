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
        src="/Fitness_slide_1.jpg"
        width={800}
        height={800}
        alt="hello"
      >
        <div className="flex h-40 md:h-56 lg:h-64 justify-center items-center text-background">
          Achievements
        </div>
      </ImageWithOverlay>
      <div className="px-2">
        <div className="bg-background p-0.5 -mt-10 shadow-lg max-w-3xl m-auto ">
          <AchievementsCarousel />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
