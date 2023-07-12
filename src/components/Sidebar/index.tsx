import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineFolderAdd,
  AiOutlineClose,
} from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BiHelpCircle } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import profile from "../../images/profile-icon.png";
import Image from "next/image";

type Props = {};

const Sidebar = (props: Props) => {
  const [dropDown, setDropDown] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="w-full fixed flex">
      <div className="h-screen hidden lg:flex flex-col bg-primary lg:w-[200px] w-max left-0 ">
        <div className="flex w-full justify-center h-[80px] border-b-[1px] border-choiceTwo ">
          <h1 className="text-[40px] text-white ">LOML</h1>
        </div>
        <div className="flex flex-col  items-start px-8 pt-8 ">
          <Link
            className="text-white rounded-[5px] max-w-[230px] w-full flex gap-2 items-center text-[12px] hover:bg-purple-800 p-4 "
            href="/dashboard"
          >
            <AiOutlineHome />
            Dashboard
          </Link>
          <Link
            className="text-white rounded-[5px] max-w-[230px] w-full flex gap-2 items-center cursor-pointer text-[12px] hover:bg-purple-800  p-4  "
            href="/dashboard/documents"
          >
            <HiOutlineDocumentText />
            Documents
          </Link>
          <Link
            className="text-white rounded-[5px] max-w-[230px] w-full flex gap-2 items-center text-[12px] hover:bg-purple-800  p-4"
            href="/dashboard/addons"
          >
            <AiOutlineFolderAdd />
            Add-ons
          </Link>
          <Link
            className="text-white rounded-[5px] whitespace-nowrap flex gap-2 items-center text-[12px] hover:bg-purple-800 p-4"
            href="/help"
          >
            <BiHelpCircle />
            Help and Support
          </Link>
        </div>
      </div>
      <div className="bg-white flex relative items-center justify-center w-full h-full   border-choiceTwo">
        <div className="flex w-full  items-center justify-between px-8  h-[80px] shadow-md">
          <div className="flex items-center gap-8">
            <button
              onClick={() => setSidebar(!sidebar)}
              className="flex items-center"
            >
              <RxHamburgerMenu className="lg:hidden" />
            </button>
            <h1>Dashboard</h1>
          </div>
          <div className="flex  items-center gap-2">
            <Image
              className="object-cover rounded-full"
              width={30}
              height={30}
              src={profile}
              alt="profile"
            />
            <p className="text-[12px]">Ifeanyi Osi-Okeke</p>
            <button onClick={() => setDropDown(!dropDown)}>
              <BsChevronDown />
            </button>
            {dropDown && (
              <div
                className={`bg-white shadow-md rounded-sm flex flex-col transition-all duration-300 ease-in-out ${
                  dropDown ? "h-[110px] " : "h-[0px]"
                } items-start gap-8 px-4 py-6 translate-y-[120px] right-0 translate-x-[-40px] absolute bottom-0`}
              >
                <Link className="text-[10px]" href="">
                  Settings
                </Link>
                <Link className="text-[10px]" href="">
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
        {sidebar && (
          <div className="absolute lg:hidden w-[80%] top-0 left-0 h-screen bg-primary ">
            <div className="flex items-center justify-between w-full px-6 pt-8 ">
              <h1 className="text-[30px] text-white">LOML</h1>
              <button onClick={() => setSidebar(false)}>
                <AiOutlineClose className="text-[30px] text-white" />
              </button>
            </div>
            <div className="flex flex-col px-8 mt-4">
              <Link
                className="text-white rounded-[5px] max-w-[230px] w-full flex gap-2 items-center text-[12px] hover:bg-purple-800 p-4 "
                href="/dashboard"
              >
                <AiOutlineHome />
                Dashboard
              </Link>
              <Link
                className="text-white rounded-[5px] max-w-[230px] w-full flex gap-2 items-center cursor-pointer text-[12px] hover:bg-purple-800  p-4  "
                href="/dashboard/documents"
              >
                <HiOutlineDocumentText />
                Documents
              </Link>
              <Link
                className="text-white rounded-[5px] max-w-[230px] w-full flex gap-2 items-center text-[12px] hover:bg-purple-800  p-4"
                href="/dashboard/addons"
              >
                <AiOutlineFolderAdd />
                Add-ons
              </Link>
              <Link
                className="text-white rounded-[5px] whitespace-nowrap flex gap-2 items-center text-[12px] hover:bg-purple-800 p-4"
                href="/help"
              >
                <BiHelpCircle />
                Help and Support
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
