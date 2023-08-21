import "@/styles/globals.css";
import "@/styles/verticalTimeline.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { Montserrat } from "next/font/google";
const monst = Montserrat({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${monst.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
