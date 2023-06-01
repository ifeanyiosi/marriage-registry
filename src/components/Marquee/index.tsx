import Image, { StaticImageData } from "next/image";
import React from "react";

type MarqueeProps = {
  heading: string;
  body: string;
  image: StaticImageData;
};

const Marquee = ({ heading, body, image }: MarqueeProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full lg:px-6 ">
      <div className="flex flex-col  items-center justify-center ">
        <div className="h-[300px] ">
          <Image
            className="rounded-[16px] object-cover max-h-[250px] h-full "
            height={200}
            width={300}
            src={image}
            alt="picture-card"
            objectFit="cover"
          />
        </div>
        <div className="bg-[#fff] flex  flex-col rounded-[8px]   p-4 items-center justify-center  translate-y-[-150px] opacity-[0.8]">
          <p className="text-center text-[#000] text-[12px]">{heading} </p>
          <p className="text-center text-[#8c8c8c] text-[10px]"> {body} </p>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
