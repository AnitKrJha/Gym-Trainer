import {
  ArrowTopRightIcon,
  InstagramLogoIcon,
  PinBottomIcon,
  SewingPinFilledIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Bhuppi from "/public/Bhupender Dhawan.svg";
import Link from "next/link";
import { ReactNode } from "react";
import footerData from "@/data/footerData.json";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer
      className={` w-full bg-black text-background border-t-primary border py-3 mt-16 outline outline-primary relative z-10 overflow-hidden`}
    >
      <div className="inner px-4 max-w-6xl mx-auto overflow-x-hidden m">
        <header className="flex justify-between items-center">
          <div className={`logo text-primary  font-semibold tracking-wider`}>
            Bhupender
          </div>
          <div className="links flex gap-4 ">
            <FooterSocial name="instagram" url={footerData.instagram}>
              <InstagramLogoIcon />
            </FooterSocial>
            <FooterSocial name="twitter" url={footerData.twitter}>
              <TwitterLogoIcon />
            </FooterSocial>
          </div>
        </header>
        <div className="flex justify-between my-4">
          <FooterLinks links={footerData.footerLinks} />
          <div className="address w-[120px]">
            <div className="flex flex-row-reverse text-sm font-bold text-gray-300 items-center gap-2 py-2">
              We are here <SewingPinFilledIcon />
            </div>
            <p className="text-xs text-gray-400 text-right">
              {footerData.address}
            </p>
          </div>
        </div>
        <p className="trademark text-sm text-center text-muted-foreground">
          {footerData.privacyAndTrademarkLine}
        </p>
      </div>
      <Image
        src={Bhuppi}
        alt="Bhupender Dhawan"
        className="absolute -z-[1] right-10 bottom-10 -rotate-0 scale-150 opacity-20"
      />
    </footer>
  );
};

export default Footer;

//--------------------------Socials-------------------

type footerSocialProps = {
  children: ReactNode;
  name: string;
  url: string;
};

const FooterSocial = (props: footerSocialProps) => {
  return (
    <Link target="_blank"
    rel="no-refferer"
      href={props.url}
      className="flex gap-2 hover:underline hover:scale-105 duration-200 items-center text-muted"
    >
      {props.children}
      <div className="name hidden md:block text-sm ">{props.name}</div>
    </Link>
  );
};

//--------------------Footer Links----------------

type FooterLink = { title: string; link: string };

const FooterLinks = (props: { links: FooterLink[] }) => {
  return (
    <div className="flex flex-col text-slate-300 pl-2 gap-2 text-sm">
      {props.links.map((link, index) => (
        <Link
          key={index}
          href={link.link}
          className="flex gap-1 duration-300 hover:gap-2 items-center hover:underline"
        >
          {link.title}
          <ArrowTopRightIcon />
        </Link>
      ))}
    </div>
  );
};
