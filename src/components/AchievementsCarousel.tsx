import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperBtnNext, SwiperBtnPrev } from "./SwiperBtn";
import AchievementCarouselSlide from "./AchievementCarouselSlide";
import { Autoplay } from "swiper/modules";

type Props = {};

const AchievementsCarousel = (props: Props) => {
  return (
    <Swiper
      spaceBetween={0}
      loop
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
        stopOnLastSlide: false,
      }}
      speed={500}
      modules={[Autoplay]}
      grabCursor
      className="w-full relative"
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
      <div className="h-8  absolute bottom-0 right-0 z-[1] flex gap-2">
        <SwiperBtnPrev className={"w-[35px] bg-primary  hover:invert"} />
        <SwiperBtnNext className={"w-[35px] bg-primary hover:invert"} />
      </div>
    </Swiper>
  );
};
export default AchievementsCarousel;
