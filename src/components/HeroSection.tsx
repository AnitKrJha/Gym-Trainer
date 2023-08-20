import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Button } from "./ui/button";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className=" min-h-[100dvh] min-w-screen  h-full w-full relative">
      <Image
        src={"/Fitness_slide_1.jpg"}
        height={1000}
        width={1000}
        alt=""
        priority
        className="object-cover w-screen h-screen object-center"
      />
      <div className=" text-white overlay top-0 left-0 bg-black w-full h-full flex items-center z-[1] absolute bg-opacity-50 justify-start">
        <div className="content max-w-7xl px-5 md:pl-9 ">
          <h1 className="text-4xl md:text-5xl max-w-xl">
            {" "}
            This World is not kind to everyone
          </h1>
          <div className="btn-grp my-3">
            <Button>Pay Now</Button>
            <Button variant={"outline"}>No later</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
