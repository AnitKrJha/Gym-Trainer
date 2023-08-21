import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperBtnPrev, SwiperBtnNext } from "./SwiperBtn";
import testimonialData from "@/data/testimonialData.json";

type Props = {};

const TestimonialCarousel = (props: Props) => {
  return (
    <div className="px-2 ">
      <div className="max-w-5xl mb-4  -mt-12 md:z-[1] bg-background shadow mx-auto">
        <Swiper
          spaceBetween={0}
          centeredSlides={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            520: {
              slidesPerView: 2,
            },
            750: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
        >
          <div className="h-8  absolute bottom-0 left-0 z-[1] flex gap-2">
            <SwiperBtnPrev className={"w-[35px] bg-primary  hover:invert"} />
          </div>
          <div className="h-8  absolute bottom-0 right-0 z-[1] flex gap-2">
            <SwiperBtnNext className={"w-[35px] bg-primary hover:invert"} />
          </div>
          {testimonialData.map((t) => (
            <SwiperSlide key={t.id}>
              <TestimonialCard
                title={t.title}
                subtitle={t.subtitle}
                comment={t.comment}
                imgSrc={t.avatarSrc}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
