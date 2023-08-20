import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import AchievementCarouselSlide from "./AchievementCarouselSlide";

type Props = {};

const AchievementsCarousel = (props: Props) => {
  return (
    <Swiper
      spaceBetween={20}
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
