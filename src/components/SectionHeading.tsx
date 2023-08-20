import { Montserrat } from "next/font/google";
import { ReactNode } from "react";
const monst = Montserrat({ subsets: ["latin"] });
type Props = {
  children: ReactNode;
  align: "left" | "right" | "center";
};

const SectionHeading = (props: Props) => {
  let align: string;
  switch (props.align) {
    case "center":
      align = "text-center ";
    case "left":
      align = "text-left ";
    case "right":
      align = "text-right ";
  }

  return (
    <h2
      className={`section-heading ${align} ${monst.className} font-semibold py-2 text-xl md:text-3xl`}
    >
      {props.children}
    </h2>
  );
};

export default SectionHeading;
