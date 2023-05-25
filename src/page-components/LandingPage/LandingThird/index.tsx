import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsFillPiggyBankFill } from "react-icons/bs";
import image1 from "../../../images/ben-white-1tyzfcJri2g-unsplash.jpg";
import image2 from "../../../images/thought-catalog-UK78i6vK3sc-unsplash.jpg";
import image3 from "../../../images/karson-3U-0SEoE0v0-unsplash.jpg";

type Props = {};

const LandingThird = (props: Props) => {
  return (
    <section className="bg-[#f6f6ff] w-full flex flex-col items-center h-full py-[80px] lg:px-[130px] px-6 ">
      <div className="flex flex-col items-start w-full">
        <h1 className="text-[36px] text-[#171722] font-[300] mb-[24px] font-Syne ">
          From start to “I do.”
        </h1>
        <p className="text-[16px] lg:max-w-[50%] text-start w-full text-[#171722] font-[400] font-Inter">
          Our team is fully committed to the cause: getting you married.
          Thousands of couples have counted on Courtly and we know what it takes
          to secure your legal marriage certificate.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-between mt-[80px] gap-8">
        <div className="flex flex-col items-start justify-center">
          <Image
            className="w-full max-w-[400px] rounded-[16px]"
            height={400}
            width={400}
            src={image1}
            alt="couple"
          />
          <h2 className="text-[20px] font-Syne text-start mt-[24px] mb-[16px] font-[300]">
            99% Success Rate
          </h2>
          <p className="text-[14px] font-Inter text-start font-[400]  ">
            All Courtly officiants are based worldwide and licensed to perform
            remote ceremonies.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center  ">
          <Image
            className="w-full max-w-[400px] max-h-[400px] rounded-[16px]"
            height={400}
            width={400}
            src={image2}
            alt="couple"
          />
          <h2 className="text-[20px] font-Syne text-start mt-[24px] mb-[16px] font-[300]">
            Satisfaction Guarantee
          </h2>
          <p className="text-[14px] font-Inter text-start font-[400] ">
            Get a full refund if your Marriage License is cancelled or not
            approved for any reason.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center">
          <Image
            className="w-full max-w-[400px] rounded-[16px]"
            height={400}
            width={400}
            src={image1}
            alt="couple"
          />
          <h2 className="text-[20px] font-Syne text-start mt-[24px] mb-[16px] font-[300]">
            Worldwide-Based Officiants
          </h2>
          <p className="text-[14px] font-Inter text-start font-[400]  ">
            All Courtly officiants are based worldwide and licensed to perform
            remote ceremonies.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between w-full py-[80px] gap-6 ">
        <div className="rounded-[16px] bg-[#fff] w-full flex flex-col items-center justify-center px-[16px] py-[20px]">
          <p className="text-[12px] text-[#8c8c8c] ">Rated 4.9/5</p>
          <div className="flex items-center justify-center mt-[4px] gap-4 ">
            <FcGoogle />
            <p>Google</p>
          </div>
        </div>
        <div className="rounded-[16px] bg-[#fff] w-full flex flex-col items-center justify-center px-[16px] py-[20px]">
          <p className="text-[12px] text-[#8c8c8c] ">Rated 5/5</p>
          <div className="flex items-center justify-center mt-[4px] gap-4 ">
            <BsFacebook className="text-[#4267B2]" />
            <p>Facebook</p>
          </div>
        </div>
        <div className="rounded-[16px] bg-[#fff] w-full flex flex-col items-center justify-center px-[16px] py-[20px]">
          <p className="text-[12px] text-[#8c8c8c] ">Rated 4.9/5</p>
          <div className="flex items-center justify-center mt-[4px] gap-4 ">
            <BsFillPiggyBankFill />
            <p>Piggy accredited</p>
          </div>
        </div>
        <div className="rounded-[16px] bg-[#fff] w-full flex flex-col items-center justify-center px-[16px] py-[20px]">
          <p className="text-[12px] text-[#8c8c8c] ">Official Partner</p>
          <div className="flex items-center justify-center mt-[4px] gap-4 ">
            <p className="text-[#4267B2] font-bold ">BATTLETIDE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingThird;
