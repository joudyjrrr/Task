import React from "react";
import Logo from "../Assets/SVGs/SingIn/humy.svg";
import Group from "../Assets/SVGs/SingIn/Group 110.svg";
import support from ".././Assets/Images/technical-It-img.jpg";
import Image from "next/image";
import SearchInput from "../Components/SearchInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import x from "../Assets/SVGs/X.svg";
import avatart from "../Assets/SVGs/Dashboard/Olivia Rhye.png";
import logout from "../Assets/SVGs/logout.svg";
import { Links1, Links2 } from "./links";
const page = () => {
  const links = Links1();
  const links2 = Links2();
  return (
    <div className="flex flex-col flex-shrink gap-6 border w-[280px] border-r-gray-200">
      {/* first */}
      <div className="flex flex-col justify-between gap-6 pt-8 w-full">
        <span className="flex px-6">
          <Link href={"/"} className="flex justify-between gap-3">
            <Image src={Group} alt="avatar" />
            <Image src={Logo} alt="logo" />
          </Link>
          <div></div>
        </span>
        <span className="px-3">
          <SearchInput />
        </span>
        <span className="flex flex-col justify-start items-center px-4 gap-1">
          {links.map((link) => {
            return (
              <div className="flex gap-2 px-2 py-3 justify-start items-center w-full">
                <Image src={link.icon} alt="avatar" />
                <Link
                  href={`${link.link}`}
                  className="text-gray-700 text-Text-md leading-6 font-medium"
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </span>
      </div>
      {/* second */}
      <div className="flex flex-col justify-between items-center gap-6 px-4 pb-8 w-fit">
        {/* first */}
        <div className="w-full">
          {links2.map((link) => {
            return (
              <div className="flex gap-2 px-2 py-3 justify-start items-center w-full">
                <Image src={link.icon} alt="avatar" />
                <Link
                  href={`/${link.name}`}
                  className="text-gray-700 text-Text-md leading-6 font-medium"
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </div>
        {/* second */}
        <div className="flex flex-col justify-between items-start gap-4 py-5 px-4  rounded-lg bg-gray-50 w-fit">
          <div className=" flex flex-col gap-1 w-full">
            <div className="flex justify-between text-gray-900 font-semibold leading-5 text-Text-sm">
              <p className="flex justify-center items-center">
                Do you need support?
              </p>
              <Button className="border-none shadow-none p-0 flex items-start">
                <Image src={x} alt="cancel" />
              </Button>
            </div>
            <p className="text-gray-600 font-normal text-Text-sm leading-5 w-[216px] break-words">
              For all your questions, you can reach live support and get
              assistance.
            </p>
          </div>
          <Image src={support} alt="Support" className="rounded-md w-[260px]" />
          <div className="flex items-center justify-between gap-3">
            <Button className="bg-transparent  !border-none shadow-none p-0">
              <p className="text-gray-400 text-Text-sm font-semibold leading-5">
                Dismiss
              </p>
            </Button>
            <Link
              href={"/"}
              className="text-Brand-700 font-semibold leading-5 text-Text-sm"
            >
              Live Support
            </Link>
          </div>
        </div>
        {/* third */}
        <div className="border-t flex relative border-t-gray-200 pt-6 pr-8 pb-0 pl-2 w-full gap-4">
          <div className="gap-3 flex ">
            <Image
              src={avatart}
              alt="avatart"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div className="flex flex-col ">
            <p className="text-gray-700 font-semibold leading-5 text-Text-sm">
              Olivia Rhye
            </p>
            <p className="text-gray-600 leading-5 font-normal text-Text-sm">
              olivia@untitledui.com
            </p>
            <Button className="border-none shadow-none absolute top-[calc(50%-7.5px)] right-0 p-0 flex items-start">
              <Image src={logout} alt="sign out" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
