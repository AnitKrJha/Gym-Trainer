import React from "react";
import ImageWithOverlay from "./ImageWithOverlay";

type Props = {
  imageSrc: string;
};

const AchievementCarouselSlide2 = (props: Props) => {
  return (
    <ImageWithOverlay
      src={"/achievement_image2.jpeg"}
      height={1000}
      width={1000}
      alt="Carousel"
      containerClassName="text-red-500"
      heightClass=" aspect-[18/9]"
    >
    <span className="bg-black p-3 text-center	w-full">hello</span>  
    </ImageWithOverlay>
  );
};

export default AchievementCarouselSlide2;
