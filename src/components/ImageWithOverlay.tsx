import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import { ReactNode } from "react";

type Props = {
  containerClassName?: string;
  children?: ReactNode;
  heightClass?: string;
} & ImageProps;

const ImageWithOverlay = ({
  containerClassName,
  children,
  className,
  heightClass,
  ...other
}: Props) => {
  return (
    <>
      <div
        className={cn(
          "w-full bg-black/20 relative",
          heightClass,
          containerClassName
        )}
      >
        <div className={cn("absolute  -z-10 w-full", heightClass)}>
          <Image
            {...other}
            className={cn(
              "object-cover object-center w-full h-full",
              className
            )}
            alt="s"
          />
        </div>
        <div className="w-full"> {children} </div>
      </div>
    </>
  );
};

export default ImageWithOverlay;
