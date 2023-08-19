import ComingSoon from "@/components/ComingSoon";
import Marquees from "@/components/Marquee";
import React from "react";
import Marquee from "react-fast-marquee";

type Props = {};

const Shop = (props: Props) => {
  return (
    <div className="w-full grid h-screen place-items-center">
      <div>
        Shop Page
        <Marquees content="Comming soon Shop 🕧🕧" />
      </div>
    </div>
  );
};

export default Shop;
