import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/components/Button";
import NavigationBar from "@/components/NavigationBar";
import LandingHero from "@/page-components/LandingPage";

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
    </main>
  );
}
