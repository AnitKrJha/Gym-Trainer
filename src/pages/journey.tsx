import ComingSoon from "@/components/ComingSoon";
import Marquees from "@/components/Marquee";
import React from "react";

type Props = {};

const Journey = (props: Props) => {
  return (
    <div className="w-full grid h-screen place-items-center">
      <div>
        Journey Page
        <Marquees content="coming soon jouney 🕧🕧" />
      </div>
    </div>
  );
};

export default Journey;
