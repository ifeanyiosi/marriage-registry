import Image from "next/image";
import React from "react";
import banner from "../../../images/banner1.jpg";
import Button from "@/components/Button";
import { useRouter } from "next/router";

type Props = {};

const LandingFifth = (props: Props) => {
  const router = useRouter();
  return (
    <section className="w-full flex py-[80px] items-center justify-center px-6 lg:px-[130px]">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-[20px] w-full">
        <div className="flex flex-col gap-6">
          <h1 className="text-[36px] font-bold font-Syne text-start ">
            Use LOML to make it official.
          </h1>
          <p className="text-[16px] max-w-[500px] font-[400] text-[#171722] text-start ">
            From securing your marriage license to performing your ceremony,
            LOML is bringing the courthouse to your house and is committed to
            uniting couples worldwide.
          </p>
          <Button
            onClick={() => router.push("/signup")}
            variant="primary"
            className="py-6 lg:max-w-[200px] w-full"
          >
            Get Started
          </Button>
        </div>
        <div>
          <Image
            className="rounded-[16px] object-cover w-[500px] h-[400px] "
            width={600}
            height={1000}
            src={banner}
            alt="banner"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingFifth;
