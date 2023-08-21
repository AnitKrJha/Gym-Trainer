import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ComingSoon from "@/components/ComingSoon";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Marquees from "@/components/Marquee";
import ImageWithOverlay from "@/components/ImageWithOverlay";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full">
      {/* <ComingSoon /> */}
      {/* <Marquees content="Ankit esi hi bhupendra" />
      <Marquees content="Ankit esi hi bhupendra" />
      <Marquees content="Ankit esi hi bhupendra" /> */}
      <HeroSection />
      {/* <Marquees
        content="Ankit esi hi bhupendra ki photo mil jaye to 👑
      "
      />
      <Marquees
        content="Ankit esi hi bhupendra ki photo mil jaye to 👑
      "
      /> */}
      <Marquees />
      <AboutSection />
      {/* <AboutSection />
      <AboutSection />
      <AboutSection />
      <AboutSection />
      <AboutSection /> */}
      <Achievements />
      <Marquees />
      <Testimonials />
      {/* </ImageWithOverlay> */}
    </div>
  );
}
