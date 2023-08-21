import React from "react";
import ImageWithOverlay from "./ImageWithOverlay";

type Props = {
  imageSrc: string;
  achievementTitle: string;
  description: string;
  date?: string;
  id: number;
};

const AchievementCarouselSlide = (props: Props) => {
  return (
    <div>
      <ImageWithOverlay
        src={props.imageSrc}
        height={1000}
        width={1000}
        alt="Carousel"
        containerClassName="bg-gradient-to-tl from-black/70 to-transparent"
        heightClass="aspect-[15/9] md:aspect-[17/9]"
      >
        <h2 className="about text-background grid place-items-end p-4 aspect-[15/9] md:aspect-[17/9]">
          <span className="uppercase  text-3xl md:text-5xl">
            <span className="text-primary font-bold uppercase">
              {props.id} .
            </span>
          </span>
        </h2>
      </ImageWithOverlay>
      <div className="pl-4 py-4">
        <h2 className="text-lg md:text-2xl font-bold text-primary">
          {props.achievementTitle}
        </h2>
        <p className="text-base text-muted-foreground  font-medium md:text-lg">
          {props.description}
        </p>
        <p className="text-sm text-muted-foreground italic font-medium md:text-base">
          Date: {props.date}
        </p>{" "}
        {/* New line to display the date */}
      </div>
    </div>
  );
};

export default AchievementCarouselSlide;
