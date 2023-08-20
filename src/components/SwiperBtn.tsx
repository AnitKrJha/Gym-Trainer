import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowTopRightIcon,
} from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

export const SwiperBtnNext = ({ className }: any) => {
  const swiper = useSwiper();
  return (
    <div className={className}>
      <div
        className="z-[10] h-full flex items-center justify-center w-full  hover:scale-105 hover:cursor-pointer hover:opacity-80 "
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <ArrowRightIcon height={17} width={17} className="text-background" />
      </div>
    </div>
  );
};

export const SwiperBtnPrev = ({ className }: any) => {
  const swiper = useSwiper();
  return (
    <div className={className}>
      <div
        className="z-[10] h-full flex items-center justify-center w-full  hover:scale-105 hover:cursor-pointer hover:opacity-80 "
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <ArrowLeftIcon height={17} width={17} className="text-background" />
      </div>
    </div>
  );
};
