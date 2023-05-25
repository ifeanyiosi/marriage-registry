import Image from "next/image";
import { Inter } from "next/font/google";
import NavigationBar from "@/components/NavigationBar";
import LandingHero from "@/page-components/LandingPage/LandingHero";
import LandingSecond from "@/page-components/LandingPage/LandingSecond";
import LandingThird from "@/page-components/LandingPage/LandingThird";
import LandingForth from "@/page-components/LandingPage/LandingForth";

const inter = Inter({ subsets: ["latin"] });

interface SectionDividerProps {
  extendedStyles?: string;
}

export const SectionDivider = ({ extendedStyles }: SectionDividerProps) => (
  <div className={`${extendedStyles} h-[80px] w-full`} />
);

export default function Home() {
  return (
    <main className="w-full flex  relative flex-col items-center justify-center">
      <NavigationBar />
      <SectionDivider />
      <LandingHero />
      <LandingSecond />
      <LandingThird />
      <LandingForth />
    </main>
  );
}
