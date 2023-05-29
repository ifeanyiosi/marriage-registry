import React from "react";
import Link from "next/link";
import Image from "next/image";
import CaretDown from "../../images/svg/caret_down.svg";
import faqData from "./faqData";
import useExpandHook from "./useExpandHook";

interface ListItemProps {
  content: string[] | string;
  label: string;
  header: string;
}

const ListItem = ({ content, label, header }: ListItemProps) => {
  const { expand, expansionHandler, contentHeight, contentRef } =
    useExpandHook();

  return (
    <li className="font-normal text-[14px] md:text-[18px] pt-12 flex flex-col gap-4 justify-between w-full  border-b-2 text-[#013433]  font-Beautiste leading-[21.6px]">
      <button
        type="button"
        onClick={expansionHandler}
        className="w-full flex text-left gap-8 font-Beautiste font-normal text-[#013433] justify-between"
      >
        {label} <Image src={CaretDown} alt="caret-down" />
      </button>
      <div
        ref={contentRef}
        style={
          expand
            ? { maxHeight: `${contentHeight}px`, paddingBottom: "2.75rem" }
            : { maxHeight: "0px" }
        }
        className="transition-all duration-500 overflow-hidden"
      >
        {Array.isArray(content) && (
          <ul className="list-disc">
            <h1 className=" font-Beautiste text-[#013433] py-2 pb-4 text-[14px] md:text-[18px]">
              {header} :
            </h1>
            {content.map((item) => (
              <li
                className="py-2 flex items-start text-[#013433] gap-4 pb-4 text-[14px] md:text-[18px]"
                key={item}
              >
                <div className="min-h-[8px] min-w-[8px] translate-y-1 text-[#013433] rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        )}
        {typeof content === "string" && (
          <p className="py-2 pb-4 text-[14px] text-[#013433] md:text-[18px]">
            {content}
          </p>
        )}
      </div>
    </li>
  );
};

export const FAQs = () => (
  <div className="w-full lg:px-[130px] flex px-6 justify-center bg-[#F7FDFD] py-[80px] h-full">
    <div className="max-w-[1366px] flex flex-col items-center justify-between w-full   ">
      <h1 className="font-bold text-[32px] mb-[64px] text-[#001C3D] w-full font-Beautiste text-center leading-[37.4px] -tracking-[4%]">
        Frequently Asked Questions
      </h1>

      <div className="w-full text-[#013433]">
        <ul className="w-full text-[#013433]">
          {faqData.map((faq, index) => {
            if (index > 4) return null;
            return (
              <ListItem
                key={faq.question}
                label={faq.question}
                header={faq.header as string}
                content={faq.answers}
              />
            );
          })}
        </ul>
      </div>
    </div>
  </div>
);

export default FAQs;
