import React from "react";
import Image from "next/image";

import hero from "../../../images/magnet-me-315vPGsAFUk-unsplash.jpg";

type Props = {};

const LandingSecond = (props: Props) => {
  return (
    <section className="flex flex-col justify-between lg:px-[130px] px-6 py-[80px] ">
      <div className="flex flex-col lg:flex-row gap-[20px] ">
        <div className=" w-full gap-8  flex flex-col ">
          <h1 className="lg:max-w-[50%] text-[#171722] font-[300] w-full text-start text-[36px] ">
            Fast, easy, legal.
          </h1>
          <p className="lg:max-w-[60%] w-full text-start text-[16px] font-[400] text-[#171722] ">
            Getting married is complicated. LOML simplifies the process and
            provides everything from the officiant to the paperwork that’s
            necessary to get married online.
          </p>

          <div className="flex flex-col  items-start px-[20px] ">
            <h1 className="text-[20px] text-[#222] mb-[8px] ">
              Get Marriage License
            </h1>
            <p className="lg:max-w-[50%] w-full text-start text-[#222] text-[14px] ">
              Complete our online application in minutes. Then we will work with
              the government to generate your official license.
            </p>
          </div>
          <div className="flex flex-col  items-start px-[20px] ">
            <h1 className="text-[20px] text-[#222] mb-[8px] ">
              Receive Certificate
            </h1>
            <p className="lg:max-w-[50%] w-full text-start text-[#222] text-[14px] ">
              It’s official! We wll send you a digital copy and then work with
              the county to deliver your new marriage certificate as quickly as
              possible.
            </p>
          </div>
        </div>
        <div className="h-full">
          <Image
            className="rounded-[16px] w-full "
            width={700}
            height={1400}
            src={hero}
            alt="imsge"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingSecond;
