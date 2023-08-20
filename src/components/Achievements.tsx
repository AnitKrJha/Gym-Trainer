import React from "react";
import ImageWithOverlay from "./ImageWithOverlay";
import AchievementsCarousel from "./AchievementsCarousel";

type Props = {};

const Achievements = (props: Props) => {
  return (
    <section className="mb-4">
      <ImageWithOverlay
        heightClass="h-56 md:h-64 lg:h-72"
        containerClassName=""
        src="/Fitness_slide_1.jpg"
        width={800}
        height={800}
        alt="hello"
      >
        <div className="flex h-56 md:h-64 lg:h-72 justify-center items-center text-background">
          Achievements
        </div>
      </ImageWithOverlay>
      <div className="px-2">
        <div className="bg-background p-0.5 -mt-10 shadow-md max-w-3xl m-auto ">
          <AchievementsCarousel />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
