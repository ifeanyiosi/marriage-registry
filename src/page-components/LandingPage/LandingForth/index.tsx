import Image from "next/image";
import React from "react";
import globe from "../../../images/globe.png";
import Button from "@/components/Button";

type Props = {};

const LandingForth = (props: Props) => {
  return (
    <section className="flex py-[80px] flex-col items-start   lg:pl-[130px] px-6  w-full bg-[#15002c] h-full ">
      <div className="flex items-center justify-between w-full ">
        <div className="flex flex-col items-start gap-6">
          <h1 className="font-Syne text-[36px] text-start font-[300] text-[#fff]  ">
            Love is global.
          </h1>
          <p className="text-[16px] font-Inter max-w-[500px] text-[#fff] text-start ">
            So why shouldn’t marriage be? LOML hosts remote ceremonies in the
            for any couple, anywhere in the world. Don’t let geography get in
            the way of love.
          </p>
          <div className="lg:max-w-[300px] py-6 w-full">
            <Button variant="primary" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
        <div className=" w-[800px] h-[800px] items-end justify-end hidden lg:flex">
          <Image
            className="hidden lg:flex w-full h-full "
            width={800}
            height={800}
            src={globe}
            alt="globe"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingForth;
