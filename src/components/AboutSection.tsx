import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "./ui/button";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section className="w-full bg-foreground flex flex-col items-center text-background">
      <h2 className="text-xl sm:text-2xl font-bold ">The Motivation</h2>
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
