import ComingSoon from "@/components/ComingSoon";
import React from "react";

type Props = {};

const Journey = (props: Props) => {
  return (
    <div className="w-full grid h-screen place-items-center">
      <div>
        Journey Page
        <ComingSoon />
      </div>
    </div>
  );
};

export default Journey;
