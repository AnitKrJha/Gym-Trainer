import React from "react";
import ImageWithOverlay from "./ImageWithOverlay";

type Props = {
  imageSrc: string;
};

const AchievementCarouselSlide = (props: Props) => {
  return (
    <ImageWithOverlay
      src={"/Fitness_slide_1.jpg"}
      height={1000}
      width={1000}
      alt="Carousel"
      containerClassName=""
      heightClass="h-[400px]"
    />
  );
};

export default AchievementCarouselSlide;
