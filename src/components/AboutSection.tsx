import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "./ui/button";
import SectionHeading from "./SectionHeading";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section className="w-full  flex flex-col items-center ">
      <SectionHeading align="center">About me</SectionHeading>
      <p className="text-center max-w-3xl px-5 md:px-9">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eveniet
        natus exercitationem officiis rem consequatur quas ratione culpa facilis
        ipsam dolorum, tenetur saepe minima, mollitia voluptas? Deleniti a
        molestias incidunt.
      </p>
      <br />
      <p className="text-center max-w-3xl px-5 md:px-9">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, velit
        doloremque quo ullam rem eum odit commodi consectetur neque id odio
        quibusdam in incidunt autem distinctio repellendus earum necessitatibus
        reiciendis.
      </p>
    </section>
  );
};

export default AboutSection;
