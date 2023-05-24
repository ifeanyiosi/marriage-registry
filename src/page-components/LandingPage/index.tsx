import Button from "@/components/Button";
import React from "react";

type Props = {};

const LandingHero = (props: Props) => {
  return (
    <section className="w-full flex lg:h-full items-center justify-center    ">
      <div className="  flex flex-col items-center justify-center gap-4 w-full ">
        <div className="flex flex-col w-full  gap-[32px] items-center justify-center">
          <h1 className="text-[48px] font-Syne text-center w-full ">
            Get married legally online
          </h1>
          <p className="font-Inter text-[18px] text-center lg:max-w-[500px]  ">
            Get a legal, Marriage certificate without leaving the comfort of
            your own home—from anywhere around the world.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-[200px] lg:max-w-[500px] w-full gap-8">
          <Button className="w-full" variant="primary">
            Get Married Online
          </Button>
          <Button className="w-full" variant="secondary">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
