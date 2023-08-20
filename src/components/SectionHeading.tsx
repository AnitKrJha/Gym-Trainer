import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import { ReactNode } from "react";
const monst = Montserrat({ subsets: ["latin"] });
type Props = {
  children: ReactNode;
  align: "left" | "right" | "center";
  className?: string;
};

const SectionHeading = (props: Props) => {
  let align: string;
  switch (props.align) {
    case "center":
      align = "text-center ";
      break;
    case "left":
      align = "text-left ";
      break;
    case "right":
      align = "text-right ";
      break;
  }

  return (
    <h2
      className={cn(
        `text-foreground section-heading ${align}  ${monst.className} max-w-3xl m-auto w-full font-semibold py-2 text-xl md:text-3xl`,
        props.className
      )}
    >
      {props.children}
      <div
        className={`underline w-6 mix-blend-difference h-1 my-3 ${
          props.align === "center" ? "mx-auto" : " ml-1 my-2"
        } bg-gray-800 rounded`}
      ></div>
    </h2>
  );
};

export default SectionHeading;
