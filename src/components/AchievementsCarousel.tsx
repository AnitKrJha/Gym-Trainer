import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperBtnNext, SwiperBtnPrev } from "./SwiperBtn";
import AchievementCarouselSlide from "./AchievementCarouselSlide";
import { Autoplay } from "swiper/modules";
import achievemetData from "@/data/achievements.json";

type Props = {};

const AchievementsCarousel = (props: Props) => {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        centeredSlides={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full relative"
      >
        {achievemetData.map((achievement) => (
          <SwiperSlide key={achievement.id}>
            <AchievementCarouselSlide
              key={achievement.id}
              id={achievement.id}
              imageSrc={achievement.imageSrc}
              achievementTitle={achievement.achievementTitle}
              description={achievement.description}
              date={achievement.date}
            />
          </SwiperSlide>
        ))}

        <div className="h-8  absolute bottom-0 right-0 z-[1] flex gap-2">
          <SwiperBtnPrev className={"w-[35px] bg-primary  hover:invert"} />
          <SwiperBtnNext className={"w-[35px] bg-primary hover:invert"} />
        </div>
      </Swiper>
    </div>
  );
};
export default AchievementsCarousel;
