import { ReactNode } from "react";
import Navbar from "./Navbar";
import { Raleway } from "next/font/google";
const rale = Raleway({ subsets: ["latin"] });
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className={`${rale.className} w-full`}>{children}</main>
    </>
  );
}
