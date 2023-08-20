import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperBtnNext, SwiperBtnPrev } from "./SwiperBtn";
import AchievementCarouselSlide from "./AchievementCarouselSlide";
import AchievementCarouselSlide2 from "./AchievmentCarouselSlide2";
import AchievementCarouselSlide3 from "./AchievmentCarouselSlide3";
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
        <AchievementCarouselSlide imageSrc="/achievement_image1.jpeg" />
      </SwiperSlide>
      <SwiperSlide>
        <AchievementCarouselSlide2 imageSrc="/achievement_image2.jpeg" />
      </SwiperSlide>
      <SwiperSlide>
        <AchievementCarouselSlide3 imageSrc="/achievement_image3.jpeg" />
      </SwiperSlide>
      
      <div className="h-8  absolute bottom-0 right-0 z-[1] flex gap-2">
        <SwiperBtnPrev className={"w-[35px] bg-primary  hover:invert"} />
        <SwiperBtnNext className={"w-[35px] bg-primary hover:invert"} />
      </div>
    </Swiper>
  );
};
export default AchievementsCarousel;
