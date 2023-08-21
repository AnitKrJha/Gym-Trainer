import React from "react";
import ImageWithOverlay from "./ImageWithOverlay";

type Props = {
  imageSrc: string;
  achievementTitle: string;
  description: string;
  date?: string;
};

const AchievementCarouselSlide = (props: Props) => {
  return (
    <div>
      <ImageWithOverlay
        src={props.imageSrc}
        height={1000}
        width={1000}
        alt="Carousel"
        containerClassName="text-red-500 "
        heightClass="aspect-[15/9] md:aspect-[17/9]"
      ></ImageWithOverlay>
      <h2 className="text-lg md:text-2xl font-bold">
        {props.achievementTitle}
      </h2>
      <p>{props.description}</p>
      <p>Date: {props.date}</p> {/* New line to display the date */}
    </div>
  );
};

export default AchievementCarouselSlide;
