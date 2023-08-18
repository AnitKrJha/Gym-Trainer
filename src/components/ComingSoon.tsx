import { TimerIcon } from "@radix-ui/react-icons";
import React from "react";

type Props = {};

const ComingSoon = (props: Props) => {
  return (
    <div className="w-full flex justify-center m-auto font-bold text-3xl gap-4">
      Coming Soon <TimerIcon height={40} width={40} />
    </div>
  );
};

export default ComingSoon;
