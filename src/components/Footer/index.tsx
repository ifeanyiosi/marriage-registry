import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BsTwitter, BsYoutube, BsTiktok, BsFacebook } from "react-icons/bs";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="w-full bg-primary flex flex-col min-h-[55px]  footerBg justify-end items-center [@media_(min-width:_658px)]:pt-[58px] ">
      <div className=" flex flex-col gap-[32px]  mb-[82px] items-center justify-between w-full px-6 lg:px-[130px]">
        <div className="flex w-full gap-[67px] [@media_(min-width:_658px)]:flex-row flex-col justify-between">
          <div className="flex flex-col items-start gap-[8px] max-w-[300px]">
            <div className="flex items-center gap-[20px] w-full">
              <a href="https://www.youtube.com/@sourcemygadgets">
                <BsYoutube className="text-choiceTwo" />
              </a>
              <a href="https://web.facebook.com/usesavetobuy">
                <BsFacebook className="text-choiceTwo" />
              </a>
              <a href="https://twitter.com/UseSavetoBuy">
                <BsTwitter className="text-choiceTwo" />
              </a>
              <a href="https://www.tiktok.com/@usesavetobuy">
                {" "}
                <BsTiktok className="text-choiceTwo" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[12px]">
            <h3 className="font-normal text-[18px] text-white max-w-[466px] text-center font-Inter leading-[21.6px]">
              Features
            </h3>
            <button
              type="button"
              className="font-Beautiste whitespace-nowrap font-[400] text-[14px] text-choiceTwo"
              onClick={scrollToTop}
            >
              {" "}
              Back To Top{" "}
            </button>
            <Link href="/" className="text-choiceTwo text-[14px]">
              Careers
            </Link>
            <Link className="text-choiceTwo text-[14px]" href="/">
              Affiliates
            </Link>
            <Link href="/" className="text-choiceTwo text-[14px]">
              Reviews
            </Link>
          </div>
          <div className="flex flex-col items-start gap-[12px]">
            <h3 className="font-normal text-[18px] text-white  max-w-[466px] text-center font-Beautiste leading-[21.6px]">
              Resources
            </h3>
            <Link href="/" className="text-choiceTwo text-[14px]">
              Terms and Conditions
            </Link>
            <Link href="/" className="text-choiceTwo text-[14px]">
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col items-start gap-[12px]">
            <h3 className="font-normal text-[18px] text-white max-w-[466px] text-center font-Beautiste leading-[21.6px]">
              Company
            </h3>
            <Link href="/" className="text-choiceTwo text-[14px]">
              About Us
            </Link>
            <Link href="/" className="text-choiceTwo text-[14px]">
              FAQ
            </Link>
            <Link href="/" className="text-choiceTwo text-[14px]">
              Blog
            </Link>
          </div>
          <div className="flex flex-col items-start gap-[12px]">
            <h3 className="font-normal text-[18px] text-white max-w-[466px] text-center font-Beautiste leading-[21.6px]">
              Contact Us
            </h3>

            <Link href="/" className="text-choiceTwo text-[14px]">
              Support
            </Link>
            <a className="text-choiceTwo text-[14px]" href="#">
              Whatsapp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
