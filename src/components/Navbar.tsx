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
const rale = Raleway({ subsets: ["latin"] });
type Props = {};

const Navbar = (props: Props) => {
  return (
    <Sheet>
      <nav className="flex justify-between py-4 px-3 md:px-6 items-center bg-background">
        <div className="hamburger md:hidden">
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <HamburgerMenuIcon width={20} height={20} />
            </Button>
          </SheetTrigger>
        </div>
        <div className={`logo ${rale.className} font-semibold sm:text-lg`}>
          <Link href="/">Bhupendra</Link>
        </div>
        <div className="cta">
          <Link href="./shop">
            <Button
              size={"default"}
              className={`${rale.className} font-bold text-primary-foreground`}
            >
              Shop Now <PaperPlaneIcon className="ml-2" />
            </Button>
          </Link>
        </div>
      </nav>
      <nav
        className={`other-links ${rale.className} hidden md:block bg-primary`}
      >
        <ul className="max-w-4xl mx-auto flex justify-around font-semibold tracking-wide">
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
      <SheetContent side={"top"} className={`${rale.className} font-semibold`}>
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
    </Sheet>
  );
};

export default Navbar;
