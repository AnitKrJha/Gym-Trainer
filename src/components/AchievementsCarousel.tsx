import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import AchievementCarouselSlide from "./AchievementCarouselSlide";
import ImageWithOverlay from "./ImageWithOverlay";
import { useState } from "react";

type Props = {};

const AchievementsCarousel = (props: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <Swiper
      modules={[Thumbs]}
      spaceBetween={20}
      thumbs={{ swiper: thumbsSwiper }}
      slidesPerView={1}
      autoplay
      onSlideChange={() => {}}
      grabCursor
      onSwiper={(swiper) => console.log(swiper)}
      className="w-full outline-offset-4 "
    >
      <SwiperSlide>
        <AchievementCarouselSlide imageSrc="/Fitness_slide_1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <AchievementCarouselSlide imageSrc="/Fitness_slide_1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <AchievementCarouselSlide imageSrc="/Fitness_slide_1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <AchievementCarouselSlide imageSrc="/Fitness_slide_1.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};
export default AchievementsCarousel;
