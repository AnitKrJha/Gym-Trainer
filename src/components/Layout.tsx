import { ReactNode } from "react";
import Navbar from "./Navbar";
import { Raleway } from "next/font/google";
import Footer from "./Footer";
const rale = Raleway({ subsets: ["latin"] });
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="w-full relative">
      <Navbar />
      <main className={`${rale.className} w-full min-h-[100dvh]`}>
        {children}
      </main>
      <Footer />
    </main>
  );
}
