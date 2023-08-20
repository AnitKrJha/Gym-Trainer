import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  ArrowRightIcon,
  HamburgerMenuIcon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";
import { Raleway } from "next/font/google";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import useScrollPosition from "@/hooks/useScrollPosition";
const rale = Raleway({ subsets: ["latin"] });
type Props = {};

const Navbar = (props: Props) => {
  const srollPosition = useScrollPosition();

  return (
    <Sheet>
      <div className=" w-full">
        <nav
          className={`fixed w-full z-10 top-0 flex justify-between py-4 px-3 md:px-6 items-center ${
            srollPosition < 500
              ? "bg-black text-background bg-opacity-75 backdrop-blur-sm border-b-background/30 border-b"
              : "bg-background shadow-md"
          }`}
        >
          <div className="hamburger md:hidden">
            <SheetTrigger asChild>
              <Button variant={"ghost"} size={"icon"} className="invert-0">
                <HamburgerMenuIcon width={20} height={20} />
              </Button>
            </SheetTrigger>
          </div>
          <div className={`logo ${rale.className} font-semibold sm:text-lg `}>
            <Link href="/">Bhupendra</Link>
          </div>
          <nav
            className={`other-links ${rale.className} hidden md:block text-sm lg:text-base   grow`}
          >
            <ul className="max-w-3xl mx-auto flex justify-around font-semibold tracking-wide">
              <Link href="./journey">
                <li>My Journey</li>
              </Link>
              <Link href="./shop">
                <li>Shop</li>
              </Link>
              <Link href="./contact">
                <li>Contact</li>
              </Link>
            </ul>
          </nav>
          <div className="cta ">
            <Link href="./shop">
              <Button
                size={"sm"}
                className={`${rale.className} font-bold text-primary-foreground`}
              >
                Shop Now <PaperPlaneIcon className="ml-2" />
              </Button>
            </Link>
          </div>
        </nav>

        <SheetContent
          side={"top"}
          className={`${rale.className} font-semibold`}
          overlayClassname={"bg-black bg-opacity-50"}
        >
          <SheetHeader>
            <SheetTitle>Navigate To?</SheetTitle>
            <SheetDescription
              asChild
              className="text-foreground max-w-4xl mx-auto flex flex-col justify-around gap-2 w-full"
            >
              <ul>
                <Link href="./journey">
                  <li className="py-3 w-full bg-primary flex justify-center items-center gap-3">
                    My Journey <ArrowRightIcon />
                  </li>
                </Link>
                <Link href="./shop">
                  <li className="py-3 w-full bg-primary flex justify-center items-center gap-3">
                    Shop <ArrowRightIcon />
                  </li>
                </Link>
                <Link href={"./contact"}>
                  <li className="py-3 w-full bg-primary flex justify-center items-center gap-3">
                    Contact Us <ArrowRightIcon />
                  </li>
                </Link>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </div>
    </Sheet>
  );
};

export default Navbar;
