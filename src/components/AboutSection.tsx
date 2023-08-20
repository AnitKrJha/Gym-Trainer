import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "./ui/button";
import Bhuppi from "/public/Bhupender Dhawan.svg";
import SectionHeading from "./SectionHeading";
import {
  AlignRightIcon,
  ChevronRightIcon,
  PinRightIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import ImageWithOverlay from "./ImageWithOverlay";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section className="w-full max-w-7xl   flex flex-col md:flex-row-reverse  m-auto shadow-lg py-4">
      <div className="image w-full  ">
        <ImageWithOverlay
          heightClass="h-[350px] md:h-[450px]"
          src="/Fitness_slide_1.jpg"
          height={500}
          width={500}
          alt="image"
          className="w-full h-full object-cover object-center"
        >
          <h2 className="about text-background grid place-items-center h-[350px] md:h-[450px]">
            <span className="uppercase text-3xl">
              <span className="text-primary font-bold uppercase ">About</span>{" "}
              <br />
              Bhupender
            </span>
          </h2>
        </ImageWithOverlay>
      </div>
      <div className="text-muted-foreground text-sm px-8">
        <SectionHeading align="left" className="md:text-xl">
          Bhupender Dhawan /{" "}
          <span className="text-muted-foreground">The coach</span>
        </SectionHeading>
        <p className=" max-w-3xl m-auto  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          eveniet natus exercitationem officiis rem consequatur quas ratione
          culpa facilis ipsam dolorum, tenetur saepe minima, mollitia voluptas?
          Deleniti a molestias incidunt.
        </p>
        <br />
        <p className=" max-w-3xl   m-auto mb-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, velit
          doloremque quo ullam rem eum odit commodi consectetur neque id odio
          quibusdam in incidunt autem distinctio repellendus earum
          necessitatibus reiciendis.
        </p>
        <Image src={Bhuppi} alt="bhupendra dhawan" className="mx-auto my-6" />
        <div className="w-full text-right md:text-left my-2">
          <Link href="./journey">
            <Button>
              See Journey <ChevronRightIcon className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
