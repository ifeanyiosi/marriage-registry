import Button from "@/components/Button";
import Marquee from "@/components/Marquee";
import React from "react";
import couple1 from "../../../images/couple.jpg";
import couple2 from "../../../images/carly-rae-hobbins-zNHOIzjJiyA-unsplash.jpg";
import couple3 from "../../../images/shingi-rice-KRNBmGzomPA-unsplash.jpg";
import couple4 from "../../../images/tanner-geringer-jWWEn-nnBRQ-unsplash.jpg";

type Props = {};

const LandingHero = (props: Props) => {
  return (
    <section className="w-full flex flex-col lg:h-full items-center justify-center ">
      <div className="  flex flex-col items-center justify-center gap-4 w-full px-6 py-[80px] ">
        <div className="flex flex-col w-full  gap-[32px] items-center justify-center">
          <h1 className="text-[48px] font-Syne text-center w-full ">
            Get married legally online
          </h1>
          <p className="font-Inter text-[18px] text-center lg:max-w-[500px]  ">
            Get a legal, Marriage certificate without leaving the comfort of
            your own home—from anywhere around the world.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-[240px] lg:max-w-[500px] w-full py-6 gap-8">
          <Button className="w-full min-w-[240px] py-6" variant="primary">
            Get Married Online
          </Button>
          <Button className="w-full py-6 min-w-[240px]" variant="secondary">
            Contact Us
          </Button>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:px-[100px] px-6 ">
        <Marquee
          image={couple1}
          heading="Emeka and Sandra"
          body="Married on LOML in April 2021"
        />
        <Marquee
          image={couple2}
          heading="Joe and Tracy"
          body="Married on LOML in January 2022"
        />
        <Marquee
          image={couple3}
          heading="Sonya and Dubem"
          body="Married on LOML in June 2020"
        />
        <Marquee
          image={couple4}
          heading="Ola and Mike"
          body="Married on LOML in October 2022"
        />
      </div>
    </section>
  );
};

export default LandingHero;
